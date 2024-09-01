# [kauefraga.dev](https://kauefraga.dev/) [![Bluesky: @kauefraga.dev](https://img.shields.io/badge/bluesky-%40kauefraga.dev-blue)](https://bsky.app/profile/kauefraga.dev) [![Twitter/X: @rkauefraga](https://img.shields.io/badge/twitter%2Fx-%40rkauefraga-blue)](https://x.com/rkauefraga) ![Discord: rustykaue](https://img.shields.io/badge/discord-rustykaue-5865F2)

> Aqui você vai achar meus projetos relevantes e os artigos escritos por mim, incluindo suas imagens e trechos de código.

## Arquitetura

Para construir este website eu escolhi o framework [Astro](https://astro.build/) porque

- Tem como base HTML e CSS, além de ser orientado a conteúdo (_content-driven_)
- É agnóstico a bibliotecas/frameworks de UI e tem várias integrações convenientes (react, tailwindcss, astro-icon, astro-rss)
- É focado na experiência do desenvolvedor com uma boa documentação, guias de implantação intuitivos e excelente ferramenta para executar em desenvolvimento e fazer o build

Os artigos estão no diretório [`src/content/blog`](src/content/blog/), você pode ler artigos que ainda são rascunhos... 👀

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

Sobre o ambiente de produção, atualmente o website está implantado na plataforma [Cloudflare](https://www.cloudflare.com/), mais especificamente, usando o serviço Cloudflare Pages. As implantações são acionadas automaticamente quando mudanças são adicionadas no ramo principal.

## Contribuindo

Achou algum erro de escrita, um link quebrado ou qualquer tipo de erro? Sinta-se à vontade para abrir [uma issue](https://github.com/kauefraga/kauefraga.dev/issues/new/choose). Da mesma forma para sugerir um tópico para eu abordar.

Quer adicionar alguma funcionalidade, refatorar o código ou fazer uma melhoria? Faça um fork do repositório, adicione commits com mensagens descritivas e envie o pull request :)
