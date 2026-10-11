// classificador-de-nivel-de-heroi

let nomeHeroi = "ReiDosNoobs";
let quantidadeXP = 8500;
let nivel = "";


if (quantidadeXP >= 0 && quantidadeXP <= 1000) {
    nivel = "Ferro";
}
else if (quantidadeXP <= 2000) {
    nivel = "Bronze";
}
else if (quantidadeXP <= 5000) {
    nivel = "Prata";
}
else if (quantidadeXP <= 7000) {
    nivel = "Ouro";
}
else if (quantidadeXP <= 8000) {
    nivel = "Platina";
}
else if (quantidadeXP <= 9000) {
    nivel = "Ascendente";
}
else if (quantidadeXP <= 10000) {
    nivel = "Imortal";
}
else {
    nivel = "Radiante";
}

console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivel}`);