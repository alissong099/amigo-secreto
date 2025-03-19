let participantes = []

function adicionarAmigo () {
    let nomeInput = document.getElementById("amigo");
    let nome = nomeInput.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    participantes.push(nome);
    atualizarLista();
    nomeInput.value = "";
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    participantes.forEach((nome, index) => {
        let item = document.createElement("li");
        item.textContent = `${index + 1}. ${nome}`;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    if (participantes.length === 0) {
        alert("Não há amigos para sortear. Adicione amigos primeiro.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * participantes.length);
    let nomeSorteado = participantes[indiceAleatorio];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `O amigo secreto é:  <strong>${nomeSorteado}</strong>`;
}