# Classificador de Nível de Herói

Projeto desenvolvido como parte dos desafios de **Lógica de Programação da DIO (Digital Innovation One)**.

## Sobre o Projeto

O objetivo é desenvolver um algoritmo em JavaScript que classifica o nível de um herói com base na quantidade de pontos de experiência (XP).

O programa utiliza estruturas condicionais `if / else if / else` e operadores de comparação para identificar o nível correspondente e apresentar o resultado no console.

## Tecnologias Utilizadas

- JavaScript
- Node.js (para execução local)

## Conceitos Aplicados

- Variáveis
- Operadores lógicos e de comparação
- Estruturas condicionais
- Template literals

## Classificação dos Níveis

| Experiência (XP) | Nível |
|---|---|
| 0 a 1.000 | Ferro |
| 1.001 a 2.000 | Bronze |
| 2.001 a 5.000 | Prata |
| 5.001 a 7.000 | Ouro |
| 7.001 a 8.000 | Platina |
| 8.001 a 9.000 | Ascendente |
| 9.001 a 10.000 | Imortal |
| Acima de 10.000 | Radiante |

## Exemplo de Execução

**Entrada:**

```javascript
let nomeHeroi = "ReiDosNoobs";
let quantidadeXP = 8500;
```

**Saída:**

```text
O Herói de nome ReiDosNoobs está no nível de Ascendente
```

## Como Executar

1. Clone este repositório ou faça o download dos arquivos.
2. Certifique-se de ter o Node.js instalado.
3. Abra o terminal na pasta do projeto.
4. Execute o arquivo JavaScript:

```bash
node index.js
```

Para testar outros níveis, altere os valores das variáveis `nomeHeroi` e `quantidadeXP`.

## Origem do Desafio

Desafio proposto pela [DIO — Digital Innovation One](https://www.dio.me/) para praticar os fundamentos de lógica de programação com JavaScript.

## Autor

**Israel Monteiro**

[GitHub](https://github.com/israel-monteiro) | [LinkedIn](https://www.linkedin.com/in/israel-monteiro-213416442/)
