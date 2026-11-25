"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { CLINIC_INFO } from "@/lib/data";
import { WhatsAppIcon } from "@/components/SocialIcons";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { X, Send } from "lucide-react";

const QUICK_TOPICS = [
  {
    label: "Implantes & Prótese Protocolo",
    msg: "Olá! Gostaria de agendar uma avaliação para Implantes / Prótese Protocolo.",
  },
  {
    label: "Estética (Lentes / Clareamento / Invisalign)",
    msg: "Olá! Gostaria de saber mais sobre Lentes de Contato, Clareamento ou Invisalign.",
  },
  {
    label: "Limpeza, Cárie ou Odontopediatria",
    msg: "Olá! Gostaria de agendar uma consulta preventiva / limpeza ou atendimento infantil.",
  },
  {
    label: "Dor de Dente, Canal ou Bruxismo",
    msg: "Olá! Preciso de atendimento para dor de dente, canal ou avaliação de bruxismo.",
  },
];

export function FloatingWhatsApp() {
  const [showBubble, setShowBubble] = useState(false);
  const [triageOpen, setTriageOpen] = useState(false);

  useEffect(() => {
    const initial = setTimeout(() => {
      setShowBubble(true);
      setTimeout(() => setShowBubble(false), 8500);
    }, 3500);
    return () => clearTimeout(initial);
  }, []);

  return (
    <aside
      aria-label="Atendimento rápido via WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3"
    >
      {/* Menu Rápido de Triagem ao clicar no botão */}
      {triageOpen && (
        <div className="w-[290px] sm:w-[320px] rounded-2xl bg-[#FFFFFF] dark:bg-[#162333] border border-[#DCE5E3] dark:border-[#6BA89E]/30 shadow-2xl p-4 space-y-3 animate-fade-in-up">
          <div className="flex items-center justify-between pb-2 border-b border-[#DCE5E3] dark:border-[#6BA89E]/20">
            <div className="flex items-center gap-2.5">
              <div className="relative w-9 h-9 rounded-full overflow-hidden border border-[#6BA89E]">
                <Image
                  src="/Foto_perfil_otimizada.jpg"
                  alt={CLINIC_INFO.doctorName}
                  fill
                  className="object-cover object-top"
                  sizes="36px"
                />
              </div>
              <div>
                <p className="font-heading text-sm font-semibold text-[#0D1622] dark:text-[#EBF2F0]">
                  Atendimento Rápido
                </p>
                <p className="text-[0.6875rem] text-[#25D366] font-semibold">
                  • WhatsApp {CLINIC_INFO.whatsappDisplay}
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setTriageOpen(false)}
              className="p-1.5 rounded-full hover:bg-[#F4F7F6] dark:hover:bg-[#0D1622] text-[#475866] dark:text-[#B2C3CC] cursor-pointer"
              aria-label="Fechar"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs font-body text-[#475866] dark:text-[#B2C3CC]">
            Escolha o assunto para agilizar sua conversa:
          </p>

          <div className="space-y-1.5">
            {QUICK_TOPICS.map((t) => (
              <a
                key={t.label}
                href={`https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${encodeURIComponent(
                  t.msg
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setTriageOpen(false)}
                className="w-full p-2.5 rounded-xl bg-[#F4F7F6] dark:bg-[#0D1622] hover:border-[#6BA89E] border border-[#DCE5E3] dark:border-[#6BA89E]/20 text-xs font-body font-medium text-[#0D1622] dark:text-[#EBF2F0] flex items-center justify-between gap-2 transition-colors"
              >
                <span>{t.label}</span>
                <Send className="w-3.5 h-3.5 text-[#6BA89E] shrink-0" />
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Linha do Balão Humanizado + Botão Principal */}
      <div className="flex items-center group">
        {!triageOpen && (
          <div
            className={`mr-3 p-2.5 rounded-2xl bg-[#FFFFFF] dark:bg-[#162333] text-[#0D1622] dark:text-[#EBF2F0] border border-[#DCE5E3] dark:border-[#6BA89E]/30 shadow-lg transition-all duration-500 flex items-center gap-2.5 ${
              showBubble
                ? "opacity-100 translate-x-0 scale-100 pointer-events-auto"
                : "opacity-0 translate-x-4 scale-95 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-100 group-hover:pointer-events-auto"
            }`}
          >
            <div className="relative w-9 h-9 rounded-full overflow-hidden border border-[#6BA89E] shrink-0">
              <Image
                src="/Foto_perfil_otimizada.jpg"
                alt={CLINIC_INFO.doctorName}
                fill
                className="object-cover object-top"
                sizes="36px"
              />
            </div>
            <div className="text-left min-w-0">
              <p className="font-heading text-xs font-semibold truncate">
                {CLINIC_INFO.doctorName}
              </p>
              <p className="text-[0.6875rem] text-[#25D366] font-semibold">
                • Agende pelo WhatsApp
              </p>
            </div>
          </div>
        )}

        <MagneticButton strength={0.25}>
          <button
            type="button"
            onClick={() => setTriageOpen((prev) => !prev)}
            aria-label="Abrir opções de atendimento no WhatsApp"
            className="relative w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-[0_8px_24px_rgba(37,211,102,0.38)] transition-transform duration-300 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 pointer-events-none" />
            <WhatsAppIcon className="w-6 h-6 sm:w-7 sm:h-7 relative z-10" />
          </button>
        </MagneticButton>
      </div>
    </aside>
  );
}

