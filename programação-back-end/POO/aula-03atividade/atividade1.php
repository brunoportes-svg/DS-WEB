<?php

class Dono {
    public $nome;
    public $telefone;

    public function __construct($novoNome, $novoTelefone) {
        $this->nome = $novoNome;
        $this->telefone = $novoTelefone;
    }
}

class Animal {
    public $nome;
    public $especie;
    public Dono $dono;

    public function __construct($novoNome, $novaEspecie, Dono $novoDono) {
        $this->nome = $novoNome;
        $this->especie = $novaEspecie;
        $this->dono = $novoDono;
    }
}


$dono = new Dono("Bruno", "123456789");


$animal = new Animal("Rex", "bitbull", $dono);

echo ($dono->nome) . " é o dono de " . "<br/>"
. ($animal->nome) . ", que é um " . ($animal->especie) . ". O telefone do dono é: " . ($animal->dono->telefone);