<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

header("Content-Type: application/json; charset=UTF-8");

require_once('../database.php'); 
$db = new Database();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);

    $pedido_id = $data['pedido_id'] ?? null;
    $produto_id = $data['produto_id'] ?? null;
    $quantidade = $data['quantidade'] ?? null;

    if (!$pedido_id || !$produto_id || !$quantidade) {
        echo json_encode(["status" => "error", "message" => "Dados incompletos"]);
        exit;
    }

    try {
        $sql = "INSERT INTO pedido_itens (pedido_id, produto_id, quantidade)
                VALUES (:pedido_id, :produto_id, :quantidade)";
        
        $params = [
            ':pedido_id'   => $pedido_id,
            ':produto_id'  => $produto_id,
            ':quantidade'  => $quantidade
        ];

        $db->executeQuery($sql, $params);
        echo json_encode(["status" => "success"]);

    } catch (Exception $e) {
        echo json_encode(["status" => "error", "message" => "Erro ao inserir item"]);
    }
}
?>