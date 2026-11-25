export interface GoogleReview {
  id: string;
  author: string;
  meta: string;
  tenureBadge?: string;
  quote: string;
  ownerReply?: string;
}

export const FEATURED_REVIEWS: GoogleReview[] = [
  {
    id: "joao-marcos",
    author: "João Marcos Lima",
    meta: "Local Guide • 15 avaliações",
    tenureBadge: "Paciente há + de 20 anos",
    quote:
      "Sou paciente do Dr. Ricardo há mais de 20 anos. Muito mais que um excelente profissional. A perícia do plano de saúde elogiou muito o capricho dele no meu tratamento. Sou imensamente grato.",
  },
  {
    id: "julio-cezar",
    author: "Júlio Cézar Chicuto",
    meta: "Avaliação verificada Google",
    tenureBadge: "Cliente há 20 anos",
    quote:
      "Sou cliente há 20 anos e sempre fui muito bem atendido e com muito profissionalismo. Tem preço que acho justo e os trabalhos sempre muito bem feitos.",
  },
  {
    id: "glautier",
    author: "Glautier Catarinozi",
    meta: "Local Guide • 23 avaliações",
    tenureBadge: "Paciente há 1 década",
    quote:
      "Ricardo é um excelente profissional. Meu dentista há uma década já. Super atencioso e entende de todos segmentos na área de odontologia. Nota 10.",
  },
  {
    id: "rita-cassia",
    author: "Rita de Cassia Honczaryk",
    meta: "8 avaliações • 4 fotos",
    quote:
      "Excelente profissional! Fiquei muito satisfeita com o tratamento realizado! O Dr. Ricardo foi atencioso e explicou de forma clara, passando bastante confiança.",
  },
  {
    id: "marcio-santos",
    author: "Márcio Santos",
    meta: "5 avaliações no Google",
    quote:
      "Profissional competente, atencioso, detalhista para solucionar o problema da melhor forma possível! Coloquei 3 próteses dentárias, além de restaurações e limpeza! Super recomendo, supera as expectativas.",
  },
  {
    id: "audrey-joseli",
    author: "Audrey Joseli",
    meta: "5 avaliações no Google",
    quote:
      "O consultório é bem acolhedor, o Dr. Ricardo é nota 10, faz e explica tudo com carinho, é bem calmo e bem cuidadoso... maravilhoso.",
  },
  {
    id: "guaxi-lost",
    author: "Guaxi Lost",
    meta: "10 avaliações • 3 fotos",
    quote:
      "Experiência muito agradável, o doutor e as assistentes são super queridos, amo fazer limpeza e revisão dos dentes com o doutor, os preços são justos e é tudo bem privado e fechadinho!",
  },
  {
    id: "raphael-boratto",
    author: "Raphael Boratto",
    meta: "4 avaliações no Google",
    tenureBadge: "Paciente há + de 4 anos",
    quote:
      "Sou paciente do Dr. Ricardo há mais de 4 anos e só tenho elogios. O trabalho dele e de toda a equipe é excepcional, sempre com muito profissionalismo e atenção. Meu sorriso está impecável.",
  },
  {
    id: "claudio-toledo",
    author: "Claudio Toledo",
    meta: "4 avaliações no Google",
    quote:
      "Consultório com muita higiene, o Dr. Ricardo é um profissional que atende com muita atenção, respeito, e tem um excelente conhecimento no que faz. Recomendo muito o trabalho dele.",
  },
  {
    id: "wilson-santos",
    author: "Wilson Santos",
    meta: "8 avaliações no Google",
    quote:
      "Excelente profissional! O Dr. Ricardo Toledo é extremamente atencioso, explica tudo com clareza e faz você se sentir confortável. O atendimento foi impecável e o resultado superou as expectativas!",
  },
];

