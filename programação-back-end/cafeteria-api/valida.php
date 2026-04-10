<?php
$erro = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (empty($_POST["nome"])) {
        $erro = "O campo nome é obrigatório!";
    } else {
        echo "OK!";
    }
}
?>

<form method="post">
  <input type="text" name="nome">
  <span style="color:red;"><?php echo $erro; ?></span>
  <br><br>
  <button type="submit">Enviar</button>
</form>