<?php
header("Access-Control-Allow-Origin: *");
 header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
 header('Access-Control-Allow-Headers:x-requested-with,content-type');
  $servername="localhost";
  $name="root";
  $psd="123456";
  $mysql="project";
  $con=new mysqli($servername,$name,$psd,$mysql);
    $select="select * from tb_goods limit 120,40";
    $txt=$con->query($select);
    while($pro=$txt->fetch_assoc()){
        $content[]=$pro;
    } ;
    print_r(json_encode($content));
    ?>