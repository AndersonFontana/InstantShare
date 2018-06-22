<?php
$method = 'method'.$_SERVER['REQUEST_METHOD'];

header("Access-Control-Allow-Origin: *");
header('Access-Control-Max-Age: 86400');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Authorization, X-Requested-With, Content-Length, Content-Type, Origin, Accept");
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit(0);
}
header('Content-Type: application/json');

function notAllowed($obj) {
    http_response_code(500);
    return array('error' => 'Método inválido');
}

if(!function_exists($method)) {
    $method='notAllowed';
};

$data = json_decode(file_get_contents("php://input"), true);
$ret = $method($data,$_GET);
echo json_encode($ret);
