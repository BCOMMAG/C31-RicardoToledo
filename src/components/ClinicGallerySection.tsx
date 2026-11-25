"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { CLINIC_INFO } from "@/lib/data";
import { Maximize2, X, ChevronLeft, ChevronRight } from "lucide-react";

const CLINIC_PHOTOS = [
  {
    src: "/clinica/fachada_principal.webp",
    alt: "Fachada da Odontologia Dr. Ricardo A. Toledo na Av. Ver. Toaldo Túlio, 3225",
    title: "Fachada de Fácil Acesso — Nº 3225",
    caption: "Localizada na Av. Ver. Toaldo Túlio, 3225 no bairro São Braz em Curitiba.",
  },
  {
    src: "/clinica/2026-11-24_22-29.png",
    alt: "Consultório clínico equipado com câmera intraoral e monitor de diagnóstico",
    title: "Consultório Clínico Principal",
    caption: "Ambiente higienizado e reservado com diagnóstico visual em monitor de alta definição.",
  },
  {
    src: "/clinica/2026-11-24_22-30.png",
    alt: "Sala de avaliação e planejamento personalizado da clínica",
    title: "Sala de Avaliação & Planejamento",
    caption: "Espaço acolhedor para explicações claras sobre seu plano de tratamento e orientações.",
  },
];

export function ClinicGallerySection() {
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  const closePhoto = useCallback(() => setActivePhotoIndex(null), []);
  const nextPhoto = useCallback(
    () => setActivePhotoIndex((p) => (p !== null ? (p + 1) % CLINIC_PHOTOS.length : null)),
    []
  );
  const prevPhoto = useCallback(
    () =>
      setActivePhotoIndex((p) =>
        p !== null ? (p - 1 + CLINIC_PHOTOS.length) % CLINIC_PHOTOS.length : null
      ),
    []
  );

  useEffect(() => {
    if (activePhotoIndex === null) return;
    const orig = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closePhoto();
      if (e.key === "ArrowRight") nextPhoto();
      if (e.key === "ArrowLeft") prevPhoto();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = orig;
      window.removeEventListener("keydown", onKey);
    };
  }, [activePhotoIndex, closePhoto, nextPhoto, prevPhoto]);

  const timelineSteps = [
    {
      step: "01",
      title: "Avaliação & Diagnóstico",
      desc: "Escuta atenta e exame clínico detalhado com apoio visual no monitor.",
    },
    {
      step: "02",
      title: "Explicação Transparente",
      desc: "Apresentação clara das opções de tratamento, etapas e orçamento justo.",
    },
    {
      step: "03",
      title: "Execução Confortável",
      desc: "Atendimento reservado, higiene rigorosa e foco em mínimo desconforto.",
    },
    {
      step: "04",
      title: "Acompanhamento Contínuo",
      desc: "Revisões preventivas e manutenção para longevidade do seu sorriso.",
    },
  ];

  return (
    <section
      id="clinica"
      className="py-16 sm:py-24 bg-[#F4F7F6] dark:bg-[#0D1622] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Coluna de Texto */}
          <div className="lg:col-span-6 space-y-5">
            <div>
              <span className="inline-block text-xs uppercase tracking-widest text-[#173B38] dark:text-[#6BA89E] font-body font-semibold mb-2">
                • Estrutura em São Braz, Curitiba
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-[#0D1622] dark:text-[#EBF2F0] leading-tight">
                Ambiente privado, higienizado e pensado para sua tranquilidade
              </h2>
            </div>

            <p className="font-body text-sm sm:text-base text-[#475866] dark:text-[#B2C3CC] leading-relaxed">
              Localizada em ponto de fácil acesso na {CLINIC_INFO.addressShort}, nossa estrutura prioriza a privacidade de consultórios individuais fechados, rigoroso protocolo de esterilização e acolhimento humano desde a recepção.
            </p>

            {/* Processo de Atendimento Sem Cards (Linha Vertical Limpa) */}
            <div className="pt-2">
              <p className="text-xs uppercase tracking-wider font-body font-semibold text-[#173B38] dark:text-[#6BA89E] mb-4">
                Como funciona o atendimento
              </p>
              <div className="relative border-l border-[#6BA89E]/45 ml-3 pl-5 space-y-4">
                {timelineSteps.map((st) => (
                  <div key={st.step} className="relative">
                    <span className="absolute -left-[25px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#6BA89E] ring-4 ring-[#F4F7F6] dark:ring-[#0D1622]" />
                    <div className="flex items-baseline gap-2">
                      <span className="font-heading text-xs font-bold text-[#173B38] dark:text-[#6BA89E]">
                        {st.step}
                      </span>
                      <h3 className="font-heading text-sm sm:text-base font-semibold text-[#0D1622] dark:text-[#EBF2F0]">
                        {st.title}
                      </h3>
                    </div>
                    <p className="font-body text-xs text-[#475866] dark:text-[#B2C3CC] mt-0.5">
                      {st.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Coluna Visual Compacta com Lightbox */}
          <div className="lg:col-span-6 space-y-2.5">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {CLINIC_PHOTOS.map((photo, idx) => (
                <button
                  key={photo.src}
                  type="button"
                  onClick={() => setActivePhotoIndex(idx)}
                  className={`relative rounded-2xl overflow-hidden border border-[#DCE5E3] dark:border-[#6BA89E]/25 bg-[#FFFFFF] dark:bg-[#162333] group cursor-pointer text-left focus:outline-none focus:ring-2 focus:ring-[#6BA89E] ${
                    idx === 2 ? "col-span-2 aspect-[21/9] sm:aspect-[16/8]" : "col-span-1 aspect-[4/3]"
                  }`}
                  aria-label={`Ampliar foto: ${photo.title}`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes={idx === 2 ? "(max-width: 1024px) 100vw, 600px" : "(max-width: 640px) 50vw, 300px"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1622]/75 via-transparent to-transparent opacity-60 sm:opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-2.5 right-2.5 p-1.5 rounded-full bg-[#0D1622]/65 text-white backdrop-blur-sm">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                  <div className="absolute bottom-2.5 left-3 right-3 text-white text-[0.6875rem] sm:text-xs font-body font-medium sm:opacity-0 group-hover:opacity-100 transition-opacity line-clamp-1">
                    {photo.title}
                  </div>
                </button>
              ))}
            </div>
            <p className="text-center text-[0.6875rem] font-body text-[#6C7D8A] dark:text-[#8499A6] flex items-center justify-center gap-1.5 pt-1">
              <Maximize2 className="w-3 h-3 text-[#6BA89E]" />
              <span>Toque em qualquer foto da clínica para ver ampliada</span>
            </p>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activePhotoIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0D1622]/90 backdrop-blur-md"
          onClick={closePhoto}
        >
          <button
            type="button"
            onClick={closePhoto}
            className="absolute top-4 right-4 p-2.5 rounded-full bg-white/15 hover:bg-white/25 text-white cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prevPhoto();
            }}
            className="absolute left-3 sm:left-6 p-2.5 rounded-full bg-white/15 hover:bg-white/25 text-white cursor-pointer"
            aria-label="Foto anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              nextPhoto();
            }}
            className="absolute right-3 sm:right-6 p-2.5 rounded-full bg-white/15 hover:bg-white/25 text-white cursor-pointer"
            aria-label="Próxima foto"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="relative max-w-4xl w-full text-center" onClick={(e) => e.stopPropagation()}>
            <div className="relative w-full h-[58vh] sm:h-[72vh] rounded-2xl overflow-hidden bg-black/40">
              <Image
                src={CLINIC_PHOTOS[activePhotoIndex].src}
                alt={CLINIC_PHOTOS[activePhotoIndex].alt}
                fill
                className="object-contain"
                sizes="95vw"
              />
            </div>
            <h3 className="text-white font-heading text-lg sm:text-xl font-semibold mt-3">
              {CLINIC_PHOTOS[activePhotoIndex].title}
            </h3>
            <p className="text-white/75 font-body text-xs sm:text-sm mt-1">
              {CLINIC_PHOTOS[activePhotoIndex].caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

