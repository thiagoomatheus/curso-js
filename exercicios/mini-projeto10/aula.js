// Mini-projeto 10 - Números primos

exibirNumerosPrimos(1000);

function exibirNumerosPrimos(limite) {
    for (numero = 2; numero <= limite; numero++) {

        /*Jeito que fiz, mas apresentava erros

        if (numero === 2) {
            console.log(numero); 
        }
        else if (numero === 3) {
            console.log(numero); 
        }
        else if (numero === 5) {
            console.log(numero); 
        }
        else if (numero === 7) {
            console.log(numero); 
        }

        else if (numero % 2 !==0 && numero % 3 !==0 && numero % 5 !==0 && numero % 7 !==0) {
            console.log(numero);
        }*/

        //Jeito no vídeo, muito mais simples

        calcularPrimo(numero)

        if (calcularPrimo(numero)) {
            console.log(numero);
        }

    }
}

//Foi feito uma outra função pelo fato que as funções devem realizar uma ação e nesse caso estavamos tendo duas ações: calucular o número primo e exibir o numero primo.

function calcularPrimo(numero) {
    for (divisor = 2; divisor < numero; divisor++) {
        if (numero % divisor ===0) {
            return false;
        }
    }
    return true;
}