"use client";

import { useRef } from "react";
import { FEATURED_REVIEWS } from "@/data/reviews";
import { CLINIC_INFO } from "@/lib/data";
import { Star, Quote, ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

export function ReviewsSection() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (dir: number) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 340, behavior: "smooth" });
  };

  return (
    <section
      id="avaliacoes"
      className="py-16 sm:py-24 bg-[#FFFFFF] dark:bg-[#162333]/50 border-y border-[#DCE5E3] dark:border-[#6BA89E]/15 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho + Selo Oficial 5.0 Google */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10">
          <div className="max-w-2xl">
            <span className="inline-block text-xs uppercase tracking-widest text-[#173B38] dark:text-[#6BA89E] font-body font-semibold mb-2">
              • Reputação Verificada
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[#0D1622] dark:text-[#EBF2F0] font-semibold leading-tight">
              O que dizem nossos pacientes
            </h2>
          </div>

          {/* Badge Google 5 Estrelas */}
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#F4F7F6] dark:bg-[#0D1622] border border-[#DCE5E3] dark:border-[#6BA89E]/25 shrink-0">
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-heading text-2xl sm:text-3xl font-bold text-[#0D1622] dark:text-[#EBF2F0]">
                  {CLINIC_INFO.googleRating.score}
                </span>
                <div className="flex items-center gap-0.5 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
              </div>
              <p className="text-xs font-body text-[#475866] dark:text-[#B2C3CC] mt-0.5">
                <strong className="text-[#0D1622] dark:text-[#EBF2F0]">
                  {CLINIC_INFO.googleRating.count} avaliações
                </strong>{" "}
                no Google
              </p>
            </div>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => scrollByCard(-1)}
                className="p-2 rounded-full bg-[#FFFFFF] dark:bg-[#162333] border border-[#DCE5E3] dark:border-[#6BA89E]/25 text-[#0D1622] dark:text-[#EBF2F0] hover:border-[#6BA89E] cursor-pointer"
                aria-label="Avaliações anteriores"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollByCard(1)}
                className="p-2 rounded-full bg-[#FFFFFF] dark:bg-[#162333] border border-[#DCE5E3] dark:border-[#6BA89E]/25 text-[#0D1622] dark:text-[#EBF2F0] hover:border-[#6BA89E] cursor-pointer"
                aria-label="Próximas avaliações"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Carrossel Horizontal de Depoimentos Reais */}
        <div
          ref={trackRef}
          className="flex items-stretch gap-4 sm:gap-5 overflow-x-auto no-scrollbar scroll-smooth py-2 mb-6"
        >
          {FEATURED_REVIEWS.map((rev) => (
            <article
              key={rev.id}
              className="w-[295px] sm:w-[345px] shrink-0 rounded-2xl bg-[#F4F7F6] dark:bg-[#0D1622] border border-[#DCE5E3] dark:border-[#6BA89E]/20 p-5 sm:p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-4 h-4 text-[#6BA89E]/50" />
                </div>

                {rev.tenureBadge && (
                  <span className="inline-block text-[0.625rem] font-body font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#173B38]/10 text-[#173B38] dark:bg-[#6BA89E]/15 dark:text-[#6BA89E] mb-2.5">
                    {rev.tenureBadge}
                  </span>
                )}

                <p className="font-body text-xs sm:text-sm text-[#0D1622] dark:text-[#EBF2F0] leading-relaxed">
                  &ldquo;{rev.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#DCE5E3] dark:border-[#6BA89E]/15">
                <p className="font-heading text-sm font-semibold text-[#0D1622] dark:text-[#EBF2F0]">
                  {rev.author}
                </p>
                <p className="text-[0.6875rem] font-body text-[#6C7D8A] dark:text-[#8499A6]">
                  {rev.meta}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <a
            href={CLINIC_INFO.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-body font-semibold text-[#173B38] dark:text-[#6BA89E] hover:underline"
          >
            <span>Ver localização e todas as avaliações no Google Maps</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
