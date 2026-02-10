document.getElementById("conteudo").style.backgroundColor = "blue";

function adicionar(){
    document.getElementById("conteudo").innerHTML += "<p>Texto adicionado ao conteúdo!</p>";
    console.log(document.getElementById("conteudo").innerHTML);
}

console.log(document.getElementById("conteudo").innerHTML);