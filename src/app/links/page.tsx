import type { Metadata } from "next";
import { LinksClient } from "@/components/LinksClient";

export const metadata: Metadata = {
  title: "Links Oficiais | Odontologia Dr. Ricardo A. Toledo",
  description:
    "Canais oficiais de agendamento, localização em São Braz (Curitiba), telefone fixo, site oficial e orientações odontológicas do Dr. Ricardo A. Toledo.",
};

export default function LinksPage() {
  return <LinksClient />;
}
