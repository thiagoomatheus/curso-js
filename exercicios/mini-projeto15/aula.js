const anfitrioes = ['Rafael','Angela','Maria','João'];

let convidado = 'Digite seu nome ...';

function recebeNomeUsuario(nomeUsuario) {
    if (nomeUsuario !== '') {
        convidado = nomeUsuario;
    }
}

function validaConvidado(nomeAnfitriao) {
    if (anfitrioes.includes(nomeAnfitriao)) {
        document.getElementById("resultado-validacao").innerText = `${convidado} - Você pode entrar!`;
        document.getElementById("resultado-validacao").style.color = 'green';
    }
    else {
        document.getElementById("resultado-validacao").innerText = `${convidado} - Você não pode entrar!`;
        document.getElementById("resultado-validacao").style.color = 'red';
    }
}

