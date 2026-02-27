const quadrado = document.getElementById("quadrado");
const pontuacaoTexto = document.getElementById("pontuacao");
const som = document.getElementById("somAssustador");

let pontos = 0;
let tocou = false;

function atualizarPontuacao() {
  pontuacaoTexto.textContent = "Pontos: " + pontos;

  if (pontos >= 50 && !tocou) {
    quadrado.style.width = "100vw";
    quadrado.style.height = "100vh";
    quadrado.style.left = "0";
    quadrado.style.top = "0";

    som.play();
    tocou = true; // evita tocar várias vezes
  } else if (pontos < 100) {
    moverQuadrado();
  }
}

function moverQuadrado() {
  const larguraTela = window.innerWidth - quadrado.offsetWidth;
  const alturaTela = window.innerHeight - quadrado.offsetHeight;

  const novaPosicaoX = Math.random() * larguraTela;
  const novaPosicaoY = Math.random() * alturaTela;

  quadrado.style.left = novaPosicaoX + "px";
  quadrado.style.top = novaPosicaoY + "px";
}

quadrado.addEventListener("click", function(event) {
  event.stopPropagation();
  pontos += 10;
  atualizarPontuacao();
});

document.body.addEventListener("click", function() {
  pontos -= 20;
  atualizarPontuacao();
});

moverQuadrado();