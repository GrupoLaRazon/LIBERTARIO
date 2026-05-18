# Libertario

Periódico digital peruano construido con [Astro](https://astro.build) y [Tailwind CSS](https://tailwindcss.com).

## Requisitos

- Node.js 20+
- npm, pnpm o yarn

## Instalación

```bash
cd ~/Desktop/LIBERTARIO
npm install
```

## Desarrollo

```bash
npm run dev
```

Abre [http://localhost:4321](http://localhost:4321).

## Producción

```bash
npm run build
npm run preview
```

## Estructura

```
src/
├── components/     # UI reutilizable (Header, ArticleCard, SEO…)
├── content/        # Artículos en Markdown (Content Collections)
├── data/           # Configuración del sitio y navegación
├── layouts/        # Plantillas base
├── pages/          # Rutas (portada, categorías, artículos)
├── styles/         # CSS global + Tailwind
└── utils/          # Helpers para artículos
```

## Publicar artículos

Crea un archivo `.md` en `src/content/articulos/` con frontmatter YAML (`title`, `description`, `pubDate`, `category`, etc.).

## SEO

- `lang="es-PE"` y meta geo para Perú
- Open Graph y Twitter Cards
- JSON-LD (`NewsMediaOrganization`, `NewsArticle`)
- Configura `site` en `astro.config.mjs` con tu dominio final
