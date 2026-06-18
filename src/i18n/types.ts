export type Locale = "es" | "en";

export interface ProjectCopy {
  title: string;
  description: string;
}

export interface OpinionCopy {
  opinion: string;
}

export interface SiteCopy {
  locale: Locale;
  lang: string;
  alternateLocale: Locale;
  alternateLabel: string;
  alternatePath: string;
  meta: {
    title: string;
    description: string;
  };
  nav: {
    brand: string;
    homeAria: string;
    about: string;
    stack: string;
    experience: string;
    projects: string;
    contact: string;
    cta: string;
    aria: string;
  };
  hero: {
    badge: string;
    eyebrow: string;
    name: string;
    role: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
  };
  about: {
    imageAlt: string;
    caption: string;
    kicker: string;
    title: string;
    role: string;
    paragraphs: string[];
    cv: string;
  };
  stack: {
    kicker: string;
    title: string;
    description: string;
    aria: string;
    imageAlt: string;
  };
  experience: {
    kicker: string;
    title: string;
    services: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
  };
  projects: {
    kicker: string;
    title: string;
    visit: string;
    fallbackTags: string[];
    items: Record<string, ProjectCopy>;
  };
  opinions: {
    kicker: string;
    title: string;
    items: Record<string, OpinionCopy>;
  };
  contact: {
    kicker: string;
    title: string;
    description: string;
    phone: string;
    email: string;
    socialsAria: string;
    form: {
      name: string;
      email: string;
      phone: string;
      message: string;
      submit: string;
      sending: string;
      error: string;
      success: string;
    };
  };
  footer: {
    aria: string;
    contact: string;
    rights: string;
  };
}
