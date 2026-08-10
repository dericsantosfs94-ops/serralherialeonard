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
  loja: "/manus-storage/loja_nova_6b6b7ae9.jpg",
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
  portaoPreta1: "/manus-storage/portao_preta_1_5ac1dffa.jpg",
  portaoPreta2: "/manus-storage/portao_preta_2_ed11aa35.jpg",
  portaoPivotante: "/manus-storage/portao_pivotante_dddaaaf5.jpg",
  portaoBrancoCorrer: "/manus-storage/portao_branco_correr_8abacc37.jpg",
  portaoMadeira: "/manus-storage/portao_madeira_9ce1e3a0.jpg",
  portaoMadeira2: "/manus-storage/portao_madeira_2_d077e35a.jpg",
  portaoBrancoBasculante: "/manus-storage/portao_branco_basculante_ec651362.jpg",
  portaoEntregaCaminhao: "/manus-storage/portao_entrega_caminhao_0feb3583.jpg",
  vidroCobertura1: "/manus-storage/vidro_cobertura_1_060bff23.jpg",
  vidroCobertura2: "/manus-storage/vidro_cobertura_2_c67bfa64.jpg",
  vidroGuardacorpo1: "/manus-storage/vidro_guardacorpo_1_ef698bf2.jpg",
  vidroFachadaComercial: "/manus-storage/vidro_fachada_comercial_8a93161c.jpg",
  vidroBoxBanheiro: "/manus-storage/vidro_box_banheiro_a4236fbd.jpg",
  vidroGuardacorpo2: "/manus-storage/vidro_guardacorpo_2_92953863.jpg",
  vidroInstalacaoObra: "/manus-storage/vidro_instalacao_obra_84969b59.jpg",
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
      id: "portao-pivota-preto",
      title: "Portão Pivotante Preto com Faixa Inox Dourada",
      location: "Magé - RJ",
      category: "portoes",
      image: IMAGES.portaoPivotante,
      description: "Portão pivotante em alumínio preto com faixa inox dourada vertical e abertura automatizada. Projeto premium entregue do projeto à instalação.",
      featured: true,
    },
    {
      id: "portao-basculante-preto",
      title: "Portão Basculante Preto com Faixa Inox",
      location: "Magé - RJ",
      category: "portoes",
      image: IMAGES.portaoPreta1,
      description: "Portão basculante preto com detalhes em inox e portão de pedestre integrado, fabricação, pintura e instalação completas.",
      featured: true,
    },
    {
      id: "portao-basculante-frontal",
      title: "Basculante com Portão de Pedestre — Vista Frontal",
      location: "Magé - RJ",
      category: "portoes",
      image: IMAGES.portaoPreta2,
      description: "Mesmo projeto em vista completa da fachada: portão de garagem basculante ao lado da entrada de pedestres, tudo sob medida.",
    },
    {
      id: "portao-amadeirado",
      title: "Portão de Correr Amadeirado",
      location: "Magé - RJ",
      category: "portoes",
      image: IMAGES.portaoMadeira,
      description: "Portão de correr em alumínio com acabamento amadeirado (padrão wood), elegância da madeira com a durabilidade do alumínio.",
      featured: true,
    },
    {
      id: "portao-amadeirado-lateral",
      title: "Portão Amadeirado — Vista Lateral",
      location: "Magé - RJ",
      category: "portoes",
      image: IMAGES.portaoMadeira2,
      description: "Mesmo projeto em ângulo lateral, destacando as lâminas horizontais e o acabamento wood premium.",
    },
    {
      id: "portao-branco-basculante",
      title: "Portão Basculante Branco",
      location: "Magé - RJ",
      category: "portoes",
      image: IMAGES.portaoBrancoBasculante,
      description: "Portão basculante branco com faixa de vidro, instalado em residência com fachada de pedra natural.",
    },
    {
      id: "portao-corre-laminas",
      title: "Portão de Correr Branco de Lâminas",
      location: "Magé - RJ",
      category: "portoes",
      image: IMAGES.portaoBrancoCorrer,
      description: "Portão de correr branco com lâminas horizontais em alumínio, moderno, ventilado e de baixa manutenção.",
    },
    {
      id: "portao-entrega",
      title: "Entrega e Instalação com Frota Própria",
      location: "Região de Magé - RJ",
      category: "portoes",
      image: IMAGES.portaoEntregaCaminhao,
      description: "Transporte com caminhão próprio da Leonard e instalação feita pela nossa equipe, do primeiro corte ao último ajuste.",
    },
    {
      id: "portao-montagem-laminado",
      title: "Montagem de Portão com Painel de Vidro",
      location: "Magé - RJ",
      category: "portoes",
      image: IMAGES.foto20,
      description: "Equipe da Leonard instalando portão com painel de vidro laminado na residência do cliente.",
    },
    // ---- VIDROS / COBERTURAS / GUARDA-CORPOS ----
    {
      id: "portao-laminas-transporte",
      title: "Painéis de Portão em Transporte",
      location: "Região de Magé - RJ",
      category: "portoes",
      image: IMAGES.foto21,
      description: "Painéis de portão branco de lâminas transportados com segurança pela frota própria da Leonard até a obra do cliente.",
    },
    {
      id: "painel-vidro-obra",
      title: "Painéis de Vidro com Esquadria Preta — Obra em Execução",
      location: "Magé - RJ",
      category: "vidros",
      image: IMAGES.foto9,
      description: "Painéis de vidro temperado com esquadrias pretas instalados em obra comercial, mesmo em dia de chuva a equipe segue em campo.",
    },
    {
      id: "divisoria-sala-removido",
      title: "Sala Modular com Divisórias de Alumínio",
      location: "Oficina Leonard - Fragoso",
      category: "esquadrias",
      image: IMAGES.foto12,
      description: "Sala administrativa modular com divisórias de alumínio e vidro, montada na oficina para projeto comercial.",
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
    // (dois guarda-corpos anteriores removidos por usarem fotos de perfis/oficina)
    // ---- ESQUADRIAS / DIVISÓRIAS ----
    {
      id: "esquadria-preta",
      title: "Esquadria de Alumínio Preto",
      location: "Magé - RJ",
      category: "esquadrias",
      image: IMAGES.foto2,
      description: "Janela de correr em alumínio com acabamento preto fosco instalada na residência.",
    },
    {
      id: "esquadria-espelhada",
      title: "Esquadria com Vidro Espelhado",
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
    // REMOVIDO (redução da galeria): foto5 já usada no About; nova esquadria entrou em seu lugar
    {
      id: "divisoria-forro-removido",
      title: "Divisória e Revestimento Interno",
      location: "Magé - RJ",
      category: "esquadrias",
      image: IMAGES.foto5,
      description: "Revestimento e divisória interna em obra, com acabamento limpo e nivelado.",
    },
    // ---- COBERTURAS / PERGOLADOS ----
    // REMOVIDO (redução da galeria): foto23 era montagem de pergolado duplicada pela cobertura de vidro nova
    {
      id: "pergolado-amadeirado-removido",
      title: "Pergolado Amadeirado Instalado",
      location: "Magé - RJ",
      category: "coberturas",
      image: IMAGES.foto23,
      description: "Pergolado em estrutura amadeirada com cobertura de policarbonato instalado na fachada da residência.",
    },
    {
      id: "divisoria-oficina-2",
      title: "Divisórias com Vidro em Fase de Instalação",
      location: "Oficina Leonard - Fragoso",
      category: "esquadrias",
      image: IMAGES.foto11,
      description: "Divisórias com painéis de vidro e alumínio na fase final de montagem, com equipe em campo.",
    },
    {
      id: "pergolado-montagem",
      title: "Montagem de Pergolado Branco",
      location: "Magé - RJ",
      category: "coberturas",
      image: IMAGES.foto24,
      description: "Equipe da Leonard em andaime montando o pergolado em alumínio branco sobre a laje.",
    },
    {
      id: "cobertura-branca-piscina",
      title: "Cobertura Branca Integrando o Lazer",
      location: "Magé - RJ",
      category: "coberturas",
      image: IMAGES.foto25,
      description: "Cobertura em estrutura branca projetando a área de lazer e a piscina da residência.",
    },
    // ---- BASTIDORES / OFICINA ----
    {
      id: "instalacao-gradil",
      title: "Instalação de Gradil em Vidro — Dia de Chuva",
      location: "Obra em Magé - RJ",
      category: "bastidores",
      image: IMAGES.foto10,
      description: "Mesmo em dia de chuva, a equipe da Leonard em campo instalando gradil com painéis de vidro.",
    },
    {
      id: "entrega-portao-obra",
      title: "Entrega de Portão na Residência",
      location: "Magé - RJ",
      category: "bastidores",
      image: IMAGES.foto11,
      description: "Portão entregue e instalado na residência do cliente, com ajustes finos feitos pela equipe.",
    },
    {
      id: "instalacao-obra-bastidor",
      title: "Instalador da Leonard em Campo",
      location: "Obra em Magé - RJ",
      category: "bastidores",
      image: IMAGES.vidroInstalacaoObra,
      description: "Instalador com a camisa da Leonard assentando esquadria de vidro na residência do cliente, trabalho manual e preciso.",
    },
    {
      id: "equipe-obra-removido",
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
