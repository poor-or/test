<?php
$id=$_GET["id"];
    $connect=new mysqli("localhost","root","123456","stu");
    $update="update tb_order set OrderState=1 where goodsID={$id};";
    $date=$connect->query($update);
?>