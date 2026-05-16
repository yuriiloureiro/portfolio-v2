export type ProjectType = "institutional" | "ecommerce" | "landing" | "webapp";

export type Locale = "pt" | "en";

export interface ProjectContent {
  tagline: string;
  challenge: string;
  solution: string;
}

export interface Project {
  slug: string;
  title: string;
  client: string;
  type: ProjectType;
  year: number;
  stack: string[];
  liveUrl?: string;
  repoUrl?: string;
  thumb: string; // path em /public
  accentColor: string; // hex pra placeholder/glow
  featured: boolean;
  order: number;
  content: Record<Locale, ProjectContent>;
}

export const projects: Project[] = [
  {
    slug: "scaramuzzi",
    title: "Imobiliária Scaramuzzi",
    client: "Scaramuzzi",
    type: "institutional",
    year: 2026,
    stack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://scaramuzzi-v2.vercel.app/",
    repoUrl: "https://github.com/yuriiloureiro/scaramuzzi-v2",
    thumb: "/work/scaramuzzi.webp",
    accentColor: "#C9A66B",
    featured: true,
    order: 1,
    content: {
      pt: {
        tagline: "Reengenharia premium para o mercado imobiliário do Rio.",
        challenge:
          "Criar uma experiência digital sofisticada que traduzisse a exclusividade e o luxo do mercado imobiliário do Rio de Janeiro, superando as limitações de uma plataforma legada e elevando a percepção da marca através de uma interface moderna, responsiva e de alta performance.",
        solution:
          "Desenvolvi uma reengenharia completa da interface utilizando Next.js, com foco em performance extrema, design minimalista e micro-interações refinadas via Framer Motion. A solução integra um sistema de busca inteligente na Hero Section que filtra imóveis em tempo real, garantindo uma experiência fluida e intuitiva tanto no desktop quanto no mobile, reforçando o posicionamento premium da Scaramuzzi.",
      },
      en: {
        tagline: "Premium re-engineering for Rio's real estate market.",
        challenge:
          "Build a sophisticated digital experience that conveys the exclusivity and luxury of Rio de Janeiro's real estate market, overcoming the limitations of a legacy platform and elevating brand perception through a modern, responsive and high-performance interface.",
        solution:
          "I led a full interface re-engineering with Next.js, focused on extreme performance, minimal design and refined micro-interactions via Framer Motion. The solution integrates a smart search in the Hero that filters listings in real time, delivering a fluid and intuitive experience on desktop and mobile, reinforcing Scaramuzzi's premium positioning.",
      },
    },
  },
  {
    slug: "caixinha-2026",
    title: "Caixinha 2026",
    client: "Família Loureiro",
    type: "webapp",
    year: 2026,
    stack: ["React", "PHP", "MySQL", "Tailwind CSS"],
    liveUrl: "https://caixinha2026.loureiroyuri.com.br/",
    repoUrl: "https://github.com/yuriiloureiro/caixinha2026",
    thumb: "/work/caixinha-2026.webp",
    accentColor: "#D4F542",
    featured: true,
    order: 2,
    content: {
      pt: {
        tagline: "Dashboard full-stack de economia coletiva familiar.",
        challenge:
          "Transformar uma planilha complexa de economia coletiva familiar em uma interface simples, intuitiva e motivadora. O desafio era garantir que qualquer membro da família, independente da afinidade com tecnologia, pudesse acompanhar suas metas e contribuições sem necessidade de treinamento.",
        solution:
          "Desenvolvimento de um dashboard Full-Stack em tempo real com sistema de autenticação multi-usuário. A solução inclui tracking visual de contribuições mensais, controle dinâmico de cotas e cálculos automáticos de metas e pendências. O foco total foi em usabilidade mobile-first e clareza visual para estimular o engajamento dos participantes.",
      },
      en: {
        tagline: "Full-stack dashboard for collective family savings.",
        challenge:
          "Turn a complex collective-savings spreadsheet into a simple, intuitive and motivating interface. The challenge was to make sure any family member — regardless of tech affinity — could track goals and contributions without any onboarding.",
        solution:
          "Built a real-time Full-Stack dashboard with multi-user authentication. It includes visual tracking of monthly contributions, dynamic quota control and automatic goal/pending calculations. Full focus on mobile-first usability and visual clarity to drive engagement.",
      },
    },
  },
  {
    slug: "maiara-martins",
    title: "Dra. Maiara Martins",
    client: "Maiara Martins Psi",
    type: "landing",
    year: 2025,
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    liveUrl: "https://site-dra-maiara.vercel.app/",
    repoUrl: "https://github.com/yuriiloureiro/site-dra-maiara",
    thumb: "/work/maiara-martins.webp",
    accentColor: "#A78BFA",
    featured: true,
    order: 3,
    content: {
      pt: {
        tagline: "Landing de conversão para neuropsicologia clínica.",
        challenge:
          "O desafio central foi transpor a autoridade acadêmica e a experiência clínica da Dra. Maiara para o ambiente digital. Era necessário criar uma interface que equilibrasse o acolhimento psicológico (essencial para pacientes em busca de ajuda) com o profissionalismo técnico da neuropsicologia, garantindo que a jornada do usuário fosse intuitiva e gerasse confiança imediata para o agendamento.",
        solution:
          "Desenvolvi uma plataforma de alta performance utilizando Next.js, focada em uma experiência clean e minimalista. A solução incluiu a reestruturação completa do conteúdo (copywriting) para uma linguagem mais acessível, a implementação de seções estratégicas de benefícios e diagnósticos, e a integração de um fluxo de conversão direta via WhatsApp, reduzindo a fricção entre o interesse do paciente e o primeiro contato clínico.",
      },
      en: {
        tagline: "Conversion-driven landing page for clinical neuropsychology.",
        challenge:
          "Translate Dr. Maiara's academic authority and clinical experience into a digital environment. The interface had to balance psychological warmth (essential for patients seeking help) with the technical professionalism of neuropsychology, building immediate trust for booking.",
        solution:
          "I built a high-performance platform with Next.js, focused on a clean and minimal experience. It included a full content restructuring (copywriting) for a more accessible tone, strategic benefit/diagnosis sections and a direct WhatsApp conversion flow that reduces friction between interest and the first clinical contact.",
      },
    },
  },
  {
    slug: "auramax",
    title: "Auramax",
    client: "Auramax Audio",
    type: "landing",
    year: 2024,
    stack: [
      "WordPress 6.4+",
      "Elementor Pro",
      "Custom JS",
      "Advanced CSS",
      "PHP",
    ],
    liveUrl: "https://auramax.loureiroyuri.com.br/",
    repoUrl: "https://github.com/yuriiloureiro/auramax-landingpage",
    thumb: "/work/auramax.webp",
    accentColor: "#F97316",
    featured: true,
    order: 4,
    content: {
      pt: {
        tagline: "Landing premium de produto com WordPress + custom code.",
        challenge:
          "Criar uma landing page de produto premium que transmita qualidade sonora através de design visual, sem possibilidade de teste físico. Desafio adicional: replicar animações complexas de Framer usando stack WordPress tradicional.",
        solution:
          "Arquitetura híbrida WordPress com custom code otimizado. Destaque para: animações CSS keyframes customizadas, JavaScript para interações complexas (sticky header com blur, smooth scroll, carrosséis infinitos) e otimização mobile-first com tratamento específico de viewport.",
      },
      en: {
        tagline: "Premium product landing built with WordPress + custom code.",
        challenge:
          "Create a premium product landing page that conveys sound quality through visual design alone — with no physical demo. Additional challenge: replicate complex Framer-style animations using a traditional WordPress stack.",
        solution:
          "Hybrid WordPress architecture with optimized custom code. Highlights: custom CSS keyframe animations, JavaScript for complex interactions (blurred sticky header, smooth scroll, infinite carousels) and mobile-first optimization with specific viewport handling.",
      },
    },
  },
];

// Helpers
export function getFeaturedProjects() {
  return projects.filter((p) => p.featured).sort((a, b) => a.order - b.order);
}

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getAllSlugs() {
  return projects.map((p) => p.slug);
}

export function getNextProject(currentSlug: string) {
  const list = getFeaturedProjects();
  const currentIndex = list.findIndex((p) => p.slug === currentSlug);
  if (currentIndex === -1) return list[0];
  const nextIndex = (currentIndex + 1) % list.length;
  return list[nextIndex];
}
