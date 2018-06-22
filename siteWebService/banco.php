<?php

function debug($arg) {
    echo "<pre>";
    print_r($arg);
    echo "</pre><hr>";
};
class Banco extends PDO {
    private static $instance = null;
    public function Banco($dsn)
    {
        parent::__construct($dsn,"appmoveis","trabalhofinal");
    }
    public static function getInstance()
    {
        if(!isset(self::$instance))
        {
            try {
                self::$instance = new Banco("mysql:dbname=appmoveis;host=localhost");
            } catch (Exception $ex) {
                echo "Falha na conexão com o banco de dados: $ex";
                exit();
            }
        }
        return self::$instance;
    }
};

$con = Banco::getInstance();

function executarSql($sql,$arr) {
    global $con;
    $stmt = $con->prepare($sql);
    if(!$stmt->execute($arr)) {
        die("Erro na execução do '$sql'");
    }
    $result = $stmt->fetchAll();
    return $result;
}
function executarAlteracao($sql,$arr) {
    global $con;
    $stmt = $con->prepare($sql);
    $res = $stmt->execute($arr);
    if(!$res) {
        die("Erro na execução do '$sql'");
    }
    $id = $con->lastInsertId();
    return array('ret' => $res, 'id' => $id);
}

function executarInclusao($tabela, $obj) {
    $campos = '';
    $valor = '';
    foreach($obj as $atr => $vlr) {
        $campos .= ','.$atr;
    }
    foreach($obj as $atr => $vlr) {
        $valor .= ',:'.$atr;
    }
    $campos = substr($campos,1);
    $valor = substr($valor,1);
    return executarAlteracao("insert into $tabela ($campos) values($valor);",$obj);
}