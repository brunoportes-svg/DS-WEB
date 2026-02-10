<?php

class armario{
    public $cor; //atributo
    public $portas; //atributo
    public $tamanho; //atributo
    public $pes; //atributo
    public $espaco; //atributo

    public function abrir(){ //método
        return "a cor do armario é ".$this->cor;
        
    }

    public function fechar(){ //método
        return "o tamanho é ".$this->tamanho;
             
    }

    public function armazenamento(){ //método
     return " o espaço do armário é ".$this->espaco."m²";
 

    }
      
        
}


$armariodecozinha = new armario();
$armariodecozinha->cor = "preto";
echo $armariodecozinha->abrir();

echo "<br>";


$armariodesala = new armario();
$armariodesala->tamanho = "grande";
echo $armariodesala->fechar();

echo "<br>";


$armariodaescola = new armario();
$armariodaescola->espaco = "10m²";
echo $armariodaescola->armazenamento();


echo "<br>";
echo "<hr/>";







class mesa{
    public $pernas; //atributo
    public $mateiral; //atributo
    public $cor; //atributo
    public $marca; //atributo
    public $textura; //atributo

    public function apoiar(){ //método
        return "voce apoiou em uma mesa de marca ".$this->marca;
            
    }

    public function centar(){ //método
    return "voce centou em uma mesa de cor ".$this->cor;
            

    }

    public function subir(){ //método
     return "voce subiu em uma mesa de textura ".$this->textura;
       

    }
}

$mesadoaluno = new mesa();
$mesadoaluno->marca = "ferrari";
echo $mesadoaluno->apoiar();

echo "<br>";
$mesadoprofessor = new mesa();
$mesadoprofessor->cor = "branca";
echo $mesadoprofessor->centar();

echo "<br>";
$mesadoluisfernando = new mesa();
$mesadoluisfernando->textura = "lisa";
echo $mesadoluisfernando->subir();

echo "<br>";
echo "<hr/>";




class cadeira{
    public $pernas; //atributo
    public $mateiral; //atributo
    public $cor; //atributo
    public $marca; //atributo
    public $textura; //atributo

    public function apoiar(){ //método
        return "voce apoiou em uma cadeira de textura de  ".$this->textura;
         
    }

    public function centar(){ //método
    return "voce sentou em uma cadeira de cor ".$this->cor;
             

    }

    public function subir(){ //método
     return "voce subiu em uma cadeira de material ".$this->mateiral;
       

    }
}

$cadeiradaprofessora = new cadeira();
$cadeiradaprofessora->textura = "lisa";
echo $cadeiradaprofessora->apoiar();


echo "<br>";
$cadeiradoseujorge = new cadeira();
$cadeiradoseujorge->cor = "preta";
echo $cadeiradoseujorge->centar();


echo "<br>";
$cadeiradoseuluisfernando = new cadeira();
$cadeiradoseuluisfernando->mateiral = "madeira";
echo $cadeiradoseuluisfernando->subir();
echo "<br>";
echo "<hr/>";

class humanos{
    public $membros; //atributo
    public $cabelo; //atributo
    public $unhas; //atributo
    public $altura; //atributo
    public $peso; //atributo

    public function correr(){ //método
        return "o humano que correu tem a textura de cabelo ".$this->cabelo;
         
    }

    public function falar(){ //método
    return "o humano que falou tem a cor das unhas ".$this->unhas;
             

    }

    public function sofrer(){ //método
     return "o humano que sofreu tem o peso de ".$this->peso."kg";
       

    }
}

$humanosquecorreram = new humanos();
$humanosquecorreram->cabelo = "liso";
echo $humanosquecorreram->correr();
echo "<br>";
$humanosquefalaram = new humanos();
$humanosquefalaram->unhas = "pretas";
echo $humanosquefalaram->falar();
echo "<br>";
$humanosquesofreram = new humanos();
$humanosquesofreram->peso = "80";
echo $humanosquesofreram->sofrer();
echo "<br>";
echo "<hr/>";
class arvore{
    public $folha; //atributo
    public $tronco; //atributo
    public $especie; //atributo
    public $tamanho; //atributo
    public $idade; //atributo

    public function sombra(){ //método
        return "a árvore de especie ".$this->especie." oferece sombra";

         
    }

    public function tranforma(){ //método
    return "a árvore que transforma co2 em 02 tem o tamanho de  ".$this->tamanho."m";
             

    }

    public function abrigo(){ //método
     return " o numero de ".$this->idade."define o numero de abrigo que a árvore pode oferecer";
       

    }
}

$arvoredecarvalho = new arvore();
$arvoredecarvalho->especie = "carvalho";
echo $arvoredecarvalho->sombra();
 echo "<br>";
$arvoredepinheiro = new arvore();
$arvoredepinheiro->tamanho = "grande";
echo $arvoredepinheiro->tranforma();
echo "<br>";
$arvoredecastanheira = new arvore();
$arvoredecastanheira->idade = "100";
echo $arvoredecastanheira->abrigo();