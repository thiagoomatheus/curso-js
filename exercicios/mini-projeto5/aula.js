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