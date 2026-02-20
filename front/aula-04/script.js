var contadorItem = 0;

function adicionar(){

  contadorItem ++
let novoItem = document.createElement('li');
let nome = document.getElementById('nome').value;

novoItem.innerHTML +=  "Seu nome é: " + nome + "<br>";
////////////////////////////////////////////////////////////////////////////////////////////
let email = document.getElementById('email').value;

novoItem.innerHTML += "seu email é: " + email + "<br>";
////////////////////////////////////////////////////////////////////////////////////////////
let numero = document.getElementById('numero').value;

novoItem.innerHTML += "Seu RM é: " + numero + "<br>";

////////////////////////////////////////////////////////////////////////////////////////////
let telefone = document.getElementById('telefone').value;

novoItem.innerHTML +=  "Seu telefone é: " + telefone + "<br>";

////////////////////////////////////////////////////////////////////////////////////////////
let turma = document.getElementById('turma').value;

novoItem.innerHTML += "Sua turma é: " + turma + "<br>";

////////////////////////////////////////////////////////////////////////////////////////////
novoItem.setAttribute('id',  contadorItem);

let botaoRemover = document.createElement('button');
botaoRemover.innerHTML = "Remover";
botaoRemover.setAttribute('onclick', 'remover('+contadorItem+')');


novoItem.appendChild(botaoRemover);

document.getElementById('lista').appendChild(novoItem);
}



function remover(contadorItem){
    var item1 = document.getElementById(contadorItem);
    document.getElementById('lista').removeChild(item1);
}