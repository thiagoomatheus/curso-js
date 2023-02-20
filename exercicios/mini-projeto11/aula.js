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

// Muito válido esse projeto. Aprendi a comparar os valores de dois objetos. O prefoessr fez de outra forma que também serve para situação de validação.