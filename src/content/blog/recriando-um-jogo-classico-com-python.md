---
title: 'Recriando um jogo clássico com Python'
pubDate: 2024-09-01T12:00:00.000Z
author: 'Kauê Fraga Rodrigues <rkauefraga@gmail.com>'
---

Esse é o primeiro capítulo de uma série em que eu compartilho o meu processo de construção de um jogo clássico, o **ping pong** ou pong.

Essa história começou na escola, onde eu criei um protótipo bem rápido utilizando a linguagem de programação Python durante a aula de programação de aplicativo.

Minha implementação consistia em

- tela com cor de fundo
- duas raquetes controladas pelas setas e teclas <kbd>wasd</kbd>
- bolinha com detecção de colisão (parede e raquete)
- placar centralizado no topo

Isso foi feito usando a biblioteca [Pygame](https://www.pygame.org/docs/).

Em 2023 também fiz um ping pong para Windows usando c++ e a biblioteca [Raylib](https://www.raylib.com/), até publiquei sobre no TabNews, ["Ping pong, um grande clássico"](https://www.tabnews.com.br/kauefraga/ping-pong-um-grande-classico).

Meu objetivo com essa terceira versão que estou fazendo é ter um ping pong definitivo, completo, bonito e multiplataforma. Também quero impressionar meus colegas 😅

Acima dessas metas, quero me divertir construindo um joguinho.

Usando Python e Pygame, comecei a terceira versão do clássico, o [Pyng Pong](https://github.com/kauefraga/pyng-pong).

Minha primeira dificuldade foi configurando um [ambiente virtual](https://docs.python.org/3/library/venv.html) para isolar as dependências e preparar um interpretador do Python.

Felizmente a resolução foi simples:

```sh
# usando Linux e fish

python -m venv .venv # para criar um ambiente virtual em .venv

source .venv/bin/activate.fish # para usar o ambiente virtual
```

Depois arrumei meu [Visual Studio Code](https://code.visualstudio.com/) para usar o Python, instalando essas extensões:

- [Python](https://marketplace.visualstudio.com/items?itemName=ms-python.python)
- [Python Indent](https://marketplace.visualstudio.com/items?itemName=KevinRose.vsc-python-indent)
- [Python Environment Manager](https://marketplace.visualstudio.com/items?itemName=donjayamanne.python-environment-manager)
- [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens)

Abri meu VSCode e comecei a codar.

```sh
code . --profile Python
```

Essa funcionalidade de perfis é bem legal, você pode ver mais sobre [na documentação do VSCode](https://code.visualstudio.com/docs/editor/profiles).

## Preparando a base

Um jogo é um aplicativo que executa em tempo real, ou seja, as instruções do jogo são executadas em loop até que o mesmo seja encerrado. A partir disso, enxergamos uma parte importante do nosso jogo, o chamado "game loop".

Pensando de maneira simplista, um jogo pode ser dividido em 3 etapas:

- Inicialização
- Game loop
- Finalização

Na inicialização nós criamos o processo e reservamos os recursos que vamos usar no nosso jogo, como os efeitos sonoros, imagens de fundo, dados de entidades, etc.

Já no game loop tratamos de 2 partes: **atualização** dos dados e **renderização**. Aqui a gente detecta colisões, escuta eventos, atualiza as coordenadas das entidades e muito mais.

Na finalização, simplesmente fechamos conexões e liberamos os recursos reservados na primeira etapa.

Esse foi um resuminho bem grosseiro do que é um jogo e quais são as fases genéricas do mesmo.

Vamos para o código, começando com o game loop que aparece logo no início da documentação do Pygame.

```py
import pygame

# inicialização (1)
pygame.init()
screen = pygame.display.set_mode((1280, 720))
clock = pygame.time.Clock()
running = True

# game loop (2)
while running:
  # atualização (2.1)
  for event in pygame.event.get():
    if event.type == pygame.QUIT:
      running = False

  # renderização (2.2)
  screen.fill("purple")

  # sim, vai aparecer uma tela roxa, apenas

  pygame.display.flip()

  clock.tick(60)

# finalização (3)
pygame.quit()
```

Bem direto, não?

Buscando modularidade para gerenciar os dados e as cenas, eu pensei na seguinte estrutura:

```py
# src/
#   main.py <-- estamos nesse arquivo
#   gameplay.py
#   menu.py

from game import Game
from menu import menu_scene
from gameplay import gameplay_scene

scenes = {
  0: menu_scene,
  1: gameplay_scene
}

def run_game():
  game = Game()

  while game.running:
    scene = scenes.get(game.scene)
    scene(game)

if __name__ == '__main__':
  run_game()
```

Obs.: não tem nada de clean code, functional programming, solid, kiss, design patterns ou outros princípios sendo aplicados nesse projeto. Estou apenas desenvolvendo...

Como é um jogo relativamente pequeno, escolhi criar uma classe que contém todos os atributos compartilhados e recursos necessários, acoplamento 100%.

Uma classe tem o método construtor `def __init__` e o método destrutor `def __del__`, que funcionam perfeitamente nas nossas etapas de inicialização e finalização.

Sobre as cenas, usei uma *lookup table* (ou dicionário) para facilitar na execução de uma cena específica. O dicionário consiste em uma chave (cena atual) e um valor (função de atualização e renderização da cena). No objeto do jogo (`game`) tem um atributo `scene` que guarda o valor da cena atual, valor esse que corresponde a uma chave do dicionário, então eu só preciso pegar no dicionário a função que vai cuidar da cena atual com a chave correspondente e executa-la.

Por enquanto é isso! Ainda preciso organizar melhor as outras partes (entidades, componentes de texto, botões...) e como tudo isso vai se comunicar em cada cena antes de escrever um texto completo sobre, por isso decidi separar essa jornada em uma sériezinha. Assim posso escrever a medida que vou aprimorando o jogo e lidando com os desafios.

Espero que tenha gostado e aprendido algo novo. De qualquer forma, muito obrigado por ler!
