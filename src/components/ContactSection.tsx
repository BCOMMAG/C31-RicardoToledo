"use client";

import Image from "next/image";
import { CLINIC_INFO } from "@/lib/data";
import { MapPin, Clock, Phone, Mail, Navigation, ArrowUpRight } from "lucide-react";
import { WhatsAppIcon, InstagramIcon, FacebookIcon } from "@/components/SocialIcons";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function ContactSection() {
  return (
    <section
      id="contato"
      className="py-16 sm:py-24 bg-[#FFFFFF] dark:bg-[#162333]/50 border-t border-[#DCE5E3] dark:border-[#6BA89E]/15"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <span className="inline-block text-xs uppercase tracking-widest text-[#173B38] dark:text-[#6BA89E] font-body font-semibold mb-2">
            • Localização &amp; Agendamentos
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[#0D1622] dark:text-[#EBF2F0] font-semibold leading-tight">
            Visite a nossa clínica no São Braz, Curitiba
          </h2>
          <p className="font-body text-sm sm:text-base text-[#475866] dark:text-[#B2C3CC] mt-3">
            Agende sua avaliação pelo WhatsApp ou telefone fixo e conte com atendimento pontual e reservado.
          </p>
        </div>

        <div className="rounded-3xl bg-[#F4F7F6] dark:bg-[#0D1622] border border-[#DCE5E3] dark:border-[#6BA89E]/25 p-5 sm:p-8 lg:p-10 shadow-sm">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {/* Coluna 1: Canais, Horários e Endereço (5 colunas) */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-5">
              <div className="space-y-4">
                <div>
                  <h3 className="font-heading text-2xl font-semibold text-[#0D1622] dark:text-[#EBF2F0]">
                    {CLINIC_INFO.name}
                  </h3>
                  <p className="text-xs font-body text-[#475866] dark:text-[#B2C3CC] mt-0.5">
                    {CLINIC_INFO.cro} • Desde {CLINIC_INFO.sinceYear}
                  </p>
                </div>

                {/* Endereço */}
                <div className="p-4 rounded-2xl bg-[#FFFFFF] dark:bg-[#162333] border border-[#DCE5E3] dark:border-[#6BA89E]/20 flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#173B38] dark:text-[#6BA89E] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-body text-xs font-semibold uppercase tracking-wider text-[#0D1622] dark:text-[#EBF2F0]">
                      Endereço
                    </h4>
                    <p className="font-body text-xs sm:text-sm text-[#475866] dark:text-[#B2C3CC] mt-0.5 leading-snug">
                      {CLINIC_INFO.address}
                    </p>
                  </div>
                </div>

                {/* Horários */}
                <div className="p-4 rounded-2xl bg-[#FFFFFF] dark:bg-[#162333] border border-[#DCE5E3] dark:border-[#6BA89E]/20 flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#173B38] dark:text-[#6BA89E] shrink-0 mt-0.5" />
                  <div className="space-y-0.5 text-xs sm:text-sm font-body text-[#475866] dark:text-[#B2C3CC]">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#0D1622] dark:text-[#EBF2F0] mb-1">
                      Horário de Funcionamento
                    </h4>
                    <p>{CLINIC_INFO.schedule.monToThu}</p>
                    <p>{CLINIC_INFO.schedule.friday}</p>
                    <p className="text-xs text-[#6C7D8A] dark:text-[#8499A6]">{CLINIC_INFO.schedule.weekend}</p>
                  </div>
                </div>

                {/* Telefone Fixo, Email e Redes */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href={CLINIC_INFO.phoneHref}
                    className="p-3.5 rounded-2xl bg-[#FFFFFF] dark:bg-[#162333] border border-[#DCE5E3] dark:border-[#6BA89E]/20 hover:border-[#6BA89E] flex items-center gap-2.5 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#173B38] dark:text-[#6BA89E] shrink-0" />
                    <div className="min-w-0">
                      <span className="block text-[0.625rem] uppercase font-semibold text-[#6C7D8A] dark:text-[#8499A6]">
                        Telefone Fixo
                      </span>
                      <span className="text-xs font-semibold text-[#0D1622] dark:text-[#EBF2F0]">
                        {CLINIC_INFO.phoneDisplay}
                      </span>
                    </div>
                  </a>

                  <a
                    href={`mailto:${CLINIC_INFO.email}`}
                    className="p-3.5 rounded-2xl bg-[#FFFFFF] dark:bg-[#162333] border border-[#DCE5E3] dark:border-[#6BA89E]/20 hover:border-[#6BA89E] flex items-center gap-2.5 transition-colors"
                  >
                    <Mail className="w-4 h-4 text-[#173B38] dark:text-[#6BA89E] shrink-0" />
                    <div className="min-w-0">
                      <span className="block text-[0.625rem] uppercase font-semibold text-[#6C7D8A] dark:text-[#8499A6]">
                        E-mail
                      </span>
                      <span className="text-xs font-semibold text-[#0D1622] dark:text-[#EBF2F0] truncate block">
                        {CLINIC_INFO.email}
                      </span>
                    </div>
                  </a>
                </div>

                <div className="flex items-center gap-4 px-1 pt-1 text-xs font-body font-semibold text-[#0D1622] dark:text-[#EBF2F0]">
                  <a
                    href={CLINIC_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 hover:text-[#6BA89E] transition-colors"
                  >
                    <InstagramIcon className="w-4 h-4 text-[#6BA89E]" />
                    <span>{CLINIC_INFO.instagramHandle}</span>
                  </a>
                  <a
                    href={CLINIC_INFO.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 hover:text-[#6BA89E] transition-colors"
                  >
                    <FacebookIcon className="w-4 h-4 text-[#6BA89E]" />
                    <span>Facebook</span>
                  </a>
                </div>
              </div>

              {/* Botão Principal Único de WhatsApp */}
              <MagneticButton strength={0.2} className="w-full">
                <a
                  href={CLINIC_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill w-full bg-[#173B38] text-white dark:bg-[#6BA89E] dark:text-[#0D1622] py-3.5 px-6 text-sm font-semibold gap-2.5 shadow-md hover-lift flex items-center justify-center cursor-pointer"
                >
                  <WhatsAppIcon className="w-5 h-5 text-[#6BA89E] dark:text-[#0D1622]" />
                  <span>WhatsApp: {CLINIC_INFO.whatsappDisplay}</span>
                </a>
              </MagneticButton>
            </div>

            {/* Coluna 2: Mapa Interativo + Foto Fachada para Referência + Traçar Rota (7 colunas) */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="relative w-full h-[380px] sm:h-[440px] lg:h-full min-h-[380px] rounded-3xl overflow-hidden border border-[#DCE5E3] dark:border-[#6BA89E]/25 shadow-md bg-[#FFFFFF] dark:bg-[#162333]">
                <iframe
                  title="Mapa da Odontologia Dr. Ricardo A. Toledo — São Braz, Curitiba"
                  src={CLINIC_INFO.mapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />

                {/* Miniatura da Fachada para Identificação Fácil na Rua */}
                <div className="hidden sm:flex items-center gap-2.5 absolute top-3 left-3 p-2 pr-3.5 rounded-2xl bg-[#FFFFFF]/95 dark:bg-[#0D1622]/95 backdrop-blur-md border border-[#DCE5E3] dark:border-[#6BA89E]/30 shadow-lg pointer-events-none">
                  <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0">
                    <Image
                      src="/clinica/fachada_principal.webp"
                      alt="Fachada número 3225"
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                  <div className="text-left">
                    <span className="font-heading text-xs font-bold text-[#0D1622] dark:text-[#EBF2F0] block">
                      Nº 3225 • São Braz
                    </span>
                    <span className="font-body text-[0.6875rem] text-[#475866] dark:text-[#B2C3CC]">
                      Av. Ver. Toaldo Túlio
                    </span>
                  </div>
                </div>

                {/* Barra de Rota Rápida */}
                <div className="absolute bottom-3 inset-x-3 sm:left-auto sm:right-4 p-2 rounded-2xl bg-[#FFFFFF]/95 dark:bg-[#0D1622]/95 backdrop-blur-md border border-[#DCE5E3] dark:border-[#6BA89E]/30 shadow-lg flex items-center justify-between gap-3">
                  <MagneticButton strength={0.2} className="w-full sm:w-auto">
                    <a
                      href={CLINIC_INFO.mapsDirectionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-pill w-full sm:w-auto bg-[#173B38] text-white dark:bg-[#6BA89E] dark:text-[#0D1622] py-2.5 px-5 text-xs font-semibold gap-2 flex items-center justify-center cursor-pointer"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>Traçar Rota no Google Maps</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </MagneticButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

