<?php

class Documento {
    protected $numero;

    public function __construct($numero = null) {
        $this->numero = $numero;
    }

    public function getNumero() {
        return $this->numero;
    }

    public function setNumero($numero) {
        $this->numero = $numero;
    }
}

class CPF extends Documento {

    public function validar() {

        if ($this->numero == null)
            return false;

        $cpf = preg_replace('/\D/', '', $this->numero);

      
        if (strlen($cpf) != 11)
            return false;

      
        if (preg_match('/(\d)\1{10}/', $cpf))
            return false;

  
        $soma = 0;
        for ($i = 0; $i < 9; $i++) {
            $soma += $cpf[$i] * (10 - $i);
        }

        $resto = 11 - ($soma % 11);
        $digito1 = ($resto >= 10) ? 0 : $resto;

   
        $soma = 0;
        for ($i = 0; $i < 10; $i++) {
            $soma += $cpf[$i] * (11 - $i);
        }

        $resto = 11 - ($soma % 11);
        $digito2 = ($resto >= 10) ? 0 : $resto;

        return ($digito1 == $cpf[9] && $digito2 == $cpf[10]);
    }
}



$cpf = new CPF("529.982.247-25");

echo "CPF: " . $cpf->getNumero() . "<br>";
echo "É válido? " . ($cpf->validar() ? "Sim" : "Não");

?>