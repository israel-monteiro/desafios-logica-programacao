

function calcularSaldoDeVitorias(vitorias, derrotas) {
    return vitorias - derrotas;
}

function calcularRank(vitorias) {
    let rank = "";

    if (vitorias <= 10) {
        rank = "Ferro";
    }
    else if (vitorias <= 20) {
        rank = "Bronze";
    }
    else if (vitorias <= 50) {
        rank = "Prata";
    }
    else if (vitorias <= 80) {
        rank = "Ouro";
    }
    else if (vitorias <= 90) {
        rank = "Diamante";
    }
    else if (vitorias <= 100) {
        rank = "Lendário";
    }
    else if (vitorias >= 101) {
        rank = "Imortal";
    }

    return rank
}

let saldoDeVitorias = calcularSaldoDeVitorias(95, 40);
let rankDevitoria = calcularRank(95);

console.log(`O Herói tem de saldo de ${saldoDeVitorias} está no nível de ${rankDevitoria}`)