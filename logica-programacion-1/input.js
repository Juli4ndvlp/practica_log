const prompt = require('prompt-sync')();

class Input {
    constructor(numero1,numero2,numero3) {
        this.numero1 = numero1;
        this.numero2 = numero2;
        this.numero3 = numero3;
    }
    static pedirNumeros() {
    const numero1 = Number(prompt("Ingrese el primer número:"));
    const numero2 = Number(prompt("Ingrese el segundo número:"));
    const numero3 = Number(prompt("Ingrese el tercer número:"));
    return new Input(numero1, numero2, numero3);}
}




module.exports = Input;