"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { CLINIC_INFO } from "@/lib/data";
import { ArrowRight, Star, ShieldCheck, Sparkles, Smile, HeartPulse } from "lucide-react";
import { WhatsAppIcon } from "@/components/SocialIcons";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const desktopImgRef = useRef<HTMLDivElement>(null);
  const mobileImgRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (desktopImgRef.current) {
        gsap.to(desktopImgRef.current, {
          y: 45,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      if (mobileImgRef.current) {
        gsap.to(mobileImgRef.current, {
          y: 25,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.9, ease: "power2.out", delay: 0.1 }
        );
      }
    },
    { scope: heroRef }
  );

  const quickIntents = [
    {
      label: "Dentes Fixos / Implantes",
      href: "/tratamentos/implantes-e-protocolo",
      icon: ShieldCheck,
    },
    {
      label: "Lentes & Invisalign",
      href: "/tratamentos/estetica-e-lentes",
      icon: Sparkles,
    },
    {
      label: "Odontopediatria",
      href: "/tratamentos/odontopediatria",
      icon: Smile,
    },
    {
      label: "Dor, Canal ou Bruxismo",
      href: "/tratamentos/prevencao-e-endodontia",
      icon: HeartPulse,
    },
  ];

  return (
    <section
      id="inicio"
      ref={heroRef}
      className="relative w-full min-h-[100dvh] flex flex-col justify-between pt-24 sm:pt-28 lg:pt-32 pb-6 sm:pb-10 overflow-hidden bg-[#F4F7F6] dark:bg-[#0D1622]"
    >
      {/* Imagens Exclusivas de Fundo Geradas (Desktop & Mobile) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Desktop Hero */}
        <div
          ref={desktopImgRef}
          className="hidden lg:block absolute inset-0 -top-6 -bottom-6 will-change-transform"
        >
          <Image
            src="/hero_desktop.jpg"
            alt={`${CLINIC_INFO.name} — Odontologia em São Braz, Curitiba`}
            fill
            priority
            quality={92}
            className="object-cover object-right"
            sizes="100vw"
          />
        </div>

        {/* Mobile Hero */}
        <div
          ref={mobileImgRef}
          className="block lg:hidden absolute inset-0 -top-4 -bottom-4 will-change-transform"
        >
          <Image
            src="/hero_mobile.jpg"
            alt={`${CLINIC_INFO.name} — Sorriso saudável e acolhimento`}
            fill
            priority
            quality={92}
            className="object-cover object-[center_top]"
            sizes="100vw"
          />
        </div>

        {/* Gradientes Dual-Theme para Legibilidade Impecável */}
        {/* Modo Claro Desktop */}
        <div className="hidden lg:block dark:lg:hidden absolute inset-0 bg-gradient-to-r from-[#F4F7F6] via-[#F4F7F6]/90 via-48% to-transparent" />
        <div className="hidden lg:block dark:lg:hidden absolute inset-0 bg-gradient-to-t from-[#F4F7F6]/95 via-transparent to-[#F4F7F6]/20" />

        {/* Modo Escuro Desktop */}
        <div className="hidden dark:lg:block absolute inset-0 bg-gradient-to-r from-[#0D1622] via-[#0D1622]/92 via-50% to-[#0D1622]/35" />
        <div className="hidden dark:lg:block absolute inset-0 bg-gradient-to-t from-[#0D1622]/95 via-transparent to-[#0D1622]/60" />

        {/* Modo Claro Mobile: Topo transparente (preserva foto atrás da Navbar!) + base suave */}
        <div className="block lg:hidden dark:hidden absolute inset-0 bg-gradient-to-b from-transparent via-[#F4F7F6]/25 via-45% to-[#F4F7F6]/95" />

        {/* Modo Escuro Mobile: Sombra de leitura mantendo o topo translúcido */}
        <div className="hidden dark:block dark:lg:hidden absolute inset-0 bg-gradient-to-b from-[#0D1622]/55 via-[#0D1622]/45 via-45% to-[#0D1622]/95" />
      </div>

      {/* Conteúdo Principal do Hero */}
      <div
        ref={contentRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-1 flex flex-col justify-end lg:justify-center my-auto pt-36 sm:pt-44 lg:pt-0"
      >
        <div className="max-w-xl xl:max-w-2xl py-2 sm:py-6">
          {/* Selo de Tradição e Nota Google */}
          <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#DCE5E3] dark:border-[#6BA89E]/30 bg-[#FFFFFF]/90 dark:bg-[#162333]/90 backdrop-blur-md text-[0.6875rem] sm:text-xs font-body font-semibold text-[#173B38] dark:text-[#6BA89E] mb-4 sm:mb-5 shadow-xs">
            <span className="flex items-center gap-1 text-amber-500">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              <span className="text-[#0D1622] dark:text-[#EBF2F0] font-bold">
                {CLINIC_INFO.googleRating.score}
              </span>
            </span>
            <span className="text-[#475866] dark:text-[#B2C3CC]">
              ({CLINIC_INFO.googleRating.count} avaliações)
            </span>
            <span className="w-1 h-1 rounded-full bg-[#6BA89E]" />
            <span>São Braz, Curitiba • Desde {CLINIC_INFO.sinceYear}</span>
          </div>

          {/* Headline Principal */}
          <h1 className="font-heading text-3xl sm:text-5xl lg:text-[3.5rem] xl:text-[3.9rem] leading-[1.08] tracking-tight text-[#0D1622] dark:text-[#EBF2F0] font-semibold mb-4 sm:mb-5">
            Cuidando do seu sorriso com{" "}
            <span className="text-[#173B38] dark:text-[#6BA89E] font-medium">
              precisão, confiança
            </span>{" "}
            e acolhimento.
          </h1>

          {/* Subtítulo */}
          <p className="font-body text-sm sm:text-base md:text-lg text-[#475866] dark:text-[#B2C3CC] max-w-xl leading-relaxed mb-6 sm:mb-7">
            Atendimento odontológico completo desde 1996: de implantes sem dor e prótese protocolo a lentes de contato, Invisalign e odontopediatria.
          </p>

          {/* CTAs Principais (Inversão inteligente Light #173B38 / Dark #6BA89E) */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <MagneticButton strength={0.28}>
              <a
                href={CLINIC_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden btn-pill w-full sm:w-auto bg-[#173B38] hover:bg-[#102b29] text-white dark:bg-[#6BA89E] dark:hover:bg-[#59968c] dark:text-[#0D1622] gap-2.5 py-3.5 px-7 text-xs sm:text-sm font-semibold shadow-md hover-lift cursor-pointer"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer pointer-events-none"
                />
                <WhatsAppIcon className="w-4 h-4 text-[#6BA89E] dark:text-[#0D1622]" />
                <span>Agendar Avaliação no WhatsApp</span>
              </a>
            </MagneticButton>

            <MagneticButton strength={0.22}>
              <Link
                href="#tratamentos"
                className="btn-pill w-full sm:w-auto bg-[#FFFFFF]/95 dark:bg-[#162333]/95 text-[#0D1622] dark:text-[#EBF2F0] border border-[#DCE5E3] dark:border-[#6BA89E]/30 hover:border-[#6BA89E] gap-2 py-3.5 px-6 text-xs sm:text-sm font-semibold shadow-xs hover-lift cursor-pointer"
              >
                <span>Conhecer Tratamentos</span>
                <ArrowRight className="w-4 h-4 text-[#6BA89E]" />
              </Link>
            </MagneticButton>
          </div>

          {/* Atalho Rápido por Necessidade ("Como podemos ajudar hoje?") */}
          <div className="pt-3 border-t border-[#DCE5E3]/80 dark:border-[#6BA89E]/20">
            <p className="text-[0.6875rem] uppercase tracking-wider font-body font-semibold text-[#6C7D8A] dark:text-[#8499A6] mb-2.5">
              Como podemos ajudar o seu sorriso hoje?
            </p>
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2">
              {quickIntents.map((intent) => {
                const Icon = intent.icon;
                return (
                  <Link
                    key={intent.label}
                    href={intent.href}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#FFFFFF]/90 dark:bg-[#162333]/90 border border-[#DCE5E3] dark:border-[#6BA89E]/20 hover:border-[#6BA89E] text-[0.6875rem] sm:text-xs font-body font-medium text-[#0D1622] dark:text-[#EBF2F0] transition-all hover:shadow-xs"
                  >
                    <Icon className="w-3.5 h-3.5 text-[#173B38] dark:text-[#6BA89E] shrink-0" />
                    <span className="truncate">{intent.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
