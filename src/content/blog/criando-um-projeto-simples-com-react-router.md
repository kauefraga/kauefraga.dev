---
title: 'Criando um projeto simples com react router'
pubDate: 2025-04-05T16:15:34.565Z
author: 'Kauê Fraga Rodrigues <rkauefraga@gmail.com>'
---

Olá! Como vai?

Já pensou em criar um projeto com algumas telas e operações no local storage usando o react das massas mas se viu perdido procurando a melhor forma de criar o projeto, instalar as dependências e configurá-las? Sim?

Eu também! São inúmeras opções mesmo com certas tecnologias já definidas... usando Bun ou não? `create-vite`? Next.js? `create-react-router`? Zustand ou redux? TailwindCSS com postcss ou a própria CLI? Shadcn UI, Radix UI, Daisy UI...? 😵‍💫

Nesse final de semana estou construindo [um site com o treino do Sung Jinwoo de Solo Leveling](https://github.com/kauefraga/player-leveling) (adoro o anime inclusive) e estava perdido nessas opções que mencionei para começar e terminar o projeto.

Este guia vai te ajudar quanto configuração das tecnologias que eu escolhi:

- TypeScript e Bun
- React
- React Router Declarativo
- TailwindCSS
- Eslint

Pensando nestes pontos:

- Projeto relativamente pequeno
- Sem necessidade de server-side rendering
- Estilização fácil e, de preferência, já pronta
- Single-page application
- Dados no local storage ou search params

## Base do projeto

Começaremos com o projeto React, vamos criá-lo usando Bun e a ferramenta Vite com o seguinte comando:

```sh
bun create vite projeto-simples --template react-ts
```

Adicionaremos o [React Router](https://reactrouter.com/start/declarative/installation) para fazer o roteamento das "páginas" no lado do cliente.

```sh
bun add react-router
```

Para finalizar esta parte precisamos configurar o modo declarativo do React Router com 3 linhas de código, no arquivo `src/main.tsx`:

```tsx
import { BrowserRouter } from 'react-router';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
```

O diff atualmente fica assim.

```diff
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
+ import { BrowserRouter } from 'react-router';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
+    <BrowserRouter>
      <App />
+    </BrowserRouter>
  </StrictMode>
);
```

## Estilos

Agora, seguindo o [guia do TailwindCSS](https://tailwindcss.com/docs/installation/using-vite), vamos colocá-lo para usarmos as classes utilitárias.

```sh
bun add tailwindcss @tailwindcss/vite
```

No arquivo `vite.config.ts`

```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    // ...outros plugins
    react(),
    tailwindcss(),
  ],
});
```

No arquivo `src/index.css`

```css
@import "tailwindcss";
```

Em uma postagem futura vou abordar formas de implementar temas, porém existem duas páginas importantes desse **tema** (ba-dum-tss): [dark-mode](https://tailwindcss.com/docs/dark-mode) e [themes variables](https://tailwindcss.com/docs/theme).

## Local storage hook

Também vamos adicionar o hook para acessar e manipular o localStorage. No arquivo `src/hooks/use-local-storage.ts`:

```ts
import { useState } from 'react';

export function useLocalStorage<T extends string | boolean | number | object>(
  key: string,
  initialValue: T
): [T, (value: T) => void] {
  const storedValue = localStorage.getItem(key);
  const parsedStoredValue = storedValue ? (JSON.parse(storedValue) as T) : initialValue;

  const [value, setInternalValue] = useState(parsedStoredValue);

  const setValue = (v: T) => {
    localStorage.setItem(key, JSON.stringify(v));
    setInternalValue(v);
  };

  return [value, setValue];
}
```

Explicando o que este hook faz na **assinatura** e no **bloco**:

1. Pega um tipo genérico T para melhorar o autocomplete e ter uma API com type-safety (obs.: não precisa ser definido explicitamente porque pode ser inferido pelo parâmetro `initialValue`)
2. Pega os parâmetros `key` (chave do que queremos buscar no local storage) e `initialValue` (valor inicial caso não exista um atrelado à chave)
3. No bloco da função, pega o valor armazenado no local storage usando o método `getItem(key)` e depois, caso exista um valor (string), faz o parsing dele com `JSON.parse` e aceita que ele é do tipo T (`as T`), do contrário usa o `initialValue`
4. Usa o hook useState do React para criar um estado reativo do tipo T a partir do valor guardado
5. Cria uma função para atualizar o item do local storage e o estado reativo
6. Retorna um array com o estado reativo na primeira posição e a função para altera-lo na segunda

## Linting e formatação

Depois de horas lendo sobre ferramentas conhecidas (eslint, prettier, biome) e convenções, decidi usar o eslint como linter e formatter já que ele é capaz e maduro (soluções e integrações com editores).

Para isso precisei instalar o [typescript-eslint](https://typescript-eslint.io/) e o [@stylistic/eslint-plugin](https://eslint.style/).

```sh
bun add -D typescript-eslint @stylistic/eslint-plugin
```

E a configuração `eslint.config.js` ficou assim:

```js
import stylistic from '@stylistic/eslint-plugin';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from 'typescript-eslint';

// Cria configuração do eslint
export default tseslint.config(
  tseslint.configs.strictTypeChecked, // estende as configurações estritas com checagem de tipos do typescript-eslint
  stylistic.configs.recommended, // estende as configurações recomendadas do stylistic
  stylistic.configs.customize({ semi: true }), // customiza a configuração `semi` (ponto e vírgula)
  {
    // configuração que vem do create-vite
    ignores: ['dist'],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        projectService: true, // https://typescript-eslint.io/getting-started/typed-linting
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      '@stylistic': stylistic, // adiciona o plugin stylistic
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  }
);
```

## Conclusão

Resumindo, com esse setup você deve conseguir criar pequenos projetos ou protótipos facilmente implantáveis e que não requerem um back end dedicado com API e banco dados para funcionar 100%.

Escrevi esse artigo justamente porque adoro construir projetos úteis e que não fogem desse escopo, o problema é que sempre que começo um novo projeto preciso pesquisar novamente alguns comandos, dependências e configurações.

Inclusive, aqui estão os sites:

- [Themis](https://themis.kauefraga.dev/)
- [Constantia](https://constantia.kauefraga.dev/)
- [Polvinho](https://polvinho.vercel.app/)

Muito obrigado por ter lido até aqui :green_heart:

Estou disponível para contato no [Twitter/X](https://x.com/rkauefraga), [Bluesky](https://bsky.app/profile/kauefraga.dev) e [LinkedIn](https://linkedin.com/in/kauefraga). Até a próxima!
