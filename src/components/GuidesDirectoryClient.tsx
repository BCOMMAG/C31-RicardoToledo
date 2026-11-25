"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { EDUCATIONAL_GUIDES, EducationalGuide } from "@/data/guides";
import { CLINIC_INFO } from "@/lib/data";
import { ArrowLeft, BookOpen, Clock, CheckCircle2, X } from "lucide-react";
import { WhatsAppIcon } from "@/components/SocialIcons";

export function GuidesDirectoryClient() {
  const [selectedGuide, setSelectedGuide] = useState<EducationalGuide | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      <div>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-body font-semibold text-[#173B38] dark:text-[#6BA89E] hover:underline mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar para a página inicial</span>
        </Link>

        <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold">
          Orientações &amp; Guias do Dr. Ricardo
        </h1>
        <p className="font-body text-sm sm:text-base text-[#475866] dark:text-[#B2C3CC] mt-2 max-w-2xl">
          Conteúdo educativo completo sobre prevenção, implantes sem dor, reabilitação oral, ortodontia infantil, Invisalign e estética dental.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {EDUCATIONAL_GUIDES.map((guide) => (
          <article
            key={guide.id}
            onClick={() => setSelectedGuide(guide)}
            className="rounded-3xl bg-[#FFFFFF] dark:bg-[#162333] border border-[#DCE5E3] dark:border-[#6BA89E]/20 hover:border-[#6BA89E] p-5 sm:p-6 flex flex-col justify-between transition-all hover:shadow-lg cursor-pointer group"
          >
            <div>
              <div className="relative aspect-square w-full max-w-[260px] mx-auto rounded-2xl overflow-hidden border border-[#DCE5E3] dark:border-[#6BA89E]/15 mb-4 bg-[#F4F7F6] dark:bg-[#0D1622]">
                <Image
                  src={guide.image}
                  alt={guide.title}
                  fill
                  className="object-cover group-hover:scale-103 transition-transform duration-500"
                  sizes="260px"
                />
              </div>

              <div className="flex items-center justify-between text-[0.6875rem] font-body text-[#173B38] dark:text-[#6BA89E] font-semibold mb-2">
                <span className="uppercase tracking-wider">{guide.category}</span>
                <span className="inline-flex items-center gap-1 text-[#6C7D8A] dark:text-[#8499A6] font-normal">
                  <Clock className="w-3 h-3" />
                  {guide.readTime}
                </span>
              </div>

              <h2 className="font-heading text-xl font-semibold mb-2 leading-snug group-hover:text-[#173B38] dark:group-hover:text-[#6BA89E] transition-colors">
                {guide.title}
              </h2>
              <p className="font-body text-xs sm:text-sm text-[#475866] dark:text-[#B2C3CC] leading-relaxed">
                {guide.summary}
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-[#DCE5E3] dark:border-[#6BA89E]/15 flex items-center justify-between text-xs font-body font-semibold text-[#173B38] dark:text-[#6BA89E]">
              <span className="inline-flex items-center gap-1.5">
                <BookOpen className="w-4 h-4" />
                <span>Ler orientação completa</span>
              </span>
            </div>
          </article>
        ))}
      </div>

      {selectedGuide && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0D1622]/80 backdrop-blur-md"
          onClick={() => setSelectedGuide(null)}
        >
          <div
            className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto bg-[#FFFFFF] dark:bg-[#162333] rounded-3xl border border-[#DCE5E3] dark:border-[#6BA89E]/25 shadow-2xl p-6 sm:p-8 space-y-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-[0.6875rem] uppercase tracking-wider font-semibold text-[#173B38] dark:text-[#6BA89E]">
                  {selectedGuide.category} • {selectedGuide.readTime}
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl font-semibold mt-1">
                  {selectedGuide.title}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setSelectedGuide(null)}
                className="p-2 rounded-full hover:bg-[#F4F7F6] dark:hover:bg-[#0D1622] cursor-pointer"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative w-full max-w-[320px] mx-auto aspect-square rounded-2xl overflow-hidden border border-[#DCE5E3] dark:border-[#6BA89E]/20">
              <Image
                src={selectedGuide.image}
                alt={selectedGuide.title}
                fill
                className="object-cover"
                sizes="320px"
              />
            </div>

            <div className="space-y-4">
              {selectedGuide.sections.map((sec, idx) => (
                <div key={idx} className="space-y-2">
                  {sec.heading && (
                    <h3 className="font-heading text-lg font-semibold text-[#173B38] dark:text-[#6BA89E]">
                      {sec.heading}
                    </h3>
                  )}
                  {sec.paragraphs?.map((p, pi) => (
                    <p key={pi} className="font-body text-sm text-[#475866] dark:text-[#B2C3CC] leading-relaxed">
                      {p}
                    </p>
                  ))}
                  {sec.bullets && (
                    <ul className="space-y-1.5 pt-1">
                      {sec.bullets.map((b, bi) => (
                        <li key={bi} className="flex items-start gap-2 text-xs sm:text-sm">
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
                  selectedGuide.whatsappMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill w-full bg-[#173B38] text-white dark:bg-[#6BA89E] dark:text-[#0D1622] py-3.5 px-6 text-xs sm:text-sm font-semibold gap-2 flex items-center justify-center"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#6BA89E] dark:text-[#0D1622]" />
                <span>Agendar Avaliação no WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
