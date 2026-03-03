<?php

class veiculo {
    public $marca;
    public $modelo;
    private $velocidade;





 function setVelocidade($velocidade){
        echo "sua velocidade é de " . $this->getVelocidade();
    }

}

class Carro extends veiculo {
    function acelerarCarro($velocidade){
        echo "o carro é acelerado pelo pedal: " . $velocidade . "km/h";
    }
}

class Moto extends veiculo {
 function acelerarMoto($velocidade){
    echo "a moto é acelerada pelo acelerador: " . $velocidade . "km/h";
}
}

$carro = new Carro();
$carro->acelerarCarro(100);
echo "<br/>";
 

$moto = new Moto();
$moto->acelerarMoto(80);
echo "<br/>";
