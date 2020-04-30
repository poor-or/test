<?php

     $value=$_GET['value'];
     $servername="localhost";
     $name="root";
     $password="123456";
     $mysql="movies";
    
     $select="select * from tb_goods where goodsName like %{$value}%"; 
       $txt=$connect->query($select);
       $arr=[];
       while($row=$txt->fetch_assoc()){
            $arr[]=$row;
          };
        $json=json_encode($arr);
        echo $json; 
?>