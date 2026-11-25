"use client";

import { useRef, useState, useEffect, useCallback } from "react";
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

export function TreatmentsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPausedByUser, setIsPausedByUser] = useState(false);
  const [selectedItem, setSelectedItem] = useState<FlattenedProcedure | null>(null);

  // Looping lateral contínuo
  useEffect(() => {
    if (isPausedByUser) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % ALL_PROCEDURES.length);
    }, 3800);
    return () => clearInterval(timer);
  }, [isPausedByUser]);

  // Rolar carrossel e menu suavemente para o item selecionado
  useEffect(() => {
    const container = carouselRef.current;
    if (container) {
      const card = container.children[activeIndex] as HTMLElement | undefined;
      if (card) {
        const left = card.offsetLeft - (container.clientWidth / 2 - card.clientWidth / 2);
        container.scrollTo({ left: Math.max(0, left), behavior: "smooth" });
      }
    }

    const menu = menuRef.current;
    if (menu) {
      const btn = menu.children[activeIndex] as HTMLElement | undefined;
      if (btn) {
        const left = btn.offsetLeft - (menu.clientWidth / 2 - btn.clientWidth / 2);
        menu.scrollTo({ left: Math.max(0, left), behavior: "smooth" });
      }
    }
  }, [activeIndex]);

  // Retomar o looping apenas quando o usuário rolar e SAIR 100% da seção
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

  const handleSelect = (idx: number) => {
    setActiveIndex(idx);
    setIsPausedByUser(true);
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
            Clique em um procedimento no menu abaixo para pausar e explorar os detalhes, ou acesse a página completa da especialidade.
          </p>
        </div>

        {/* Menu Superior Interativo dos Procedimentos */}
        <div
          ref={menuRef}
          className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1.5 mb-5 scroll-smooth"
        >
          {ALL_PROCEDURES.map((proc, idx) => {
            const isSelected = activeIndex === idx;
            return (
              <button
                key={proc.id}
                type="button"
                onClick={() => handleSelect(idx)}
                className={`px-3.5 sm:px-4 py-2 rounded-full text-xs font-body font-semibold whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                  isSelected
                    ? "bg-[#173B38] text-white dark:bg-[#6BA89E] dark:text-[#0D1622] shadow-sm"
                    : "bg-[#F4F7F6] dark:bg-[#162333] text-[#475866] dark:text-[#B2C3CC] border border-[#DCE5E3] dark:border-[#6BA89E]/20 hover:border-[#6BA89E]"
                }`}
              >
                {proc.name}
              </button>
            );
          })}
        </div>

        {/* Indicador de Status & Setas */}
        <div className="flex items-center justify-between mb-3 px-1">
          <div className="flex items-center gap-2">
            <span className="text-[0.6875rem] font-body font-semibold uppercase tracking-wider text-[#6C7D8A] dark:text-[#8499A6]">
              {activeIndex + 1} de {ALL_PROCEDURES.length}
            </span>
            {isPausedByUser ? (
              <span className="inline-flex items-center gap-1 text-[0.6875rem] px-2.5 py-0.5 rounded-full bg-[#F4F7F6] dark:bg-[#162333] border border-[#DCE5E3] dark:border-[#6BA89E]/20 text-[#475866] dark:text-[#B2C3CC]">
                <Pause className="w-2.5 h-2.5 text-[#173B38] dark:text-[#6BA89E]" />
                Fixado na sua seleção
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 text-[0.6875rem] px-2.5 py-0.5 rounded-full bg-[#F4F7F6] dark:bg-[#162333] border border-[#DCE5E3] dark:border-[#6BA89E]/20 text-[#173B38] dark:text-[#6BA89E]">
                <Play className="w-2.5 h-2.5" />
                Apresentação contínua
              </span>
            )}
          </div>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => {
                setIsPausedByUser(true);
                setActiveIndex((p) => (p - 1 + ALL_PROCEDURES.length) % ALL_PROCEDURES.length);
              }}
              className="p-2 rounded-full bg-[#F4F7F6] dark:bg-[#162333] border border-[#DCE5E3] dark:border-[#6BA89E]/25 text-[#0D1622] dark:text-[#EBF2F0] hover:border-[#6BA89E] cursor-pointer"
              aria-label="Tratamento anterior"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => {
                setIsPausedByUser(true);
                setActiveIndex((p) => (p + 1) % ALL_PROCEDURES.length);
              }}
              className="p-2 rounded-full bg-[#F4F7F6] dark:bg-[#162333] border border-[#DCE5E3] dark:border-[#6BA89E]/25 text-[#0D1622] dark:text-[#EBF2F0] hover:border-[#6BA89E] cursor-pointer"
              aria-label="Próximo tratamento"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Carrossel Lateral Compacto */}
        <div
          ref={carouselRef}
          className="flex items-stretch gap-4 sm:gap-5 overflow-x-auto no-scrollbar scroll-smooth py-2 mb-8"
        >
          {ALL_PROCEDURES.map((proc, idx) => {
            const isSelected = activeIndex === idx;
            const waUrl = `https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${encodeURIComponent(
              proc.whatsappMessage
            )}`;

            return (
              <div
                key={proc.id}
                onClick={() => handleSelect(idx)}
                className={`w-[290px] sm:w-[335px] shrink-0 rounded-2xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 cursor-pointer border ${
                  isSelected
                    ? "bg-[#F4F7F6] dark:bg-[#162333] border-[#6BA89E] shadow-lg ring-1 ring-[#6BA89E]/30"
                    : "bg-[#FFFFFF] dark:bg-[#162333]/65 border-[#DCE5E3] dark:border-[#6BA89E]/15 opacity-85 hover:opacity-100"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[0.6875rem] font-body font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#FFFFFF] dark:bg-[#0D1622] text-[#173B38] dark:text-[#6BA89E] border border-[#DCE5E3] dark:border-[#6BA89E]/25">
                      {proc.badge}
                    </span>
                    <Sparkles className="w-3.5 h-3.5 text-[#6BA89E]" />
                  </div>

                  <h3 className="font-heading text-lg sm:text-xl font-semibold text-[#0D1622] dark:text-[#EBF2F0] mb-2 leading-snug">
                    {proc.name}
                  </h3>

                  <p className="font-body text-xs sm:text-sm text-[#475866] dark:text-[#B2C3CC] leading-relaxed line-clamp-3 mb-4">
                    {proc.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#DCE5E3] dark:border-[#6BA89E]/15 space-y-2 mt-auto">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedItem(proc);
                    }}
                    className="w-full py-2 px-3 rounded-xl bg-[#FFFFFF] dark:bg-[#0D1622] border border-[#DCE5E3] dark:border-[#6BA89E]/25 hover:border-[#6BA89E] text-xs font-body font-semibold text-[#0D1622] dark:text-[#EBF2F0] flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Info className="w-3.5 h-3.5 text-[#6BA89E]" />
                    <span>Ver benefícios e detalhes</span>
                  </button>

                  <div className="flex items-center justify-between pt-1 text-xs font-body font-semibold">
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

        {/* Atalhos para Páginas Dedicadas das 6 Áreas */}
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

      {/* Modal Quick View do Tratamento */}
      {selectedItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Detalhes sobre ${selectedItem.name}`}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0D1622]/80 backdrop-blur-md animate-fade-in"
          onClick={closeModal}
        >
          <div
            className="relative max-w-lg w-full bg-[#FFFFFF] dark:bg-[#162333] text-[#0D1622] dark:text-[#EBF2F0] rounded-3xl border border-[#DCE5E3] dark:border-[#6BA89E]/25 shadow-2xl p-6 sm:p-8 space-y-5 animate-fade-in-up"
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
