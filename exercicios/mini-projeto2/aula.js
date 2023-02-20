// Mini Projeto 2 - Máximo entre dois valores

// Jeito que eu fiz 

let primeiroNumero = 50;
let segundoNumero = 30;

function comparaNumero() {
    if (primeiroNumero > segundoNumero) {
        console.log('Primeiro valor é maior');
    }
    else if (segundoNumero > primeiroNumero) {
        console.log('Segundo valor é maior');
    }
    else {
        console.log('Os valores são iguais');
    }
}

comparaNumero();

// Forma feita na aula

let valorMaior = max(10,12);
console.log(valorMaior);

function max(numero1, numero2) {
    if(numero1 > numero2)
        return numero1;
    else return numero2;
}

// Um jeito mais simples ainda é usadno operadores ternários. Fica assim:

let valorMaior = max(10,12);
console.log(valorMaior);

function max(numero1, numero2) {
    return numero1 > numero2 ? numero1 : numero2 ;
}