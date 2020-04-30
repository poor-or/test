<?php
    $con=new mysqli("localhost", "root", "123456", "stu");
    if($con->$con_error){
        die("连接失败:".$con->$con_error);
    }
    $userId=$_GET["userId"];
    $goodsId=$_GET["goodsId"];
    $nowtime=$_GET["nowtime"];
    $txt=$con->query("select max(orderID) from tb_order");
    while($list=$txt->fetch_assoc()){
        $lists[]=$list;      
    }
    $number=$lists[0]["max(orderID)"];
    $num=$number+1;
    if($userId && $goodsId && $nowtime){
        $sql1="insert into tb_order(orderID,goodsID,num,orderDate,OrderState,memberId) values('$num','$goodsId','1','$nowtime','0','$userId');";
        $txt1=$con->query($sql1);
    }
    echo $number;
?>