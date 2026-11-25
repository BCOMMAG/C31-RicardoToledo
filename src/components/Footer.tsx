import Image from "next/image";
import Link from "next/link";
import { CLINIC_INFO } from "@/lib/data";
import { TREATMENT_CATEGORIES } from "@/data/treatments";
import { MapPin, Phone, Mail } from "lucide-react";
import { WhatsAppIcon, InstagramIcon, FacebookIcon } from "@/components/SocialIcons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0D1622] text-[#EBF2F0] border-t border-[#6BA89E]/20 pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#6BA89E]/15">
          {/* Coluna 1: Identidade */}
          <div className="space-y-4">
            <Link href="/" className="inline-block relative h-14 w-52">
              <Image
                src="/logo_modoescuro.png"
                alt={CLINIC_INFO.name}
                fill
                className="object-contain object-left"
                sizes="210px"
              />
            </Link>
            <p className="text-xs font-body text-[#B2C3CC] leading-relaxed">
              Atendimento odontológico desde {CLINIC_INFO.sinceYear} em São Braz, Curitiba. Compromisso com a saúde, estética e conforto de toda a família.
            </p>
            <p className="text-xs font-body font-semibold text-[#6BA89E]">
              {CLINIC_INFO.cro} • 5.0 ★ ({CLINIC_INFO.googleRating.count} avaliações)
            </p>
          </div>

          {/* Coluna 2: Especialidades */}
          <div className="space-y-3">
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-[#6BA89E]">
              Especialidades
            </h4>
            <ul className="space-y-2 text-xs font-body text-[#B2C3CC]">
              {TREATMENT_CATEGORIES.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/tratamentos/${cat.slug}`}
                    className="hover:text-[#6BA89E] transition-colors"
                  >
                    {cat.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Acesso Rápido */}
          <div className="space-y-3">
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-[#6BA89E]">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs font-body text-[#B2C3CC]">
              <li>
                <Link href="/#inicio" className="hover:text-[#6BA89E] transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/#resultados" className="hover:text-[#6BA89E] transition-colors">
                  Antes &amp; Depois
                </Link>
              </li>
              <li>
                <Link href="/#avaliacoes" className="hover:text-[#6BA89E] transition-colors">
                  Avaliações no Google
                </Link>
              </li>
              <li>
                <Link href="/orientacoes" className="hover:text-[#6BA89E] transition-colors">
                  Orientações &amp; Guias
                </Link>
              </li>
              <li>
                <Link href="/links" className="hover:text-[#6BA89E] transition-colors">
                  Página de Links (/links)
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Contato & Redes */}
          <div className="space-y-3">
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-[#6BA89E]">
              Contato &amp; Horários
            </h4>
            <div className="space-y-2 text-xs font-body text-[#B2C3CC]">
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#6BA89E] shrink-0 mt-0.5" />
                <span>{CLINIC_INFO.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#6BA89E] shrink-0" />
                <span>Fixo: {CLINIC_INFO.phoneDisplay}</span>
              </p>
              <p className="flex items-center gap-2">
                <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                <span>WhatsApp: {CLINIC_INFO.whatsappDisplay}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#6BA89E] shrink-0" />
                <span>{CLINIC_INFO.email}</span>
              </p>
              <p className="text-[0.6875rem] text-[#8499A6] pt-1">
                {CLINIC_INFO.schedule.monToThu} • {CLINIC_INFO.schedule.friday}
              </p>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={CLINIC_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2 rounded-full bg-[#162333] border border-[#6BA89E]/25 hover:border-[#6BA89E] text-[#EBF2F0] hover:text-[#6BA89E] transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={CLINIC_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-2 rounded-full bg-[#162333] border border-[#6BA89E]/25 hover:border-[#6BA89E] text-[#EBF2F0] hover:text-[#6BA89E] transition-colors"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[0.6875rem] font-body text-[#8499A6]">
          <p>
            © {year} {CLINIC_INFO.name}. Todos os direitos reservados.
          </p>
          <p>{CLINIC_INFO.cro} • São Braz, Curitiba - PR</p>
        </div>
      </div>
    </footer>
  );
}

