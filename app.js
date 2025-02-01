//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação.
// Aqui você deverá desenvolver a lógica para resolver o problema.

desabilitarBotaoSorteio()
let amigos = [];
const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');

function adicionarAmigo(){
    limparSorteioTela()
    let amigo = document.getElementById("amigo").value.trim();
    if(amigo === ""){
        alert("Por favor, insira um nome válido.");
    } else {
        amigos.push(amigo);
    }

    if (amigos.length === 1){
        habilitarBotaoSorteio()
    }

    limparCampo("amigo");
    listarAmigosTela();
}

function desabilitarBotaoSorteio(){
    document.getElementById('sortear-amigo').setAttribute('disabled', true)
}

function habilitarBotaoSorteio(){
    document.getElementById('sortear-amigo').removeAttribute('disabled');
}

function limparCampo(id){
    document.getElementById(id).value = "";
}

function limparAmigosTela(){
    listaAmigos.innerHTML = '';
}

function limparSorteioTela(){
    document.getElementById('resultado').innerHTML = '';
}

function listarAmigosTela(){
    limparAmigosTela()
    amigos.forEach(element => {
        const listItem = document.createElement('li');
        listItem.textContent = element;
        listaAmigos.appendChild(listItem);
    })
}

function sortearAmigo(){
    let indiceAleatorio = parseInt(Math.random() * amigos.length);
    limparAmigosTela();
    const listItem = document.createElement('li');
    listItem.textContent = "O amigo secreto sorteado é: " + amigos[indiceAleatorio];
    resultado.appendChild(listItem);
    amigos = [];
    desabilitarBotaoSorteio()
}