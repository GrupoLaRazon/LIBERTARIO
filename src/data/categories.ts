export const categories = [
  'titulares',
  'policiales',
  'actualidad',
  'mundo',
  'mas',
] as const;

export type Category = (typeof categories)[number];

export const categoryMeta: Record<
  Category,
  { label: string; description: string }
> = {
  titulares: {
    label: 'Titulares',
    description: 'Las noticias más importantes del día en el Perú.',
  },
  policiales: {
    label: 'Policiales',
    description: 'Seguridad ciudadana, investigaciones y sucesos en Lima y provincias.',
  },
  actualidad: {
    label: 'Actualidad',
    description: 'Política, economía y acontecimientos que marcan la agenda nacional.',
  },
  mundo: {
    label: 'Mundo',
    description: 'Internacional, diplomacia y noticias globales con impacto en el Perú.',
  },
  mas: {
    label: 'Más',
    description: 'Cultura, deportes, opinión y reportajes especiales.',
  },
};

export function getCategoryLabel(category: Category): string {
  return categoryMeta[category].label;
}
