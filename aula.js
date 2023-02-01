//Criando Varíaveis

//let idade = 5;
//console.log(idade);
//let altura = 171;
//console.log(altura);
//let nome = 'Thiago';
//console.log(nome);

/*--------------------
Criando obejtos

let usuario = {
    email: 'asdalaksl@gmail.com',
    senha: 123456
}
console.log(usuario);

//Criando arrays

let familia = ['Luiz', 56, 'Sorocaba'];

console.log(familia[0]);*/

/* -------------------
Criando funções

let parentesco = 'pai';

function alteraParentesco(parentescoInserido) {
    parentesco = parentescoInserido
};

console.log(parentesco);

alteraParentesco("mãe");

console.log(parentesco);*/

/*--------------

// Mini-projeto 1 - Alterando valores de variáveis

let a = 'vermelho';
let b = 'azul'

console.log(a);
console.log(b);

// a = 'azul';
// b = 'vermelho'; - Eu fiz dessa forma, mas a forma correta é:

c = a;

a = b;
b = c;

console.log(a);
console.log(b);

*/

/* ------------------

//IF e ELSE

let horaAtual = 20;

if (horaAtual > 6 && horaAtual < 12) {
    console.log('Bom dia!');
}

else if (horaAtual >= 12 && horaAtual <= 18) {
    console.log('Boa tarde!');
}

else {
    console.log('Boa noite!');
}

*/

/* -------------

//LOOP WHILE

let i = 5;

while (i >=1) {
    console.log(i);
    i--;
}
*/

/* -----------------

// LOOP DO WHILE

let i = 5;

do {
    console.log(i);
    i--;
} while (i >= 1);

*/ 

/* ---------------

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

Um jeito mais simples ainda é usadno operadores ternários. Fica assim:

let valorMaior = max(10,12);
console.log(valorMaior);

function max(numero1, numero2) {
    return numero1 > numero2 ? numero1 : numero2 ;
}

*/

/* --------------------

 // Mini Projeto 3 - FizzBuzz

 const resultado = fizzBuzz(90);
 console.log(resultado);

//  function fizzBuzz(entrada) {
//     if (typeof entrada !== 'number') {
//         console.log('Não é um número');
//     }
//     else if (entrada % 3 === 0 && entrada % 5 === 0) {
//         console.log('FizzBuzz');
//     }
//     else if (entrada % 3 === 0) {
//         console.log('Fizz');
//     }
//     else if (entrada % 5 === 0) {
//         console.log('Buzz');
//     }
//     else {
//         console.log(entrada);
//     }
//  }

 function fizzBuzz(entrada) {
    return typeof entrada !== 'number' ? 'Não é um número' : entrada % 3 === 0 && entrada % 5 === 0 ? 'FizzBuzz' : entrada % 3 === 0 ? 'Fizz' : entrada % 5 === 0 ? 'Buzz' : entrada ;
 }

 */

 /*-----------------------

 //Mini-projeto 4 - Medidor de velocidade - não consegui fazer muito bem, precisei da ajuda do vídeo

verificarVelocidade(85);
function verificarVelocidade(velocidade) {
    if (velocidade <= 70) {
        console.log('Ok');
    }
    else {
        const pontos = Math.floor (((velocidade - 70) / 5));
        
        if (pontos >= 12) {
            console.log('Carteira Suspensa');
        } else {
            console.log('Pontos:',pontos);
        }
    }
}

Para tornar o código mais correto nós poderíamos substituir os valores oltos, como o 70 e o 5 por constantes. O código ficaria assim:

verificarVelocidade(85);

function verificarVelocidade(velocidade) {
    const velocidadeMaxima = 70;
    const kmPorPonto = 5;
    const maximoPontos = 12;
    if (velocidade <= velocidadeMaxima) {
        console.log('Ok');
    }
    else {
        const pontos = Math.floor (((velocidade - velocidadeMaxima) / kmPorPonto));
        
        if (pontos >= maximoPontos) {
            console.log('Carteira Suspensa');
        } else {
            console.log('Pontos:',pontos);
        }
    }
}

*/

/*

// Mini-projeto 5 - Par ou ímpar

//Essa foi a forma que eu fiz

exibirTipo(20);

function exibirTipo(limite) {
    let i = 0;
    while (i <= limite) {
        if (i % 2 === 0) {
            tipo = 'Par';
        }
        else {
            tipo = 'Ímpar'
        }
        console.log(i, tipo);
        i++;
    }
}

//Essa foi a forma do vídeo

function exibirTipo(limite) {
    for (let i= 0; i <= limite; i++) {
        if (i % 2 === 0) {
            console.log(i,'PAR');
        }
        else {
            console.log(i,'ÍMPAR');
        }
    }
}

*/
