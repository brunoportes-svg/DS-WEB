<?php

abstract class Produto {
    public $nome;
    public $preco;
    public $estoque;

    abstract public function calcularDescontoBase();

  
    public function calcularDescontoTotal() {
        $desconto = $this->calcularDescontoBase();

        
        if ($this->estoque < 5) {
            $desconto += $this->preco * 0.1;
        }

        return $desconto;
    }

    public function verDados() {
        $desconto = $this->calcularDescontoTotal();
        $precoFinal = $this->preco - $desconto;

        echo "Preço final: R$ {$precoFinal}<br><br>";
        echo "Desconto aplicado: R$ {$desconto}<br><br>";
    }
}


class Eletronico extends Produto {
    public function calcularDescontoBase() {
        return $this->preco * 0.1; 
    }
}



class Roupa extends Produto {
    public function calcularDescontoBase() {
        return $this->preco * 0.2; 
    }
}



$celular = new Eletronico();
$celular->preco = 1000;
$celular->estoque = 1;

echo "Celular:<br>";
$celular->verDados();


$camisa = new Roupa();
$camisa->preco = 50;
$camisa->estoque = 6;

echo "Camisa:<br>";
$camisa->verDados();