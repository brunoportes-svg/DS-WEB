let estado = 0;
let intervalo;

let tempos = [15000, 4000, 15000];

function mostrarCor(cor) {

    if (cor === 0) {
        document.getElementById("vermelho").style.backgroundColor = "#444";
        document.getElementById("amarelo").style.backgroundColor = "#444";
        document.getElementById("verde").style.backgroundColor = "green";
    }

    else if (cor === 1) {
        document.getElementById("vermelho").style.backgroundColor = "#444";
        document.getElementById("amarelo").style.backgroundColor = "yellow";
        document.getElementById("verde").style.backgroundColor = "#444";
    }

    else {
        document.getElementById("vermelho").style.backgroundColor = "red";
        document.getElementById("amarelo").style.backgroundColor = "#444";
        document.getElementById("verde").style.backgroundColor = "#444";
    }
}

function trocar() {
    estado = (estado + 1) % 3;

    mostrarCor(estado);

    clearInterval(intervalo);
    intervalo = setInterval(trocar, tempos[estado]);
}

function setVelocidade(tipo) {

    if (tipo === "lento") {
        tempos = [20000, 4000, 20000];
    }

    else if (tipo === "medio") {
        tempos = [15000, 4000, 15000];
    }

    else if (tipo === "rapido") {
        tempos = [10000, 4000, 10000];
    }

    clearInterval(intervalo);
    intervalo = setInterval(trocar, tempos[estado]);
}

mostrarCor(estado);
intervalo = setInterval(trocar, tempos[estado]);