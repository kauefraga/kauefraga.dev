import fs from 'fs';
import path from 'path';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const FOLDER_PATH = './src/content/blog';

function createMarkdownFile(title: string, articleIdea: string) {
  const now = new Date().toISOString();
  const fileName = `${title.toLowerCase().replace(/\s+/g, '-')}.md`;
  const filePath = path.join(FOLDER_PATH, fileName);

  const frontMatter = `---
title: '${title}'
pubDate: ${now}
author: 'Kauê Fraga Rodrigues <rkauefraga@gmail.com>'
draft: true
---

Só dale, escritor!

${articleIdea}
`;

  fs.writeFileSync(filePath, frontMatter);
  console.log(`File created successfully: ${filePath}`);
  console.log(`Happy writing!`);
}

const GREEN = '\x1b[92m';
const RESET = '\x1b[0m';

rl.question(`${RESET}Enter the title of the new article: ${GREEN}`, (title) => {
  process.stdout.write(RESET); // reset color without new line

  rl.question(`${RESET}What's your idea for this post? ${GREEN}`, (articleIdea) => {
    console.log(RESET); // new line and reset color

    createMarkdownFile(title, articleIdea);
    rl.close();
  });
});
