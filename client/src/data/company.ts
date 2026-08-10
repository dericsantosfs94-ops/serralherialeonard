/**
 * Estilo: Esmeralda & Ouro (ideas.md)
 * Dados centrais da Vidraçaria e Serralheria Leonard + catálogo de fotos reais.
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
  featured?: boolean;
}

export const IMAGES = {
  owner: "/manus-storage/5174908402084285518_556bb897.jpg",
  loja: "/manus-storage/foto_1_2fa9a0d5.jpg",
  foto2: "/manus-storage/foto_2_4c0a738c.jpg",
  foto3: "/manus-storage/foto_3_cbe3f7e6.jpg",
  foto4: "/manus-storage/foto_4_cb5f29e2.jpg",
  foto5: "/manus-storage/foto_5_f9aa0e75.jpg",
  foto6: "/manus-storage/foto_6_cb11c2a1.jpg",
  foto7: "/manus-storage/foto_7_c1b79269.jpg",
  foto8: "/manus-storage/foto_8_170fee2a.jpg",
  foto9: "/manus-storage/foto_9_6b0a96d5.jpg",
  foto10: "/manus-storage/foto_10_ca584340.jpg",
  foto11: "/manus-storage/foto_11_09ea142a.jpg",
  foto12: "/manus-storage/foto_12_df1e89cf.jpg",
  foto13: "/manus-storage/foto_13_cb80d9f3.jpg",
  foto14: "/manus-storage/foto_14_293daafb.jpg",
  foto15: "/manus-storage/foto_15_6dbb25c1.jpg",
  foto16: "/manus-storage/foto_16_7bae5b2f.jpg",
  foto17: "/manus-storage/foto_17_04885167.jpg",
  foto18: "/manus-storage/foto_18_3657e416.jpg",
  foto19: "/manus-storage/foto_19_ed8e64ad.jpg",
  foto20: "/manus-storage/foto_20_465f9ec9.jpg",
  foto21: "/manus-storage/foto_21_0cf07432.jpg",
  foto22: "/manus-storage/foto_22_525813c2.jpg",
  foto23: "/manus-storage/foto_23_3f4fd8af.jpg",
  foto24: "/manus-storage/foto_24_dfdb8eee.jpg",
  foto25: "/manus-storage/foto_25_f43a46c7.jpg",
  foto26: "/manus-storage/foto_26_f7d5aea7.jpg",
  foto27: "/manus-storage/foto_27_9b63e57f.jpg",
  foto28: "/manus-storage/foto_28_c84737de.jpg",
  logo: "/manus-storage/logo_leonard_d2dfb0c1.png",
  textureEmerald: "/manus-storage/texture_emerald_f3dec480.png",
  textureCharcoal: "/manus-storage/texture_charcoal_7f15195c.png",
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
    // ---- PORTÕES ----
    {
      id: "portao-preto-1",
      title: "Portão Basculante Preto com Faixa Inox",
      location: "Magé - RJ",
      category: "portoes",
      image: IMAGES.foto10,
      description: "Portão basculante em ferro com acabamento preto fosco e detalhes em inox. Fabricação, pintura e instalação completas.",
      featured: true,
    },
    {
      id: "portao-preto-2",
      title: "Portão Basculante Reforçado",
      location: "Magé - RJ",
      category: "portoes",
      image: IMAGES.foto11,
      description: "Mesmo projeto com estrutura reforçada para uso intenso, garantindo segurança e durabilidade.",
    },
    {
      id: "portao-correr",
      title: "Portão de Correr em Alumínio",
      location: "Magé - RJ",
      category: "portoes",
      image: IMAGES.foto12,
      description: "Portão de correr branco em alumínio com trilho inferior, prático e resistente à corrosão.",
    },
    {
      id: "portao-entrega",
      title: "Entrega e Instalação em Obra",
      location: "Região de Magé - RJ",
      category: "portoes",
      image: IMAGES.foto15,
      description: "Transporte e instalação do portão pronto na residência do cliente, com equipe própria.",
    },
    {
      id: "portao-instalado",
      title: "Portão Branco Após Instalação",
      location: "Magé - RJ",
      category: "portoes",
      image: IMAGES.foto16,
      description: "Portão branco de alumínio instalado e ajustado, integrando-se à fachada da residência.",
    },
    {
      id: "gradil-cobogo",
      title: "Gradil e Cobogó em Alumínio",
      location: "Magé - RJ",
      category: "portoes",
      image: IMAGES.foto14,
      description: "Gradil e painéis cobogó em alumínio brancos com instalação na calçada da residência.",
    },
    // ---- VIDROS / COBERTURAS / GUARDA-CORPOS ----
    {
      id: "cobertura-laminada-1",
      title: "Cobertura em Vidro Laminado",
      location: "Magé - RJ",
      category: "vidros",
      image: IMAGES.foto20,
      description: "Cobertura de garagem em vidro laminado com estrutura metálica, iluminação natural e proteção UV.",
      featured: true,
    },
    {
      id: "cobertura-laminada-2",
      title: "Pérgola de Vidro Laminado",
      location: "Magé - RJ",
      category: "vidros",
      image: IMAGES.foto21,
      description: "Pérgola com vidro laminado sobre área de garagem, unindo elegância e segurança.",
    },
    {
      id: "cobertura-garagem",
      title: "Cobertura de Garagem em Vidro",
      location: "Magé - RJ",
      category: "vidros",
      image: IMAGES.foto9,
      description: "Cobertura de garagem com estrutura de vidro e aço, acabamento escuro sofisticado.",
    },
    {
      id: "cobertura-casa",
      title: "Cobertura de Vidro com Piscina",
      location: "Magé - RJ",
      category: "vidros",
      image: IMAGES.foto19,
      description: "Cobertura em vidro e estrutura metálica integrando o quintal e a área da piscina.",
    },
    {
      id: "guarda-corpo-1",
      title: "Guarda-Corpo de Vidro com Corrimão Inox",
      location: "Magé - RJ",
      category: "vidros",
      image: IMAGES.foto26,
      description: "Guarda-corpo em vidro laminado com corrimão inox, instalação em escada interna residencial.",
    },
    {
      id: "guarda-corpo-2",
      title: "Guarda-Corpo em Vidro e Aço Escuro",
      location: "Magé - RJ",
      category: "vidros",
      image: IMAGES.foto28,
      description: "Guarda-corpo com painéis de vidro e estrutura escura, com iluminação embutida na escada.",
    },
    {
      id: "guarda-corpo-3",
      title: "Escada com Guarda-Corpo em Vidro",
      location: "Magé - RJ",
      category: "vidros",
      image: IMAGES.foto27,
      description: "Guarda-corpo de vidro com corrimão inox ao longo de escada interna, acabamento impecável.",
    },
    // ---- ESQUADRIAS / DIVISÓRIAS ----
    {
      id: "esquadria-preta",
      title: "Esquadria de Alumínio Preto",
      location: "Magé - RJ",
      category: "esquadrias",
      image: IMAGES.foto13,
      description: "Esquadria de alumínio com acabamento preto fosco e vidro espelhado, vista interna do projeto.",
    },
    {
      id: "divisoria-obra",
      title: "Divisórias em Alumínio — Projeto Comercial",
      location: "Magé - RJ",
      category: "esquadrias",
      image: IMAGES.foto4,
      description: "Divisórias de alumínio cinza em obra comercial, montadas com precisão pela equipe.",
    },
    {
      id: "cobogo-estrutura",
      title: "Estrutura de Cobogó em Alumínio",
      location: "Magé - RJ",
      category: "esquadrias",
      image: IMAGES.foto3,
      description: "Montagem de estrutura cúbica com painéis cobogó em alumínio, projeto especial sob medida.",
    },
    {
      id: "divisoria-forro",
      title: "Divisória e Revestimento Interno",
      location: "Magé - RJ",
      category: "esquadrias",
      image: IMAGES.foto5,
      description: "Revestimento e divisória interna em obra, com acabamento limpo e nivelado.",
    },
    // ---- COBERTURAS / PERGOLADOS ----
    {
      id: "pergolado-1",
      title: "Pergolado em Alumínio Branco",
      location: "Magé - RJ",
      category: "coberturas",
      image: IMAGES.foto17,
      description: "Pergolado estrutural em alumínio branco projetando a fachada residencial com elegância.",
      featured: true,
    },
    {
      id: "pergolado-2",
      title: "Montagem de Pergolado",
      location: "Magé - RJ",
      category: "coberturas",
      image: IMAGES.foto18,
      description: "Equipe instalando o pergolado em alumínio sobre a laje da residência.",
    },
    // ---- BASTIDORES / OFICINA ----
    {
      id: "oficina-corte",
      title: "Corte e Preparação na Oficina",
      location: "Oficina Leonard - Fragoso",
      category: "bastidores",
      image: IMAGES.foto6,
      description: "Corte e preparação de perfis de alumínio na oficina, o começo de cada projeto.",
    },
    {
      id: "oficina-perfis",
      title: "Estoque de Perfis de Alumínio",
      location: "Oficina Leonard - Fragoso",
      category: "bastidores",
      image: IMAGES.foto8,
      description: "Estoque organizado de perfis brancos prontos para fabricação sob medida.",
    },
    {
      id: "instalacao-obra",
      title: "Instalação de Vidro em Obra",
      location: "Obra em Magé - RJ",
      category: "bastidores",
      image: IMAGES.foto22,
      description: "Instalação de painéis de vidro na cobertura, com equipe em andaime.",
    },
    {
      id: "instalacao-vidro",
      title: "Assentamento de Esquadria em Vidro",
      location: "Obra em Magé - RJ",
      category: "bastidores",
      image: IMAGES.foto23,
      description: "Assentamento de esquadria com vidro, trabalho manual e preciso.",
    },
    {
      id: "obra-andaime",
      title: "Obra em Andamento",
      location: "Obra em Magé - RJ",
      category: "bastidores",
      image: IMAGES.foto25,
      description: "Acompanhamento da obra com andaimes e estrutura de vidro em execução.",
    },
    {
      id: "equipe-obra",
      title: "O Leo na Obra",
      location: "Obra em Magé - RJ",
      category: "bastidores",
      image: IMAGES.foto24,
      description: "Leonardo acompanhando de perto cada etapa da instalação.",
    },
    {
      id: "loja-fachada",
      title: "Nossa Loja em Fragoso",
      location: "Fragoso, Magé - RJ",
      category: "fachada",
      image: IMAGES.loja,
      description: "A fachada da Vidraçaria e Serralheria Leonard na Av. Automóvel Club, Km 61.",
    },
  ],
};

export const waLink = (msg: string) =>
  `https://wa.me/${companyData.whatsappClean}?text=${encodeURIComponent(msg)}`;
