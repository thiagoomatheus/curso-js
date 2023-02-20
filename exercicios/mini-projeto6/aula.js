//Mini-Projeto 6 - Encontre o String

// Não consegui fazer muito bem

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