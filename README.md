# [kauefraga.dev](https://kauefraga.dev/) [![Bluesky: @kauefraga.dev](https://img.shields.io/badge/bluesky-%40kauefraga.dev-blue)](https://bsky.app/profile/kauefraga.dev) ![Discord: kauefraga](https://img.shields.io/badge/discord-kauefraga-5865F2)

Site pessoal de Kauê Fraga Rodrigues, desenvolvedor de software, especialista em back end com TypeScript e Node.js.

###### Destaques

- [Blog](https://kauefraga.dev/blog/) onde se encontram artigos sobre opiniões, tecnologias e projetos do autor
- [Projetos](https://kauefraga.dev/projetos) onde é possível conhecer alguns dos principais projetos do autor

<sub>Os artigos podem ser encontrados no [dev.to](https://dev.to/kauefraga) e no [tabnews](http://tabnews.com.br/kauefraga) também.</sub>

## Arquitetura

Foi escolhido o framework [Astro](https://astro.build/) para construir este site porque

- É baseado na tríade Web (HTML5, CSS3 e JS), o que facilita o aprendizado de quem já conhece o ecossistema
- Tem mecanismo de geração de sites estáticos (SSG), essencial para construção do blog de forma simples e eficiente
- É focado na experiência do desenvolvedor com uma boa documentação e excelente ferramenta para executar os projetos em desenvolvimento e fazer o build

Além das várias integrações convenientes (react, tailwindcss, astro-icon, astro-rss) e guias de implantação fáceis de seguir, cobrindo diferentes necessidades.

Sobre o ambiente de produção, o website está implantado na plataforma [Cloudflare](https://www.cloudflare.com/) usando o serviço Cloudflare Pages. Novas implantações são feitas de forma manual usando a ferramenta Wrangler da Cloudflare.

## Como rodar localmente

É necessário ter o [Bun](https://bun.sh/) instalado na sua máquina.

Primeiro instale as dependências:

```sh
bun install
```

Em seguida, inicie o servidor de desenvolvimento:

```sh
bun dev
```

> [!NOTE]
> O ambiente de desenvolvimento inclui artigos marcados como rascunho, cujos também podem ser encontrados no diretório [`src/content/blog`](src/content/blog/).

## Scripts para o escritor

Para criar um novo artigo incluindo o cabeçalho com título, data atual, autor e o modo rascunho:

```sh
bun scripts/create-draft.ts
```

Para identificar os artigos em rascunho:

```sh
bun scripts/find-drafts.ts
```

## Contribuindo

Achou algum erro de escrita, um link quebrado ou qualquer tipo de erro? Pode abrir [uma issue](https://github.com/kauefraga/kauefraga.dev/issues/new/choose).

Ideias de tópicos para escrever são super bem-vindas :)

## Licença

Este projeto está sob a licença MIT - Veja a [LICENÇA](LICENSE) para mais informações.

Gostou do design do site ou alguma coisa em específico? Fique à vontade para fazer um fork do projeto ou se inspirar nele.
