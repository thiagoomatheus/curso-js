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

//Para tornar o código mais correto nós poderíamos substituir os valores oltos, como o 70 e o 5 por constantes. O código ficaria assim:

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