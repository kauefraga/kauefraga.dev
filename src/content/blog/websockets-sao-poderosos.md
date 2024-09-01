---
title: 'Websockets são poderosos'
pubDate: '2024-08-11T13:40:20.933Z'
author: 'Kauê Fraga Rodrigues <rkauefraga@gmail.com>'
draft: true
---

Tranquilo? To construindo um projeto de templating de markdown e uma das funcionalidades é gerar um preview de um markdown escolhido em uma página web (renderizando ele de markdown para html) com hot reload (live reloading). Para implementar uma solução de hot reloading eu precisei revisar os websockets e queria compartilhar meus estudos aqui.

- [how to build WebSockets in Go](https://yalantis.com/blog/how-to-build-websockets-in-go/)
- [gorilla/websocket](https://github.com/gorilla/websocket)
- EventSource API, stream over http, server-sent events (SSE)

Primeiro, websocket é um protocolo de comunicação bidirecional, ou seja, quando uma conexão websocket é estabelecida o cliente e o servidor podem se comunicar (enviar dados um para outro) a qualquer momento.

É importante saber também que esse protocolo inicia o aperto de mãos (_handshake_) da conexão usando o protocolo HTTP e manda no cabeçalho o pedido de evolução para websocket (http -> websocket).

diferença de SSE e websocket
