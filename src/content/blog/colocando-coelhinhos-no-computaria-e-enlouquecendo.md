---

title: 'Colocando coelhinhos no computaria e enlouquecendo'
pubDate: 2024-04-06T12:00:00.000Z
author: 'Kauê Fraga Rodrigues <rkauefraga@gmail.com>'
---

Publicado originalmente no [Computaria](https://computaria.gitlab.io/blog/2024/04/06/colocando-coelhinhos-no-computaria)

Olá! Me chamo Kauê, tenho 16 anos e é um prazer estar redigindo este texto como o primeiro convidado do Computaria 😊

Eu tava no intervalo da escola, de boa, quando de repente chegou uma mensagem
na minha DM do Twitter/X. Era o [Jeff Coelho Quesado](https://twitter.com/JeffQuesado) me perguntando se eu sabia
CSS e se eu poderia colocar alguns coelhos desenhados pelo [@arorok_](https://twitter.com/arorok_)
no Computaria.

Fiquei animado porque ele estava pedindo para mim e seria minha
primeira experiência resolvendo o problema de outra pessoa com código. Por outro
lado, fiquei com o pé atrás pois eu tenho um conhecimento superficial de CSS e o
pedido do Jeff caiu como um caso de aplicação do CSS que meu conhecimento não
contempla. Mesmo com essa desvantagem clara, resolvi aceitar. Afinal não é todo
dia que alguém me pede para solucionar seu problema.

Cheguei em casa, instalei o ruby, gems e o jekylls. Clonei o Computaria e
botei pra rodar. Dando uma olhada percebi que minhas alterações seriam no
`_layouts/post.html` e no `_sass/_layout.scss`. Mexi aqui, ali e nada do que
eu queria acontecia, então decidi iniciar uma POC só com HTML e CSS.

## Trabalhando na POC

Comecei com a tag `<img />` + um WIP do coelho só para posicionar e ter uma
ideia de como ficaria porque o Jeff queria esse trabalho CSS-only.

![Coelho ao lado direito do título do post "Colocando coelhinhos no computaria e enlouquecendo"](https://computaria.gitlab.io/blog/assets/colocando-coelhinhos-no-computaria/primeira-tentativa-no-computaria.png)

O Jeff disse que poderia ficar atrás do título também e quando fui tentar fazer
isso, usei o combo `position: relative;` + `position: absolute;` + `z-index: 0 e 1;`.
Se você conhece CSS provavelmente sabe que `position: absolute;` é cilada quase
sempre.

Falei pro Jeff que cheguei perto do resultado esperado usando posição absoluta e
ele prontamente ficou com o pé atrás:

> "Absolute 😨"

> "Será que seria possível botar como um :after associado a classe do título?"

Dei uma pesquisadinha sobre o `:after` e consegui remover o posicionamento
absoluto. A primeira vitória!

```css
.post-title:after {
  position: relative;
  content: "";
  display: inline-block;
  transform: translateY(20%);
  width: 80px;
  height: 80px;
  background-image: url('caminho/para/a/imagem-do-coelho.png');
  background-size: cover;
  z-index: -1;
}
```

## Posicionando coelhos nas laterais

A primeira coisa que pensei aqui, foi: "vou usar um `background-repeat` e dar
um espacinho entre cada repetição". Depois de vários tentativas e combinações
diferentes das propriedades `background-algumacoisa` o melhor resultado foi esse:

![POC do Computaria com coelhos nas laterais, ficou bem estranho](https://computaria.gitlab.io/blog/assets/colocando-coelhinhos-no-computaria/coelhos-nas-laterais.png)

Abalou tudo! Eu não tinha entendido o que o Jeff queria com o "coelhos nas
laterais", porém certamente não era isso. Tentei, tentei e a cada teste eu entendia
menos sobre as diferenças entre as propriedades em torno do `background-repeat`.
Enlouqueci...

## Aplicando no Computaria

Voltando ao Computaria após entender algumas coisas com a POC, fui direto no
`_sass/_layout.scss` que eu comentei e adicionei aquele código ali em cima na
classe `.post-title:after`.

Rodei o Computaria com `bundle exec jekyll serve` e depois de abrir alguns posts
percebi que quando o título era grande demais o coelho podia ficar sozinho na
linha de baixo ou obstruir parte do texto acima. E agora?

Mandei pro Jeff e ele disse que o coelho podia ficar na esquerda (espelhado horizontalmente)
e aqui está a versão final do coelho no título:

```diff
- .post-title:after {
+ .post-title:before {
    position: relative;
    content: "";
    display: inline-block;
-   transform: translateY(20%);
+   transform: scaleX(-1) rotate(-15deg) translateY(20%);
    width: 80px;
    height: 80px;
    background-image: url('caminho/para/a/imagem-do-coelho.png');
    background-size: cover;
    z-index: -1;
}
```

Agora falta colocar os coelhos nas laterais. O maior desafio de todos os tempos
(para um não-especialista em CSS como eu)!

Se liga no que aconteceu, eu comecei a encarar a página do Computaria e reparei
nos ícones do lado dos metadados do artigo. Os ícones em questão são as logos do
GitLab e do [pixmeacoffee](https://github.com/bolodissenoura/pixmeacoffee) 🤩

Na hora me lembrei do fundo do dashboard do [pixmeacoffee](https://www.pixme.bio/).
Esse aqui:

![Dashboard do pixmeacoffee com vários cafés ao fundo, bem discretos](https://computaria.gitlab.io/blog/assets/colocando-coelhinhos-no-computaria/dashboard-pixmeacoffee.png)

Mandei pro Jeff e ele gostou da ideia. Peguei a arte final do coelho, desenhado
pelo artista [@arorok_](https://twitter.com/arorok_), abri um canvas no [Krita](https://krita.org/en/)
e fiz um fundo inspirado no pixmeacoffee. Se você está lendo esse post, provavelmente
pode ver o fundo que eu fiz.

Inclusive, quer me pagar um café 😅? [Pix me a coffee](https://www.pixme.bio/kauefraga)!

Obrigado por ler e ao Jeff pelo convite ❤
