import { getCollection, type CollectionEntry } from 'astro:content';

export type Article = CollectionEntry<'articulos'>;

export async function getPublishedArticles(): Promise<Article[]> {
  const articles = await getCollection('articulos', ({ data }) => !data.draft);
  return articles.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export async function getArticlesByCategory(
  category: Article['data']['category'],
): Promise<Article[]> {
  const articles = await getPublishedArticles();
  return articles.filter((a) => a.data.category === category);
}

export async function getFeaturedArticle(): Promise<Article | undefined> {
  const articles = await getPublishedArticles();
  return articles.find((a) => a.data.featured) ?? articles[0];
}
