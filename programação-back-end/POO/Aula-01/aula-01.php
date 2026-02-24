<?php

class pessoa{
    public $nome; //atributo

    public function falar(){ //método
        return "Olá, meu nome é ".$this->nome;
    }
} 
 


 $Bruno = new pessoa();
 $Bruno->nome = "Bruno Portes";
 echo $Bruno->falar();

 ?>