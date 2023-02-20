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