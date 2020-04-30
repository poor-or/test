<?php
// 解决跨域
 header("Access-Control-Allow-Origin: *");
 header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
 header('Access-Control-Allow-Headers:x-requested-with,content-type');
 
    $servername="localhost";
    $name="root";
    $password="123456";
    $mysql="stu";

    $name1=$_GET["name"];
  $phone-$_GET["phone"];
  $email=$_GET["email"]; 
  $address=$_GET["address"]; 
  //创建连接
  $connect=new mysqli($servername,$name,$password,$mysql);
  $select="select max(MemberID) from tb_member ;";
  $cont=$connect->query($select);
//   获取行数，每次添加数据让id加1
while($list=$cont->fetch_assoc()){
  $lists[]=$list;      
};
$number=$lists[0]["max(MemberID)"];
$num=$number+1;
  //   添加数据
  $data="insert into tb_member (MemberID,RealName,MobileTel,Email,Address)values({$num},'{$name1}','{$phone}','{$email}','{$address}');";
  $result=$connect->query($data);
  // if($name1 && $phone && $email ){
  //   $data="insert into tb_member (MemberID,RealName,MobileTel,Email,Address)values({$num},'{$name1}','{$phone}','{$email}','{$address}');";
  //   $result=$connect->query($data);
  //   }
  ?>