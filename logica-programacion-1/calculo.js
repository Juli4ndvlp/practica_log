const calcularMayor = (numero1, numero2, numero3) => {
    let mayor;
    if (numero1 >= numero2 && numero1 >= numero3) {
        mayor = numero1;
    } else if (numero2 >= numero1 && numero2 >= numero3) {
        mayor = numero2;
    } else {
        mayor = numero3;
    }
    return mayor;
};

const calcularMenor = (numero1, numero2, numero3) => {
    let menor;
    if (numero1 <= numero2 && numero1 <= numero3) {
        menor = numero1;
    } else if (numero2 <= numero1 && numero2 <= numero3) {
        menor = numero2;
    } else {
        menor = numero3;
    }
    return menor;
};

const calcularMedio = (numero1, numero2, numero3, mayor, menor) => {
    return numero1 + numero2 + numero3 - mayor - menor;
};

const calculoRepetidos = (numero1, numero2, numero3) => {
    if (numero1 === numero2 && numero2 === numero3) {
        return "Los tres números son iguales";
    } else if (numero1 === numero2) {
        return "Los dos primeros son iguales";
    } else if (numero1 === numero3) {
        return "El primero y el tercero son iguales";
    } else if (numero2 === numero3) {
        return "El segundo y el tercero son iguales";
    } else {
        return "Los tres números son diferentes";
    }
};

module.exports = {
    calcularMayor,
    calcularMenor,
    calcularMedio,
    calculoRepetidos,
};