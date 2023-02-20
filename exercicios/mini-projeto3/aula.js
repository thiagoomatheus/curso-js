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