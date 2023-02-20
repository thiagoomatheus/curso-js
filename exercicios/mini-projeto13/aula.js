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