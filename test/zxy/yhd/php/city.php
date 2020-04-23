<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
header('Access-Control-Allow-Headers:x-requested-with,content-type');

    $con=new mysqli("localhost", "root", "123456", "project");
    $txt=$con->query("select * from tb_city;");
    while($list=$txt->fetch_assoc()){
        $lists[]=$list;      
    }
    echo json_encode($lists);
?>