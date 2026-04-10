<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

header("Content-Type: application/json; charset=UTF-8");

// Importa a classe e instancia
require_once('../database.php'); 
$db = new Database();

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $pedido_id = $_GET['pedido_id'] ?? null;

    try {
        if (!$pedido_id) {
            // Caso 1: Listar produtos para o Select
            $sql = "SELECT id, nome, preco FROM produtos";
            $stmt = $db->executeQuery($sql);
            $dados = $stmt->fetchAll();
        } else {
            // Caso 2: Listar itens de um pedido específico
            $sql = "SELECT pi.*, p.nome AS produto, p.preco 
                    FROM pedido_itens pi
                    JOIN produtos p ON p.id = pi.produto_id
                    WHERE pi.pedido_id = :pedido_id";
            $stmt = $db->executeQuery($sql, [':pedido_id' => $pedido_id]);
            $dados = $stmt->fetchAll();
        }

        echo json_encode(["status" => "success", "data" => $dados]);

    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode(["status" => "error", "message" => $e->getMessage()]);
    }
}
?>