<?php

class fabricante {
    public $nome;
    public $paisOrigem;

    public function __construct($nome, $paisOrigem) {
        $this->nome = $nome;
        $this->paisOrigem = $paisOrigem;
    }
}

class motor {
    public $potencia;
    public $combustivel;

    public function __construct($potencia, $combustivel) {
        $this->potencia = $potencia;
        $this->combustivel = $combustivel;
    }
}

class carro {
    public $modelo;
    public $ano;
    public fabricante $fabricante;
    public motor $motor;

    public function __construct($modelo, $ano, fabricante $fabricante, motor $motor) {
        $this->modelo = $modelo;
        $this->ano = $ano;
        $this->fabricante = $fabricante;
        $this->motor = $motor;
    }
}

$fabricante = new fabricante("Toyota", "Japão");
$motor = new motor("150 cavalos", "Gasolina");
$carro = new carro("Corolla", 2020, $fabricante, $motor);

echo "O carro " . ($carro->modelo) . " do ano " . ($carro->ano) . " é fabricado pela " . ($carro->fabricante->nome) . ", que é do país " . ($carro->fabricante->paisOrigem) . ". O motor tem potência de " . ($carro->motor->potencia) . " e utiliza " . ($carro->motor->combustivel) . ".";