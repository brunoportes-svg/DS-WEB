<?php

class artista {
    public function __construct($novoNome, $novoGenero) {
        $this->nome = $novoNome;
        $this->genero = $novoGenero;
    }

}

class musica {
    public $titulo;
    public $duração;
    public artista $artista;

    public function __construct($novoTitulo, $novoDuração, artista $novoArtista) {
        $this->titulo = $novoTitulo;
        $this->duração = $novoDuração;
        $this->artista = $novoArtista;
    }
}

$artista = new artista("Bruno", "Pop");
$musica = new musica("smile", "3:30", $artista);

echo "A música " . ($musica->titulo) . " tem duração de " . ($musica->duração) . " e é do artista " . ($musica->artista->nome) . ", que é do gênero " . ($musica->artista->genero) . ".";