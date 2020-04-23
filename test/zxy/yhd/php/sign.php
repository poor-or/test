<?php
// 解决跨域
 header("Access-Control-Allow-Origin: *");
 header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
 header('Access-Control-Allow-Headers:x-requested-with,content-type');
 
    $servername="localhost";
    $name="root";
    $password="123456";
    $mysql="project";
  //创建连接
  $connect=new mysqli($servername,$name,$password,$mysql);
  //   添加数据
  $data="insert into tb_member (MemberName,MobileTel,MemberPwd)values('$_GET[user]','$_GET[phone]','$_GET[psd]');";
  $result=$connect->query($data);
     //  查询数据
    $select="select * from tb_member where MemberName='$_GET[user]';";
    $cont=$connect->query($select);
    $number=$cont->num_rows;
   //  echo "<script>sessionStorage.setItem('data','print_r($cont->num_rows)')</script>"
?>
