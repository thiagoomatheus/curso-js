//Mini-Projeto 9 - Contador de Asteriscos

exibirAsteriscos(10);

function exibirAsteriscos(linhas) {
//    Forma mais simples

    asterisco = '';
    for (i = 1; i <= linhas; i++) {
        asterisco += '*' ; 
        console.log(i, asterisco);
    }

/*    --------------

    Forma mais avançada - é utilizado um loop dentro de um loop. */

    for (linha = 0; linha <= linhas; linha++) {
        let asterisco = '';
        for (i = 0; i <= linha; i++) {
            asterisco += '*'
        }
        console.log(asterisco);
    }
}