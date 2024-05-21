+++
title = 'Instalando o Ruke pelo GitHub Releases'
summary = 'Criei dois scripts para instalar arquivos direto do GitHub Releases em diferentes plataformas.'
date = 2024-05-20
author = ['Kauê Fraga Rodrigues']
keywords = ['scripting', 'bash', 'powershell']
+++

Opa! Bão? Segundei aqui com *scripting* (bash e powershell).

Decidi criar um pipeline para disponibilizar o binário do ruke direto no GitHub. Com isso, quem não tem um setup Rust pode instalar o [ruke](https://github.com/kauefraga/ruke) e usar sem nenhum problema.

Para facilitar mais ainda a instalação e configuração, nada melhor do que um scriptzão, não é mesmo?

## Instalando no Linux/WSL e MacOS

Primeiro utilitário que veio em mente foi o `curl`.

Abri um arquivo `.sh` e comecei assim:

```sh
#! /bin/bash

curl -OLs https://github.com/kauefraga/ruke/releases/latest/download/ruke-x86_64-unknown-linux-gnu.tar.gz
```

1. `curl [url]` para fazer uma requisição para a url
2. `-O` para criar um arquivo local nomeado tal qual o arquivo remoto ([curl -O](https://curl.se/docs/manpage.html#-O))
3. `-L` para seguir redirecionamentos ([curl -L](https://curl.se/docs/manpage.html#-L))
4. `-s` para silenciar a saída ([curl -s](https://curl.se/docs/manpage.html#-s))

Depois de baixar, tem que descompactar esse `.tar.gz` e remove-lo.

```sh
tar -xzf ruke-x86_64-unknown-linux-gnu.tar.gz

rm ruke-x86_64-unknown-linux-gnu.tar.gz
```

1. `tar [arquivo]` para trabalhar um arquivo `.tar`
2. `-x` para extrair o arquivo
3. `-z` para descompactar com `gzip`
4. `-f` para criar o arquivo final, eu acho

Poderia adicionar a flag `-v` (*verbose*) para ter mais informações na saída, mas não é necessário.

Perfeito! Mas agora eu preciso criar outro script para pegar o arquivo do MacOS certinho, não? Não mesmo.

Dei uma pesquisada e achei uma [resposta legal no Stack Overflow](https://stackoverflow.com/questions/394230/how-to-detect-the-os-from-a-bash-script) sobre como detectar o sistema operacional com bash.

Existe uma variável chamada `$OSTYPE` que armazena o sistema operacional atual. Creio que seja possível guardar o resultado do comando `uname` em uma variável e usa-la também. Com o sistema operacional em mãos, basta mudar o arquivo dependendo do SO.

Usando uma variável (`$binary`) juntamente com a variável `$OSTYPE` eu cheguei nessa solução:

```sh
#! /bin/bash

binary='ruke-x86_64-unknown-linux-gnu.tar.gz'

if [[ "$OSTYPE" == "darwin"* ]]; then
    binary='ruke-x86_64-apple-darwin.tar.gz'
fi

curl -OLs https://github.com/kauefraga/ruke/releases/latest/download/$binary

tar -xzf $binary

rm $binary

echo 'Reminder: add ruke in your PATH or move it to a local where PATH is already set'
echo '$ mv ruke /usr/bin/'
```

Para Linux, WSL e MacOS é isso!

## Instalando no Windows

Para Windows, a ideia não vai ser diferente: faz o download, extrai e limpa a sujeira. Sem enrolação, veja o resultado:

```powershell
Invoke-WebRequest 'https://github.com/kauefraga/ruke/releases/latest/download/ruke-x86_64-pc-windows-msvc.zip' -OutFile 'ruke-x86_64-pc-windows-msvc.zip'

Expand-Archive -Force -Path 'ruke-x86_64-pc-windows-msvc.zip' -DestinationPath '.'

Remove-Item 'ruke-x86_64-pc-windows-msvc.zip'

Write-Host 'Reminder: add ruke in your PATH or move it to a local where PATH is already set'
```

O powershell é bem reconhecível pelo início das palavras em maiúsculo. Powershell "idiomático" talvez...

Vale ressaltar também que `Invoke-WebRequest` pode ser só `iwr`, assim como `Remove-Item` e `Write-Host` poderiam ser apenas `rm` e `echo`, respectivamente.

Novamente, foi pesquisando que encontrei a forma de extrair um arquivo zipado com `Expand-Archive`, [aqui](https://superuser.com/questions/1314420/how-to-unzip-a-file-using-the-cmd).

Pelo que vi também é possível usar `tar` para extrair no Windows (["Native tar extraction in powershell"](https://stackoverflow.com/questions/38776137/native-tar-extraction-in-powershell)). E usar o utilitário `7z` seria outra opção viável.

## A lição

Depois disso, eu pude refletir e concluir:

> Hoje em dia, com acesso à Internet e tempo, só lhe resta encontrar a pergunta certa.

Acho que esse pensamento é bem comum. Você não sabe nada sobre *scripting*, em seguida você pesquisa e é capaz de criar uma automação para algum processinho chato do seu projeto ou do seu dia a dia. Provavelmente você não aprendeu a usar as ferramentas que utilizou, mas o que importa é que você conseguiu facilitar sua vida.

Se quiser trocar uma ideia comigo, pode me mandar uma DM no [Twitter/X](https://twitter.com/rkauefraga).

Boa semana e muito obrigado por ler! Espero ter ajudado ❤

O projeto e os arquivos citados podem ser encontrados nos links abaixo.

- [ruke](https://github.com/kauefraga/ruke)
- [pipeline de release do ruke](https://github.com/kauefraga/ruke/blob/main/.github/workflows/release.yml)
- [issue da instalação](https://github.com/kauefraga/ruke/issues/25)
- [script bash (linux/wsl/darwin)](https://github.com/kauefraga/ruke/blob/main/install.sh)
- [script powershell (windows)](https://github.com/kauefraga/ruke/blob/main/install.ps1)
