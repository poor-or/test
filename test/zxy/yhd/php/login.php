<?php
header("Access-Control-Allow-Origin: *");
 header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
 header('Access-Control-Allow-Headers:x-requested-with,content-type');
    $servername="localhost";
    $name="root";
    $password="123456";
    $mysql="stu";
    $num=$_GET['data'];
  //创建连接
  $connect=new mysqli($servername,$name,$password,$mysql);
     //  查询数据
   $select="select MemberName,MemberPwd from tb_member where MemberName='{$num}';";
   $txt=$connect->query($select);
    while($pro=$txt->fetch_assoc()){
        $Name[]=$pro;
    } ;
    print_r(json_encode($Name));
    ?>