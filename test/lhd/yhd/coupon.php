<?php 
 $page=$_GET['value']; 
 $start=($page-1)*18;
    $con=new mysqli("localhost", "root", "123456", "stu");
    if($con->$con_error){
        die("连接失败:".$con->$con_error);
    }
    $txt=$con->query("select * from tb_coupon limit {$start},18;");
    while($list=$txt->fetch_assoc()){
        $lists[]=$list;      
    }
    echo json_encode($lists);
?>