/** Tajamar – TypeScript domain models */

export interface Highlight {
  id: string;
  icon: string;
  title: string;
  desc: string;
  href: string;
  colorClass: string;
}

export interface Oferta {
  id: string;
  title: string;
  ages: string;
  desc: string;
  href: string;
}

export interface NewsItem {
  id: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  href: string;
}

export interface Stat {
  id: string;
  value: number;
  suffix: string;
  label: string;
}

export interface Program {
  id: string;
  icon: string;
  title: string;
  desc: string;
  href: string;
  cta: string;
}

export interface SecretariaItem {
  id: string;
  title: string;
  desc: string;
  link: string;
  href: string;
}

export interface AccordionItem {
  id: string;
  title: string;
  content: string;
}

