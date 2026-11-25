"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { EDUCATIONAL_GUIDES, EducationalGuide } from "@/data/guides";
import { CLINIC_INFO } from "@/lib/data";
import { BookOpen, ArrowRight, Clock, X, CheckCircle2 } from "lucide-react";
import { WhatsAppIcon } from "@/components/SocialIcons";

export function GuidesPreviewSection() {
  const [activeGuide, setActiveGuide] = useState<EducationalGuide | null>(null);
  const previewGuides = EDUCATIONAL_GUIDES.slice(0, 4);

  return (
    <section
      id="orientacoes"
      className="py-16 sm:py-24 bg-[#FFFFFF] dark:bg-[#162333]/50 border-y border-[#DCE5E3] dark:border-[#6BA89E]/15"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-12">
          <div className="max-w-2xl">
            <span className="inline-block text-xs uppercase tracking-widest text-[#173B38] dark:text-[#6BA89E] font-body font-semibold mb-2">
              • Orientações do Dr. Ricardo
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-[#0D1622] dark:text-[#EBF2F0] leading-tight">
              Informação clara para cuidar do seu sorriso todos os dias
            </h2>
          </div>

          <Link
            href="/orientacoes"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-body font-semibold text-[#173B38] dark:text-[#6BA89E] hover:underline shrink-0"
          >
            <span>Ver todos os {EDUCATIONAL_GUIDES.length} guias educativos</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Grid Compacto (4 guias em destaque) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {previewGuides.map((guide) => (
            <button
              key={guide.id}
              type="button"
              onClick={() => setActiveGuide(guide)}
              className="text-left rounded-2xl bg-[#F4F7F6] dark:bg-[#0D1622] border border-[#DCE5E3] dark:border-[#6BA89E]/20 hover:border-[#6BA89E] p-5 flex flex-col justify-between transition-all hover:shadow-md group cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between text-[0.6875rem] font-body text-[#173B38] dark:text-[#6BA89E] font-semibold mb-2.5">
                  <span className="uppercase tracking-wider">{guide.category}</span>
                  <span className="inline-flex items-center gap-1 text-[#6C7D8A] dark:text-[#8499A6] font-normal">
                    <Clock className="w-3 h-3" />
                    {guide.readTime}
                  </span>
                </div>
                <h3 className="font-heading text-lg font-semibold text-[#0D1622] dark:text-[#EBF2F0] mb-2 leading-snug group-hover:text-[#173B38] dark:group-hover:text-[#6BA89E] transition-colors">
                  {guide.title}
                </h3>
                <p className="font-body text-xs text-[#475866] dark:text-[#B2C3CC] leading-relaxed line-clamp-3">
                  {guide.summary}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#DCE5E3] dark:border-[#6BA89E]/15 flex items-center justify-between text-xs font-body font-semibold text-[#173B38] dark:text-[#6BA89E]">
                <span className="inline-flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5" />
                  Ler orientação
                </span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Modal de Leitura do Guia com Arte Original */}
      {activeGuide && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0D1622]/80 backdrop-blur-md"
          onClick={() => setActiveGuide(null)}
        >
          <div
            className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto bg-[#FFFFFF] dark:bg-[#162333] text-[#0D1622] dark:text-[#EBF2F0] rounded-3xl border border-[#DCE5E3] dark:border-[#6BA89E]/25 shadow-2xl p-6 sm:p-8 space-y-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-[0.6875rem] uppercase tracking-wider font-body font-semibold text-[#173B38] dark:text-[#6BA89E]">
                  {activeGuide.category} • {activeGuide.readTime}
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-semibold mt-1">
                  {activeGuide.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveGuide(null)}
                className="p-2 rounded-full hover:bg-[#F4F7F6] dark:hover:bg-[#0D1622] cursor-pointer"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Arte Informativa Original do Dr. Ricardo */}
            <div className="relative w-full max-w-[340px] mx-auto aspect-square rounded-2xl overflow-hidden border border-[#DCE5E3] dark:border-[#6BA89E]/20 shadow-sm">
              <Image
                src={activeGuide.image}
                alt={activeGuide.title}
                fill
                className="object-cover"
                sizes="340px"
              />
            </div>

            <div className="space-y-4">
              {activeGuide.sections.map((sec, idx) => (
                <div key={idx} className="space-y-2">
                  {sec.heading && (
                    <h4 className="font-heading text-lg font-semibold text-[#173B38] dark:text-[#6BA89E]">
                      {sec.heading}
                    </h4>
                  )}
                  {sec.paragraphs?.map((p, pi) => (
                    <p key={pi} className="font-body text-sm text-[#475866] dark:text-[#B2C3CC] leading-relaxed">
                      {p}
                    </p>
                  ))}
                  {sec.bullets && (
                    <ul className="space-y-1.5 pt-1">
                      {sec.bullets.map((b, bi) => (
                        <li key={bi} className="flex items-start gap-2 text-xs sm:text-sm text-[#0D1622] dark:text-[#EBF2F0]">
                          <CheckCircle2 className="w-4 h-4 text-[#6BA89E] shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-[#DCE5E3] dark:border-[#6BA89E]/20">
              <a
                href={`https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${encodeURIComponent(
                  activeGuide.whatsappMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill w-full bg-[#173B38] text-white dark:bg-[#6BA89E] dark:text-[#0D1622] py-3.5 px-6 text-xs sm:text-sm font-semibold gap-2 flex items-center justify-center"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#6BA89E] dark:text-[#0D1622]" />
                <span>Tirar Dúvidas ou Agendar no WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

