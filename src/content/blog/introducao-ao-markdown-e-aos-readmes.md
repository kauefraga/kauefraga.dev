---

title: 'Introdução ao markdown e aos READMEs'
pubDate: 2024-03-18T12:00:00.000Z
author: 'Kauê Fraga Rodrigues <rkauefraga@gmail.com>'
---

Olá, tudo certo?

Hoje vou falar sobre o que é um README, o que é markdown, como escrever um README básico e por que você deveria aprender a sintaxe markdown e escrever READMEs. Bora?

## O que é um README

Começando pelo começo, você provavelmente já viu projetos de outros desenvolvedores ou instalou um projeto, uma solução ou um jogo de origem duvidosa e se deparou com aquele arquivo `README`, `README.txt` ou `README.md`. Caso nunca tenha visto, tudo bem.

A tradução de *read me* é "leia me" e, resumidamente, um README é um arquivo que fica junto de um projeto e serve como um cartão de visita para o mesmo, contendo informações sobre o projeto como: objetivo, capacidade, instalação, documentação em geral, licença, etc.

Deu pra perceber a importância dos READMEs?

Um README geralmente é escrito em markdown, uma linguagem de marcação assim como o HTML. Dito isso, a forma mais comum desse arquivo é essa: `README.md`.

## O que é markdown

Markdown é uma linguagem de marcação simplificada e de fácil uso. O primeiro processador de markdown foi o próprio [Markdown](https://daringfireball.net/projects/markdown) feito pelo John Gruber com a linguagem de programação Perl. Ele tinha o objetivo de ser uma ferramenta de conversão de markdown para HTML.

Atualmente existem vários processadores Markdown e variações (ou *supersets*) da sintaxe, permitindo novas marcações e diferentes saídas. Por exemplo, de markdown para PDF.

Veja um resumo ou *cheatsheet* da sintaxe markdown:

```md
# Isto é um título ou um h1 em HTML
## Isto é um subtítulo ou um h2 em HTML
### Você já entendeu... vai até o h6 ou ######

Isto é um parágrafo e a palavra **negrito** está em negrito, enquanto a palavra *itálico* está em itálico. ~~riscado~~ e [link](https://example.com).

- eu sou um item em uma lista desordenada
- eu sou outro item na lista desordenada
- eu sou mais um item

> Uma citação blablablablablabla

1. eu sou o primeiro item de uma lista ordenada
2. eu sou o segundo item
3. eu sou o terceiro!

![este é o texto alternativo de uma imagem](https://example.com/imagem.png)

---

Estou abaixo do divisor horizontal.
```

E o resultado:

## Isto é um subtítulo ou um h2 em HTML

### Você já entendeu... vai até o h6 ou ######

Isto é um parágrafo e a palavra **negrito** está em negrito, enquanto a palavra *itálico* está em itálico. ~~riscado~~ e [link](https://example.com).

- eu sou um item em uma lista desordenada
- eu sou outro item na lista desordenada
- eu sou mais um item

> Uma citação blablablablablabla

1. eu sou o primeiro item de uma lista ordenada
2. eu sou o segundo item
3. eu sou o terceiro!

![este é o texto alternativo de uma imagem](https://example.com/imagem.png)

---

Estou abaixo do divisor horizontal.

Uma ótima referência para você se aprofundar é o [Markdown Guide](https://www.markdownguide.org).

## Por que aprender markdown e escrever READMEs

Escrever é algo muito importante na vida de um desenvolvedor. Todo projeto, decisão ou solução deveria ter uma documentação que defina, explique e/ou demonstre essas coisas.

Saber markdown facilita muito sua vida ao oferecer uma sintaxe simples e ser convertido em HTML, além de ser quase uma convenção (se não for) no quesito escrita técnica.

## Resumo (tl;dr)

Markdown é uma linguagem de marcação que tem uma sintaxe simples, pode ser convertida para HTML e, com isso, ela pode ser usada para escrever textos formatados. Por ser fácil de ler e escrever, o markdown tem uma alta adoção na comunidade de desenvolvimento de software.

O README é como um cartão de visitas e serve para expor os detalhes mais relevantes de um projeto. Pode ser qualquer tipo de arquivo mas normalmente é escrito usando markdown, então um README geralmente tem a extensão `.md` para demonstrar isso.

Para conhecer a sintaxe, veja essa *cheatsheet*: [Markdown Cheat Sheet](https://www.markdownguide.org/cheat-sheet).

**Fun fact**: esse texto foi escrito inteiramente em markdown e faz parte de uma série sobre READMEs :)

Obrigado por ler ❤
