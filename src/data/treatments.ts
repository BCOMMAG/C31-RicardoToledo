export interface TreatmentCategory {
  slug: string;
  shortTitle: string;
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  highlights: string[];
  procedures: TreatmentItem[];
  faqHighlight: {
    question: string;
    answer: string;
  };
  whatsappMessage: string;
}

export interface TreatmentItem {
  id: string;
  name: string;
  badge: string;
  summary: string;
  details: string;
  benefits: string[];
  whatsappMessage: string;
}

export const TREATMENT_CATEGORIES: TreatmentCategory[] = [
  {
    slug: "implantes-e-protocolo",
    shortTitle: "Implantes & Protocolo",
    title: "Implantes Dentários & Prótese Protocolo",
    subtitle: "Reabilitação Oral Fixa com Segurança e Conforto",
    description:
      "Soluções definitivas para devolver eficiência mastigatória, estabilidade ao falar e confiança ao sorrir — desde implantes unitários até próteses totais fixas sobre implantes.",
    heroImage: "/2026-11-24_22-49.png",
    highlights: [
      "Prótese Protocolo fixa suportada por 4 a 6 implantes",
      "Opção de Sedação Venosa Consciente com anestesiologista",
      "Interrupção da reabsorção óssea e conforto gengival",
      "Prótese Total definitiva, imediata e Overdenture",
    ],
    procedures: [
      {
        id: "protese-protocolo",
        name: "Prótese Protocolo sobre Implantes",
        badge: "Dentes Fixos Definitivos",
        summary:
          "Solução fixa suportada por 4 a 6 implantes dentários para quem perdeu a maioria ou todos os dentes de uma arcada.",
        details:
          "Após a cirurgia de inserção dos implantes e osseointegração, a prótese é fixada de forma permanente, devolvendo mastigação firme, fala segura e estética natural sem deslocamentos.",
        benefits: [
          "Eficiência mastigatória aprimorada e estabilidade total",
          "Adaptação facilitada, interrompendo a reabsorção óssea",
          "Durabilidade elevada com higienização regular",
          "Resultados estéticos naturais e conforto sem ferir a gengiva",
        ],
        whatsappMessage:
          "Olá! Gostaria de agendar uma avaliação para Prótese Protocolo sobre Implantes com o Dr. Ricardo Toledo.",
      },
      {
        id: "implante-sem-dor",
        name: "Implante Dentário sem Dor (com Sedação)",
        badge: "Conforto Cirúrgico",
        summary:
          "Implantes unitários ou múltiplos realizados com anestesia local precisa e opção de sedação venosa consciente.",
        details:
          "Para eliminar ansiedade e desconforto, disponibilizamos sedação consciente administrada e monitorada continuamente por médico anestesiologista durante todo o procedimento.",
        benefits: [
          "Bloqueio preciso de sensibilidade com anestesia local",
          "Sedação venosa segura e monitorada em tempo real",
          "Redução expressiva da ansiedade e medo de dentista",
          "Recuperação tranquila e acompanhamento atencioso",
        ],
        whatsappMessage:
          "Olá! Gostaria de saber mais sobre Implantes Dentários sem Dor e sedação consciente na clínica.",
      },
      {
        id: "protese-total",
        name: "Prótese Total (Convencional, Imediata & Overdenture)",
        badge: "Reabilitação Funcional",
        summary:
          "Restauração completa da função mastigatória, estética e autoestima com opções adaptadas a cada caso clínico.",
        details:
          "Trabalhamos com Prótese Total Definitiva (após cicatrização completa), Prótese Imediata (para não permanecer sem dentes após extrações) e próteses estabilizadas sobre implantes.",
        benefits: [
          "Devolução imediata da harmonia facial e suporte labial",
          "Opções personalizadas conforme anatomia e orçamento",
          "Possibilidade de estabilização sobre implantes (Overdenture)",
        ],
        whatsappMessage:
          "Olá! Tenho interesse em saber mais sobre as opções de Prótese Total na Odontologia Dr. Ricardo A. Toledo.",
      },
    ],
    faqHighlight: {
      question: "Quantos implantes são necessários para a Prótese Protocolo?",
      answer:
        "Geralmente de 4 a 6 implantes por arcada, definidos após análise detalhada da estrutura óssea e planejamento digital.",
    },
    whatsappMessage:
      "Olá! Gostaria de agendar uma avaliação para Implantes Dentários / Prótese Protocolo.",
  },
  {
    slug: "estetica-e-lentes",
    shortTitle: "Estética & Lentes",
    title: "Estética Dental, Lentes de Contato & Facetas",
    subtitle: "Harmonia, Cor e Proporção sem Perder a Naturalidade",
    description:
      "Tratamentos estéticos planejados com precisão na Dentística Restauradora para corrigir formato, cor, fraturas e espaçamentos com durabilidade e aspecto natural.",
    heroImage: "/2026-11-24_22-55.png",
    highlights: [
      "Lentes de Contato Dentais em porcelana ultrafina",
      "Facetas e Restaurações Estéticas imperceptíveis",
      "Clareamento Dental supervisionado com segurança",
      "Preservação máxima da estrutura saudável dos dentes",
    ],
    procedures: [
      {
        id: "lentes-contato-dentais",
        name: "Lentes de Contato Dentais",
        badge: "Porcelana Ultrafina",
        summary:
          "Lâminas ultrafinas de porcelana aplicadas sobre os dentes para aperfeiçoar cor, forma, alinhamento e espaçamentos.",
        details:
          "As lentes de contato unem estética refinada e função mastigatória, mantendo estabilidade de cor ao longo dos anos sem manchamento.",
        benefits: [
          "Correção de pequenos defeitos e fraturas anteriores",
          "Melhoria harmônica na cor e formato dos dentes",
          "Fechamento de diastemas (espaçamentos entre dentes)",
          "Alta resistência e estabilidade cromática duradoura",
        ],
        whatsappMessage:
          "Olá! Gostaria de agendar uma avaliação sobre Lentes de Contato Dentais / Facetas.",
      },
      {
        id: "facetas-restauracoes-clareamento",
        name: "Facetas, Restaurações Estéticas & Clareamento",
        badge: "Dentística Restauradora",
        summary:
          "Reconstruções estéticas em resina de alta performance, substituição de restaurações antigas e clareamento seguro.",
        details:
          "Recuperamos dentes fraturados, desgastados ou escurecidos respeitando a anatomia natural e o equilíbrio de todo o sorriso.",
        benefits: [
          "Aspecto natural com textura e brilho semelhantes ao esmalte",
          "Troca segura de restaurações antigas infiltradas",
          "Clareamento supervisionado reduzindo sensibilidade",
        ],
        whatsappMessage:
          "Olá! Gostaria de saber mais sobre Facetas, Restaurações Estéticas e Clareamento Dental.",
      },
    ],
    faqHighlight: {
      question: "As lentes de contato dentais mancham com o tempo?",
      answer:
        "Não. As lâminas de porcelana possuem superfície vitrificada altamente resistente, mantendo a cor e o brilho estáveis ao longo dos anos com os cuidados de rotina.",
    },
    whatsappMessage:
      "Olá! Gostaria de agendar uma avaliação para Estética Dental (Lentes / Facetas / Clareamento).",
  },
  {
    slug: "ortodontia-e-invisalign",
    shortTitle: "Ortodontia & Invisalign",
    title: "Ortodontia Discreta (Invisalign) & Aparelhos",
    subtitle: "Alinhamento Preciso para Jovens e Adultos",
    description:
      "Abordagens ortodônticas modernas — incluindo o sistema de alinhadores transparentes Invisalign — para alinhar seu sorriso com conforto, discrição e facilidade na higiene.",
    heroImage: "/2026-11-24_22-52_1.png",
    highlights: [
      "Sistema Invisalign: alinhadores quase invisíveis e removíveis",
      "Higiene bucal facilitada e liberdade ao se alimentar",
      "Correção funcional da mordida e estética do sorriso",
      "Aparelhos fixos modernos e planejamento individualizado",
    ],
    procedures: [
      {
        id: "invisalign",
        name: "Sistema Invisalign (Alinhadores Transparentes)",
        badge: "Ortodontia Discreta",
        summary:
          "Realinhamento dentário moderno e praticamente invisível, sem bráquetes ou fios metálicos aparentes.",
        details:
          "Ideal para quem busca eficiência ortodôntica com conforto: os alinhadores podem ser removidos para refeições, eventos especiais e para escovação e uso do fio dental.",
        benefits: [
          "Discrição estética quase invisível no dia a dia",
          "Removível para comer e higienizar perfeitamente os dentes",
          "Conforto superior sem atrito de peças metálicas",
          "Previsibilidade digital da evolução do sorriso",
        ],
        whatsappMessage:
          "Olá! Gostaria de saber como funciona o tratamento com Invisalign na Clínica Dr. Ricardo Toledo.",
      },
      {
        id: "ortodontia-convencional",
        name: "Ortodontia Corretiva & Funcional",
        badge: "Saúde da Oclusão",
        summary:
          "Correção de apinhamentos, mordida cruzada e desalinhamentos para equilibrar estética e função mastigatória.",
        details:
          "Além de tornar o sorriso mais harmônico, dentes bem posicionados facilitam a limpeza diária e previnem sobrecargas articulares e cáries.",
        benefits: [
          "Equilíbrio completo da mordida (oclusão)",
          "Prevenção de desgastes dentários irregulares",
          "Facilidade na higienização interdental",
        ],
        whatsappMessage:
          "Olá! Gostaria de agendar uma avaliação ortodôntica na clínica.",
      },
    ],
    faqHighlight: {
      question: "Posso tirar o alinhador Invisalign para comer e escovar os dentes?",
      answer:
        "Sim. Uma das maiores vantagens do Sistema Invisalign é exatamente a facilidade de remoção para refeições, eventos pontuais e higiene bucal sem barreiras.",
    },
    whatsappMessage:
      "Olá! Gostaria de agendar uma avaliação para Ortodontia / Invisalign.",
  },
  {
    slug: "odontopediatria",
    shortTitle: "Odontopediatria",
    title: "Odontopediatria & Ortodontia Infantil",
    subtitle: "Construindo Sorrisos Saudáveis Desde a Infância",
    description:
      "Atendimento acolhedor, educativo e preventivo voltado para crianças e adolescentes, garantindo desenvolvimento ósseo adequado e uma relação positiva com o dentista.",
    heroImage: "/2026-11-24_22-52.png",
    highlights: [
      "Avaliação ortodôntica preventiva recomendada aos 7 anos",
      "Educação lúdica de higiene bucal para crianças e pais",
      "Prevenção de cáries, traumas e alterações de crescimento ósseo",
      "Suporte acolhedor para reduzir medos e ansiedades",
    ],
    procedures: [
      {
        id: "odontopediatria-preventiva",
        name: "Odontopediatria Preventiva & Acolhedora",
        badge: "Infância & Adolescência",
        summary:
          "Cuidado completo dedicado a criar uma base sólida para a saúde bucal infantil sem traumas ou ansiedades.",
        details:
          "Atuamos na educação para saúde, prevenção de cáries e traumas, diagnóstico precoce no sistema estomatognático e intervenções minimamente invasivas com foco no bem-estar da criança.",
        benefits: [
          "Educação prática para hábitos saudáveis duradouros",
          "Técnicas de mínima intervenção com máximo conforto",
          "Acolhimento psicológico construindo confiança no consultório",
        ],
        whatsappMessage:
          "Olá! Gostaria de agendar uma consulta infantil (Odontopediatria) com o Dr. Ricardo Toledo.",
      },
      {
        id: "ortodontia-infantil",
        name: "Ortodontia Preventiva Infantil",
        badge: "A partir dos 7 anos",
        summary:
          "Acompanhamento precoce do crescimento ósseo e dos primeiros molares permanentes para evitar problemas complexos futuros.",
        details:
          "Por volta dos 7 anos é possível identificar más mordidas, desvios de crescimento ou alterações que afetam até a fala, permitindo correções suaves e personalizadas.",
        benefits: [
          "Diagnóstico oportuno no início da dentição mista",
          "Correção de más mordidas e guia de crescimento ósseo",
          "Dentes alinhados mais fáceis de limpar na vida adulta",
        ],
        whatsappMessage:
          "Olá! Gostaria de agendar uma avaliação de Ortodontia Infantil.",
      },
    ],
    faqHighlight: {
      question: "Qual a idade ideal para a primeira avaliação ortodôntica infantil?",
      answer:
        "Por volta dos 7 anos, fase em que nascem os primeiros molares permanentes e já é possível avaliar a relação das arcadas com precisão.",
    },
    whatsappMessage:
      "Olá! Gostaria de agendar uma consulta de Odontopediatria / Ortodontia Infantil.",
  },
  {
    slug: "prevencao-e-endodontia",
    shortTitle: "Canal, Cárie & Limpeza",
    title: "Prevenção, Periodontia & Tratamento de Canal",
    subtitle: "Preservação dos Dentes Naturais e Alívio Rápido da Dor",
    description:
      "Cuidados essenciais da Odontologia Geral para manter gengivas saudáveis, tratar cáries no início, eliminar tártaro e salvar dentes comprometidos através da Endodontia.",
    heroImage: "/2026-11-24_22-53.png",
    highlights: [
      "Tratamento de Canal (Endodontia) preservando o dente natural",
      "Limpeza Profissional contra tártaro, gengivite e mau hálito",
      "Tratamento de Cáries e Dentística Restauradora",
      "Periodontia focada na saúde da gengiva e sustentação dental",
    ],
    procedures: [
      {
        id: "tratamento-canal",
        name: "Tratamento de Canal (Endodontia)",
        badge: "Alívio & Preservação",
        summary:
          "Remoção segura de tecido pulpar inflamado ou infectado para eliminar dores, conter infecções e evitar extrações.",
        details:
          "Quando cáries profundas ou traumas atingem o nervo no centro da raiz, o tratamento de canal desinfeta e sela o conduto, devolvendo saúde e função ao dente.",
        benefits: [
          "Alívio rápido da dor persistente e sensibilidade",
          "Evita a propagação de infecções radiculares",
          "Salva o dente natural evitando a perda e extração",
        ],
        whatsappMessage:
          "Olá! Preciso de avaliação para dor de dente / Tratamento de Canal.",
      },
      {
        id: "limpeza-periodontia",
        name: "Limpeza Profissional & Periodontia",
        badge: "Saúde Gengival",
        summary:
          "Remoção completa de tártaro, placa bacteriana e manchas superficiais, prevenindo gengivite, periodontite e halitose.",
        details:
          "A profilaxia profissional alcança áreas onde a escova e o fio dental não conseguem remover o tártaro calcificado, deixando o hálito fresco e as gengivas saudáveis.",
        benefits: [
          "Eliminação segura do tártaro e placa mineralizada",
          "Prevenção e controle de gengivite e periodontite",
          "Combate direto ao mau hálito (halitose)",
          "Remoção de manchas superficiais promovendo clareamento natural",
        ],
        whatsappMessage:
          "Olá! Gostaria de agendar uma limpeza dentária profissional e revisão.",
      },
      {
        id: "tratamento-carie",
        name: "Tratamento de Cáries & Restaurações",
        badge: "Diagnóstico Precoce",
        summary:
          "Remoção de lesões cariosas, selamento da cavidade e restauração estética antes que atinjam a raiz.",
        details:
          "Identificar manchas brancas, marrons ou sensibilidade ao doce/frio precocemente permite restaurar o dente de forma simples, rápida e indolor.",
        benefits: [
          "Interrupção imediata da destruição do esmalte e dentina",
          "Previne a necessidade futura de canal ou extração",
          "Restauração anatômica na cor natural do dente",
        ],
        whatsappMessage:
          "Olá! Gostaria de agendar uma consulta de avaliação de rotina / cárie.",
      },
    ],
    faqHighlight: {
      question: "Por que não devo adiar uma sensibilidade ou dor persistente?",
      answer:
        "Quando uma cárie ou trauma evolui até atingir a polpa do dente, a inflamação pode se agravar e se espalhar. Tratar precocemente salva o dente de uma possível extração.",
    },
    whatsappMessage:
      "Olá! Gostaria de agendar uma consulta de Limpeza / Prevenção / Avaliação de dor.",
  },
  {
    slug: "bruxismo-e-atm",
    shortTitle: "Bruxismo & ATM",
    title: "Bruxismo, ATM & Placa Miorrelaxante",
    subtitle: "Proteção dos Dentes e Alívio das Dores na Mandíbula",
    description:
      "Diagnóstico e confecção sob medida de Placa Miorrelaxante para proteger sua estrutura dental do desgaste noturno e aliviar tensões musculares e dores de cabeça.",
    heroImage: "/2026-11-24_22-55_1.png",
    highlights: [
      "Placa miorrelaxante confeccionada sob medida para conforto",
      "Proteção eficaz contra trincas, fraturas e desgaste dental",
      "Alívio de tensão muscular na mandíbula e ATM",
      "Redução de dores de cabeça matinais associadas ao apertamento",
    ],
    procedures: [
      {
        id: "placa-miorrelaxante",
        name: "Placa Miorrelaxante para Bruxismo",
        badge: "Proteção & Alívio ATM",
        summary:
          "Dispositivo móvel sob medida (acrílico/acetato) que impede o atrito destrutivo entre as arcadas, especialmente à noite.",
        details:
          "O bruxismo involuntário desgasta o esmalte e sobrecarrega a articulação temporomandibular. A placa protege os dentes, relaxa a musculatura e previne perdas dentárias a longo prazo.",
        benefits: [
          "Impede o contato direto e o desgaste entre os dentes",
          "Alivia a pressão na articulação temporomandibular (ATM)",
          "Ajuda a reduzir dores faciais e cefaleias tensionais",
          "Previne trincas e fraturas dentárias a longo prazo",
        ],
        whatsappMessage:
          "Olá! Gostaria de agendar uma avaliação para Bruxismo e Placa Miorrelaxante.",
      },
    ],
    faqHighlight: {
      question: "Quando devo suspeitar que preciso de uma placa miorrelaxante?",
      answer:
        "Sinais comuns incluem acordar com a mandíbula cansada ou dolorida, dores de cabeça tensionais frequentes, sensibilidade dentária ou desgaste visível nas pontas dos dentes.",
    },
    whatsappMessage:
      "Olá! Gostaria de agendar uma avaliação sobre Bruxismo e Placa Miorrelaxante.",
  },
];
