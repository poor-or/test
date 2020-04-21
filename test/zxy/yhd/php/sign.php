<?php
// 解决跨域
 header("Access-Control-Allow-Origin: *");
 header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
 header('Access-Control-Allow-Headers:x-requested-with,content-type');
 
    $servername="localhost";
    $name="root";
    $password="123456";
    $mysql="sign";
  //创建连接
  $connect=new mysqli($servername,$name,$password,$mysql);
  //   添加数据
  $data="insert into information values('$_GET[user]','$_GET[phone]','$_GET[psd]');";
  $result=$connect->query($data);
     //  查询数据
    $select="select * from information where username='$_GET[user]';";
    $cont=$connect->query($select);
    print_r($cont);
    print_r($cont->num_rows);
    echo "<script>sessionStorage.setItem('data','print_r($cont->num_rows)')</script>"

?>
