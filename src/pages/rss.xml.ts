import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';

const parser = new MarkdownIt();

export async function GET(context: { site: string }) {
  const posts = await getCollection('blog', ({ data }) => !data.draft);

  const items = posts
    .sort((a, b) => +b.data.pubDate! - +a.data.pubDate!)
    .map(({ id, data, body }) => ({
      link: `/blog/${id}/`,
      content: sanitizeHtml(parser.render(body!), {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img']),
      }),
      ...data,
    }));

  return rss({
    title: 'Blog do Kauê',
    description: 'ssss',
    site: context.site,
    items,
  });
}
