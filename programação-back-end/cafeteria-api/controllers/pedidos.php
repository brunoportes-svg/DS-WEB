<?php

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Methods: GET, POST, DELETE, OPTIONS');

require_once 'database.php';
$database = new Database();

$method = $_SERVER['REQUEST_METHOD'];

$path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$path = trim($path, '/');
$segments = explode('/', $path);

// remove pasta
if ($segments[0] === 'cafeteria-api') {
    array_shift($segments);
}

// valida rota
if (!isset($segments[0]) || $segments[0] !== 'pedidos') {
    http_response_code(404);
    echo json_encode([
        'status' => 'error',
        'message' => 'Endpoint nao encontrado.'
    ]);
    exit;
}

$id = $segments[1] ?? null;

switch($method){

    // ---------------- GET ----------------
    case 'GET':
        if ($id) {
            $stmt = $database->executeQuery(
                'SELECT * FROM pedidos WHERE id = :id',
                [':id' => $id]
            );
            $dados = $stmt->fetchAll();
        } else {
            $stmt = $database->executeQuery('SELECT * FROM pedidos ORDER BY criado_em DESC');
            $dados = $stmt->fetchAll();
        }

        echo json_encode([
            'status' => 'success',
            'data'   => $dados
        ]);
        break;

    // ---------------- POST ----------------
    case 'POST':
        $body = json_decode(file_get_contents('php://input'), true);

        $cliente = trim($body['cliente'] ?? '');
        $total   = $body['total'] ?? 0;

        if (!$cliente) {
            http_response_code(400);
            echo json_encode([
                'status' => 'error',
                'message' => 'Nome obrigatório'
            ]);
            break;
        }

        $database->executeQuery(
            "INSERT INTO pedidos (cliente) VALUES (:cliente)",
            [
                ':cliente' => $cliente
            ]
        );

        echo json_encode([
            'status' => 'success',
            'message' => 'Pedido criado',
            'id' => $database->lastInsertId()
        ]);
        break;

    // ---------------- DELETE ----------------
    case 'DELETE':
        if (!$id) {
            http_response_code(400);
            echo json_encode([
                'status' => 'error',
                'message' => 'ID obrigatório'
            ]);
            break;
        }

        $database->executeQuery(
            "DELETE FROM pedidos WHERE id = :id",
            [':id' => $id]
        );

        echo json_encode([
            'status' => 'success',
            'message' => 'Pedido deletado'
        ]);
        break;

    case 'OPTIONS':
        http_response_code(200);
        break;

    default:
        http_response_code(405);
}