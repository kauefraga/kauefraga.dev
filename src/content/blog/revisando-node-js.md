---
title: 'Revisando Node JS'
pubDate: 2024-10-26T20:56:12.328Z
author: 'Kauê Fraga Rodrigues <rkauefraga@gmail.com>'
---

Neste final de semana eu decidi revisar um pouco sobre o JavaScript e o Node. Isso porque eu esbarrei na definição enquanto testava um [projeto que apareceu no feed do meu GitHub](https://diciotech.netlify.app/).

Também planejo estudar alguns tópicos como o event loop e as promises mais profundamente, então uma revisão cai muito bem.

Aqui vão minhas anotações.

## O que é Node

É um ambiente (runtime) que permite a execução de JavaScript pelo lado do servidor. Com ele é possível criar aplicações que executam fora do navegador (aplicações back end, mobile, desktop...).

Só pra relembrar, JavaScript é uma linguagem de programação interpretada e multiparadigma criada para adicionar interatividade nas páginas web, ou seja, ela foi desenvolvida com o intuito de ser usada no navegador.

Hoje em dia já existem outros ambientes de execução de JavaScript como Deno ou Bun, mas o Node foi o pioneiro, lançado em 2009.

A possibilidade de desenvolver tanto o front end quanto o back end de uma aplicação usando apenas uma linguagem de programação é fantástica. Essa capacidade é uma das grandes vantagens do JavaScript, embora alguns profissionais questionem a utilização no lado do servidor.

Pensando no lema "Write once, run anywhere" do Java, temos o nosso: **learn once**, create everything.

O Node é baseado no [motor V8 do Google Chrome](https://nodejs.org/en/learn/getting-started/the-v8-javascript-engine), ele que lê e executa o código JavaScript no navegador. Uma característica importante é que um motor JavaScript é independente do navegador em que ele executa, o que permitiu a criação do Node e dos outros ambientes.

Existem outros motores de JavaScript:

- Firefox usa o SpiderMonkey
- Safari usa o JavaScriptCore
- Edge usava o Chakra e usa o [V8 atualmente](https://support.microsoft.com/en-us/help/4501095/download-the-new-microsoft-edge-based-on-chromium)

O JavaScript é considerado uma linguagem interpretada mas os motores possuem uma etapa de compilação just-in-time (JIT), levando-o a ser uma linguagem interpretada e compilada.

Importante ressaltar que o Node não tem acesso as APIs de manipulação do DOM, `window`, etc. No lugar dessas ele tem sua biblioteca padrão que permite ter acesso ao sistema de arquivos, escutar requisições HTTP, gerar UUIDs, emitir eventos e tantas outras coisas.

```js
// ❌
const element = document.getElementById('js-in-server')
console.log(element.textContent)

// ✅
import fs from 'fs'

fs.readFile('js-is-really-cool.md', 'utf-8', (err, content) => {
  console.log(content)
})
```

O Node vem equipado com o gerenciador de pacotes NPM (Node Package Manager) que serve para organizar, instalar e resolver as dependências de projetos. NPM também é o registrador de pacotes padrão, é onde as bibliotecas e frameworks são registrados para serem utilizador posteriormente.

Só para esclarecer, existe a ferramenta de gerenciamento de pacotes NPM e o registrador desses pacotes, que também se chama NPM. [Mais sobre aqui](https://docs.npmjs.com/about-npm).

Alternativas à ferramenta são [yarn](https://yarnpkg.com/) e [pnpm](https://pnpm.io/). O ambiente [Bun também tem um gerenciador de pacotes](https://bun.sh/docs/cli/install) compatível com o Node e que tem a proposta de ser o substituto mais rápido entre as opções que citei antes.

Falando do registrador, recentemente surgiu uma espécie de alternativa moderna que diz ser feita para Typescript e ESM, o [JSR](https://jsr.io/).

Algumas "novas" funcionalidades bem legais que lembro foram adicionadas no Node:

- [Carregamento de variáveis de ambiente (.env)](https://nodejs.org/en/learn/command-line/how-to-read-environment-variables-from-nodejs)
- Executor de testes, introduzido de [forma estável na versão 20.x](https://nodejs.org/docs/latest-v20.x/api/test.html)
- Execução de typescript, [ainda experimental](https://nodejs.org/en/learn/typescript/run-natively)

Por enquanto é isso, pretendo atualizar essa revisão pra cobrir o que é event loop e sua importância.

Um fato divertido é que eu desenvolvi meu primeiro servidor HTTP usando Node e foi com ele que descobri que gostava de back end.

Obrigado por ler!
