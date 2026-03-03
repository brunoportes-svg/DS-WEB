<?php

class pessoa {
public $nome;
public $idade;

}



class funcionario extends pessoa {
    private $salario;
}

class gerente extends funcionario {
    public function salario($salario){
        $this->salario = $salario;
       
      }
}

$bruno = new gerente();
$bruno->salario(5000); 
echo "Salário do gerente: " . $bruno->salario += ($bruno->salario * 0.2);  

echo "<br/>";


class programador extends funcionario {
    public function salario($salario){
        $this->salario = $salario;
   
    }
}


$luis = new programador();
$luis->salario(5000); 
echo "Salário do programador: " . $luis->salario += ($luis->salario * 0.1);  


