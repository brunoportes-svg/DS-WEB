//=============================== eventos do mause================================//

var area = document.getElementById("area");
var mensagem = document.getElementById("mensagem");

area.addEventListener("click", function(){
   area.style.backgroundImage = "url('sonicgay.jpg')";
area.style.backgroundSize = "100% 100%";
});

area.addEventListener("dblclick", function(){
    area.style.backgroundImage = "url('super.jpg')";
area.style.backgroundSize = "100% 100%";
});


area.addEventListener("mouseenter", function(){

    //verificando a cor atual para poder alterar a cor
   area.style.backgroundImage = "url('download.jpg')";
area.style.backgroundSize = "100% 100%";
});


area.addEventListener("mouseleave", function(){
area.style.backgroundImage = "url('sonic.jpeg')";
area.style.backgroundSize = "100% 100%";
});



area.addEventListener("contextmenu", function(event){
event.preventDefault();
alert("Botão direito clicado!");
});
//=============================== eventos da teclado ================================//


document.addEventListener("keydown", function(event){
// Exibe a tecla pressionada
var campo = document.getElementById("resultado");
campo.textContent = "Tecla pressionada: " + event.key;
// Também mostra no console
console.log("Tecla pressionada: " + event.key);
});




