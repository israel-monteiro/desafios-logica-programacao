# Desafio 3 — Escrevendo as Classes de um Jogo

## Entendendo o Desafio

Este desafio faz parte da formação de **Lógica de Programação da DIO (Digital Innovation One)**.

O objetivo é aplicar os conceitos estudados até aqui, desenvolvendo um projeto prático utilizando classes e objetos em JavaScript.

## Conceitos Utilizados

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisão
- Funções
- Classes e objetos

## Objetivo

Crie uma classe genérica que represente um herói de uma aventura e que possua as seguintes propriedades:

- **nome:** nome do herói
- **idade:** idade do herói
- **tipo:** classe do herói (guerreiro, mago, monge ou ninja)

Além disso, a classe deve possuir um método chamado `atacar()`, responsável por identificar o tipo do herói e exibir uma mensagem com o ataque correspondente.

### Regras de Ataque

O ataque deve variar conforme o tipo do herói, seguindo a tabela:

| Tipo do herói | Ataque |
|---|---|
| Mago | Magia |
| Guerreiro | Espada |
| Monge | Artes marciais |
| Ninja | Shuriken |

## Saída Esperada

Ao executar o método `atacar()`, o programa deverá exibir a seguinte mensagem:

`o {tipo} atacou usando {ataque}`

### Exemplos de Saída

```text
o mago atacou usando magia
o guerreiro atacou usando espada
o monge atacou usando artes marciais
o ninja atacou usando shuriken
```

## Instruções para Entrega

1. Desenvolver o projeto utilizando JavaScript
2. Criar uma classe que represente o herói
3. Implementar as propriedades `nome`, `idade` e `tipo`
4. Criar o método `atacar()` com as regras de ataque
5. Testar o funcionamento com diferentes tipos de heróis
6. Adicionar o código-fonte e um arquivo `README.md` ao repositório do GitHub
7. Enviar o link do projeto na plataforma DIO

## Origem do Desafio

Desafio proposto pela [DIO — Digital Innovation One](https://www.dio.me/).