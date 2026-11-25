"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { TREATMENT_CATEGORIES, TreatmentItem } from "@/data/treatments";
import { CLINIC_INFO } from "@/lib/data";
import {
  Sparkles,
  ArrowUpRight,
  Info,
  X,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/SocialIcons";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { gsap } from "gsap";

interface FlattenedProcedure extends TreatmentItem {
  categorySlug: string;
  categoryTitle: string;
}

const ALL_PROCEDURES: FlattenedProcedure[] = TREATMENT_CATEGORIES.flatMap((cat) =>
  cat.procedures.map((proc) => ({
    ...proc,
    categorySlug: cat.slug,
    categoryTitle: cat.shortTitle,
  }))
);

// Lista duplicada para criar loop lateral infinito e perfeitamente contínuo sem saltos
const LOOP_PROCEDURES = [...ALL_PROCEDURES, ...ALL_PROCEDURES];

export function TreatmentsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isPausedByUser, setIsPausedByUser] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [selectedItem, setSelectedItem] = useState<FlattenedProcedure | null>(null);

  // 1. Esteira Contínua Ultra-Suave via requestAnimationFrame (sem trancos ou pulos)
  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return;

    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let rafId: number;
    let accumulator = 0;
    const speedPerFrame = 0.45; // Deslizamento sereno (~27px/seg a 60fps)

    const tick = () => {
      if (!isPausedByUser && !isHovering && container) {
        accumulator += speedPerFrame;
        if (accumulator >= 1) {
          const step = Math.floor(accumulator);
          accumulator -= step;
          container.scrollLeft += step;

          const halfWidth = container.scrollWidth / 2;
          if (halfWidth > 0 && container.scrollLeft >= halfWidth) {
            container.scrollLeft -= halfWidth;
          }
        }
      }
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [isPausedByUser, isHovering]);

  // 2. Deslizamento suave via GSAP até o card selecionado (quando o usuário clica no menu ou setas)
  const scrollToProcedureIndex = useCallback((idx: number) => {
    const container = carouselRef.current;
    if (!container) return;

    const halfWidth = container.scrollWidth / 2;
    const targetCardFirst = container.children[idx] as HTMLElement | undefined;
    const targetCardSecond = container.children[idx + ALL_PROCEDURES.length] as HTMLElement | undefined;

    if (!targetCardFirst) return;

    // Escolhe a ocorrência mais próxima do scroll atual para evitar saltos longos
    const firstLeft = Math.max(
      0,
      targetCardFirst.offsetLeft - (container.clientWidth / 2 - targetCardFirst.clientWidth / 2)
    );
    const secondLeft = targetCardSecond
      ? Math.max(
          0,
          targetCardSecond.offsetLeft - (container.clientWidth / 2 - targetCardSecond.clientWidth / 2)
        )
      : firstLeft;

    let finalTarget = firstLeft;
    if (
      container.scrollLeft > halfWidth * 0.6 &&
      Math.abs(secondLeft - container.scrollLeft) < Math.abs(firstLeft - container.scrollLeft)
    ) {
      finalTarget = secondLeft;
    }

    gsap.killTweensOf(container);
    gsap.to(container, {
      scrollLeft: finalTarget,
      duration: 1.05,
      ease: "power3.out",
    });

    // Alinha também o menu superior com suavidade
    const menu = menuRef.current;
    if (menu) {
      const btn = menu.children[idx] as HTMLElement | undefined;
      if (btn) {
        const menuLeft = Math.max(
          0,
          btn.offsetLeft - (menu.clientWidth / 2 - btn.clientWidth / 2)
        );
        gsap.killTweensOf(menu);
        gsap.to(menu, {
          scrollLeft: menuLeft,
          duration: 0.75,
          ease: "power2.out",
        });
      }
    }
  }, []);

  // 3. Regra de Pausa: ao clicar no menu, pausa permanentemente enquanto a seção estiver visível.
  // Só retoma a esteira contínua se o usuário rolar e SAIR 100% da seção de tratamentos!
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setIsPausedByUser(false);
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const handleSelectFromMenu = (idx: number) => {
    setActiveIndex(idx);
    setIsPausedByUser(true);
    scrollToProcedureIndex(idx);
  };

  const handleArrowStep = (dir: number) => {
    const nextIdx = (activeIndex + dir + ALL_PROCEDURES.length) % ALL_PROCEDURES.length;
    setActiveIndex(nextIdx);
    setIsPausedByUser(true);
    scrollToProcedureIndex(nextIdx);
  };

  const closeModal = useCallback(() => setSelectedItem(null), []);

  useEffect(() => {
    if (!selectedItem) return;
    const orig = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = orig;
      window.removeEventListener("keydown", onKey);
    };
  }, [selectedItem, closeModal]);

  return (
    <section
      id="tratamentos"
      ref={sectionRef}
      className="py-16 sm:py-24 bg-[#FFFFFF] dark:bg-[#162333]/50 border-y border-[#DCE5E3] dark:border-[#6BA89E]/15 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabeçalho */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-[#DCE5E3] dark:border-[#6BA89E]/20 gap-4 mb-6">
          <div className="max-w-2xl">
            <span className="inline-block text-xs uppercase tracking-widest text-[#173B38] dark:text-[#6BA89E] font-body font-semibold mb-2">
              • Especialidades Odontológicas
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[#0D1622] dark:text-[#EBF2F0] font-semibold leading-[1.15]">
              Tratamentos completos para cada fase da vida
            </h2>
          </div>
          <p className="font-body text-xs sm:text-sm text-[#475866] dark:text-[#B2C3CC] max-w-md leading-relaxed">
            Toque em um tratamento no menu para destacá-lo e pausar a vitrine, ou deslize livremente para conhecer cada opção.
          </p>
        </div>

        {/* Menu Superior Interativo dos Procedimentos */}
        <div
          ref={menuRef}
          className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1.5 mb-5"
        >
          {ALL_PROCEDURES.map((proc, idx) => {
            const isSelected = isPausedByUser && activeIndex === idx;
            return (
              <button
                key={proc.id}
                type="button"
                onClick={() => handleSelectFromMenu(idx)}
                className={`px-3.5 sm:px-4 py-2 rounded-full text-xs font-body font-semibold whitespace-nowrap shrink-0 transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? "bg-[#173B38] text-white dark:bg-[#6BA89E] dark:text-[#0D1622] shadow-sm scale-[1.02]"
                    : "bg-[#F4F7F6] dark:bg-[#162333] text-[#475866] dark:text-[#B2C3CC] border border-[#DCE5E3] dark:border-[#6BA89E]/20 hover:border-[#6BA89E]"
                }`}
              >
                {proc.name}
              </button>
            );
          })}
        </div>

        {/* Barra de Status & Controles Manuais */}
        <div className="flex items-center justify-between mb-3 px-1">
          <div className="flex items-center gap-2">
            {isPausedByUser ? (
              <span className="inline-flex items-center gap-1.5 text-[0.6875rem] px-3 py-1 rounded-full bg-[#F4F7F6] dark:bg-[#162333] border border-[#DCE5E3] dark:border-[#6BA89E]/25 text-[#0D1622] dark:text-[#EBF2F0] font-medium">
                <Pause className="w-3 h-3 text-[#173B38] dark:text-[#6BA89E]" />
                <span>Seleção fixada • {ALL_PROCEDURES[activeIndex]?.name}</span>
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 text-[0.6875rem] px-3 py-1 rounded-full bg-[#F4F7F6] dark:bg-[#162333] border border-[#DCE5E3] dark:border-[#6BA89E]/20 text-[#173B38] dark:text-[#6BA89E] font-medium">
                <Play className="w-3 h-3" />
                <span>Vitrine em deslize suave ({ALL_PROCEDURES.length} procedimentos)</span>
              </span>
            )}
          </div>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => handleArrowStep(-1)}
              className="p-2 rounded-full bg-[#F4F7F6] dark:bg-[#162333] border border-[#DCE5E3] dark:border-[#6BA89E]/25 text-[#0D1622] dark:text-[#EBF2F0] hover:border-[#6BA89E] transition-colors cursor-pointer"
              aria-label="Tratamento anterior"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => handleArrowStep(1)}
              className="p-2 rounded-full bg-[#F4F7F6] dark:bg-[#162333] border border-[#DCE5E3] dark:border-[#6BA89E]/25 text-[#0D1622] dark:text-[#EBF2F0] hover:border-[#6BA89E] transition-colors cursor-pointer"
              aria-label="Próximo tratamento"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Esteira Horizontal Contínua com Fotos em Cada Card */}
        <div
          ref={carouselRef}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onTouchStart={() => setIsPausedByUser(true)}
          className="flex items-stretch gap-4 sm:gap-5 overflow-x-auto no-scrollbar py-2 mb-8"
        >
          {LOOP_PROCEDURES.map((proc, loopIdx) => {
            const realIdx = loopIdx % ALL_PROCEDURES.length;
            const isHighlighted = isPausedByUser && activeIndex === realIdx;
            const waUrl = `https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${encodeURIComponent(
              proc.whatsappMessage
            )}`;

            return (
              <div
                key={`${proc.id}-${loopIdx}`}
                onClick={() => handleSelectFromMenu(realIdx)}
                className={`w-[275px] sm:w-[315px] shrink-0 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-500 cursor-pointer border group ${
                  isHighlighted
                    ? "bg-[#F4F7F6] dark:bg-[#162333] border-[#6BA89E] shadow-[0_14px_34px_rgba(23,59,56,0.14)] ring-1 ring-[#6BA89E]/40 scale-[1.01]"
                    : "bg-[#FFFFFF] dark:bg-[#162333]/80 border-[#DCE5E3] dark:border-[#6BA89E]/20 hover:border-[#6BA89E]/70 shadow-xs"
                }`}
              >
                {/* Imagem Visual do Procedimento (Compacta e Nítida) */}
                <div>
                  <div className="relative w-full aspect-[16/10] bg-[#E8EFEE] dark:bg-[#0D1622] overflow-hidden">
                    <Image
                      src={proc.image}
                      alt={proc.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="320px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D1622]/45 via-transparent to-transparent pointer-events-none" />
                    <span className="absolute top-2.5 left-2.5 text-[0.625rem] font-body font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#FFFFFF]/95 dark:bg-[#0D1622]/90 text-[#173B38] dark:text-[#6BA89E] backdrop-blur-sm shadow-2xs">
                      {proc.badge}
                    </span>
                    <span className="absolute top-2.5 right-2.5 p-1 rounded-full bg-[#FFFFFF]/85 dark:bg-[#0D1622]/85 text-[#6BA89E]">
                      <Sparkles className="w-3 h-3" />
                    </span>
                  </div>

                  {/* Conteúdo Textual */}
                  <div className="p-4 sm:p-5 pb-3">
                    <h3 className="font-heading text-base sm:text-lg font-semibold text-[#0D1622] dark:text-[#EBF2F0] mb-1.5 leading-snug group-hover:text-[#173B38] dark:group-hover:text-[#6BA89E] transition-colors">
                      {proc.name}
                    </h3>
                    <p className="font-body text-xs text-[#475866] dark:text-[#B2C3CC] leading-relaxed line-clamp-3">
                      {proc.summary}
                    </p>
                  </div>
                </div>

                {/* Ações do Card */}
                <div className="px-4 sm:px-5 pb-4 pt-2 border-t border-[#DCE5E3]/70 dark:border-[#6BA89E]/15 space-y-2 mt-auto">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsPausedByUser(true);
                      setActiveIndex(realIdx);
                      setSelectedItem(proc);
                    }}
                    className="w-full py-1.5 px-3 rounded-xl bg-[#F4F7F6] dark:bg-[#0D1622] border border-[#DCE5E3] dark:border-[#6BA89E]/25 hover:border-[#6BA89E] text-[0.6875rem] font-body font-semibold text-[#0D1622] dark:text-[#EBF2F0] flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Info className="w-3.5 h-3.5 text-[#6BA89E]" />
                    <span>Ver benefícios e detalhes</span>
                  </button>

                  <div className="flex items-center justify-between pt-0.5 text-[0.6875rem] sm:text-xs font-body font-semibold">
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 text-[#173B38] dark:text-[#6BA89E] hover:underline"
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" />
                      <span>WhatsApp</span>
                    </a>

                    <Link
                      href={`/tratamentos/${proc.categorySlug}`}
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 text-[#475866] dark:text-[#B2C3CC] hover:text-[#173B38] dark:hover:text-[#6BA89E]"
                    >
                      <span>Página completa</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Atalhos Rápidos para as 6 Páginas de Especialidades */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
          {TREATMENT_CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={`/tratamentos/${cat.slug}`}
              className="p-3 rounded-xl bg-[#F4F7F6] dark:bg-[#0D1622] border border-[#DCE5E3] dark:border-[#6BA89E]/20 hover:border-[#6BA89E] text-center transition-all hover:shadow-xs group"
            >
              <span className="font-heading text-xs sm:text-sm font-semibold text-[#0D1622] dark:text-[#EBF2F0] group-hover:text-[#173B38] dark:group-hover:text-[#6BA89E] block">
                {cat.shortTitle}
              </span>
              <span className="text-[0.625rem] text-[#6C7D8A] dark:text-[#8499A6] inline-flex items-center gap-0.5 mt-0.5">
                Explorar área <ArrowUpRight className="w-2.5 h-2.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Modal Quick View do Tratamento com Imagem */}
      {selectedItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Detalhes sobre ${selectedItem.name}`}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0D1622]/80 backdrop-blur-md animate-fade-in"
          onClick={closeModal}
        >
          <div
            className="relative max-w-lg w-full max-h-[90vh] overflow-y-auto bg-[#FFFFFF] dark:bg-[#162333] text-[#0D1622] dark:text-[#EBF2F0] rounded-3xl border border-[#DCE5E3] dark:border-[#6BA89E]/25 shadow-2xl p-6 sm:p-8 space-y-5 animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-[0.6875rem] font-body font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#F4F7F6] dark:bg-[#0D1622] text-[#173B38] dark:text-[#6BA89E] border border-[#DCE5E3] dark:border-[#6BA89E]/25 inline-block mb-2">
                  {selectedItem.categoryTitle} • {selectedItem.badge}
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-semibold">
                  {selectedItem.name}
                </h3>
              </div>
              <button
                type="button"
                onClick={closeModal}
                className="p-2 rounded-full hover:bg-[#F4F7F6] dark:hover:bg-[#0D1622] transition-colors cursor-pointer"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-[#DCE5E3] dark:border-[#6BA89E]/20">
              <Image
                src={selectedItem.image}
                alt={selectedItem.name}
                fill
                className="object-cover"
                sizes="500px"
              />
            </div>

            <p className="font-body text-sm text-[#475866] dark:text-[#B2C3CC] leading-relaxed">
              {selectedItem.details}
            </p>

            <div className="space-y-2 pt-1">
              <p className="text-xs font-body font-semibold uppercase tracking-wider text-[#173B38] dark:text-[#6BA89E]">
                Principais Benefícios
              </p>
              <ul className="space-y-2">
                {selectedItem.benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[#0D1622] dark:text-[#EBF2F0]">
                    <CheckCircle2 className="w-4 h-4 text-[#6BA89E] shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-3 flex flex-col sm:flex-row gap-3">
              <MagneticButton strength={0.2} className="w-full">
                <a
                  href={`https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${encodeURIComponent(
                    selectedItem.whatsappMessage
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill w-full bg-[#173B38] text-white dark:bg-[#6BA89E] dark:text-[#0D1622] py-3.5 px-6 text-xs sm:text-sm font-semibold gap-2 shadow-sm hover-lift flex items-center justify-center cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#6BA89E] dark:text-[#0D1622]" />
                  <span>Agendar Avaliação deste Tratamento</span>
                </a>
              </MagneticButton>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
