//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = []

function adicionarAmigo(){
    let adicionar = document.querySelector('input').value;
    
    if (adicionar === '' || adicionar === ' '){
        alert('Por favor, insira um nome.');
    } else {
        amigos.push(adicionar);
        atualizarListaAmigos();
    }
    limparCampo();
}

function atualizarListaAmigos(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    let i = 0;
    while (i < amigos.length){
        lista.innerHTML += '<li>' + amigos[i] + '</li>'; 
        i++;
    }
}

function sortearAmigo(){
    if(amigos.length === 0){
        alert('Nenhum amigo foi adicionado ainda!');
        return
    } else {

        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        let nomeEscolhido = amigos[indiceAleatorio];

        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `O amigo secreto sorteado é: ${nomeEscolhido}`;
        console.log(amigos);

        document.getElementById('listaAmigos').innerHTML = ""; 
        amigos = [];
    }
}

function limparCampo(){
    let limpar = document.querySelector('input');
    limpar.value = '';
}

function reiniciarSorteio(){
    amigos = [];
    limparCampo();
    atualizarListaAmigos();
    document.getElementById('resultado').innerHTML = '';
}