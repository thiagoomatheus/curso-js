// Mini-Projeto 12 - Encontre a igualdade de Objetos

// Muito válido esse projeto. Aprendi a comparar os valores de dois objetos. O prefoessr fez de outra forma que também serve para situação de validação.

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