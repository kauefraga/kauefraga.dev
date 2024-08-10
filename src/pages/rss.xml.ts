import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context: { site: string }) {
  const posts = await getCollection('blog', ({ data }) => !data.draft);

  const items = posts
    .sort((a, b) => +b.data.pubDate! - +a.data.pubDate!)
    .map(({ slug, data, body }) => ({
      title: data.title,
      pubDate: data.pubDate,
      description: data.description,
      customData: data.customData,
      link: `/blog/${slug}/`,
      body,
    }));

  return rss({
    title: 'Blog do Kauê',
    description: 'ssss',
    site: context.site,
    items,
  });
}
