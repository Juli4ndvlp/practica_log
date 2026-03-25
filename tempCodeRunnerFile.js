const prompt = require('prompt-sync')();

let primerValor = Number(prompt("Ingrese el 1er numero :"));
let segundoValor = Number(prompt("Ingrese el 2do numero :"));
let tercerValor = Number(prompt("Ingrese el 3er numero :"));

let mayor;
if (primerValor > segundoValor && primerValor > tercerValor) {
    mayor = primerValor;
} else if (segundoValor > primerValor && segundoValor > tercerValor) {
    mayor = segundoValor;
} else {
    mayor = tercerValor;
}

let menor;
if (primerValor < segundoValor && primerValor < tercerValor) {
    menor = primerValor;
} else if (segundoValor < primerValor && segundoValor < tercerValor) {
    menor = segundoValor;
} else {
    menor = tercerValor;
}

let medio;
if (primerValor !== mayor && primerValor !== menor) {
    medio = primerValor;
} else if (segundoValor !== mayor && segundoValor !== menor) {
    medio = segundoValor;
} else {
    medio = tercerValor;
}


if (primerValor === segundoValor && segundoValor === tercerValor) {
    console.log("Los tres números son iguales");
} else if (primerValor === segundoValor) {
    console.log("Los dos primeros son iguales");
} else if (primerValor === tercerValor) {
    console.log("El primero y el tercero son iguales");
} else if (segundoValor === tercerValor) {
    console.log("El segundo y el tercero son iguales");
}else {
    console.log("Los tres números son diferentes");
}

console.log(`Mayor a menor : Mayor: ${mayor} | Medio: ${medio} | Menor: ${menor}`);
console.log(`Menor a mayor: Menor : ${menor} | Medio: ${medio} | Mayor: ${mayor}`);