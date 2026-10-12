# Desafio 2 — Calculadora de Partidas Rankeadas

## Sobre o Projeto

Projeto desenvolvido durante a formação de **Lógica de Programação da DIO (Digital Innovation One)**.

O objetivo é criar um algoritmo em JavaScript que calcule o saldo de vitórias de um jogador e determine sua classificação com base na quantidade de partidas vencidas.

## Tecnologias Utilizadas

- JavaScript
- Node.js

## Conceitos Aplicados

- Variáveis
- Funções com parâmetros
- Retorno de valores (`return`)
- Operadores aritméticos e de comparação
- Estruturas condicionais (`if / else if`)
- Template literals

## Funcionamento

O programa utiliza duas funções com responsabilidades diferentes:

- **`calcularSaldoDeVitorias(vitorias, derrotas)`**: calcula e retorna a diferença entre vitórias e derrotas.
- **`calcularRank(vitorias)`**: identifica e retorna o nível do jogador com base na quantidade de vitórias.

Os resultados são armazenados em variáveis e apresentados no console.

### Classificação dos Níveis

| Quantidade de vitórias | Nível |
|---|---|
| 0 a 10 | Ferro |
| 11 a 20 | Bronze |
| 21 a 50 | Prata |
| 51 a 80 | Ouro |
| 81 a 90 | Diamante |
| 91 a 100 | Lendário |
| 101 ou mais | Imortal |

## Exemplo de Execução

**Entrada:**

```javascript
let saldoDeVitorias = calcularSaldoDeVitorias(95, 40);
let rankDevitoria = calcularRank(95);
```

**Saída:**

```text
O Herói tem de saldo de 55 está no nível de Lendário
```

## Como Executar

1. Tenha o Node.js instalado.
2. Abra o terminal na pasta do desafio.
3. Execute o arquivo JavaScript:

```bash
node index.js
```

Para testar outros resultados, altere os valores informados nas chamadas das funções.

## Origem do Desafio

Desafio proposto pela [DIO — Digital Innovation One](https://www.dio.me/).

## Autor

**Israel Monteiro**

[GitHub](https://github.com/israel-monteiro) | [LinkedIn](https://www.linkedin.com/in/israel-monteiro-213416442/)
