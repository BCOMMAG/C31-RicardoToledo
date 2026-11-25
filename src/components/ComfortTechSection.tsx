"use client";

import Image from "next/image";
import Link from "next/link";
import { CLINIC_INFO } from "@/lib/data";
import { ShieldCheck, HeartHandshake, MonitorCheck, ArrowRight } from "lucide-react";
import { WhatsAppIcon } from "@/components/SocialIcons";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function ComfortTechSection() {
  return (
    <section className="py-16 sm:py-24 bg-[#F4F7F6] dark:bg-[#0D1622] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Coluna Esquerda: Foto Real do Consultório com Monitor Intraoral */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[16/10] sm:aspect-[4/3] rounded-3xl overflow-hidden border border-[#DCE5E3] dark:border-[#6BA89E]/25 shadow-lg group bg-[#FFFFFF] dark:bg-[#162333]">
              <Image
                src="/clinica/2026-11-24_22-29.png"
                alt="Consultório odontológico moderno da Odontologia Dr. Ricardo A. Toledo com câmera intraoral e radiografia"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 600px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1622]/75 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 right-5 text-white z-10">
                <span className="inline-block text-[0.6875rem] font-body font-semibold uppercase tracking-widest text-[#6BA89E] mb-1">
                  Tecnologia &amp; Biossegurança
                </span>
                <p className="font-heading text-lg sm:text-xl font-medium leading-snug">
                  Diagnóstico visual por imagem em tempo real e ambiente privativo
                </p>
              </div>
            </div>
          </div>

          {/* Coluna Direita: Odontologia Sem Medo e Sem Dor */}
          <div className="lg:col-span-6 space-y-5">
            <div>
              <span className="inline-block text-xs uppercase tracking-widest text-[#173B38] dark:text-[#6BA89E] font-body font-semibold mb-2">
                • Odontologia Sem Dor
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-[#0D1622] dark:text-[#EBF2F0] leading-tight">
                Conforto absoluto mesmo para quem tem receio de dentista
              </h2>
            </div>

            <p className="font-body text-sm sm:text-base text-[#475866] dark:text-[#B2C3CC] leading-relaxed">
              Sabemos que muitos pacientes adiam implantes ou tratamentos essenciais por medo da dor. Nossa clínica une acolhimento humano, explicações transparentes e protocolos avançados de analgesia e sedação.
            </p>

            {/* 3 Pilares sem caixas pesadas (layout limpo) */}
            <div className="space-y-4 pt-2 border-t border-[#DCE5E3] dark:border-[#6BA89E]/20">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-[#FFFFFF] dark:bg-[#162333] border border-[#DCE5E3] dark:border-[#6BA89E]/25 flex items-center justify-center shrink-0 text-[#173B38] dark:text-[#6BA89E]">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-heading text-base font-semibold text-[#0D1622] dark:text-[#EBF2F0]">
                    1. Anestesia Local Precisa
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-[#475866] dark:text-[#B2C3CC] mt-0.5">
                    Aplicada diretamente na região do procedimento, bloqueando completamente a sensibilidade dolorosa.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-[#FFFFFF] dark:bg-[#162333] border border-[#DCE5E3] dark:border-[#6BA89E]/25 flex items-center justify-center shrink-0 text-[#173B38] dark:text-[#6BA89E]">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-heading text-base font-semibold text-[#0D1622] dark:text-[#EBF2F0]">
                    2. Sedação Venosa Consciente Monitorada
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-[#475866] dark:text-[#B2C3CC] mt-0.5">
                    Realizada por médico anestesiologista com monitoramento contínuo dos sinais vitais, reduzindo ansiedade e garantindo tranquilidade total.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-[#FFFFFF] dark:bg-[#162333] border border-[#DCE5E3] dark:border-[#6BA89E]/25 flex items-center justify-center shrink-0 text-[#173B38] dark:text-[#6BA89E]">
                  <MonitorCheck className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-heading text-base font-semibold text-[#0D1622] dark:text-[#EBF2F0]">
                    3. Transparência Visual e Diagnóstico Digital
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-[#475866] dark:text-[#B2C3CC] mt-0.5">
                    Você acompanha imagens e radiografias no monitor junto ao Dr. Ricardo, entendendo cada etapa sem surpresas.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <MagneticButton strength={0.22}>
                <a
                  href={`https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${encodeURIComponent(
                    "Olá! Gostaria de saber mais sobre implantes sem dor e sedação consciente."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill bg-[#173B38] text-white dark:bg-[#6BA89E] dark:text-[#0D1622] py-3 px-6 text-xs sm:text-sm font-semibold gap-2 shadow-sm hover-lift cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#6BA89E] dark:text-[#0D1622]" />
                  <span>Conversar sobre Sedação</span>
                </a>
              </MagneticButton>

              <Link
                href="/tratamentos/implantes-e-protocolo"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-body font-semibold text-[#173B38] dark:text-[#6BA89E] hover:underline px-2 py-2"
              >
                <span>Ver guia de Implantes &amp; Protocolo</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
