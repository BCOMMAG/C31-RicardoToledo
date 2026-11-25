import { CLINIC_INFO } from "@/lib/data";

export function getClinicSchema(siteUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: CLINIC_INFO.name,
    url: siteUrl,
    image: `${siteUrl}/og_imagem_hd.png`,
    logo: `${siteUrl}/logo_modoclaro.png`,
    telephone: "+554130394040",
    email: CLINIC_INFO.email,
    priceRange: "$$",
    foundingDate: "1996",
    description: CLINIC_INFO.officialSummary,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Ver. Toaldo Túlio, 3225",
      addressLocality: "Curitiba",
      addressRegion: "PR",
      postalCode: "82300-332",
      addressCountry: "BR",
    },
    areaServed: [
      { "@type": "City", name: "Curitiba" },
      { "@type": "Place", name: "São Braz, Curitiba - PR" },
      { "@type": "Place", name: "Santa Felicidade, Curitiba - PR" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Friday"],
        opens: "09:00",
        closes: "16:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "121",
      bestRating: "5",
      worstRating: "1",
    },
    sameAs: [CLINIC_INFO.instagramUrl, CLINIC_INFO.facebookUrl],
  };
}

