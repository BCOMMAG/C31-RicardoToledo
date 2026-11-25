export interface ClinicInfo {
  name: string;
  shortName: string;
  doctorName: string;
  doctorFullName: string;
  cro: string;
  sinceYear: number;
  tagline: string;
  officialSummary: string;
  whatsappNumber: string;
  whatsappDisplay: string;
  whatsappUrl: string;
  phoneDisplay: string;
  phoneHref: string;
  email: string;
  instagramHandle: string;
  instagramUrl: string;
  facebookUrl: string;
  address: string;
  addressShort: string;
  neighborhood: string;
  cityState: string;
  cep: string;
  mapsUrl: string;
  mapsEmbedUrl: string;
  mapsDirectionsUrl: string;
  schedule: {
    monToThu: string;
    friday: string;
    weekend: string;
    summary: string;
  };
  googleRating: {
    score: string;
    count: number;
  };
}

export const CLINIC_INFO: ClinicInfo = {
  name: "Odontologia Dr. Ricardo A. Toledo",
  shortName: "Dr. Ricardo A. Toledo",
  doctorName: "Dr. Ricardo A. Toledo",
  doctorFullName: "Dr. Ricardo Alves Toledo",
  cro: "CRO-PR 10014",
  sinceYear: 1996,
  tagline: "Odontologia Geral, Implantes, Prótese, Estética & Ortodontia",
  officialSummary:
    "Atendimento odontológico desde 1996, nas áreas da Odontologia Geral como: Dentística Restauradora, Endodontia (Tratamento de Canal), Periodontia (Tratamento Gengival), Prótese (Coroas, Porcelanas e Dentaduras), Implantes e Estética (Restaurações estéticas, Facetas, Lentes de Contato e Clareamento Dental).",
  whatsappNumber: "5541991146000",
  whatsappDisplay: "(41) 99114-6000",
  whatsappUrl:
    "https://wa.me/5541991146000?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20na%20Odontologia%20Dr.%20Ricardo%20A.%20Toledo.",
  phoneDisplay: "(41) 3039-4040",
  phoneHref: "tel:+554130394040",
  email: "oralbraz@hotmail.com",
  instagramHandle: "@oralbraz",
  instagramUrl: "https://www.instagram.com/oralbraz/",
  facebookUrl:
    "https://www.facebook.com/people/Odontologia-Dr-Ricardo-A-Toledo/61561863067784/",
  address: "Av. Ver. Toaldo Túlio, 3225 - São Braz, Curitiba - PR, 82300-332",
  addressShort: "Av. Ver. Toaldo Túlio, 3225 • São Braz, Curitiba - PR",
  neighborhood: "São Braz",
  cityState: "Curitiba - PR",
  cep: "82300-332",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Av.+Ver.+Toaldo+T%C3%BAlio,+3225+-+S%C3%A3o+Braz,+Curitiba+-+PR,+82300-332",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=Av.+Ver.+Toaldo+T%C3%BAlio,+3225+-+S%C3%A3o+Braz,+Curitiba+-+PR,+82300-332&output=embed",
  mapsDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Av.+Ver.+Toaldo+T%C3%BAlio,+3225+-+S%C3%A3o+Braz,+Curitiba+-+PR,+82300-332",
  schedule: {
    monToThu: "Segunda a quinta-feira: 09h às 18h",
    friday: "Sexta-feira: 09h às 16h",
    weekend: "Sábado e domingo: Fechado",
    summary: "Seg–Qui: 09h–18h • Sex: 09h–16h",
  },
  googleRating: {
    score: "5.0",
    count: 121,
  },
};

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQS: FaqItem[] = [
  {
    id: "implante-dor",
    question: "O tratamento com implantes dentários dói?",
    answer:
      "Não. Hoje a tecnologia odontológica e os protocolos modernos tornam o procedimento confortável e praticamente indolor. Além da anestesia local precisa, oferecemos a opção de sedação venosa consciente aplicada e monitorada por um médico anestesiologista durante todo o procedimento, proporcionando relaxamento e tranquilidade.",
  },
  {
    id: "quantos-implantes-protocolo",
    question: "Quantos implantes são necessários para uma Prótese Protocolo?",
    answer:
      "Normalmente, são necessários de quatro a seis implantes para suportar uma prótese protocolo fixa com total estabilidade. O número exato é definido após avaliação clínica e exames de imagem conforme a condição óssea de cada paciente.",
  },
  {
    id: "diferenca-protese-total",
    question: "Qual a diferença entre Prótese Total convencional e sobre implante?",
    answer:
      "A prótese total convencional (dentadura) pode ser definitiva ou imediata (colocada logo após extrações). Já as próteses sobre implantes — como a Prótese Protocolo (totalmente fixa) ou Overdenture — são ancoradas nos implantes dentários, oferecendo estabilidade mastigatória superior e evitando que a prótese se movimente ou machuque a gengiva.",
  },
  {
    id: "ortodontia-infantil-idade",
    question: "Com quantos anos devo levar meu filho para avaliação ortodôntica?",
    answer:
      "O recomendado é realizar a primeira avaliação ortodôntica preventiva por volta dos 7 anos de idade, quando os primeiros molares permanentes começam a aparecer. Isso permite detectar precocemente alterações de mordida, crescimento ósseo e guiar o desenvolvimento saudável do sorriso.",
  },
  {
    id: "placa-bruxismo",
    question: "Para que serve a placa miorrelaxante e quando devo procurá-la?",
    answer:
      "A placa miorrelaxante protege os dentes contra o desgaste causado pelo bruxismo (ranger ou apertar os dentes involuntariamente, geralmente durante o sono), alivia a sobrecarga na articulação temporomandibular (ATM) e reduz dores de cabeça ou na mandíbula.",
  },
  {
    id: "agendamento-horarios",
    question: "Como agendar uma consulta ou avaliação e onde fica a clínica?",
    answer:
      "Estamos na Av. Ver. Toaldo Túlio, 3225, no bairro São Braz em Curitiba - PR. Atendemos de segunda a quinta das 09h às 18h e sexta das 09h às 16h. Você pode agendar rapidamente pelo WhatsApp (41) 99114-6000 ou pelo telefone fixo (41) 3039-4040.",
  },
];

