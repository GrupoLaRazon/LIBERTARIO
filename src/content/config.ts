import { defineCollection, z } from 'astro:content';

const articulos = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Redacción Libertario'),
    category: z.enum([
      'titulares',
      'policiales',
      'actualidad',
      'mundo',
      'mas',
    ]),
    image: z
      .object({
        src: z.string(),
        alt: z.string(),
      })
      .optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { articulos };
