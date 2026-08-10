export interface ServiceItem {
  id: string;
  title: string;
  category: 'aluminio' | 'vidros' | 'serralheria' | 'outros';
  shortDesc: string;
  description: string;
  iconName: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'vidros' | 'aluminio' | 'serralheria' | 'portões' | 'outros';
  image: string;
  description: string;
}

export interface CompanyData {
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
}

export const companyData: CompanyData = {
  name: "Vidraçaria e Serralheria Leonard",
  displayName: "Vidraçaria e Serralheria Leonard",
  alternativeName: "Serralheria Leonard",
  experienceYears: 30,
  whatsapp: "+55 21 96428-7307",
  whatsappClean: "5521964287307",
  whatsappLink: "https://wa.me/5521964287307",
  defaultWhatsappMessage: "Olá! Vim pelo site da Vidraçaria e Serralheria Leonard e gostaria de solicitar um orçamento.",
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
      description: "Fabricação e instalação sob medida de janelas, portas, basculantes e painéis em alumínio com alto padrão de acabamento, durabilidade e resistência.",
      iconName: "Maximize2"
    },
    {
      id: "vidros",
      title: "Vidros",
      category: "vidros",
      shortDesc: "Soluções em vidro para diferentes aplicações residenciais e comerciais.",
      description: "Vidros temperados, comuns e especiais cortados e instalados com precisão e total segurança para janelas, portas, tampos e fachadas.",
      iconName: "Columns"
    },
    {
      id: "vidros-laminados",
      title: "Vidros Laminados",
      category: "vidros",
      shortDesc: "Vidros laminados para diferentes necessidades, segurança e conforto acústico.",
      description: "Segurança reforçada e proteção UV com vidros laminados de alta qualidade, ideais para coberturas, sacadas, fachadas e vãos amplos.",
      iconName: "Layers"
    },
    {
      id: "box-banheiro",
      title: "Box para Banheiro",
      category: "vidros",
      shortDesc: "Box e soluções em vidro para banheiros com acabamento impecável.",
      description: "Modelos em vidro temperado com perfis resistentes à corrosão, proporcionando elegância, praticidade e otimização de espaço para o seu banheiro.",
      iconName: "Grid"
    },
    {
      id: "box-blindex",
      title: "Box Blindex",
      category: "vidros",
      shortDesc: "Box em vidro temperado com padrão e certificação de qualidade.",
      description: "Segurança e design sofisticado com sistemas de correr ou de abrir originais Blindex, sob medida para o seu projeto.",
      iconName: "Shield"
    },
    {
      id: "portoes",
      title: "Portões",
      category: "serralheria",
      shortDesc: "Fabricação robusta e soluções completas em portões metálicos.",
      description: "Portões de correr, basculantes e pivotantes em ferro e alumínio, projetados para garantir segurança, durabilidade e estética impecável para a sua entrada.",
      iconName: "DoorClosed"
    },
    {
      id: "automacao-portoes",
      title: "Automação de Portões",
      category: "serralheria",
      shortDesc: "Soluções de automação e motores para portões automáticos.",
      description: "Instalação e configuração de motores e sistemas de abertura automática para maior comodidade, agilidade e segurança no seu dia a dia.",
      iconName: "Cpu"
    },
    {
      id: "pintura-eletrostatica",
      title: "Pintura Eletrostática",
      category: "serralheria",
      shortDesc: "Acabamento de alta durabilidad e proteção para estruturas metálicas.",
      description: "Processo avançado de pintura que garante acabamento uniforme, resistência superior a intempéries, ferrugem e desgaste.",
      iconName: "Paintbrush"
    },
    {
      id: "divisorias",
      title: "Divisórias",
      category: "outros",
      shortDesc: "Soluções em divisórias para divisão inteligente de ambientes.",
      description: "Divisórias em vidro, Eucatex ou alumínio para escritórios, comércios e residências, otimizando espaços com rapidez e limpeza.",
      iconName: "LayoutGrid"
    },
    {
      id: "forro-pvc",
      title: "Forro de PVC",
      category: "outros",
      shortDesc: "Soluções práticas e duráveis em forro de PVC.",
      description: "Instalação profissional de forros em PVC para isolamento térmico, acabamento estético superior e fácil manutenção em residências e comércios.",
      iconName: "Home"
    },
    {
      id: "piso-laminado",
      title: "Piso Laminado",
      category: "outros",
      shortDesc: "Soluções em piso laminado com instalação rápida e limpa.",
      description: "Beleza, aconchego e praticidade para salas, quartos e escritórios, com grande variedade de tons e acabamentos madeirados.",
      iconName: "Square"
    },
    {
      id: "ferro-aluminio-geral",
      title: "Ferro e Alumínio em Geral",
      category: "serralheria",
      shortDesc: "Serviços personalizados e sob medida em ferro e alumínio.",
      description: "Grades de proteção, corrimãos, escadas, estruturas metálicas e reparos especializados executados por profissionais com mais de 30 anos de experiência.",
      iconName: "Wrench"
    }
  ],
  portfolio: [
    {
      id: "proj-1",
      title: "Esquadria de Alumínio Moderna",
      category: "aluminio",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80",
      description: "Projeto realizado pela Leonard - Esquadrias em alumínio sob medida."
    },
    {
      id: "proj-2",
      title: "Portão Basculante Reforçado",
      category: "portões",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1000&q=80",
      description: "Projeto realizado pela Leonard - Portão metálico automatizado."
    },
    {
      id: "proj-3",
      title: "Box para Banheiro em Vidro Temperado",
      category: "vidros",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80",
      description: "Projeto realizado pela Leonard - Box elegante em vidro."
    },
    {
      id: "proj-4",
      title: "Estrutura e Grades em Ferro",
      category: "serralheria",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80",
      description: "Projeto realizado pela Leonard - Serralheria de alta durabilidade."
    },
    {
      id: "proj-5",
      title: "Fachada em Vidro Laminado",
      category: "vidros",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80",
      description: "Projeto realizado pela Leonard - Vidros laminados para fachadas."
    },
    {
      id: "proj-6",
      title: "Corrimão e Guarda-Corpo em Alumínio",
      category: "aluminio",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80",
      description: "Projeto realizado pela Leonard - Acabamento refinado."
    }
  ]
};
