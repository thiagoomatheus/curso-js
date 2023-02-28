let tarefas = [];

let i = 0;

let btnNovaTarefa = document.querySelector("#add-tarefa button");

btnNovaTarefa.addEventListener("click", function () {

    let input = document.querySelector("#add-tarefa input");
    
    tarefas.push(input.value);

    tarefas.trim;

    if (tarefas[i] === "") {
        alert("Insira uma terefa!")
    }

    else if(tarefas[i].startsWith(" ")) {
        alert("Remova o espaço digitado no início!")
    }

    else {
        listaTarefa(tarefas)
    }

    i++;

})

function listaTarefa(tarefas) {
    let novaTarefa = document.createElement("li");

    novaTarefa.classList = "tarefas";

    novaTarefa.setAttribute("id", `item-${i}`)

    let tarefasAtuais = document.querySelector("#tarefas-atuais ul");

    tarefasAtuais.appendChild(novaTarefa);

    novaTarefa.textContent = `${tarefas[i]}`;

    criaBotoes()

}

function criaBotoes() {
    let tarefa = document.querySelector(`#item-${i}`);

    let btnConcluido = document.createElement("button");

    btnConcluido.setAttribute("id", "btnconcluido");

    btnConcluido.setAttribute("class", "material-symbols-outlined");

    btnConcluido.setAttribute("onclick", "conclui()")

    btnConcluido.innerHTML = `done`;

    let btnDelete = document.createElement("button");

    btnDelete.setAttribute("id", "btndelete")

    btnDelete.setAttribute("class", "material-symbols-outlined")

    btnDelete.setAttribute("onclick", "deleta()")

    btnDelete.innerHTML = `delete`;

    tarefa.appendChild(btnConcluido);
    tarefa.appendChild(btnDelete);
    
}

function conclui() {
    let tarefaPendente = document.querySelector("#
    ");
    let btnConcluido = document.querySelector("#btnconcluido");
    let btnDelete = document.querySelector("#btndelete");

    tarefaPendente.style.cssText = "background: #23104e; color: white";
    btnConcluido.style.cssText = "background: #23104e; color: white";
    btnDelete.style.cssText = "background: #23104e; color: white";

}

function deleta() {
    let tarefaPendente = document.querySelector(`#item-${i}`);
    tarefaPendente.remove();
}

    // btnDelete.addEventListener("click", function () {
    //     console.log("remove");
    // })
