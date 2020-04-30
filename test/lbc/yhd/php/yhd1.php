<?php
    $id=$_GET['goodsId'];
    $servername="localhost";
    $name="root";
    $password="123456";
    $mysql="movies";
    $connect=new mysqli($servername,$name,$password,$mysql);
    $select="select * from tb_goods where goodsId={$id};";
        $txt=$connect->query($select);
        $arr=[];
        while($row=$txt->fetch_assoc()){
               $arr[]=$row;
            };
         $json=json_encode($arr);
        echo $json;
?>