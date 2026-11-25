import type { Metadata } from "next";
import { Outfit, Manrope } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { SmoothScroll } from "@/components/SmoothScroll";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { getClinicSchema } from "@/lib/schema";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const siteUrl = "https://ricardotoledo.pages.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Odontologia Dr. Ricardo A. Toledo | Dentista em São Braz, Curitiba - PR",
    template: "%s | Odontologia Dr. Ricardo A. Toledo",
  },
  description:
    "Atendimento odontológico desde 1996 em São Braz, Curitiba - PR. Implantes sem dor, Prótese Protocolo, Invisalign, Lentes de Contato Dentais, Odontopediatria e Clínica Geral. 121 avaliações 5★ no Google.",
  keywords: [
    "dentista são braz curitiba",
    "odontologia dr ricardo toledo",
    "implante dentário curitiba são braz",
    "prótese protocolo curitiba",
    "invisalign curitiba",
    "lentes de contato dentais curitiba",
    "odontopediatria são braz",
    "tratamento de canal curitiba",
    "placa miorrelaxante bruxismo curitiba",
  ],
  authors: [{ name: "Dr. Ricardo A. Toledo" }],
  creator: "Dr. Ricardo A. Toledo",
  publisher: "Odontologia Dr. Ricardo A. Toledo",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    title:
      "Odontologia Dr. Ricardo A. Toledo | Implantes, Estética & Clínica Geral em Curitiba",
    description:
      "Tradição desde 1996 no São Braz, Curitiba. 5.0★ no Google (121 avaliações). Implantes sem dor, Prótese Protocolo, Invisalign, Lentes e Odontopediatria.",
    siteName: "Odontologia Dr. Ricardo A. Toledo",
    images: [
      {
        url: "/og_imagem_hd.png",
        width: 1200,
        height: 630,
        alt: "Odontologia Dr. Ricardo A. Toledo",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: [
      { url: "/favicon-apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = getClinicSchema(siteUrl);

  return (
    <html lang="pt-BR" className={`${outfit.variable} ${manrope.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased bg-[#F4F7F6] text-[#0D1622] dark:bg-[#0D1622] dark:text-[#EBF2F0] selection:bg-[#6BA89E]/30">
        <ThemeProvider>
          <CustomCursor />
          <SmoothScroll>{children}</SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
