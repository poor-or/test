<?php 
    $con=new mysqli("localhost", "root", "123456", "stu");
    if($con->$con_error){
        die("连接失败:".$con->$con_error);
    }
    $page=$_GET["page"]?$_GET["page"]:0;
    $txt=$con->query("select * from tb_goods limit {$page},40;");
    while($list=$txt->fetch_assoc()){
        $lists[]=$list;      
    }
    echo json_encode($lists);
?>