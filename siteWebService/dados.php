<?php
include("banco.php");
include("wsGlobal.php");


function methodPOST($obj, $params) {
	$chave = substr(md5(time()),0,10);
	executarInclusao("dados",array(
		'chave' => $chave,
		'tipo' => $obj['type'],
		'valor' => $obj['value']
	));
	return array('id' => $chave);
}

function methodGET($obj, $params) {
	if(!isset($params['id'])) {
		http_response_code(500);
		return array('error' => 'Faltando parâmetros');
	}
	$res = executarSql('select  * from dados where chave = :chave', array('chave' => $params['id']));
	if(isset($res[0])) {
		return array('type' => $res[0]['tipo'], 'value' => $res[0]['valor']);
	} else {
		return array('error' => 'Consulta não encontrada');
	}
}