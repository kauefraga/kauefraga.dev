import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

function findDraftArticles(folderPath: string): string[] {
  const draftArticles: string[] = [];

  function traverseDirectory(currentPath: string) {
    const files = fs.readdirSync(currentPath);

    for (const file of files) {
      const filePath = path.join(currentPath, file);
      const stats = fs.statSync(filePath);

      if (stats.isDirectory()) {
        traverseDirectory(filePath);
      } else if (path.extname(file).toLowerCase() === '.md') {
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const { data } = matter(fileContent);

        if (data.draft === true) {
          draftArticles.push(filePath);
        }
      }
    }
  }

  traverseDirectory(folderPath);
  return draftArticles;
}

function extractArticleTitle(articlePath: string) {
  const title = path.basename(articlePath, '.md').replaceAll('-', ' ');

  if (title === 'index') {
    return path.dirname(articlePath).split('/').pop()?.replaceAll('-', ' ');
  }

  return title;
}

const folderPath = './src/content/blog';
const draftArticles = findDraftArticles(folderPath);

const GRAY = '\x1b[90m';
const RESET = '\x1b[0m';

console.log('Draft articles:\n');
draftArticles.forEach((article) =>
  console.log(`> ${extractArticleTitle(article)} ${GRAY}(${article})${RESET}`),
);
