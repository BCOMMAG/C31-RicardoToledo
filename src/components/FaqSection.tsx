"use client";

import { useState } from "react";
import { FAQS, CLINIC_INFO } from "@/lib/data";
import { ChevronDown } from "lucide-react";
import { WhatsAppIcon } from "@/components/SocialIcons";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(FAQS[0].id);

  return (
    <section
      id="duvidas"
      className="py-16 sm:py-24 bg-[#F4F7F6] dark:bg-[#0D1622]"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="inline-block text-xs uppercase tracking-widest text-[#173B38] dark:text-[#6BA89E] font-body font-semibold mb-2">
            • Esclarecimentos Frequentes
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl text-[#0D1622] dark:text-[#EBF2F0] font-semibold">
            Dúvidas Comuns dos Pacientes
          </h2>
          <p className="font-body text-xs sm:text-sm text-[#475866] dark:text-[#B2C3CC] mt-2">
            Respostas diretas baseadas nas orientações clínicas do Dr. Ricardo A. Toledo.
          </p>
        </div>

        <div className="space-y-3 mb-10">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl bg-[#FFFFFF] dark:bg-[#162333] border border-[#DCE5E3] dark:border-[#6BA89E]/20 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  aria-expanded={isOpen}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="font-heading text-base sm:text-lg font-semibold text-[#0D1622] dark:text-[#EBF2F0]">
                    {faq.question}
                  </span>
                  <span
                    className={`w-8 h-8 rounded-full border border-[#DCE5E3] dark:border-[#6BA89E]/25 bg-[#F4F7F6] dark:bg-[#0D1622] flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-[#173B38] dark:text-[#6BA89E]" : "text-[#6C7D8A]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm font-body text-[#475866] dark:text-[#B2C3CC] leading-relaxed border-t border-[#DCE5E3]/70 dark:border-[#6BA89E]/15 animate-fade-in">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="p-6 sm:p-7 rounded-2xl bg-[#FFFFFF] dark:bg-[#162333] border border-[#DCE5E3] dark:border-[#6BA89E]/25 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h3 className="font-heading text-lg sm:text-xl font-semibold text-[#0D1622] dark:text-[#EBF2F0]">
              Ainda tem alguma dúvida sobre o seu caso?
            </h3>
            <p className="font-body text-xs sm:text-sm text-[#475866] dark:text-[#B2C3CC] mt-0.5">
              Fale diretamente com a nossa equipe pelo WhatsApp {CLINIC_INFO.whatsappDisplay}.
            </p>
          </div>
          <MagneticButton strength={0.22} className="shrink-0">
            <a
              href={CLINIC_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill bg-[#173B38] text-white dark:bg-[#6BA89E] dark:text-[#0D1622] py-3 px-6 text-xs sm:text-sm font-semibold gap-2 shadow-sm hover-lift cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#6BA89E] dark:text-[#0D1622]" />
              <span>Chamar no WhatsApp</span>
            </a>
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
