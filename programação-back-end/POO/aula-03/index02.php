<?php

abstract class animal {
public function fazerSom(){}

}


class sapo extends animal {
public function fazerSom() {
    echo "O sapo faz croac croac";
}
public function mover() {
    echo "O sapo pula";
}
}
$sapo = new sapo();
$sapo->fazerSom();
echo "<br/>";
$sapo->mover();
echo "<br/>";

class cavalo extends animal {
    public function fazerSom() {
        echo "O cavalo relincha";
    }
    public function mover() {
        echo "O cavalo galopa";
    }
}
$cavalo = new cavalo();
$cavalo->fazerSom();
echo "<br/>";
$cavalo->mover();
echo "<br/>";

class tartaruga extends animal {
    public function fazerSom() {
        echo "A tartaruga faz som de casco";
    }
    public function mover() {
        echo "A tartaruga anda";
    }
}
$tartaruga = new tartaruga();
$tartaruga->fazerSom();
echo "<br/>";
$tartaruga->mover();