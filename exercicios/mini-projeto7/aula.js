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
