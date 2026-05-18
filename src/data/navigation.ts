export interface NavItem {
  label: string;
  href: string;
}

export const mainNav: NavItem[] = [
  { label: 'Hoy', href: '/' },
  { label: 'Titulares', href: '/titulares/' },
  { label: 'Policiales', href: '/policiales/' },
  { label: 'Actualidad', href: '/actualidad/' },
  { label: 'Mundo', href: '/mundo/' },
  { label: 'Más', href: '/mas/' },
];

/** Temas del día — enlaces editables desde redacción */
export const todayTopics: NavItem[] = [
  { label: 'Tema 1', href: '/actualidad/' },
  { label: 'Tema 2', href: '/titulares/' },
  { label: 'Tema 3', href: '/mundo/' },
  { label: 'Tema 4', href: '/mas/' },
];

export const siteConfig = {
  name: 'Libertario',
  tagline: 'El periódico digital del Perú',
  description:
    'Libertario: periódico digital peruano. Titulares, policiales, actualidad, mundo y más. Información para el Perú.',
  url: 'https://libertario.pe',
  locale: 'es_PE',
  twitter: '@libertario_pe',
  email: 'redaccion@libertario.pe',
  logo: '/logo-libertario.png',
  city: 'Lima',
} as const;
