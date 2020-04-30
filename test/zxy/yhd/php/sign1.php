<?php
// 解决跨域
 header("Access-Control-Allow-Origin: *");
 header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
 header('Access-Control-Allow-Headers:x-requested-with,content-type');
 
    $servername="localhost";
    $name="root";
    $password="123456";
    $mysql="stu";
  //创建连接
  $connect=new mysqli($servername,$name,$password,$mysql);
     //  查询数据
   $select="select MemberName from tb_member ;";
   $txt=$connect->query($select);
    while($pro=$txt->fetch_assoc()){
        $Name[]=$pro;
    } ;
    print_r(json_encode($Name));
