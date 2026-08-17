/**
 * Estilo: Esmeralda & Ouro (ideas.md)
 * Dados centrais da Vidraçaria e Serralheria Leonard + catálogo de fotos reais.
 * 
 * AUDITORIA 2026: Removidas 16 imagens com incompatibilidade foto/descrição ou baixa qualidade.
 * Mantidas apenas imagens comerciais de alta qualidade com enquadramento profissional.
 */

export interface ServiceItem {
  id: string;
  title: string;
  category: "aluminio" | "vidros" | "serralheria" | "outros";
  shortDesc: string;
  description: string;
  iconName: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  location: string;
  category: "portoes" | "vidros" | "coberturas" | "esquadrias" | "bastidores" | "fachada";
  image: string;
  description: string;
  objectPosition?: string;
  featured?: boolean;
}

export const IMAGES = {
  owner: "/assets/brand/fundador-retrato.jpg",
  loja: "/assets/brand/fachada-historica.jpg",
  foto2: "/assets/obras/foto_2.jpg",
  foto3: "/assets/obras/foto_3.jpg",
  foto4: "/assets/obras/foto_4.jpg",
  foto5: "/assets/obras/foto_5.jpg",
  foto6: "/assets/obras/foto_6.jpg",
  foto7: "/assets/obras/foto_7.jpg",
  foto8: "/assets/obras/foto_8.jpg",
  foto9: "/assets/obras/foto_9.jpg",
  foto10: "/assets/obras/foto_10.jpg",
  foto11: "/assets/obras/foto_11.jpg",
  foto12: "/assets/obras/foto_12.jpg",
  foto13: "/assets/obras/foto_13.jpg",
  foto14: "/assets/obras/foto_14.jpg",
  foto15: "/assets/obras/foto_15.jpg",
  foto16: "/assets/obras/foto_16.jpg",
  foto17: "/assets/obras/foto_17.jpg",
  foto18: "/assets/obras/foto_18.jpg",
  foto19: "/assets/obras/foto_19.jpg",
  foto20: "/assets/obras/foto_20.jpg",
  foto21: "/assets/obras/foto_21.jpg",
  foto22: "/assets/obras/foto_22.jpg",
  foto23: "/assets/obras/foto_23.jpg",
  foto24: "/assets/obras/foto_24.jpg",
  foto25: "/assets/obras/foto_25.jpg",
  foto26: "/assets/obras/foto_26.jpg",
  foto27: "/assets/obras/foto_27.jpg",
  foto28: "/assets/obras/foto_28.jpg",
  logo: "/assets/logo-512.png",
  textureEmerald: "/assets/texture_emerald_preview.png",
  textureCharcoal: "/assets/texture_charcoal_preview.png",
} as const;

export const companyData: {
  name: string;
  displayName: string;
  alternativeName: string;
  experienceYears: number;
  whatsapp: string;
  whatsappClean: string;
  whatsappLink: string;
  defaultWhatsappMessage: string;
  phoneDisplay: string;
  email: string;
  instagramHandle: string;
  instagramUrl: string;
  address: {
    street: string;
    number: string;
    km: string;
    neighborhood: string;
    city: string;
    state: string;
    zip: string;
    fullAddress: string;
    googleMapsUrl: string;
  };
  services: ServiceItem[];
  portfolio: PortfolioItem[];
} = {
  name: "Vidraçaria e Serralheria Leonard",
  displayName: "Vidraçaria e Serralheria Leonard",
  alternativeName: "Serralheria Leonard",
  experienceYears: 30,
  whatsapp: "+55 21 96428-7307",
  whatsappClean: "5521964287307",
  whatsappLink: "https://wa.me/5521964287307",
  defaultWhatsappMessage:
    "Olá! Vim pelo site da Vidraçaria e Serralheria Leonard e gostaria de solicitar um orçamento.",
  phoneDisplay: "(21) 96428-7307",
  email: "leonardalcantara064@gmail.com",
  instagramHandle: "@serralheria_leonard",
  instagramUrl: "https://www.instagram.com/serralheria_leonard/",
  address: {
    street: "Av. Automóvel Club",
    number: "2641",
    km: "Km 61",
    neighborhood: "Fragoso",
    city: "Magé",
    state: "RJ",
    zip: "25900-000",
    fullAddress: "Av. Automóvel Club, 2641 - Km 61 - Fragoso - Magé - RJ",
    googleMapsUrl: "https://maps.google.com/?q=Av.+Automovel+Club+2641+Fragoso+Mage+RJ",
  },
  services: [
    {
      id: "esquadrias-aluminio",
      title: "Esquadrias de Alumínio",
      category: "aluminio",
      shortDesc: "Soluções em esquadrias de alumínio para diferentes necessidades e projetos.",
      description:
        "Fabricação e instalação sob medida de janelas, portas, basculantes e painéis em alumínio com alto padrão de acabamento, durabilidade e resistência.",
      iconName: "Maximize2",
    },
    {
      id: "vidros",
      title: "Vidros",
      category: "vidros",
      shortDesc: "Soluções em vidro para diferentes aplicações residenciais e comerciais.",
      description:
        "Vidros temperados, comuns e especiais cortados e instalados com precisão e total segurança para janelas, portas, tampos e fachadas.",
      iconName: "Columns",
    },
    {
      id: "vidros-laminados",
      title: "Vidros Laminados",
      category: "vidros",
      shortDesc: "Vidros laminados para diferentes necessidades, segurança e conforto acústico.",
      description:
        "Segurança reforçada e proteção UV com vidros laminados de alta qualidade, ideais para coberturas, sacadas, fachadas e vãos amplos.",
      iconName: "Layers",
    },
    {
      id: "box-banheiro",
      title: "Box para Banheiro",
      category: "vidros",
      shortDesc: "Box e soluções em vidro para banheiros com acabamento impecável.",
      description:
        "Modelos em vidro temperado com perfis resistentes à corrosão, proporcionando elegância, praticidade e otimização de espaço para o seu banheiro.",
      iconName: "Grid",
    },
    {
      id: "box-blindex",
      title: "Box Blindex",
      category: "vidros",
      shortDesc: "Box em vidro temperado com padrão e certificação de qualidade.",
      description:
        "Segurança e design sofisticado com sistemas de correr ou de abrir originais Blindex, sob medida para o seu projeto.",
      iconName: "Shield",
    },
    {
      id: "portoes",
      title: "Portões",
      category: "serralheria",
      shortDesc: "Fabricação robusta e soluções completas em portões metálicos.",
      description:
        "Portões de correr, basculantes e pivotantes em ferro e alumínio, projetados para garantir segurança, durabilidade e estética impecável para a sua entrada.",
      iconName: "DoorClosed",
    },
    {
      id: "automacao-portoes",
      title: "Automação de Portões",
      category: "serralheria",
      shortDesc: "Soluções de automação e motores para portões automáticos.",
      description:
        "Instalação e configuração de motores e sistemas de abertura automática para maior comodidade, agilidade e segurança no seu dia a dia.",
      iconName: "Cpu",
    },
    {
      id: "pintura-eletrostatica",
      title: "Pintura Eletrostática",
      category: "serralheria",
      shortDesc: "Acabamento de alta durabilidade e proteção para estruturas metálicas.",
      description:
        "Processo avançado de pintura que garante acabamento uniforme, resistência superior a intempéries, ferrugem e desgaste.",
      iconName: "Paintbrush",
    },
    {
      id: "divisorias",
      title: "Divisórias",
      category: "outros",
      shortDesc: "Soluções em divisórias para divisão inteligente de ambientes.",
      description:
        "Divisórias em vidro, Eucatex ou alumínio para escritórios, comércios e residências, otimizando espaços com rapidez e limpeza.",
      iconName: "LayoutGrid",
    },
    {
      id: "forro-pvc",
      title: "Forro de PVC",
      category: "outros",
      shortDesc: "Soluções práticas e duráveis em forro de PVC.",
      description:
        "Instalação profissional de forros em PVC para isolamento térmico, acabamento estético superior e fácil manutenção em residências e comércios.",
      iconName: "Home",
    },
    {
      id: "piso-laminado",
      title: "Piso Laminado",
      category: "outros",
      shortDesc: "Soluções em piso laminado com instalação rápida e limpa.",
      description:
        "Beleza, aconchego e praticidade para salas, quartos e escritórios, com grande variedade de tons e acabamentos madeirados.",
      iconName: "Square",
    },
    {
      id: "ferro-aluminio-geral",
      title: "Ferro e Alumínio em Geral",
      category: "serralheria",
      shortDesc: "Serviços personalizados e sob medida em ferro e alumínio.",
      description:
        "Grades de proteção, corrimãos, escadas, estruturas metálicas e reparos especializados executados por profissionais com mais de 30 anos de experiência.",
      iconName: "Wrench",
    },
  ],
  portfolio: [
    // ---- PORTÕES (CURADORIA FINAL) ----
    {
      id: "portao-pivota-preto",
      title: "Portão Preto com Lâminas e Entrada Social",
      location: "Magé - RJ",
      category: "portoes",
      image: "/assets/portoes/portao-preto-impacto.jpg",
      objectPosition: "center 52%",
      description: "Portão de correr e entrada social em aço preto, com desenho horizontal, presença marcante e acabamento seguro para a fachada.",
      featured: true,
    },
    {
      id: "portao-basculante-preto",
      title: "Portão Branco com Lâminas Horizontais",
      location: "Magé - RJ",
      category: "portoes",
      image: "/assets/portoes/portao-branco-slats.jpg",
      objectPosition: "center 52%",
      description: "Portão branco de lâminas horizontais, com ventilação, privacidade e acabamento limpo para valorizar a entrada da residência.",
      featured: true,
    },
    {
      id: "portao-branco-laminas",
      title: "Portão Branco de Garagem com Porta Social",
      location: "Magé - RJ",
      category: "portoes",
      image: "/assets/portoes/portao-branco-garagem.jpg",
      objectPosition: "center 48%",
      description: "Portão branco de garagem com porta social integrada, linhas horizontais e composição funcional para uso diário.",
    },
    // ---- VIDROS & ESQUADRIAS ----
    {
      id: "esquadria-preta",
      title: "Esquadria de Alumínio Preto",
      location: "Magé - RJ",
      category: "esquadrias",
      image: "/assets/obras/foto_2.jpg",
      description: "Janela de correr em alumínio com acabamento preto fosco instalada em residência, proporcionando elegância e funcionalidade.",
    },
    {
      id: "divisoria-comercial",
      title: "Divisórias em Alumínio — Projeto Comercial",
      location: "Magé - RJ",
      category: "esquadrias",
      image: "/assets/obras/foto_11.jpg",
      description: "Instalação de divisórias de alumínio e vidro para separação de ambientes comerciais com transparência e acabamento impecável.",
    },
    // ---- COBERTURAS & PERGOLADOS ----
    {
      id: "cobertura-vidro-garagem",
      title: "Cobertura em Vidro Laminado — Garagem",
      location: "Magé - RJ",
      category: "coberturas",
      image: "/assets/obras/foto_25.jpg",
      description: "Estrutura de cobertura em alumínio branco com painéis de vidro laminado, criando ambiente protegido, iluminado e elegante para garagem e lazer.",
      featured: true,
    },
    {
      id: "cobertura-fachada-branca",
      title: "Pergolado Branco em Fachada",
      location: "Magé - RJ",
      category: "coberturas",
      image: "/assets/obras/foto_23.jpg",
      description: "Estrutura de pergolado em alumínio branco com vidro temperado, integrando proteção solar e visual moderno à fachada residencial.",
    },
    {
      id: "cobertura-garagem",
      title: "Cobertura de Garagem",
      location: "Magé - RJ",
      category: "coberturas",
      image: "/assets/obras/foto_26.jpg",
      description: "Cobertura de garagem executada sob medida, com estrutura resistente e acabamento que protege e valoriza o imóvel.",
    },
  ],
};
