"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { CLINIC_INFO } from "@/lib/data";
import { TREATMENT_CATEGORIES } from "@/data/treatments";
import { useTheme } from "@/components/providers/ThemeProvider";
import { Menu, X, ChevronDown, Sun, Moon, ArrowUpRight, Phone } from "lucide-react";
import { WhatsAppIcon, InstagramIcon, FacebookIcon } from "@/components/SocialIcons";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopSubmenuOpen, setDesktopSubmenuOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (typeof window !== "undefined" && (window.location.pathname === "/" || window.location.pathname === "")) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const logoSrc = theme === "dark" ? "/logo_modoescuro.png" : "/logo_modoclaro.png";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#F4F7F6]/95 dark:bg-[#0D1622]/95 backdrop-blur-md shadow-[0_4px_24px_rgba(13,22,34,0.08)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.35)] border-b border-[#DCE5E3] dark:border-[#6BA89E]/20 py-2 sm:py-2.5"
            : "bg-transparent backdrop-blur-none border-b border-transparent py-3 sm:py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3">
            {/* Logotipo adaptado ao tema Claro / Escuro */}
            <Link
              href="/"
              onClick={handleLogoClick}
              className="flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6BA89E] rounded-lg shrink-0"
              aria-label={`Ir para o início — ${CLINIC_INFO.name}`}
            >
              <div className="relative h-12 sm:h-14 md:h-16 w-44 sm:w-52 md:w-58 transition-transform duration-300 group-hover:scale-[1.02]">
                <Image
                  src={logoSrc}
                  alt={CLINIC_INFO.name}
                  fill
                  priority
                  className="object-contain object-left"
                  sizes="(max-width: 640px) 180px, 240px"
                />
              </div>
            </Link>

            {/* Navegação Desktop */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-xs font-body font-semibold uppercase tracking-wider text-[#0D1622] dark:text-[#EBF2F0]">
              <Link href="/#inicio" className="hover:text-[#173B38] dark:hover:text-[#6BA89E] transition-colors">
                Início
              </Link>

              {/* Item com Submenu de Tratamentos */}
              <div
                className="relative"
                onMouseEnter={() => setDesktopSubmenuOpen(true)}
                onMouseLeave={() => setDesktopSubmenuOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setDesktopSubmenuOpen((prev) => !prev)}
                  className="flex items-center gap-1 hover:text-[#173B38] dark:hover:text-[#6BA89E] transition-colors uppercase cursor-pointer py-2"
                  aria-expanded={desktopSubmenuOpen}
                >
                  <span>Tratamentos</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      desktopSubmenuOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {desktopSubmenuOpen && (
                  <div className="absolute top-full left-0 w-72 pt-1.5 z-50">
                    <div className="rounded-2xl bg-[#FFFFFF] dark:bg-[#162333] border border-[#DCE5E3] dark:border-[#6BA89E]/20 shadow-xl p-2 space-y-1">
                      <Link
                        href="/#tratamentos"
                        onClick={() => setDesktopSubmenuOpen(false)}
                        className="block px-3.5 py-2 rounded-xl text-[0.75rem] font-semibold text-[#173B38] dark:text-[#6BA89E] hover:bg-[#F4F7F6] dark:hover:bg-[#1D2E42] transition-colors"
                      >
                        Visão Geral na Página Inicial
                      </Link>
                      <div className="h-px bg-[#DCE5E3] dark:bg-[#6BA89E]/15 my-1" />
                      {TREATMENT_CATEGORIES.map((cat) => (
                        <Link
                          key={cat.slug}
                          href={`/tratamentos/${cat.slug}`}
                          onClick={() => setDesktopSubmenuOpen(false)}
                          className="block px-3.5 py-2 rounded-xl text-[0.75rem] normal-case tracking-normal font-medium text-[#0D1622] dark:text-[#EBF2F0] hover:bg-[#F4F7F6] dark:hover:bg-[#1D2E42] hover:text-[#173B38] dark:hover:text-[#6BA89E] transition-colors"
                        >
                          {cat.shortTitle}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link href="/#resultados" className="hover:text-[#173B38] dark:hover:text-[#6BA89E] transition-colors">
                Resultados
              </Link>
              <Link href="/#avaliacoes" className="hover:text-[#173B38] dark:hover:text-[#6BA89E] transition-colors">
                Avaliações
              </Link>
              <Link href="/#clinica" className="hover:text-[#173B38] dark:hover:text-[#6BA89E] transition-colors">
                A Clínica
              </Link>
              <Link href="/orientacoes" className="hover:text-[#173B38] dark:hover:text-[#6BA89E] transition-colors">
                Orientações
              </Link>
              <Link href="/#contato" className="hover:text-[#173B38] dark:hover:text-[#6BA89E] transition-colors">
                Contato
              </Link>
            </nav>

            {/* Controles Direitos: Seletor de Tema + CTA + Menu Mobile */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Toggle Claro / Escuro */}
              <button
                type="button"
                onClick={toggleTheme}
                aria-label={theme === "dark" ? "Mudar para modo claro" : "Mudar para modo escuro"}
                title={theme === "dark" ? "Modo Claro" : "Modo Escuro"}
                className="p-2 sm:p-2.5 rounded-full bg-[#FFFFFF]/80 dark:bg-[#162333]/90 border border-[#DCE5E3] dark:border-[#6BA89E]/25 text-[#0D1622] dark:text-[#EBF2F0] hover:border-[#6BA89E] transition-all cursor-pointer shadow-2xs"
              >
                {theme === "dark" ? (
                  <Sun className="w-4 h-4 text-[#6BA89E]" />
                ) : (
                  <Moon className="w-4 h-4 text-[#173B38]" />
                )}
              </button>

              {/* CTA Principal (Modo Claro: #173B38 texto branco | Modo Escuro: #6BA89E texto #0D1622) */}
              <a
                href={CLINIC_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill bg-[#173B38] hover:bg-[#102b29] text-white dark:bg-[#6BA89E] dark:hover:bg-[#59968c] dark:text-[#0D1622] gap-1.5 sm:gap-2 py-2 sm:py-2.5 px-3.5 sm:px-5 text-xs font-semibold shadow-sm hover-lift cursor-pointer"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#6BA89E] dark:text-[#0D1622]" />
                <span>Agendar</span>
              </a>

              {/* Botão Menu Mobile */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2 rounded-full text-[#0D1622] dark:text-[#EBF2F0] hover:bg-[#FFFFFF]/60 dark:hover:bg-[#162333]/60 transition-colors cursor-pointer"
                aria-label="Abrir menu de navegação"
                aria-expanded={mobileMenuOpen}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Drawer Menu Mobile */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-[#0D1622]/70 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          <div className="fixed top-0 right-0 bottom-0 w-[84vw] max-w-sm bg-[#F4F7F6] dark:bg-[#0D1622] text-[#0D1622] dark:text-[#EBF2F0] shadow-2xl flex flex-col justify-between p-6 overflow-y-auto border-l border-[#DCE5E3] dark:border-[#6BA89E]/20">
            <div>
              {/* Topo do Drawer */}
              <div className="flex items-center justify-between pb-5 border-b border-[#DCE5E3] dark:border-[#6BA89E]/20">
                <div className="relative h-11 w-38">
                  <Image
                    src={logoSrc}
                    alt={CLINIC_INFO.name}
                    fill
                    className="object-contain object-left"
                    sizes="160px"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-full hover:bg-[#FFFFFF] dark:hover:bg-[#162333] transition-colors cursor-pointer"
                  aria-label="Fechar menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Links Mobile com Submenu de Tratamentos */}
              <nav className="flex flex-col gap-1 py-5 text-sm font-body font-semibold">
                <Link
                  href="/#inicio"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2.5 px-3 rounded-xl hover:bg-[#FFFFFF] dark:hover:bg-[#162333]"
                >
                  Início
                </Link>

                {/* Submenu expansível de Tratamentos */}
                <div>
                  <button
                    type="button"
                    onClick={() => setMobileSubmenuOpen((prev) => !prev)}
                    className="w-full py-2.5 px-3 rounded-xl hover:bg-[#FFFFFF] dark:hover:bg-[#162333] flex items-center justify-between cursor-pointer"
                  >
                    <span>Tratamentos</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        mobileSubmenuOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {mobileSubmenuOpen && (
                    <div className="pl-4 pr-2 py-1 space-y-1 border-l-2 border-[#6BA89E]/40 ml-3 mt-1">
                      <Link
                        href="/#tratamentos"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-1.5 px-2 text-xs text-[#173B38] dark:text-[#6BA89E] font-semibold"
                      >
                        Todos os Tratamentos
                      </Link>
                      {TREATMENT_CATEGORIES.map((cat) => (
                        <Link
                          key={cat.slug}
                          href={`/tratamentos/${cat.slug}`}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-1.5 px-2 text-xs text-[#475866] dark:text-[#B2C3CC]"
                        >
                          {cat.shortTitle}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  href="/#resultados"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2.5 px-3 rounded-xl hover:bg-[#FFFFFF] dark:hover:bg-[#162333]"
                >
                  Antes &amp; Depois
                </Link>
                <Link
                  href="/#avaliacoes"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2.5 px-3 rounded-xl hover:bg-[#FFFFFF] dark:hover:bg-[#162333]"
                >
                  121 Avaliações Google
                </Link>
                <Link
                  href="/#clinica"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2.5 px-3 rounded-xl hover:bg-[#FFFFFF] dark:hover:bg-[#162333]"
                >
                  A Clínica &amp; Dr. Ricardo
                </Link>
                <Link
                  href="/orientacoes"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2.5 px-3 rounded-xl hover:bg-[#FFFFFF] dark:hover:bg-[#162333]"
                >
                  Orientações &amp; Guias
                </Link>
                <Link
                  href="/#contato"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2.5 px-3 rounded-xl hover:bg-[#FFFFFF] dark:hover:bg-[#162333]"
                >
                  Localização &amp; Contato
                </Link>
                <Link
                  href="/links"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2.5 px-3 rounded-xl hover:bg-[#FFFFFF] dark:hover:bg-[#162333] text-[#173B38] dark:text-[#6BA89E]"
                >
                  Cartão de Links (/links)
                </Link>
              </nav>
            </div>

            {/* Rodapé do Drawer */}
            <div className="pt-4 border-t border-[#DCE5E3] dark:border-[#6BA89E]/20 space-y-3">
              <a
                href={CLINIC_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill w-full bg-[#173B38] text-white dark:bg-[#6BA89E] dark:text-[#0D1622] py-3 px-4 text-xs font-semibold gap-2 flex items-center justify-center"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>WhatsApp: {CLINIC_INFO.whatsappDisplay}</span>
              </a>

              <a
                href={CLINIC_INFO.phoneHref}
                className="btn-pill w-full bg-[#FFFFFF] dark:bg-[#162333] border border-[#DCE5E3] dark:border-[#6BA89E]/25 py-2.5 px-4 text-xs font-semibold gap-2 flex items-center justify-center"
              >
                <Phone className="w-3.5 h-3.5 text-[#6BA89E]" />
                <span>Fixo: {CLINIC_INFO.phoneDisplay}</span>
              </a>

              <div className="flex items-center justify-between text-xs pt-2 text-[#475866] dark:text-[#B2C3CC]">
                <a
                  href={CLINIC_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-[#6BA89E]"
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
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

