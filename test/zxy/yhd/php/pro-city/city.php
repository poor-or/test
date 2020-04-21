<?php 
    $con=new mysqli("localhost", "root", "123456", "sign");
    $txt=$con->query("select * from tb_city;");
    while($list=$txt->fetch_assoc()){
        $lists[]=$list;      
    }
    echo json_encode($lists);
?>