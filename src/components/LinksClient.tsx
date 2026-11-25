"use client";

import Image from "next/image";
import Link from "next/link";
import { CLINIC_INFO } from "@/lib/data";
import { useTheme } from "@/components/providers/ThemeProvider";
import {
  MapPin,
  ArrowUpRight,
  Globe,
  Phone,
  BookOpen,
  Star,
  Sun,
  Moon,
} from "lucide-react";
import { WhatsAppIcon, InstagramIcon, FacebookIcon } from "@/components/SocialIcons";

export function LinksClient() {
  const { theme, toggleTheme } = useTheme();
  const logoSrc = theme === "dark" ? "/logo_modoescuro.png" : "/logo_modoclaro.png";

  const quickLinks = [
    {
      id: "whatsapp",
      title: "Agendar Consulta no WhatsApp",
      subtitle: `${CLINIC_INFO.whatsappDisplay} • Atendimento direto`,
      href: CLINIC_INFO.whatsappUrl,
      icon: WhatsAppIcon,
      highlight: true,
      external: true,
    },
    {
      id: "website",
      title: "Website Oficial da Clínica",
      subtitle: "Conheça tratamentos, resultados e 121 avaliações",
      href: "/",
      icon: Globe,
      highlight: false,
      external: false,
    },
    {
      id: "fixo",
      title: `Ligar para a Clínica: ${CLINIC_INFO.phoneDisplay}`,
      subtitle: CLINIC_INFO.schedule.summary,
      href: CLINIC_INFO.phoneHref,
      icon: Phone,
      highlight: false,
      external: true,
    },
    {
      id: "localizacao",
      title: "Como Chegar (Google Maps)",
      subtitle: "Av. Ver. Toaldo Túlio, 3225 - São Braz",
      href: CLINIC_INFO.mapsDirectionsUrl,
      icon: MapPin,
      highlight: false,
      external: true,
    },
    {
      id: "orientacoes",
      title: "Orientações & Guias de Saúde Bucal",
      subtitle: "Implantes, Prótese Protocolo, Invisalign e Prevenção",
      href: "/orientacoes",
      icon: BookOpen,
      highlight: false,
      external: false,
    },
  ];

  const pills = ["Implantes & Protocolo", "Lentes & Invisalign", "Desde 1996"];

  return (
    <main className="h-[100dvh] max-h-[100dvh] w-screen max-w-full overflow-hidden bg-[#F4F7F6] dark:bg-[#0D1622] text-[#0D1622] dark:text-[#EBF2F0] select-none relative">
      {/* Botão Flutuante Discreto para Alternar Modo Claro/Escuro */}
      <button
        type="button"
        onClick={toggleTheme}
        aria-label={theme === "dark" ? "Ativar modo claro" : "Ativar modo escuro"}
        className="fixed top-3 right-3 sm:top-5 sm:right-5 z-50 p-2 rounded-full bg-[#FFFFFF]/90 dark:bg-[#162333]/90 border border-[#DCE5E3] dark:border-[#6BA89E]/30 shadow-md cursor-pointer"
      >
        {theme === "dark" ? (
          <Sun className="w-4 h-4 text-[#6BA89E]" />
        ) : (
          <Moon className="w-4 h-4 text-[#173B38]" />
        )}
      </button>

      {/* ===================== VERSÃO DESKTOP (Split Screen 50/50 Editorial) ===================== */}
      <div className="hidden lg:grid lg:grid-cols-2 h-full w-full overflow-hidden">
        {/* LADO ESQUERDO: Painel Noturno Sofisticado */}
        <div className="relative bg-[#0D1622] text-[#EBF2F0] flex flex-col justify-between p-10 xl:p-14 h-full border-r border-[#6BA89E]/20">
          <div className="flex items-center justify-between">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#6BA89E]/30 bg-[#162333] text-xs font-body">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span>5.0 (121 avaliações no Google) • {CLINIC_INFO.cro}</span>
            </div>
            <span className="text-xs font-body uppercase tracking-wider text-[#6BA89E]">
              São Braz • Curitiba
            </span>
          </div>

          <div className="my-auto flex flex-col items-center text-center space-y-5">
            <Link
              href="/"
              className="relative block w-full max-w-[310px] mx-auto group focus:outline-none"
            >
              <div className="relative w-full h-20 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/logo_modoescuro.png"
                  alt={CLINIC_INFO.name}
                  fill
                  priority
                  className="object-contain"
                  sizes="320px"
                />
              </div>
            </Link>

            <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-[#6BA89E] shadow-xl">
              <Image
                src="/Foto_perfil_otimizada.jpg"
                alt={CLINIC_INFO.doctorFullName}
                fill
                priority
                className="object-cover object-top"
                sizes="140px"
              />
            </div>

            <div className="space-y-1.5 max-w-md">
              <h1 className="font-heading text-3xl font-semibold text-white">
                {CLINIC_INFO.doctorFullName}
              </h1>
              <p className="font-body text-sm text-[#B2C3CC]">
                Atendimento odontológico completo desde {CLINIC_INFO.sinceYear} — Implantes, Próteses, Estética, Invisalign e Clínica Geral.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              {pills.map((pill) => (
                <span
                  key={pill}
                  className="text-xs px-3 py-1 rounded-full bg-[#162333] text-[#6BA89E] border border-[#6BA89E]/25 font-body"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-[#8499A6] pt-4 border-t border-[#6BA89E]/20">
            <span>{CLINIC_INFO.addressShort}</span>
            <div className="flex items-center gap-3">
              <a
                href={CLINIC_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-[#6BA89E]"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>{CLINIC_INFO.instagramHandle}</span>
              </a>
              <a
                href={CLINIC_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-[#6BA89E]"
              >
                <FacebookIcon className="w-4 h-4" />
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>

        {/* LADO DIREITO: Botões de Ação */}
        <div className="bg-[#F4F7F6] dark:bg-[#0D1622] flex flex-col justify-between p-10 xl:p-16 h-full overflow-y-auto">
          <div className="space-y-1">
            <span className="text-xs font-body uppercase tracking-widest text-[#173B38] dark:text-[#6BA89E] font-semibold">
              Canais Oficiais &amp; Acesso Rápido
            </span>
            <h2 className="font-heading text-2xl xl:text-3xl font-semibold">
              Como podemos ajudar hoje?
            </h2>
          </div>

          <div className="my-auto w-full max-w-md mx-auto space-y-3.5">
            {quickLinks.map((item) => {
              const Icon = item.icon;
              const isHighlight = item.highlight;
              const cardClass = `relative overflow-hidden w-full p-4 rounded-2xl border transition-all duration-300 flex items-center justify-between gap-4 text-left hover-lift ${
                isHighlight
                  ? "bg-[#173B38] text-white border-[#173B38] dark:bg-[#6BA89E] dark:text-[#0D1622] dark:border-[#6BA89E] shadow-md"
                  : "bg-[#FFFFFF] dark:bg-[#162333] text-[#0D1622] dark:text-[#EBF2F0] border-[#DCE5E3] dark:border-[#6BA89E]/20 hover:border-[#6BA89E] shadow-2xs"
              }`;

              const inner = (
                <>
                  {isHighlight && (
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent animate-shimmer pointer-events-none"
                    />
                  )}
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                        isHighlight
                          ? "bg-white/15 dark:bg-[#0D1622]/15 text-[#6BA89E] dark:text-[#0D1622]"
                          : "bg-[#F4F7F6] dark:bg-[#0D1622] text-[#173B38] dark:text-[#6BA89E]"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-body text-sm font-semibold truncate">{item.title}</h3>
                      <p
                        className={`font-body text-xs truncate ${
                          isHighlight
                            ? "text-white/80 dark:text-[#0D1622]/80"
                            : "text-[#475866] dark:text-[#B2C3CC]"
                        }`}
                      >
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 shrink-0" />
                </>
              );

              return item.external ? (
                <a
                  key={item.id}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={cardClass}
                >
                  {inner}
                </a>
              ) : (
                <Link key={item.id} href={item.href} className={cardClass}>
                  {inner}
                </Link>
              );
            })}
          </div>

          <div className="text-center text-xs font-body text-[#475866] dark:text-[#B2C3CC] pt-4 border-t border-[#DCE5E3] dark:border-[#6BA89E]/20">
            {CLINIC_INFO.schedule.monToThu} • {CLINIC_INFO.schedule.friday}
          </div>
        </div>
      </div>

      {/* ===================== VERSÃO MOBILE (100% Fit Sem Scroll — Inspirada em AidaSchmidt) ===================== */}
      <div className="lg:hidden relative flex flex-col justify-between h-[100dvh] max-h-[100dvh] w-full px-4 pt-3 pb-2.5 overflow-hidden bg-gradient-to-b from-[#FFFFFF] via-[#F4F7F6] to-[#E8EFEE] dark:from-[#0D1622] dark:via-[#0D1622] dark:to-[#162333]">
        {/* Marca d'água do Logotipo no Fundo Superior */}
        <div className="absolute top-1.5 inset-x-0 flex items-center justify-center pointer-events-none z-0">
          <div className="relative w-64 sm:w-72 h-24 opacity-[0.22] dark:opacity-[0.28] select-none">
            <Image
              src={logoSrc}
              alt=""
              fill
              priority
              className="object-contain object-top"
              sizes="290px"
            />
          </div>
        </div>

        {/* Perfil do Dr. Ricardo descido para deixar a logo no topo visível */}
        <div className="relative z-10 w-full flex flex-col items-center text-center pt-12 sm:pt-14 shrink-0">
          <Link
            href="/"
            className="block cursor-pointer active:scale-98 transition-transform mb-2"
            aria-label={`Ir para o site da ${CLINIC_INFO.name}`}
          >
            <div className="relative w-22 h-22 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-[#6BA89E] ring-4 ring-[#6BA89E]/20 shadow-lg bg-[#FFFFFF] dark:bg-[#162333]">
              <Image
                src="/Foto_perfil_otimizada.jpg"
                alt={CLINIC_INFO.doctorName}
                fill
                priority
                className="object-cover object-top"
                sizes="100px"
              />
            </div>
          </Link>

          <div className="space-y-0.5 mb-1.5">
            <h1 className="font-heading text-xl font-semibold leading-tight">
              {CLINIC_INFO.doctorName}
            </h1>
            <p className="text-[0.6875rem] font-body text-[#173B38] dark:text-[#6BA89E] font-semibold uppercase tracking-wider flex items-center justify-center gap-1">
              <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
              <span>5.0 (121) • Desde {CLINIC_INFO.sinceYear} • {CLINIC_INFO.cro}</span>
            </p>
          </div>

          <div className="flex items-center justify-center gap-1.5 max-w-xs mx-auto">
            {pills.map((pill) => (
              <span
                key={pill}
                className="text-[0.625rem] px-2.5 py-0.5 rounded-full bg-[#FFFFFF]/95 dark:bg-[#162333]/95 border border-[#DCE5E3] dark:border-[#6BA89E]/25 font-body font-medium whitespace-nowrap"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>

        {/* 5 Botões Principais */}
        <div className="relative z-10 w-full flex flex-col gap-2 max-w-sm mx-auto my-auto py-1">
          {quickLinks.map((item) => {
            const Icon = item.icon;
            const isHighlight = item.highlight;

            const buttonClasses = `relative overflow-hidden w-full flex items-center justify-between px-3.5 py-2.5 sm:py-3 rounded-2xl border transition-all duration-200 active:scale-[0.98] ${
              isHighlight
                ? "bg-[#173B38] text-white border-[#173B38] dark:bg-[#6BA89E] dark:text-[#0D1622] dark:border-[#6BA89E] shadow-md"
                : "bg-[#FFFFFF]/95 dark:bg-[#162333]/95 border-[#DCE5E3] dark:border-[#6BA89E]/25 text-[#0D1622] dark:text-[#EBF2F0] shadow-2xs"
            }`;

            const content = (
              <>
                {isHighlight && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent animate-shimmer pointer-events-none"
                  />
                )}
                <div className="flex items-center gap-3 min-w-0">
                  <div
                    className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center shrink-0 ${
                      isHighlight
                        ? "bg-white/15 dark:bg-[#0D1622]/15 text-[#6BA89E] dark:text-[#0D1622]"
                        : "bg-[#F4F7F6] dark:bg-[#0D1622] text-[#173B38] dark:text-[#6BA89E]"
                    }`}
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0 text-left">
                    <p className="font-body text-xs sm:text-sm font-semibold leading-tight truncate">
                      {item.title}
                    </p>
                    <p
                      className={`font-body text-[0.65rem] leading-tight truncate mt-0.5 ${
                        isHighlight
                          ? "text-white/80 dark:text-[#0D1622]/80"
                          : "text-[#475866] dark:text-[#B2C3CC]"
                      }`}
                    >
                      {item.subtitle}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 shrink-0" />
              </>
            );

            return item.external ? (
              <a
                key={item.id}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={buttonClasses}
              >
                {content}
              </a>
            ) : (
              <Link key={item.id} href={item.href} className={buttonClasses}>
                {content}
              </Link>
            );
          })}
        </div>

        {/* Rodapé Discreto Mobile com Redes */}
        <div className="relative z-10 flex items-center justify-between text-[0.625rem] font-body text-[#475866] dark:text-[#B2C3CC] pt-1.5 border-t border-[#DCE5E3]/70 dark:border-[#6BA89E]/20 shrink-0 max-w-sm mx-auto w-full">
          <span>São Braz • Curitiba - PR</span>
          <div className="flex items-center gap-3">
            <a href={CLINIC_INFO.instagramUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1">
              <InstagramIcon className="w-3.5 h-3.5 text-[#6BA89E]" />
              <span>{CLINIC_INFO.instagramHandle}</span>
            </a>
            <a href={CLINIC_INFO.facebookUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1">
              <FacebookIcon className="w-3.5 h-3.5 text-[#6BA89E]" />
              <span>Face</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

