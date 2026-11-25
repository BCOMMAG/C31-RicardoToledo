"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { CLINIC_INFO } from "@/lib/data";
import { MoveHorizontal, ShieldAlert, Maximize2, X } from "lucide-react";
import { WhatsAppIcon } from "@/components/SocialIcons";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function BeforeAfterSection() {
  const [sliderPos, setSliderPos] = useState(50);
  const [zoomSrc, setZoomSrc] = useState<{ src: string; label: string } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos(Math.round((x / rect.width) * 100));
  };

  const stages = [
    { src: "/antesxdepois/caso_01.jpg", label: "01. Avaliação Inicial" },
    { src: "/antesxdepois/caso_02.jpg", label: "02. Detalhe Anterior" },
    { src: "/antesxdepois/caso_03.jpg", label: "03. Preparo Técnico" },
    { src: "/antesxdepois/caso_04.jpg", label: "04. Resultado Finalizado" },
  ];

  return (
    <section
      id="resultados"
      className="py-16 sm:py-24 bg-[#FFFFFF] dark:bg-[#162333]/50 border-y border-[#DCE5E3] dark:border-[#6BA89E]/15 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Coluna Esquerda: Explicação & Mini Galeria de Evolução */}
          <div className="lg:col-span-5 space-y-5">
            <div>
              <span className="inline-block text-xs uppercase tracking-widest text-[#173B38] dark:text-[#6BA89E] font-body font-semibold mb-2">
                • Reabilitação &amp; Estética Dental
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-[#0D1622] dark:text-[#EBF2F0] leading-tight">
                Transformação real preservando harmonia e função
              </h2>
            </div>

            <p className="font-body text-sm sm:text-base text-[#475866] dark:text-[#B2C3CC] leading-relaxed">
              Arraste o controle interativo ao lado para comparar a condição inicial (dentes fraturados e escurecidos) com o resultado final da reabilitação estética.
            </p>

            {/* Etapas Clínicas Compactas */}
            <div>
              <p className="text-[0.6875rem] uppercase tracking-wider font-body font-semibold text-[#6C7D8A] dark:text-[#8499A6] mb-2.5">
                Etapas clínicas registradas (toque para ampliar):
              </p>
              <div className="grid grid-cols-4 gap-2">
                {stages.map((st) => (
                  <button
                    key={st.src}
                    type="button"
                    onClick={() => setZoomSrc(st)}
                    className="group relative aspect-square rounded-xl overflow-hidden border border-[#DCE5E3] dark:border-[#6BA89E]/25 bg-[#F4F7F6] dark:bg-[#0D1622] cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#6BA89E]"
                    aria-label={`Ampliar ${st.label}`}
                  >
                    <Image
                      src={st.src}
                      alt={st.label}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="100px"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Maximize2 className="w-3.5 h-3.5 text-white" />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Nota Ética CFO */}
            <div className="p-3.5 rounded-xl bg-[#F4F7F6] dark:bg-[#0D1622] border border-[#DCE5E3] dark:border-[#6BA89E]/20 flex items-start gap-2.5 text-[0.6875rem] text-[#475866] dark:text-[#B2C3CC] leading-relaxed">
              <ShieldAlert className="w-4 h-4 text-[#6BA89E] shrink-0 mt-0.5" />
              <span>
                Registro ilustrativo de caso clínico real conduzido na clínica. Os resultados estéticos e funcionais variam conforme o diagnóstico individual de cada paciente.
              </span>
            </div>

            <div className="pt-1">
              <MagneticButton strength={0.22}>
                <a
                  href={`https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${encodeURIComponent(
                    "Olá! Vi um resultado de reabilitação estética no site e gostaria de agendar uma avaliação."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill bg-[#173B38] text-white dark:bg-[#6BA89E] dark:text-[#0D1622] py-3 px-6 text-xs sm:text-sm font-semibold gap-2 shadow-sm hover-lift cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#6BA89E] dark:text-[#0D1622]" />
                  <span>Avaliar Meu Sorriso</span>
                </a>
              </MagneticButton>
            </div>
          </div>

          {/* Coluna Direita: Comparador Interativo Arrastável */}
          <div className="lg:col-span-7 flex flex-col items-center">
            <div
              ref={containerRef}
              onMouseMove={(e) => {
                if (e.buttons === 1) handleMove(e.clientX);
              }}
              onClick={(e) => handleMove(e.clientX)}
              onTouchMove={(e) => {
                if (e.touches[0]) handleMove(e.touches[0].clientX);
              }}
              className="relative w-full max-w-[540px] aspect-[4/3] sm:aspect-[5/4] rounded-3xl overflow-hidden border border-[#DCE5E3] dark:border-[#6BA89E]/30 shadow-xl select-none cursor-ew-resize bg-[#0D1622]"
              aria-label="Comparador interativo antes e depois"
            >
              {/* Imagem DEPOIS (Fundo completo) */}
              <Image
                src="/antesxdepois/caso_04.jpg"
                alt="Depois — Sorriso reabilitado"
                fill
                className="object-cover pointer-events-none"
                sizes="(max-width: 768px) 100vw, 540px"
              />

              {/* Tag Depois */}
              <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#173B38]/90 text-white text-[0.6875rem] font-body font-semibold backdrop-blur-sm z-10 pointer-events-none">
                Depois
              </span>

              {/* Imagem ANTES (Recorte por clipPath) */}
              <div
                className="absolute inset-0 overflow-hidden pointer-events-none"
                style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
              >
                <Image
                  src="/antesxdepois/caso_01.jpg"
                  alt="Antes — Condição clínica inicial"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 540px"
                />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#0D1622]/85 text-white text-[0.6875rem] font-body font-semibold backdrop-blur-sm">
                  Antes
                </span>
              </div>

              {/* Linha Divisória & Handle */}
              <div
                className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_12px_rgba(0,0,0,0.6)] z-20 pointer-events-none"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#FFFFFF] text-[#0D1622] border-2 border-[#6BA89E] shadow-lg flex items-center justify-center">
                  <MoveHorizontal className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Controle Slider acessível abaixo para toque fácil */}
            <div className="w-full max-w-[540px] mt-4 flex items-center gap-3 px-2">
              <span className="text-xs font-body font-semibold text-[#475866] dark:text-[#B2C3CC]">Antes</span>
              <input
                type="range"
                min={5}
                max={95}
                value={sliderPos}
                onChange={(e) => setSliderPos(Number(e.target.value))}
                aria-label="Deslizar comparação antes e depois"
                className="w-full accent-[#173B38] dark:accent-[#6BA89E] cursor-pointer"
              />
              <span className="text-xs font-body font-semibold text-[#173B38] dark:text-[#6BA89E]">Depois</span>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de Zoom para Etapas */}
      {zoomSrc && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0D1622]/90 backdrop-blur-md"
          onClick={() => setZoomSrc(null)}
        >
          <button
            type="button"
            onClick={() => setZoomSrc(null)}
            className="absolute top-4 right-4 p-2.5 rounded-full bg-white/15 hover:bg-white/25 text-white cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="relative max-w-2xl w-full text-center" onClick={(e) => e.stopPropagation()}>
            <div className="relative w-full h-[60vh] rounded-2xl overflow-hidden bg-black/30">
              <Image src={zoomSrc.src} alt={zoomSrc.label} fill className="object-contain" sizes="90vw" />
            </div>
            <p className="text-white font-heading text-lg mt-3">{zoomSrc.label}</p>
          </div>
        </div>
      )}
    </section>
  );
}
