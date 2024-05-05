Links: [TabNews](https://www.tabnews.com.br/kauefraga/eco-minha-implementacao-em-rust-do-programa-echo), [DevTo](https://dev.to/kauefraga/eco-minha-implementacao-em-rust-do-programa-echo-34jh) e [Twitter/X](https://twitter.com/rkauefraga/status/1761391229986599342).

Estrutura:
- Introdução -> saudação e exposição do projeto (o que é e por que decidi faze-lo)
- Desenvolvimento -> escolhas técnicas, como foi implementado, quais são as funcionalidades e como foi distribuído
- Conclusão -> resumo (too long; didn't read) e agradecimento

## Twitter/X (thread)

### Primeiro post

O Eco, meu mini-projeto para praticar um pouco de Rust 🔊

Segue o fio 🧵

#bolhadev #studytwt #studytwtbr #rustlang

### Segundo post

A ideia é que o Eco seja uma implementação na linguagem de programação Rust do programa `echo`.

O programa `echo` basicamente pega argumentos (entrada) e imprime eles na tela do seu console (saída). O eco, atualmente, faz isso também.

### Terceiro post

Escolhi esse nome porque eu sempre li o programa `echo` como /ɛko/ e como eu disse, o `echo` pega a entrada e devolve a mesma coisa, similar a uma reverberação, um **eco**.

A iniciativa do projeto surgiu quando pesquisei por projetos para fazer em Rust, quero praticar!

### Quarto post

Obs.: A partir daqui vou mostrar a implementação, o código do projeto. Ou seja, a continuação do fio será mais técnica. Mesmo assim tentarei descrever um pouco os passos e suas funções. Vale ressaltar que no final escrevi um resumo.

### Quinto post

A implementação inicial (v0.1.0) foi bem simples, como esperado. Veja o código:

1. Pega os argumentos passados;
2. Remove o primeiro argumento, pois ele é o caminho do executável (inútil);
3. Inicializa uma string dinâmica, chamada "output";
+

-> foto do código em Rust do commit [516992e](https://github.com/kauefraga/eco/commit/516992e1dd25c1206feed3d10ccd597acc4fc7a8).

### Sexto post

4. Itera sobre os argumentos adicionando cada argumento com o formato "argumento-tal " (argumento + espaço) ao final da string "output";
5. Imprime a string "output".

Sétimo post

Agora na versão 0.1.2, o código está assim:

Alterações:

1. Na linha `args.remove(0)` havia possibilidade de otimização e mesmo sem conhecer VecDeque, que deve ser um vetor bidirecional (entrada e saída por ambos os lados), a fiz. +

-> foto do código em Rust do commit mais recente.

### Oitavo post

Essa estrutura de dados possibilita a saída de um elemento do início sem precisar mover os elementos posteriores para trás, o que é vantajoso aqui.
2. Adicionei um menu de ajuda, que tá bem vazio por sinal.

### Nono post

A distribuição está sendo feito pelo crates.io em https://crates.io/crates/eco-rs. Infelizmente a crate "eco" já existia. O legal é que ao executar o comando `cargo install eco-rs` o Cargo pega a crate e compila na arquitetura do seu computador.

### Décimo post

Com isso, eu não preciso compilar para todas as arquiteturas disponíveis e manter as releases no GitHub também (deveria, quem não gosta de só baixar o executável e pronto?).

### Décimo primeiro post

tl;dr: o projeto eco é, atualmente, apenas uma implementação em Rust do programa `echo` que pega os argumentos de entrada, junta eles em uma string e imprime a string final na saída do terminal.

### Décimo segundo post

Pretendo fazer mais umas funcionalidades como colorir palavras específicas e criar uma sintaxe de marcação para estilizar também.

Se quiser acompanhar o projeto, veja o repositório Eco (https://github.com/kauefraga/eco).

### Décimo terceiro post

Você pode me achar no:

- GitHub: https://github.com/kauefraga
- TabNews: https://www.tabnews.com.br/kauefraga
- DevTo: https://dev.to/kauefraga

Obrigado por ler! ❤

### Décimo quarto post

Caso esteja interessado, também escrevi sobre o Eco em forma de texto normal com algumas alterações.

- No TabNews: https://www.tabnews.com.br/kauefraga/eco-minha-implementacao-em-rust-do-programa-echo
- No DevTo: https://dev.to/kauefraga/eco-minha-implementacao-em-rust-do-programa-echo-34jh

### Décimo quinto post

Acho que faltou remover uma marcação ou outra (feita com markdown) e explicar o que é os argumentos, entrada e saída com um vídeozinho ou gif.

## TabNews e DevTo

Título: Eco: minha implementação em Rust do programa echo

![GitHub top language](https://img.shields.io/github/languages/top/kauefraga/eco) ![echo eco](https://img.shields.io/badge/echo-eco-8A2BE2) ![GitHub's license](https://img.shields.io/github/license/kauefraga/eco) ![GitHub last commit (branch)](https://img.shields.io/github/last-commit/kauefraga/eco/main)

*Hey, folks!* Hoje quero falar sobre o meu mini-projeto, chamado "eco".

> Minha implementação em Rust do programa echo.

O programa `echo` basicamente pega argumentos (entrada) e imprime eles na tela do seu console (*stdout*). O eco, atualmente, faz isso também. Escolhi esse nome porque eu sempre li o programa `echo` como /ɛko/. Como eu disse, o `echo` pega a entrada e devolve a mesma coisa, similar a uma reverberação, um **eco**.

A iniciativa do projeto surgiu quando pesquisei por projetos para fazer em Rust, quero praticar!

A implementação inicial (v0.1.0) foi bem simples, como esperado. Veja o código do commit [516992e](https://github.com/kauefraga/eco/commit/516992e1dd25c1206feed3d10ccd597acc4fc7a8):

```rust
use std::env;

fn main() {
    let mut args: Vec<String> = env::args().collect();

    /*
     * Read the `remove` docstring.
     * This `remove(0)` is the worst case,
     * all the arguments are going to be
     * shifted to the left, everytime.
     */
    args.remove(0);

    let mut output = String::new();

    for arg in args {
        output.push_str(&format!("{arg} "));
    }

    println!("{}", output.trim());
}
```

1. Pega os argumentos passados;
2. Remove o primeiro argumento, pois ele é o caminho do executável;
3. Inicializa uma string dinâmica, chamada *output*;
4. Itera sobre os argumentos adicionando cada argumento com o formato "argumento-tal " (argumento + espaço) ao final da string *output*;
5. Imprime a string *output*.

Agora na versão 0.1.2, o código está assim:

```rust
use std::collections::VecDeque;
use std::env;
use std::process::exit;

fn main() {
    let mut args: VecDeque<String> = env::args().collect();

    args.pop_front();

    let is_help_needed = (args.len() == 1 && args[0] == "-h")
        || (args.len() == 1 && args[0] == "--help");
    if is_help_needed {
        println!("Example: eco-rs Bom dia!");
        exit(0);
    }

    let mut output = String::new();

    for arg in args {
        output.push_str(&format!("{arg} "));
    }

    println!("{}", output.trim());
}
```

Alterações:

1. Na linha `args.remove(0)` havia possibilidade de otimização e mesmo sem conhecer VecDeque, que deve ser um vetor bidirecional (entrada e saída por ambos os lados), a fiz. Essa estrutura de dados possibilita a saída de um elemento do início sem precisar mover os elementos posteriores para trás, o que é vantajoso aqui.
2. Adicionei um menu de ajuda, que tá bem vazio por sinal.

A distribuição está sendo feito pelo crates.io em [eco-rs](https://crates.io/crates/eco-rs). Infelizmente a crate "eco" já existia. O legal é que ao executar o comando `cargo install eco-rs` o Cargo pega a crate e compila na arquitetura do seu computador. Com isso, eu não preciso compilar para todas as arquiteturas disponíveis e manter as releases no GitHub também (deveria, quem não gosta de só baixar o executável e pronto?).

### Conclusão

tl;dr: o projeto eco é, atualmente, apenas uma implementação em Rust do programa `echo` que pega os argumentos de entrada, junta eles em uma string e imprime a string final na saída do terminal.

Pretendo fazer mais umas funcionalidades como colorir palavras específicas e criar uma sintaxe de marcação para estilizar também.

Se quiser acompanhar o projeto, veja [o repositório eco](https://github.com/kauefraga/eco).

Você pode me achar no:

- GitHub: [kauefraga](https://github.com/kauefraga)
- TabNews: [kauefraga](https://www.tabnews.com.br/kauefraga)
- DevTo: [kauefraga](https://dev.to/kauefraga)
- Twitter/X: [rkauefraga](https://twitter.com/rkauefraga)

Obrigado por ler! ❤

[[eco]]
[[Interagindo com devs]]
