export interface EducationalGuide {
  id: string;
  category: string;
  title: string;
  summary: string;
  image: string;
  readTime: string;
  sections: {
    heading?: string;
    paragraphs?: string[];
    bullets?: string[];
  }[];
  whatsappMessage: string;
}

export const EDUCATIONAL_GUIDES: EducationalGuide[] = [
  {
    id: "beneficios-protese-protocolo",
    category: "Reabilitação Oral",
    title: "Os 8 Benefícios da Prótese Protocolo e Principais Dúvidas",
    summary:
      "Entenda por que a prótese fixa suportada por 4 a 6 implantes transforma a mastigação, impede a reabsorção óssea e devolve liberdade ao sorrir.",
    image: "/2026-11-24_22-49.png",
    readTime: "4 min de leitura",
    sections: [
      {
        heading: "O que é e quantos implantes são necessários?",
        paragraphs: [
          "A prótese protocolo é uma solução fixa suportada por implantes dentários, ideal para pacientes que perderam a maioria ou todos os dentes de uma arcada. Normalmente são necessários entre quatro a seis implantes, dependendo da condição óssea avaliada em consulta.",
          "Após a colocação dos implantes e o período de osseointegração, a prótese é permanentemente fixada, eliminando os desconfortos e deslocamentos das dentaduras removíveis.",
        ],
      },
      {
        heading: "Principais Vantagens da Prótese Protocolo",
        bullets: [
          "Eficiência mastigatória aprimorada e firmeza ao comer",
          "Adaptação facilitada, interrompendo o processo de reabsorção óssea",
          "Durabilidade elevada com higienização regular e manutenção em dia",
          "Resultados estéticos naturais harmonizados com o rosto",
          "Liberdade na alimentação, na fala e nas atividades sociais",
          "Conforto superior sem movimentos que machucam a gengiva",
          "Facilidade de higienização com escova, fio dental e escovas interdentais",
          "Melhora expressiva da autoestima e qualidade de vida",
        ],
      },
    ],
    whatsappMessage:
      "Olá! Li o guia sobre Prótese Protocolo no site e gostaria de agendar uma avaliação.",
  },
  {
    id: "implante-dentario-sem-dor",
    category: "Implantodontia & Conforto",
    title: "Como Funciona o Implante Dentário sem Dor (com Sedação)",
    summary:
      "Conheça como a anestesia local precisa e a sedação venosa consciente acompanhada por anestesiologista tornam o procedimento tranquilo.",
    image: "/2026-11-24_22-57.png",
    readTime: "3 min de leitura",
    sections: [
      {
        heading: "Tecnologia e conforto durante todo o atendimento",
        paragraphs: [
          "Muitos pacientes adiam o sonho de recuperar o sorriso por receio de sentir dor. Atualmente, as técnicas cirúrgicas avançadas e os recursos anestésicos tornam os implantes dentários uma experiência confortável e segura.",
        ],
      },
      {
        heading: "Tipos de Anestesia & Sedação Disponíveis",
        bullets: [
          "Anestesia Local: aplicada diretamente na área do implante, bloqueando completamente os sinais de dor.",
          "Sedação Venosa Consciente: além da anestesia local, um médico anestesiologista administra um sedativo diretamente na veia, deixando o paciente extremamente relaxado e monitorando continuamente os sinais vitais.",
        ],
      },
      {
        heading: "Benefícios da Sedação Monitorada",
        bullets: [
          "Conforto profundo e relaxamento durante o procedimento",
          "Redução drástica da percepção de ansiedade",
          "Recuperação rápida e tranquilidade no pós-operatório",
        ],
      },
    ],
    whatsappMessage:
      "Olá! Gostaria de entender melhor sobre o Implante Dentário sem dor e sedação consciente.",
  },
  {
    id: "protese-total-opcoes",
    category: "Próteses Dentárias",
    title: "Tipos de Prótese Total: Definitiva, Imediata e Sobre Implantes",
    summary:
      "Conheça as soluções disponíveis para restaurar completamente a função mastigatória e a autoestima de quem perdeu os dentes.",
    image: "/2026-11-24_22-54_1.png",
    readTime: "3 min de leitura",
    sections: [
      {
        heading: "Inovação com opções para cada necessidade",
        paragraphs: [
          "A prótese total restaura não apenas a mastigação adequada, mas também o suporte facial e a confiança para sorrir. A escolha do modelo ideal considera o momento clínico e os objetivos do paciente.",
        ],
        bullets: [
          "Prótese Definitiva: confeccionada após a cicatrização total dos tecidos após extrações, oferecendo ajuste estável e permanente.",
          "Prótese Imediata: instalada logo após a extração para que o paciente não permaneça nenhum período sem dentes.",
          "Prótese Sobre Implantes (Protocolo ou Overdenture): para uma fixação ainda mais firme, trazendo segurança incomparável ao falar e mastigar.",
        ],
      },
    ],
    whatsappMessage:
      "Olá! Gostaria de avaliar qual tipo de Prótese Total é mais indicado para o meu caso.",
  },
  {
    id: "lentes-de-contato-dentais",
    category: "Estética Dental",
    title: "Lentes de Contato Dentais: Harmonia, Cor e Resistência",
    summary:
      "Saiba como finas lâminas de porcelana aprimoram formato, cor e espaçamento preservando a funcionalidade dos dentes.",
    image: "/2026-11-24_22-55.png",
    readTime: "2 min de leitura",
    sections: [
      {
        heading: "O que são Lentes de Contato Dentais?",
        paragraphs: [
          "São lâminas ultrafinas de porcelana aplicadas cuidadosamente sobre os dentes para corrigir pequenas imperfeições e equilibrar cor, forma e espaçamento, resistindo ao teste do tempo sem sofrer alterações cromáticas.",
        ],
        bullets: [
          "Correção de pequenos defeitos e assimetrias anteriores",
          "Melhoria estética na cor e no contorno dos dentes",
          "Fechamento natural de espaçamentos entre os dentes",
          "Alta resistência mecânica e durabilidade de cor ao longo dos anos",
        ],
      },
    ],
    whatsappMessage:
      "Olá! Gostaria de agendar uma avaliação sobre Lentes de Contato Dentais.",
  },
  {
    id: "sistema-invisalign",
    category: "Ortodontia Discreta",
    title: "Invisalign: Alinhe seu Sorriso sem Aparelho Metálico",
    summary:
      "Descubra a abordagem moderna e quase invisível com alinhadores removíveis para realinhar dentes com praticidade.",
    image: "/2026-11-24_22-52_1.png",
    readTime: "2 min de leitura",
    sections: [
      {
        heading: "Onde o conforto encontra a eficácia",
        paragraphs: [
          "O Sistema Invisalign oferece realinhamento dentário com estética praticamente imperceptível. Além da discrição visual no trabalho e no convívio social, os alinhadores são removíveis — permitindo liberdade em refeições especiais e uma higiene bucal simples e completa.",
        ],
      },
    ],
    whatsappMessage:
      "Olá! Gostaria de conhecer as vantagens do Sistema Invisalign para o meu sorriso.",
  },
  {
    id: "ortodontia-infantil-e-odontopediatria",
    category: "Odontopediatria & Ortodontia",
    title: "Odontopediatria e Ortodontia Infantil: Quando Começar?",
    summary:
      "Por que a avaliação por volta dos 7 anos e o cuidado acolhedor desde a primeira infância constroem sorrisos saudáveis para toda a vida.",
    image: "/2026-11-24_22-52.png",
    readTime: "4 min de leitura",
    sections: [
      {
        heading: "Quando levar a criança ao ortodontista?",
        paragraphs: [
          "O recomendado é realizar a primeira avaliação ortodôntica por volta dos 7 anos, momento em que surgem os primeiros molares permanentes. A detecção precoce ajuda a corrigir más mordidas, guiar o crescimento ósseo e até prevenir alterações na fala.",
        ],
      },
      {
        heading: "Os 5 Pilares da Odontopediatria na Clínica",
        bullets: [
          "Educação para Saúde: orientamos crianças e pais sobre hábitos saudáveis diários",
          "Prevenção: atuação ativa contra cáries, traumas e problemas gengivais",
          "Diagnóstico Precoce: identificação rápida de alterações no desenvolvimento",
          "Tratamento Suave: técnicas de mínima intervenção focadas no conforto",
          "Suporte Psicológico: construção de uma relação positiva e sem medo no consultório",
        ],
      },
    ],
    whatsappMessage:
      "Olá! Gostaria de agendar uma consulta preventiva infantil na clínica.",
  },
  {
    id: "placa-miorrelaxante-bruxismo",
    category: "Bruxismo & ATM",
    title: "Placa Miorrelaxante: Sua Aliada Contra o Bruxismo e Dores na ATM",
    summary:
      "Entenda como esse dispositivo protege contra o desgaste dentário noturno, alivia dores de cabeça e reduz tensão mandibular.",
    image: "/2026-11-24_22-55_1.png",
    readTime: "3 min de leitura",
    sections: [
      {
        heading: "O que é o Bruxismo e como a placa atua?",
        paragraphs: [
          "O bruxismo é o hábito involuntário de ranger ou apertar os dentes — principalmente à noite — podendo gerar desgaste severo do esmalte, dores de cabeça, cansaço mandibular e disfunções na articulação temporomandibular (ATM).",
        ],
        bullets: [
          "Impede o contato destrutivo direto entre as arcadas superiores e inferiores",
          "Alivia a pressão muscular sobre a ATM, reduzindo dores e desconfortos",
          "Previne complicações futuras graves como trincas e perdas dentárias",
        ],
      },
    ],
    whatsappMessage:
      "Olá! Tenho sintomas de bruxismo e gostaria de avaliar a placa miorrelaxante.",
  },
  {
    id: "tratamento-de-canal-endodontia",
    category: "Endodontia",
    title: "Tratamento de Canal: Alívio da Dor e Preservação do Dente",
    summary:
      "Saiba o que é o canal dentário, quando ele se faz necessário e por que tratar cedo evita extrações e infecções.",
    image: "/2026-11-24_22-53.png",
    readTime: "3 min de leitura",
    sections: [
      {
        heading: "Entendendo o Canal e por que não ignorar a dor",
        paragraphs: [
          "O termo 'canal' refere-se à cavidade interna no centro da raiz que abriga o tecido pulpar e nervoso do dente. Quando essa polpa fica inflamada ou infectada por cáries profundas ou traumas, o tratamento de canal remove o tecido comprometido, descontamina e sela o espaço.",
          "Ignorar sensibilidade intensa ou dor persistente pode espalhar infecções. O canal alivia o desconforto e salva o dente natural de uma possível extração.",
        ],
      },
    ],
    whatsappMessage:
      "Olá! Estou sentindo sensibilidade/dor de dente e gostaria de agendar uma avaliação.",
  },
  {
    id: "limpeza-dentaria-profissional",
    category: "Prevenção & Periodontia",
    title: "Desvendando a Limpeza Dentária Profissional",
    summary:
      "Entenda por que a profilaxia em consultório vai muito além da escovação para remover tártaro, prevenir gengivite e refrescar o hálito.",
    image: "/2026-11-24_22-54.png",
    readTime: "3 min de leitura",
    sections: [
      {
        heading: "4 Benefícios Essenciais da Limpeza no Consultório",
        bullets: [
          "Eliminação do Tártaro e placa bacteriana que causam cáries",
          "Prevenção de Doenças Gengivais como gengivite e periodontite",
          "Combate ao Mau Hálito (halitose) ao remover bactérias acumuladas",
          "Clareamento natural pela remoção de manchas superficiais nos dentes",
        ],
      },
    ],
    whatsappMessage:
      "Olá! Gostaria de agendar uma limpeza dentária profissional com o Dr. Ricardo Toledo.",
  },
  {
    id: "carie-e-fio-dental",
    category: "Higiene & Prevenção",
    title: "Cárie Dental e Fio Dental: Prevenção Inteligente no Dia a Dia",
    summary:
      "Conheça os primeiros sinais da cárie e os 5 benefícios indispensáveis de usar o fio dental diariamente.",
    image: "/2026-11-24_22-56.png",
    readTime: "3 min de leitura",
    sections: [
      {
        heading: "Sintomas e Tratamento da Cárie",
        paragraphs: [
          "A cárie é uma infecção causada por bactérias que, ao metabolizarem açúcares, desmineralizam o esmalte dental. Os sinais de alerta incluem dor ao consumir doces, alimentos frios ou quentes, furinhos visíveis e manchas brancas ou marrons.",
          "Quando tratada cedo com remoção da lesão e restauração, evita-se que a infecção atinja o canal ou cause a perda do dente.",
        ],
      },
      {
        heading: "Os 5 Benefícios do Fio Dental Regular",
        bullets: [
          "Remove a placa bacteriana nos espaços que a escova não alcança",
          "Previne inflamações e doenças gengivais",
          "Reduz significativamente o risco de cáries interproximais",
          "Promove um hálito mais fresco e agradável",
          "Mantém a saúde geral da boca equilibrada",
        ],
      },
    ],
    whatsappMessage:
      "Olá! Gostaria de agendar uma revisão preventiva na Odontologia Dr. Ricardo A. Toledo.",
  },
];

