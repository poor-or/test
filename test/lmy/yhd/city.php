<?php 
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST, GET, PUT, DELETE, OPTIONS");
    header("Access-Control-Allow-Headers: x-requested-with, content-type");
    $con=new mysqli("localhost", "root", "123456", "stu");
    if($con->$con_error){
        die("连接失败:".$con->$con_error);
    }
    $txt=$con->query("select * from tb_city;");
    while($list=$txt->fetch_assoc()){
        $lists[]=$list;      
    }
    echo json_encode($lists);
    $con->close();
?>