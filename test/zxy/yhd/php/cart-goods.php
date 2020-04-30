<?php
header("Access-Control-Allow-Origin: *");
 header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
 header('Access-Control-Allow-Headers:x-requested-with,content-type');
  $servername="localhost";
  $name="root";
  $psd="123456";
  $mysql="stu";
  $con=new mysqli($servername,$name,$psd,$mysql);
   $select="select a.orderID,a.OrderState,a.goodsID,a.num,a.memberId,b.goodsName,b.pictureAddress,b.price,b.storeName from tb_order a,tb_goods b where a.goodsID=b.goodsId and a.memberId=1;";
    $txt=$con->query($select);
    while($pro=$txt->fetch_assoc()){
        $content[]=$pro;
    } ;
    print_r(json_encode($content));

    ?>