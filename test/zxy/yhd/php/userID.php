<?php 
    $con=new mysqli("localhost", "root", "123456", "stu");
    if($con->$con_error){
        die("连接失败:".$con->$con_error);
    }
    $txt=$con->query("select * from tb_member;");
    while($member=$txt->fetch_assoc()){
        $members[]=$member;      
    }
    echo json_encode($members);
    $con->close();
?>