<?php

require_once 'database.php';
$database = new Database();

// IMPORTANTE (se ainda não tiver)
$method = $_SERVER['REQUEST_METHOD'];
$id = $_GET['id'] ?? null;

switch ($method) {

    // =========================
    // GET (AGORA COM CATEGORIA)
    // =========================
   case 'GET':

    if ($id) {
        $resultado = $database->executeQuery(
            "SELECT p.*, c.nome AS categoria
             FROM produtos p
             JOIN categorias c ON p.categoria_id = c.id
             WHERE p.id = :id",
            ['id' => $id]
        )->fetch();
    } else {
        $resultado = $database->executeQuery(
            "SELECT p.*, c.nome AS categoria
             FROM produtos p
             JOIN categorias c ON p.categoria_id = c.id"
        )->fetchAll();
    }

    echo json_encode($resultado);
    break;

    // =========================
    // POST
    // =========================
    case 'POST':

        $body = json_decode(file_get_contents('php://input'), true);

        $nome = $body['nome'] ?? '';
        $preco = $body['preco'] ?? 0;
        $categoria_id = $body['categoria_id'] ?? 1;

        if (!$nome || !is_numeric($preco)) {
            echo json_encode([
                'status' => 'error',
                'message' => 'Nome ou preço inválido'
            ]);
            break;
        }

        $database->executeQuery(
            "INSERT INTO produtos (nome, preco, categoria_id, disponivel)
             VALUES (:nome, :preco, :categoria_id, 1)",
            [
                'nome' => $nome,
                'preco' => $preco,
                'categoria_id' => $categoria_id
            ]
        );

        echo json_encode([
            'status' => 'success',
            'message' => 'Produto cadastrado'
        ]);

        break;

    // =========================
    // DELETE
    // =========================
    case 'DELETE':

        if (!$id) {
            echo json_encode([
                'status' => 'error',
                'message' => 'ID não informado'
            ]);
            break;
        }

        $database->executeQuery(
            "DELETE FROM produtos WHERE id = :id",
            ['id' => $id]
        );

        echo json_encode([
            'status' => 'success',
            'message' => 'Produto deletado'
        ]);

        break;
}