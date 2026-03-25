const Input = require('./input');
const calculo = require('./calculo');
const resultado = require('./resultado');

const datos = Input.pedirNumeros();

const mayor = calculo.calcularMayor(datos.numero1, datos.numero2, datos.numero3);
const menor = calculo.calcularMenor(datos.numero1, datos.numero2, datos.numero3);
const medio = calculo.calcularMedio(datos.numero1, datos.numero2, datos.numero3, mayor, menor);
const mensajeRepetidos = calculo.calculoRepetidos(datos.numero1, datos.numero2, datos.numero3);

resultado.mostrarResultados({
    mensajeRepetidos,
    mayor,
    medio,
    menor
})
