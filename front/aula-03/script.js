
var contadorItem = 0;

function adicionar(){

  contadorItem ++
let novoItem = document.createElement('li');
let novaTarefa = document.getElementById('novaTarefa').value;

novoItem.textContent = contadorItem + " - " + novaTarefa;

novoItem.setAttribute('id',  contadorItem);

let botaoRemover = document.createElement('button');
botaoRemover.textContent = "Remover";
botaoRemover.setAttribute('onclick', 'remover('+contadorItem+')');


novoItem.appendChild(botaoRemover);

document.getElementById('lista').appendChild(novoItem);
}



function remover(contadorItem){
    var item1 = document.getElementById(contadorItem);
    document.getElementById('lista').removeChild(item1);
}