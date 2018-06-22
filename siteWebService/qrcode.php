<?php
if(!isset($_GET['id'])) {
	http_response_code(500);
	$obj = array("status" => false, "msg" => "ID não informado!");
	exit(json_encode($obj, JSON_UNESCAPED_UNICODE));
}
include('phpqrcode/qrlib.php');
QRcode::png($_GET['id']);