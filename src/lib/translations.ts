export type Language = "pt" | "en";

export const translations = {
  pt: {
    nav: {
      work: "Projetos",
      about: "Sobre",
      stack: "Stack",
      contact: "Contato",
      cta: "Vamos conversar",
    },
    hero: {
      status: "Disponível para novas oportunidades",
      name: "Yuri Loureiro",
      role: "Front-end Developer",
      bio: "Desenvolvedor front-end com background em UX/UI, criando interfaces que unem design e performance.",
      location: "Brasil — aberto a remoto",
      experience: "4 anos de experiência",
      languages: "Português, Inglês",
      email: "contato@loureiroyuri.com",
      cta_cv: "Baixar CV",
      cta_call: "Agendar conversa",
      title: "Construindo experiências digitais com propósito.",
      subtitle:
        "Sou desenvolvedor front-end focado em criar produtos web modernos, acessíveis e centrados no usuário — combinando React, Next.js e uma forte base em design.",
      cta_primary: "Ver projetos",
      cta_secondary: "Sobre mim",
      badge1_title: "Olhar de Designer",
      badge1_sub: "UX/UI aplicado ao código",
      badge2_title: "Código Limpo",
      badge2_sub: "Escalável e mantível",
      badge3_title: "Foco em Performance",
      badge3_sub: "Otimizado e veloz",
      badge4_title: "Entrega Confiável",
      badge4_sub: "4 anos no mercado",
    },
    footer: {
      rights: "Todos os direitos reservados.",
      built: "Construído com Next.js, Tailwind e muito café.",
    },
  },
  en: {
    nav: {
      work: "Work",
      about: "About",
      stack: "Stack",
      contact: "Contact",
      cta: "Let's talk",
    },
    hero: {
      status: "Open to new opportunities",
      name: "Yuri Loureiro",
      role: "Front-end Developer",
      bio: "Front-end developer with a UX/UI background, building interfaces that blend design and performance.",
      location: "Brazil — open to remote",
      experience: "4 years of experience",
      languages: "Portuguese, English",
      email: "contato@loureiroyuri.com",
      cta_cv: "Download CV",
      cta_call: "Schedule a call",
      title: "Building digital experiences with purpose.",
      subtitle:
        "I'm a front-end developer focused on building modern, accessible and user-centered web products — combining React, Next.js and a strong design foundation.",
      cta_primary: "View projects",
      cta_secondary: "About me",
      badge1_title: "Designer's Eye",
      badge1_sub: "UX/UI applied to code",
      badge2_title: "Clean Code",
      badge2_sub: "Scalable and maintainable",
      badge3_title: "Performance Focus",
      badge3_sub: "Optimized and fast",
      badge4_title: "Reliable Delivery",
      badge4_sub: "4 years in the market",
    },
    footer: {
      rights: "All rights reserved.",
      built: "Built with Next.js, Tailwind and lots of coffee.",
    },
  },
};

export type Translations = typeof translations.pt;
