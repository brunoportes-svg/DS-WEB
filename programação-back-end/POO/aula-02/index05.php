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

?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Validador de CPF</title>
</head>
<body>

<h2>Digite um CPF para validar</h2>

<form method="post">
    <input type="text" name="cpf" placeholder="Digite o CPF">
    <button type="submit">Verificar</button>
</form>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $cpfDigitado = $_POST["cpf"];

    $cpf = new CPF($cpfDigitado);

    echo "<hr>";
    echo "CPF digitado: " . $cpf->getNumero() . "<br>";
    echo "É válido? " . ($cpf->validar() ? "Sim" : "Não");
}
?>

</body>
</html>