# [kauefraga.dev](https://kauefraga.dev/) [![Bluesky: @kauefraga.dev](https://img.shields.io/badge/bluesky-%40kauefraga.dev-blue)](https://bsky.app/profile/kauefraga.dev) ![Discord: kauefraga](https://img.shields.io/badge/discord-kauefraga-5865F2)

Site pessoal de Kauê Fraga Rodrigues, desenvolvedor de software, especialista em back end com TypeScript e NodeJS.

## Arquitetura

Eu escolhi o framework [Astro](https://astro.build/) para construir este site porque

- Tem sintaxe baseada em HTML, CSS e JavaScript puros, o que facilitou meu aprendizado
- Tem geração de sites estáticos (SSG), que me permitiu criar um blog eficiente
- Tem várias integrações convenientes (react, tailwindcss, astro-icon, astro-rss)
- É focado na experiência do desenvolvedor com uma boa documentação, guias de implantação fáceis de seguir e para vários ambientes, além da excelente ferramenta para executar projetos em desenvolvimento e fazer o build

Os artigos estão no diretório [`src/content/blog`](src/content/blog/), você pode ler artigos que ainda são rascunhos... 👀

```sh
bun scripts/find-drafts.ts
```

Eu também posto meus artigos no [dev.to](https://dev.to/kauefraga) e no [tabnews](http://tabnews.com.br/kauefraga).

## Como rodar localmente

É necessário ter o [Bun](https://bun.sh/) instalado na sua máquina.

Primeiro instale as dependências:

```sh
bun install
```

Inicie o servidor de desenvolvimento:

```sh
bun dev
```

> [!NOTE]
> O ambiente de desenvolvimento inclui artigos marcados como rascunho.

Sobre o ambiente de produção, atualmente o website está implantado na plataforma [Cloudflare](https://www.cloudflare.com/), mais especificamente, usando o serviço Cloudflare Pages. Decidi fazer as implantações manualmente usando a ferramenta Wrangler da Cloudflare.

## Contribuindo

Achou algum erro de escrita, um link quebrado ou qualquer tipo de erro? Sinta-se à vontade para abrir [uma issue](https://github.com/kauefraga/kauefraga.dev/issues/new/choose). Da mesma forma para sugerir um tópico para eu abordar.

Quer adicionar alguma funcionalidade, refatorar o código ou fazer uma melhoria? Faça um fork do repositório, adicione commits com mensagens descritivas e envie o pull request :)
