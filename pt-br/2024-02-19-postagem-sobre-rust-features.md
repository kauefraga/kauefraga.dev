Título: Funcionalidades do Rust

Olá! Se você quer saber um pouco mais sobre as **principais** funcionalidades do Rust, então acho que posso ajudar. Bora 👊

> A linguagem de programação Rust tem várias features peculiares e legais! Uma coleção de técnicas que deram certo em outras linguagens e paradigmas.

Features abordadas:

- Zero-cost abstractions
- Data Ownership ou Ownership
- Algebraic Type System ou Algebraic Data Types
- Polymorphism
- Async/await
- Meta programming
- Cargo

### Zero-cost abstractions

> "What you don't use, you don't pay for. What you do use, you couldn't hand code any better"

Direto do C++.

As abstrações (pattern matching, iterators, generics, collections...) de recursos-base (for loops, if/else, raw pointers...) da linguagem não devem consumir nenhum recurso além daqueles já consumidos. Zero custo!

### Ownership

Baseado no RAII (Resource Acquisition Is Initialization) design pattern do C++. Esse padrão de projeto diz: recursos como memória alocada, file handles e database connections devem estar presos a um tempo de vida. Quando um objeto é criado, os recursos são adquiridos e quando o objeto é destruído, os recursos são liberados. Simples. Esse padrão é tão útil porque liberar os recursos é algo facilmente esquecido, você pode ter escrito bastante código antes de precisar liberar e esqueceu, resultando em *memory leaks*.

Tão útil que... Rust integrou ele diretamente na linguagem e assim surgiu o Ownership. Para não precisar lembrar de usar esse padrão, o próprio compilador vai te forçar a seguir um conjunto de regras chamado de "ownership rules".

Ownership Rules

1. Cada valor em Rust tem uma variável que é sua dona, ou seja, cada valor tem um dono.
2. Só pode existir um dono de uma vez.
3. Quando um dono sai de escopo, o valor é largado ou *dropped*.

Essas regras são combinadas com as chamadas *borrowing rules*.

Borrowing Rules

1. Em um momento qualquer, você pode ter uma referência mutável ou infinitas referências imutáveis.
2. Referências DEVEM sempre ser válidas. SEM NULL/NIL NESSA PO@#$!!

Veja também exemplos em [[Rust Ownership]].

### Algebraic Type System

Algebraic data types ou ADTs permitem a criação de tipos compostos usando *sum types* e *product types*. Geralmente implementado em linguagens funcionais, como Haskell.

Um *product type* é um tipo composto de dois ou mais tipos. Pense em um tipo usuário que tem nome e idade, outros dois tipos, dentro dele. Classes (OO) são um exemplo de product type. Basicamente, toda linguagem que tem um sistema de tipos, tem *product types*.

Um *sum type* é um tipo que pode ser representado por uma lista finita de opções válidas (como um enum).

### Polymorphism

Direto do paradigma de orientação a objetos (OOP), polimorfismo é a capacidade que um objeto ou uma função têm de assumir múltiplas formas ou se comportar diferente dependendo do contexto em que é usada. O polimorfismo geralmente é implementado a partir da herança (*inheritance*). Já no Rust, o polimorfismo é implementado com *traits* e *generics*.

Traits definem um conjunto de funções/métodos que um tipo pode implementar, parecido com interfaces em outras linguagens. Lembre-se, tipos podem implementar múltiplos traits e traits podem ter implementações por padrão (default).

Generics te permitem escrever código abstrato em relação ao tipo, que te leva a código reutilizável e eficiente. Você pode dizer que um tipo necessário para uma função, não é algo específico, mas algo que implemente funções específicas.

O sistema de traits (*trait system*) em Rust tem sua raiz nas *type classes* do Haskell. Rust implementa o *trait system* juntamente do ownership/borrowing e lifetimes, que são um dos motivos da garantia de *memory-safety*. Alguns benefícios em relação a herança:

- Flexibilidade e composição
- Não-invasivo e extensível
- Evita o problema de classes bases frágeis (*fragile base class problem*)
- Static dispatch by default e performance

### Async/await

Rust roubou a sintaxe `async/await` para programação assíncrona da linguagem de programação JavaScript. O paradigma assíncrono permite que tarefas sejam executadas independentemente e concorrentemente sem bloquear a execução do programa principal. O JavaScript usa Promises para representar o resultado de uma operação assíncrona e para utilizar esse resultado é necessário usar os métodos `.then()`, `.catch()` e `.finally()`. O problema é que esses métodos podem levar a um código aninhado e complexo. A sintaxe `async/await` no JavaScript permite que código assíncrono seja escrito da forma como código síncrono é escrito, sem usar then, catch e finally. No final é só um syntactic sugar para trabalhar com as Promises.

O Rust adotou a programação assíncrona de maneira parecida. Notação `async` antes de `fn` e `.await?` a cada chamada assíncrona. O ponto de interrogação serve para propagar erros. Como em JavaScript, `async/await` em Rust é um syntactic sugar para trabalhar com Futures (similar a Promises). Algumas diferenças do Rust para o JavaScript:

- O `async/await` em Rust segue o princípio de abstração sem custo (zero-cost abstraction).
- Em Rust, Futures foram moldados para serem preguiçosos (lazy), ou seja, eles não começam até que sejam explicitamente chamados e "esperados" (*awaited*). Com isso, Futures podem ser agendados, compostos e combinados com outros Futures sem esforço desnecessário. No JavaScript, quando uma Promise é criada a operação assíncrono já começa em seguida, mesmo se a Promise não tiver sido "esperada" (*awaited*) ainda.
- JavaScript é single-threaded e tem uma implementação que cria a ilusão do paralelismo. Rust tem paralelismo de verdade, podendo executar operações concorrentes em paralelo usando múltiplas threads.

### Meta programming

O Rust tem uma feature muito poderosa, os macros. Para entender os macros, vamos falar de meta programação.

Meta programação é uma técnica que permite um programa a manipular ou gerar código durante a compilação (*compile time*) ou execução (*runtime*). Macros são um recurso do Rust que permite o desenvolvedor a definir uma sintaxe customizada e fazer geração de código ou transformação de código. Eles permitem a meta programação com uma forma de escrever código que gera ou altera outro código durante a compilação (*compile time*).

### Cargo

Inspirado no NPM (node package manager) do NodeJS, o Cargo é a ferramenta oficial de building e gerenciamento de pacotes do Rust. Com simples comandos no terminal é possível instalar as dependências de um projeto, compilar o projeto, testar o projeto, etc. O crates.io é onde ficam as caixas/crates, os pacotes do ecossistema Cargo. O `package.json` em JavaScript é o `cargo.toml` em Rust.

Obrigado por ler! ❤

**Fontes**:
- [Rust is not a faster horse](https://youtu.be/4YU_r70yGjQ)
- [All Rust features explained](https://youtu.be/784JWR4oxOI)

---
- [TabNews](https://www.tabnews.com.br/kauefraga/funcionalidades-do-rust)
- [DevTo](https://dev.to/kauefraga/funcionalidades-do-rust-2bem)

[[Interagindo com devs]]
[[Rust]]
