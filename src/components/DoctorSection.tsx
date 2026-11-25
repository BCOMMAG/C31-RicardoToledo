"use client";

import { useState } from "react";
import Image from "next/image";
import { CLINIC_INFO } from "@/lib/data";
import { Award, ShieldCheck, HeartHandshake, ChevronDown, Calendar } from "lucide-react";
import { WhatsAppIcon } from "@/components/SocialIcons";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function DoctorSection() {
  const [expandedMobile, setExpandedMobile] = useState(false);

  return (
    <section
      id="profissional"
      className="py-16 sm:py-24 bg-[#F4F7F6] dark:bg-[#0D1622] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Coluna da Foto Oficial Otimizada */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-full max-w-[360px] sm:max-w-[400px]">
              {/* Selo Flutuante de Experiência */}
              <div className="hidden sm:flex absolute -top-3 -left-4 z-20 items-center gap-2 px-3.5 py-2 rounded-2xl bg-[#FFFFFF]/95 dark:bg-[#162333]/95 backdrop-blur-md border border-[#DCE5E3] dark:border-[#6BA89E]/25 shadow-md">
                <Calendar className="w-4 h-4 text-[#173B38] dark:text-[#6BA89E]" />
                <span className="font-body text-xs font-semibold text-[#0D1622] dark:text-[#EBF2F0]">
                  Atendimento desde {CLINIC_INFO.sinceYear}
                </span>
              </div>

              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border border-[#DCE5E3] dark:border-[#6BA89E]/25 shadow-xl group bg-[#FFFFFF] dark:bg-[#162333]">
                <Image
                  src="/Foto_perfil_otimizada.jpg"
                  alt={`${CLINIC_INFO.doctorFullName} — ${CLINIC_INFO.cro}`}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 90vw, 400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1622]/90 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-5 left-5 right-5 text-white z-10">
                  <span className="text-[0.6875rem] uppercase tracking-widest text-[#6BA89E] font-body font-semibold block mb-1">
                    Responsável Técnico
                  </span>
                  <p className="font-heading text-2xl font-semibold leading-tight">
                    {CLINIC_INFO.doctorFullName}
                  </p>
                  <p className="text-xs text-[#EBF2F0]/85 font-body mt-1">
                    {CLINIC_INFO.cro} • São Braz, Curitiba
                  </p>
                </div>
              </div>

              <div className="hidden sm:flex absolute -bottom-3 -right-4 z-20 items-center gap-2 px-3.5 py-2 rounded-2xl bg-[#FFFFFF]/95 dark:bg-[#162333]/95 backdrop-blur-md border border-[#DCE5E3] dark:border-[#6BA89E]/25 shadow-md">
                <ShieldCheck className="w-4 h-4 text-[#6BA89E]" />
                <span className="font-body text-xs font-semibold text-[#0D1622] dark:text-[#EBF2F0]">
                  5.0 ★ (121 avaliações)
                </span>
              </div>
            </div>
          </div>

          {/* Coluna Textual */}
          <div className="lg:col-span-7 space-y-5">
            <div className="space-y-2.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#DCE5E3] dark:border-[#6BA89E]/25 bg-[#FFFFFF] dark:bg-[#162333] text-xs font-body font-semibold text-[#173B38] dark:text-[#6BA89E]">
                <Award className="w-3.5 h-3.5" />
                <span>{CLINIC_INFO.cro} • Desde {CLINIC_INFO.sinceYear}</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[#0D1622] dark:text-[#EBF2F0] font-semibold leading-[1.12]">
                {CLINIC_INFO.doctorName}
              </h2>
              <p className="font-heading text-lg sm:text-xl text-[#475866] dark:text-[#B2C3CC]">
                Quase três décadas cuidando de gerações de famílias em Curitiba com atenção, clareza e capricho técnico.
              </p>
            </div>

            {/* Botão Compacto no Mobile */}
            <div className="lg:hidden">
              <button
                type="button"
                onClick={() => setExpandedMobile((prev) => !prev)}
                aria-expanded={expandedMobile}
                className="w-full py-3 px-4 rounded-2xl bg-[#FFFFFF] dark:bg-[#162333] border border-[#DCE5E3] dark:border-[#6BA89E]/25 text-xs font-body font-semibold text-[#0D1622] dark:text-[#EBF2F0] flex items-center justify-between cursor-pointer"
              >
                <span>
                  {expandedMobile
                    ? "Ocultar detalhes sobre o Dr. Ricardo"
                    : "Saber mais sobre o Dr. Ricardo A. Toledo"}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-[#6BA89E] transition-transform duration-300 ${
                    expandedMobile ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>

            {/* Bloco Explicativo (Sempre aberto no Desktop, colapsável no Mobile) */}
            <div className={`${expandedMobile ? "block" : "hidden"} lg:block space-y-5 animate-fade-in`}>
              <p className="font-body text-sm sm:text-base text-[#475866] dark:text-[#B2C3CC] leading-relaxed">
                {CLINIC_INFO.officialSummary}
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-[#FFFFFF] dark:bg-[#162333] border border-[#DCE5E3] dark:border-[#6BA89E]/20 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-body font-semibold text-[#0D1622] dark:text-[#EBF2F0]">
                    <HeartHandshake className="w-4 h-4 text-[#6BA89E]" />
                    <span>Relação de Confiança e Clareza</span>
                  </div>
                  <p className="text-xs text-[#475866] dark:text-[#B2C3CC] leading-relaxed">
                    Cada diagnóstico é explicado passo a passo, respeitando as opções e prioridades de cada paciente com preços justos.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#FFFFFF] dark:bg-[#162333] border border-[#DCE5E3] dark:border-[#6BA89E]/20 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-body font-semibold text-[#0D1622] dark:text-[#EBF2F0]">
                    <ShieldCheck className="w-4 h-4 text-[#6BA89E]" />
                    <span>Higiene e Atendimento Privativo</span>
                  </div>
                  <p className="text-xs text-[#475866] dark:text-[#B2C3CC] leading-relaxed">
                    Consultório reservado, ambiente acolhedor e equipe atenciosa elogiada por pacientes que nos acompanham há mais de 20 anos.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-[#DCE5E3] dark:border-[#6BA89E]/20">
              <MagneticButton strength={0.22} className="w-full sm:w-auto">
                <a
                  href={CLINIC_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill w-full sm:w-auto bg-[#173B38] text-white dark:bg-[#6BA89E] dark:text-[#0D1622] py-3.5 px-7 text-xs sm:text-sm font-semibold gap-2.5 shadow-sm hover-lift inline-flex items-center justify-center cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#6BA89E] dark:text-[#0D1622]" />
                  <span>Agendar Consulta com o Dr. Ricardo</span>
                </a>
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

