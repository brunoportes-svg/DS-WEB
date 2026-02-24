<?php

abstract class Produto {
    public $nome;
    public $preco;
    public $estoque;

    abstract public function calcularDesconto();
}

class Eletronico extends Produto {
    public function calcularDesconto() {
        return $this->preco * 0.1; 
    }
}

class Roupa extends Produto {
    public function calcularDesconto() {
        return $this->preco * 0.2; 
    }
}

$celular = new Eletronico();
$celular->estoque = 10;
$celular->preco = 1000;

echo "Desconto do celular: " . $celular->calcularDesconto() . "<br/>";

$camisa = new Roupa();
$camisa->estoque = 20;
$camisa->preco = 50;

echo "Desconto da camisa: " . $camisa->calcularDesconto() . "<br/>";
