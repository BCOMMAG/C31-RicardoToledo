import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { TREATMENT_CATEGORIES } from "@/data/treatments";
import { CLINIC_INFO } from "@/lib/data";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { CheckCircle2, ArrowLeft, ArrowRight, HelpCircle } from "lucide-react";
import { WhatsAppIcon } from "@/components/SocialIcons";

export function generateStaticParams() {
  return TREATMENT_CATEGORIES.map((cat) => ({
    slug: cat.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = TREATMENT_CATEGORIES.find((c) => c.slug === slug);
  if (!category) return {};

  return {
    title: `${category.title} em São Braz, Curitiba`,
    description: category.description,
  };
}

export default async function TreatmentCategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = TREATMENT_CATEGORIES.find((c) => c.slug === slug);
  if (!category) notFound();

  const otherCategories = TREATMENT_CATEGORIES.filter((c) => c.slug !== slug);

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F7F6] dark:bg-[#0D1622] text-[#0D1622] dark:text-[#EBF2F0]">
      <Navbar />
      <main className="flex-1 pt-28 sm:pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Breadcrumb */}
          <Link
            href="/#tratamentos"
            className="inline-flex items-center gap-2 text-xs font-body font-semibold text-[#173B38] dark:text-[#6BA89E] hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar para a página inicial</span>
          </Link>

          {/* Hero da Especialidade */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="inline-block text-xs uppercase tracking-widest text-[#173B38] dark:text-[#6BA89E] font-body font-semibold">
                {category.subtitle}
              </span>
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
                {category.title}
              </h1>
              <p className="font-body text-sm sm:text-base text-[#475866] dark:text-[#B2C3CC] leading-relaxed">
                {category.description}
              </p>

              <ul className="space-y-2 pt-2">
                {category.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#6BA89E] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2">
                <a
                  href={`https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${encodeURIComponent(
                    category.whatsappMessage
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill bg-[#173B38] text-white dark:bg-[#6BA89E] dark:text-[#0D1622] py-3.5 px-7 text-xs sm:text-sm font-semibold gap-2.5 shadow-md hover-lift inline-flex items-center"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#6BA89E] dark:text-[#0D1622]" />
                  <span>Agendar Avaliação com o Dr. Ricardo</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-square max-w-[380px] mx-auto rounded-3xl overflow-hidden border border-[#DCE5E3] dark:border-[#6BA89E]/25 shadow-xl bg-[#FFFFFF] dark:bg-[#162333]">
                <Image
                  src={category.heroImage}
                  alt={category.title}
                  fill
                  className="object-cover"
                  sizes="380px"
                />
              </div>
            </div>
          </div>

          {/* Procedimentos Detalhados da Área */}
          <div className="space-y-6 pt-6 border-t border-[#DCE5E3] dark:border-[#6BA89E]/20">
            <h2 className="font-heading text-2xl sm:text-3xl font-semibold">
              Procedimentos inclusos nesta área
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {category.procedures.map((proc) => (
                <div
                  key={proc.id}
                  className="p-6 sm:p-7 rounded-3xl bg-[#FFFFFF] dark:bg-[#162333] border border-[#DCE5E3] dark:border-[#6BA89E]/20 flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <span className="inline-block text-[0.6875rem] uppercase tracking-wider font-semibold px-2.5 py-0.5 rounded-full bg-[#F4F7F6] dark:bg-[#0D1622] text-[#173B38] dark:text-[#6BA89E] border border-[#DCE5E3] dark:border-[#6BA89E]/25">
                      {proc.badge}
                    </span>
                    <h3 className="font-heading text-xl sm:text-2xl font-semibold">
                      {proc.name}
                    </h3>
                    <p className="font-body text-xs sm:text-sm text-[#475866] dark:text-[#B2C3CC] leading-relaxed">
                      {proc.details}
                    </p>
                    <ul className="space-y-1.5 pt-2">
                      {proc.benefits.map((b, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-[#0D1622] dark:text-[#EBF2F0]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#6BA89E] shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-3 border-t border-[#DCE5E3] dark:border-[#6BA89E]/15">
                    <a
                      href={`https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${encodeURIComponent(
                        proc.whatsappMessage
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-body font-semibold text-[#173B38] dark:text-[#6BA89E] hover:underline"
                    >
                      <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                      <span>Tirar dúvidas sobre {proc.name}</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dúvida Principal da Especialidade */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#FFFFFF] dark:bg-[#162333] border border-[#DCE5E3] dark:border-[#6BA89E]/25 flex items-start gap-4">
            <HelpCircle className="w-6 h-6 text-[#6BA89E] shrink-0 mt-0.5" />
            <div>
              <h3 className="font-heading text-lg sm:text-xl font-semibold">
                {category.faqHighlight.question}
              </h3>
              <p className="font-body text-xs sm:text-sm text-[#475866] dark:text-[#B2C3CC] mt-1.5 leading-relaxed">
                {category.faqHighlight.answer}
              </p>
            </div>
          </div>

          {/* Outras Especialidades */}
          <div className="pt-6 border-t border-[#DCE5E3] dark:border-[#6BA89E]/20">
            <h3 className="font-heading text-xl font-semibold mb-4">
              Conheça também outras áreas da clínica
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {otherCategories.map((other) => (
                <Link
                  key={other.slug}
                  href={`/tratamentos/${other.slug}`}
                  className="p-4 rounded-2xl bg-[#FFFFFF] dark:bg-[#162333] border border-[#DCE5E3] dark:border-[#6BA89E]/20 hover:border-[#6BA89E] transition-colors flex items-center justify-between gap-2 text-xs font-semibold"
                >
                  <span>{other.shortTitle}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#6BA89E] shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
