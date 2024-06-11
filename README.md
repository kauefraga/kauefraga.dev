# Blog do Kauê

> Aqui você vai achar os artigos escritos por mim, incluindo suas imagens e trechos de código.

Eu também posto meus artigos no [dev.to](https://dev.to/kauefraga) e no [tabnews](http://tabnews.com.br/kauefraga).

Para construir este blog eu escolhi o [hugo](https://gohugo.io/) (um gerador de site estático) e o tema [papermod](https://github.com/adityatelange/hugo-PaperMod). Os artigos estão no diretório [`content/posts`](content/posts/), você pode ler artigos que ainda são rascunhos... 👀

O site está hospedado no GitHub Pages e você pode ver ele clicando [aqui](https://kauefraga.github.io/blog/).

## Como rodar localmente

É necessário ter o [hugo](https://gohugo.io/installation/) instalado na sua máquina.

Agora instale o tema papermod:

```bash
git submodule update --init --recursive
```

Execute o seguinte comando para iniciar o servidor de desenvolvimento (inclui os rascunhos):

```bash
hugo server -D
```

Vale ressaltar que alterações na branch main disparam uma [GitHub Action](.github/workflows/hugo.yml), que faz o deploy do site. 

## Contribuindo

Você pode sugerir diferentes abordagens, apontar um erro de escrita, um link que não está funcionando ou qualquer tipo de erro, sinta-se à vontade para abrir [uma issue](https://github.com/kauefraga/blog/issues/new/choose).

Te ajudei em um tópico específico? Considere uma estrela aqui nesse repositório.

Obrigado pela atenção ❤

---

[![Twitter/X: @rkauefraga](https://img.shields.io/badge/twitter%2Fx-%40rkauefraga-blue)](https://x.com/rkauefraga)
![Discord: rustykaue](https://img.shields.io/badge/discord-rustykaue-5865F2)
