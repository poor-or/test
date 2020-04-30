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
  $select="select max(MemberID) from tb_member ;";
  $cont=$connect->query($select);
  $user=$_GET["user"];
  $phone=$_GET["phone"];
  $psd=$_GET["psd"];
  echo $user."-".$phone."-".$psd;
//   获取行数，每次添加数据让id加1
while($list=$cont->fetch_assoc()){
  $lists[]=$list;      
}
$number=$lists[0]["max(MemberID)"];
$num=$number+1;
echo $num;
  //   添加数据
  if($user && $phone  && $psd ){
  $data="insert into tb_member (MemberID,MemberName,MobileTel,MemberPwd)values({$num},'{$user}','{$phone}','{$psd}');";
  $result=$connect->query($data);
  }
?>
