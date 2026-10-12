# Desafio 3 — Escrevendo as Classes de um Jogo

## Sobre o Projeto

Projeto desenvolvido durante a formação de **Lógica de Programação da DIO (Digital Innovation One)**.

O objetivo é criar uma classe em JavaScript que represente um herói de uma aventura, utilizando conceitos de programação orientada a objetos (POO).

Cada herói possui características próprias e pode realizar um ataque de acordo com seu tipo.

## Tecnologias Utilizadas

- JavaScript
- Node.js

## Conceitos Aplicados

- Classes e objetos
- Construtores (`constructor`)
- Propriedades e métodos
- Palavra-chave `this`
- Criação de instâncias com `new`
- Estruturas condicionais (`if / else if`)
- Template literals

## Funcionamento

O programa utiliza a classe `StatusDoHeroi`, que possui três propriedades:

- **`nome`:** nome do herói
- **`idade`:** idade do herói
- **`tipo`:** classe do herói

A classe também possui o método `atacar()`, responsável por identificar o tipo do herói e determinar o ataque correspondente.

### Tipos de Heróis e Ataques

| Tipo | Ataque |
|---|---|
| Mago | Magia |
| Guerreiro | Espada |
| Monge | Artes marciais |
| Ninja | Shuriken |

## Exemplo de Execução

O programa cria quatro heróis e executa o método `atacar()` de cada um.

**Exemplo de criação de um herói:**

```javascript
const heroi1 = new StatusDoHeroi("Gandalf", 100, "mago");

heroi1.atacar();
```

**Saída esperada:**

```text
o mago atacou usando magia
o guerreiro atacou usando espada
o monge atacou usando artes marciais
o ninja atacou usando shuriken
```

## Como Executar

É necessário ter o Node.js instalado.

1. Clone o repositório do GitHub
2. Abra o terminal na pasta do desafio
3. Execute o arquivo JavaScript:

```bash
node index.js
```

Para testar outros personagens, altere os valores utilizados na criação dos objetos.

## Origem do Desafio

Desafio proposto pela [DIO — Digital Innovation One](https://www.dio.me/).

## Autor

**Israel Monteiro**

[GitHub](https://github.com/israel-monteiro) | [LinkedIn](https://www.linkedin.com/in/israel-monteiro-213416442/)