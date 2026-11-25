import type { Metadata } from "next";
import { GuidesDirectoryClient } from "@/components/GuidesDirectoryClient";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export const metadata: Metadata = {
  title: "Orientações & Guias Educativos",
  description:
    "Artigos claros do Dr. Ricardo A. Toledo sobre Prótese Protocolo, Implante sem dor, Invisalign, Lentes de Contato, Odontopediatria, Canal, Limpeza e Bruxismo.",
};

export default function OrientacoesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F4F7F6] dark:bg-[#0D1622] text-[#0D1622] dark:text-[#EBF2F0]">
      <Navbar />
      <main className="flex-1 pt-28 sm:pt-32 pb-20">
        <GuidesDirectoryClient />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
