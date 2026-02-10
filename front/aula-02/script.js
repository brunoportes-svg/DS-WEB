


//data e hora
let dataAtual = new Date();
console.log(dataAtual. getMilliseconds());



let ano = dataAtual.getFullYear();
let mes = dataAtual.getMonth() +1;
let dia = dataAtual.getDate();
let horas = dataAtual.getHours();
let minutos = dataAtual.getMinutes();
let segundos = dataAtual.getSeconds();

console.log(`Data atual: ${dia}/${mes + 1}/${ano} ${horas}:${minutos}:${segundos}`);


//========================================================================================================================

let hoje = new Date();
let diaParaadicionar = 10000;

let novaData = new Date();
novaData.setDate(hoje.getDate() + diaParaadicionar);

//exibi a data no fmorato local
console.log(novaData.toLocaleDateString());

//========================================================================================================================
let data1 = new Date("2025-03-19");
let data2 = new Date("2025-03-25");

// diferença em milessimos 
let diferencaMs = data2 - data1


//manipulando o DOM


document.getElementById("conteudo").innerHTML = "<p>Olá, mundo!</p>";

var valor = document.getElementById("conteudo").innerHTML;
console.log(valor);

//imagem get
document.getElementById("foto").setAttribute("src", "messi.jpg");

console.log(document.getElementById("foto").getAttribute("src"));


//usando o style

document.getElementById("conteudo").style.backgroundColor = "blue";

function mudaTamanho(){
    document.getElementById("foto").style.width = "200px";
}

function aumentar(){
    document.getElementById("foto").style.width = "400px";
}