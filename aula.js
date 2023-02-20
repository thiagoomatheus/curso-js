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

/* -------------------

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

/*------------------

//Mini-Projeto 6 - Encontre o String

Não consegui fazer muito bem

const filme = {
    titulo : 'Vingadores',
    ano : 2018,
    criador : 'Robin',
    personagem : 'Thor'
};

exibirPropriedades(filme)

function exibirPropriedades(obj) {
    for (let prop in obj) {
        if (typeof obj[prop] === 'string') {
            console.log(prop, obj[prop]);
        }
    }
}

*/

/* --------------------

//Mini-Projeto 7 - Múltiplos de 3 e 5

somar(5);

function somar(limite) {
    let multiploTres = 0;
    let multiploCinco = 0;
    
    for (i = 0; i <= limite; i++) {
        if (i % 3 === 0) {
            multiploTres += i
        }
        else if (i % 5 === 0) {
            multiploCinco += i
        }
    }
    console.log(multiploTres + multiploCinco);
}

//Cheguei perto da resolução, só não consegui fazer adicionar cada numero multiplo. No vídeo a solução foi usar o operador += que soma o valor já existente ao novo valor e assim por diante

*/

/* ------------------------

//Mini-Projeto 8 - Média Nota Escolar

const array = [90,90,90]

console.log(mediaDoAluno(array));

function mediaDoAluno(notas) {
    let somaNota = 0;
    
    for (let valor in array) {
        somaNota += array[valor];
        media = somaNota / array.length; // Muito importante! Para obter a quantidade de itens dentro de um array usar o .length
    }
    if (media >= 90) {
        console.log('A');
    }
    else if (media >= 80) {
        console.log('B');
    }
    else if (media >= 70) {
        console.log('C');
    }
    else if (media >= 60) {
        console.log('D');
    }
    else {
        console.log('E')
    }
}

*/

/* --------------------

//Mini-Projeto 9 - Contador de Asteriscos

exibirAsteriscos(10);

function exibirAsteriscos(linhas) {
   Forma mais simples

    asterisco = '';
    for (i = 1; i <= linhas; i++) {
        asterisco += '*' ; 
        console.log(i, asterisco);
    }

    --------------

    Forma mais avançada - é utilizado um loop dentro de um loop.

    for (linha = 0; linha <= linhas; linha++) {
        let asterisco = '';
        for (i = 0; i <= linha; i++) {
            asterisco += '*'
        }
        console.log(asterisco);
    }
}

*/

/* -------------------------

// Mini-projeto 10 - Números primos

exibirNumerosPrimos(1000);

function exibirNumerosPrimos(limite) {
    for (numero = 2; numero <= limite; numero++) {

        /* Jeito que fiz, mas apresentava erros

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
        }

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

*/

/* -------------------------

// Factori Functions

function criaCelular(marcaCelular,tamanhoTela,capacidadeBateria,pontuacaoBenchmark) {
    return {
        marcaCelular : marcaCelular,
        tamanhoTela : tamanhoTela,
        capacidadeBateria : capacidadeBateria,
        pontuacaoBenchmark : pontuacaoBenchmark
    }
}

const celular001 = criaCelular('Samsung',6.8, 5000, 770000);
console.log(celular001);

const celular002 = criaCelular('Apple',6.0, 4500, 950000);
console.log(celular002);

//Resolvi fazer uma função para comparar os dois e deu certo

function comparaCelular(celular1, celular2) {
    let pontuacao1 = celular001.pontuacaoBenchmark;
    let pontuacao2 = celular002.pontuacaoBenchmark;
    celular1 = celular001.marcaCelular;
    celular2 = celular002.marcaCelular

    if (pontuacao1 > pontuacao2) {
        console.log(`${celular1} é melhor`); //Usando literal template
    }
    else {
        console.log(`${celular2} é melhor`); //Usando literal template
    }
}

comparaCelular(celular001,celular002)

*/

/* ------------------------

//Contructor Functions

function Cliente(nomeCompleto,idade,email) {
    this.nomeCompleto = nomeCompleto,
    this.idade = idade,
    this.email = email
}

let cliente1 = new Cliente('João Rodrigues da Silva',59,'joaors@gmail.com')
console.log(cliente1);

let cliente2 = new Cliente('Maria Santos Silva',55,'mariass@gmail.com');
console.log(cliente2);

*/

/* ---------------

//Math

let a = Math.floor(Math.random() * 1000);


console.log(a);

*/

/* -----------------

//Date

const data1 = new Date();
console.log(data1);

const data2 = new Date(2001,1,17,15,30);
console.log(data2);

data1.setMonth(11);
console.log(data1);

data2.setFullYear(2030);
console.log(data2);

let dia1 = data1.getDate();
console.log(dia1); // Retorna o dia do mês = 7

let dia2 = data2.getDay();
console.log(dia2); // Retorna o dia da semana = 6

*/

/* -----------------

// Mini Projeto 11 - Montador de endereço

let endereco = 'Digite seu endereço';

console.log(endereco);

function MontadorEndereco(rua,numero,cidade,cep) {
    this.rua = rua,
    this.numero = numero,
    this.cidade = cidade,
    this.cep = cep
};

endereco = new MontadorEndereco('Benedito de Olivera Melo',28,'Paranapanema',18720000);

function exibirEndereco(endereco) {
    for (chave in endereco) {
    console.log(chave,endereco[chave])
    }
}

exibirEndereco(endereco);

*/

/* ----------------------

// Muito válido esse projeto. Aprendi a comparar os valores de dois objetos. O prefoessr fez de outra forma que também serve para situação de validação.

// Mini-Projeto 12 - Encontre a igualdade de Objetos

function MontadorEndereco(rua,numero,cidade,cep) {
    this.rua = rua,
    this.numero = numero,
    this.cidade = cidade,
    this.cep = cep
}

function exibirEndereco(endereco) {
    for (chave in endereco) {
    console.log(chave,endereco[chave])
    }
}

function comparaEndereco(obj1,obj2) {
    let objeto1 = obj1;
    let objeto2 = obj2;

    for (chave in objeto2) {
        if (objeto1[chave] === objeto2[chave]) {
            console.log(`${chave} é igual`);
        }
        else {
            console.log(`${chave} é diferente`);
        }
    }

}

let endereco1 = new MontadorEndereco('Benedito de Olivera Melo',28,'Paranapanema',18720000);
exibirEndereco(endereco1);

let endereco2 = new MontadorEndereco('Jose Venâncio Aires',11,'Paranapanema',18720000)
exibirEndereco(endereco2)

comparaEndereco(endereco1,endereco2)

*/

/* --------------

// Mini-Projeto 13 - Montador de Postagem de blog

function montaPostagem(titulo,mensagem,autor,visualizacoes,autorComentario,mensagemComentario,estaAoVivo) {
    this.titulo = titulo,
    this.mensagem = mensagem,
    this.autor = autor,
    this.visualizacoes = visualizacoes,
    this.comentario = [
        {autor: autorComentario,mensagem: mensagemComentario}
    ]
    this.estaAoVivo = estaAoVivo
}

const postagem001 = new montaPostagem('Hello Word',`Olá Mundo! Essa é minha primeira postagem no blog. Fico feliz em ter você aqui. Deixe um comentário abaixo!`,`thiago`,1,'jhon',`Parabéns pelo post`,true);

console.log(postagem001);

*/

/* ----------------------

// Mini-projeto 14 - Faixas de preços

function CriaFaixaPreco(tooltip,minimo,maximo) {
    this.tooltip = tooltip,
    this.minimo = minimo,
    this.maximo = maximo
}

let faixaPreço = [
    new CriaFaixaPreco ('Até R$ 700,00',0,700),
    new CriaFaixaPreco ('Até R$ 1000,00',701,1000),
    new CriaFaixaPreco ('Maior R$ 1000,00',1001,99999999999)
]

console.log(faixaPreço);

*/

/* -----------------

// Manipulando arrays - Tipos de Referência

const produtos = [
    {id: 1, nome: 'celular', valor: 1000},
    {id: 2, nome: 'notebook', valor: 3000},
    {id: 3, nome: 'pc', valor: 2500},
    {id: 4, nome: 'tv', valor: 1500},
    {id: 5, nome: 'tablet', valor: 1300}
]

const produtos2 = [
    {id: 100, nome: 'aspirador', valor: 300},
    {id: 101, nome: 'wap', valor: 500}
]

produtos.unshift({id:0, nome: 'capinha', valor: 15});
produtos.push({id:6, nome: 'monitor', valor: 700})

console.log(produtos);

console.log(produtos.find((produto) => {
    return produto.valor <= 700;
}));

const combinado = produtos.concat(produtos2)
console.log(combinado);

const promocao = combinado.slice(3,6)
console.log(promocao);

produtos[3].valor = 3000;

*/


/*------------------------

// Imput - recebendo dados do usuário

let idadeUsuario = parseInt(prompt('Qual a sua idade?'));
function comparaIdadeUsuario(idade) {
    if (idade >= 18) {
        alert('Você é maior de idade')
    } else {
        alert('Você é menor de idade')
    }
}

comparaIdadeUsuario(idadeUsuario)

*/

// Mini Projeto 15 - Segurança Virtual

//Ver na pasta