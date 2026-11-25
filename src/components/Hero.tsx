"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { CLINIC_INFO } from "@/lib/data";
import { ArrowRight } from "lucide-react";
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
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.85, ease: "power2.out", delay: 0.1 }
        );
      }
    },
    { scope: heroRef }
  );

  return (
    <section
      id="inicio"
      ref={heroRef}
      className="relative w-full h-[100dvh] min-h-[600px] flex flex-col justify-between pt-20 sm:pt-24 lg:pt-24 pb-6 sm:pb-8 lg:pb-12 overflow-hidden bg-[#F4F7F6] dark:bg-[#0D1622]"
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
            className="object-cover object-[center_20%]"
            sizes="100vw"
          />
        </div>

        {/* Gradientes Dual-Theme para Legibilidade Impecável */}
        {/* Modo Claro Desktop */}
        <div className="hidden lg:block dark:lg:hidden absolute inset-0 bg-gradient-to-r from-[#F4F7F6] via-[#F4F7F6]/90 via-48% to-transparent" />
        <div className="hidden lg:block dark:lg:hidden absolute inset-0 bg-gradient-to-t from-[#F4F7F6]/85 via-transparent to-[#F4F7F6]/15" />

        {/* Modo Escuro Desktop */}
        <div className="hidden dark:lg:block absolute inset-0 bg-gradient-to-r from-[#0D1622] via-[#0D1622]/92 via-50% to-[#0D1622]/35" />
        <div className="hidden dark:lg:block absolute inset-0 bg-gradient-to-t from-[#0D1622]/90 via-transparent to-[#0D1622]/55" />

        {/* Modo Claro Mobile: Topo leve atrás dos textos + centro limpo pro rosto + base suave pros botões */}
        <div className="block lg:hidden dark:hidden absolute inset-0 bg-gradient-to-b from-[#F4F7F6]/55 via-transparent via-45% to-[#F4F7F6]/90" />

        {/* Modo Escuro Mobile */}
        <div className="hidden dark:block dark:lg:hidden absolute inset-0 bg-gradient-to-b from-[#0D1622]/75 via-[#0D1622]/25 via-48% to-[#0D1622]/92" />
      </div>

      {/* Conteúdo Principal: Centralizado no Desktop, Topo+Base equilibrados no Mobile (rosto livre no centro) */}
      <div
        ref={contentRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-1 flex flex-col justify-between lg:justify-center"
      >
        <div className="max-w-xl xl:max-w-2xl flex-1 lg:flex-initial flex flex-col justify-between lg:justify-center py-2 sm:py-4">
          {/* Bloco Superior (Título + Subtítulo centralizados no Desktop / posicionados na área clara superior no Mobile) */}
          <div className="text-center lg:text-left pt-2 sm:pt-4 lg:pt-0">
            <h1 className="font-heading text-[1.75rem] sm:text-4xl lg:text-[3.5rem] xl:text-[3.9rem] leading-[1.1] tracking-tight text-[#0D1622] dark:text-[#EBF2F0] font-semibold mb-3 sm:mb-5 drop-shadow-[0_1px_10px_rgba(244,247,246,0.9)] dark:drop-shadow-none">
              Cuidando do seu sorriso com{" "}
              <span className="text-[#173B38] dark:text-[#6BA89E] font-medium">
                precisão, confiança
              </span>{" "}
              e acolhimento.
            </h1>

            <p className="font-body text-xs sm:text-base md:text-lg text-[#364754] dark:text-[#B2C3CC] max-w-lg lg:max-w-xl mx-auto lg:mx-0 leading-relaxed mb-4 lg:mb-8 drop-shadow-[0_1px_8px_rgba(244,247,246,0.95)] dark:drop-shadow-none">
              Atendimento odontológico completo desde 1996: de implantes sem dor e prótese protocolo a lentes de contato, Invisalign e odontopediatria.
            </p>
          </div>

          {/* Botões Principais (na base no Mobile para deixar o sorriso livre / logo abaixo do texto no Desktop) */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-2.5 sm:gap-4 mt-auto lg:mt-0 pb-1 lg:pb-0">
            <MagneticButton strength={0.28}>
              <a
                href={CLINIC_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden btn-pill w-full sm:w-auto bg-[#173B38] hover:bg-[#102b29] text-white dark:bg-[#6BA89E] dark:hover:bg-[#59968c] dark:text-[#0D1622] gap-2.5 py-3 sm:py-3.5 px-6 sm:px-7 text-xs sm:text-sm font-semibold shadow-md hover-lift cursor-pointer"
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
                className="btn-pill w-full sm:w-auto bg-[#FFFFFF]/95 dark:bg-[#162333]/95 text-[#0D1622] dark:text-[#EBF2F0] border border-[#DCE5E3] dark:border-[#6BA89E]/30 hover:border-[#6BA89E] gap-2 py-3 sm:py-3.5 px-6 text-xs sm:text-sm font-semibold shadow-xs hover-lift cursor-pointer"
              >
                <span>Conhecer Tratamentos</span>
                <ArrowRight className="w-4 h-4 text-[#6BA89E]" />
              </Link>
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}
