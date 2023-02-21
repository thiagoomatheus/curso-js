const anfitrioes = ['Rafael','Angela','Maria','João'];

let nomeUsuario = 'Insira seu nome';
let inputNomeUsuario = document.getElementById("nomeusuario");
inputNomeUsuario.value = nomeUsuario;

function validaConvidado(nomeAnfitriao) {
    if (anfitrioes.includes(nomeAnfitriao)) {
        document.getElementById("resultado-validacao").innerText = `${nomeUsuario} - Você pode entrar!`;
        document.getElementById("resultado-validacao").style.color = 'green';
    }
    else {
        document.getElementById("resultado-validacao").innerText = `${nomeUsuario} - Você não pode entrar!`;
        document.getElementById("resultado-validacao").style.color = 'red';
    }
}

