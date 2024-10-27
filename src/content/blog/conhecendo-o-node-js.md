---
title: 'Conhecendo o Node JS'
pubDate: 2024-10-26T20:56:12.328Z
author: 'Kauê Fraga Rodrigues <rkauefraga@gmail.com>'
---

Neste final de semana eu decidi revisar um pouco sobre o JavaScript e o Node. Isso porque eu esbarrei na definição enquanto testava um [projeto que apareceu no feed do meu GitHub](https://diciotech.netlify.app/).

Também planejo estudar alguns tópicos como o event loop e as promises mais profundamente, então uma revisão cai muito bem.

Aqui vão minhas anotações.

## O que é Node.js

É um ambiente (runtime) que permite a execução de JavaScript pelo lado do servidor. Com ele é possível criar aplicações que executam fora do navegador (aplicações back end, mobile, desktop...).

Só pra relembrar, JavaScript é uma linguagem de programação interpretada e multiparadigma criada para adicionar interatividade nas páginas web, ou seja, ela foi desenvolvida com o intuito de ser usada no navegador.

Foi o Node que trouxe essa possibilidade de executar JavaScript fora do navegador.

Hoje em dia já existem outros ambientes de execução de JavaScript como Deno ou Bun, mas o Node foi o pioneiro, lançado em 2009.

A capacidade de desenvolver tanto o front end quanto o back end de uma aplicação usando apenas uma linguagem de programação é fantástica. É uma das grandes vantagens do JavaScript, embora alguns profissionais questionem a utilização no lado do servidor.

Pensando no lema "Write once, run anywhere" do Java, temos o nosso: **learn once, run everywhere**.

O Node é baseado no [motor V8](https://nodejs.org/en/learn/getting-started/the-v8-javascript-engine), que é o mesmo do Google Chrome, ele que lê e executa o código JavaScript no navegador. Uma característica importante é que um motor JavaScript é independente do navegador em que ele executa, essa característica foi o que permitiu a criação do Node e dos outros ambientes.

Existem outros motores de JavaScript:

- [SpiderMonkey](https://spidermonkey.dev/), usado pelo Firefox
- [JavaScriptCore](https://docs.webkit.org/Deep%20Dive/JSC/JavaScriptCore.html), utilizado pelo Safari e pelo Bun
- [Chakra](https://github.com/chakra-core/ChakraCore), era usado pelo Edge, que usa o motor [V8 atualmente](https://support.microsoft.com/en-us/help/4501095/download-the-new-microsoft-edge-based-on-chromium)

Eu disse anteriormente que o JavaScript é considerado uma linguagem interpretada, porém os motores possuem uma etapa de compilação just-in-time (JIT), levando-o a ser uma linguagem interpretada e compilada.

Importante ressaltar que o Node não tem acesso as APIs de manipulação do DOM, `window`, `localStorage`, etc. No lugar dessas ele tem sua biblioteca padrão que permite ter acesso ao sistema de arquivos, escutar requisições HTTP, gerar UUIDs, emitir eventos e tantas outras coisas.

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

O Node vem equipado com o gerenciador de pacotes NPM (Node Package Manager) que serve para organizar, instalar e resolver as dependências de projetos.

[NPM](https://www.npmjs.com/) também é o registrador de pacotes padrão, é onde as bibliotecas e frameworks são registrados para serem utilizados posteriormente.

Só para esclarecer, existe a ferramenta de gerenciamento de pacotes NPM e o registrador desses pacotes, que também se chama NPM. [Mais sobre aqui](https://docs.npmjs.com/about-npm).

Alternativas à ferramenta são [yarn](https://yarnpkg.com/) e [pnpm](https://pnpm.io/). O ambiente [Bun também tem um gerenciador de pacotes](https://bun.sh/docs/cli/install) compatível com o Node e que tem a proposta de ser o substituto mais rápido entre as opções que citei antes.

Falando do registrador, esse ano surgiu uma espécie de alternativa moderna que diz ser feita para especialmente pensando em Typescript e ESM, o [JSR](https://jsr.io/). Só a título de conhecimento, continuo usando e recomendo o NPM.

Resumindo, se você está começando seus estudos de JavaScript e Node, **use o Node e o NPM**.

Depois você decide se vai usar o yarn porque é mais bonitinho, o pnpm pois é mais rápido ou o Bun porque é o melhor (🔥).

## Instalando o Node

Na instalação você pode seguir o [tutorial do site](https://nodejs.org/en/download/prebuilt-installer) mas eu recomendo usar um gerenciador de versões porque vai facilitar bastante caso você precise trocar de versão.

Acredito que esses sejam os principais:

- [nvm](https://github.com/nvm-sh/nvm)
- [fnm](https://github.com/Schniz/fnm)
- [volta](https://volta.sh/)
- [n](https://github.com/tj/n)

Eu uso o [asdf](https://asdf-vm.com/guide/getting-started.html) junto com o [plugin do node](https://github.com/asdf-vm/asdf-nodejs). O asdf é um gerenciador de versões genérico, com ele basta adicionar o plugin da ferramenta/runtime que você quer gerenciar e pronto.

Prefiro não colocar nada aqui para que não fique desatualizado, minha dica é: use um gerenciador de versões. Abra a documentação dos que citei e leia.

## Novas funcionalidades

Não são novas novas, mas são legais e não existem desde o começo. Perdão pelo bait...

Tem um arquivo `.env` e quer carregar os valores? [Carregamento de variáveis de ambiente](https://nodejs.org/en/learn/command-line/how-to-read-environment-variables-from-nodejs).

```js
// Digamos que você tenha a váriavel SECRET_KEY=jsmelhorquejava

// $ node env.js
console.log(process.env.SECRET_KEY) // undefined

// $ node --env-file=.env env.js
console.log(process.env.SECRET_KEY) // jsmelhorquejava
```

Quer escrever testes sem ter que adicionar dependências como [Jest](https://jestjs.io/), [Mocha](https://mochajs.org/) ou [Vitest](https://vitest.dev/)? O executor de testes nativo foi introduzido de [forma estável na versão 20.x](https://nodejs.org/docs/latest-v20.x/api/test.html) .

```js
import assert from 'assert'
import { it, describe } from 'test'

describe('user entity', () => {
  it('should create user instance', () => {
    // ...
  })
})
```

Quer executar TypeScript? Usa Bun! Brincadeiras à parte, é possível executar código `.ts` usando Node, [ainda experimental](https://nodejs.org/en/learn/typescript/run-natively).

```sh
# Usando o Node V22.6.0 pra cima
node --experimental-strip-types tsisawesome.ts
```

Por enquanto é isso, pretendo ir atualizando essa revisão pra cobrir mais alguns tópicos que vou revisar, além do que é event loop e sua importância.

Um fato divertido é que eu desenvolvi meu primeiro servidor HTTP usando Node e foi com ele que descobri que gostava de desenvolvimento back end, um caminho sem volta.

Obrigado por ler!
