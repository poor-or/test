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
  $select="select max(orderID) from tb_order;";
  $cont=$connect->query($select);
  $good_id=$_GET["good_id"];
  $member_id=$_GET["member_id"];
  $timeNow=$_GET["timeNow"];
//   获取行数，每次添加数据让id加1
    while($list=$cont->fetch_assoc()){
        $lists[]=$list;      
    }
  $number=$lists[$cont->num_rows-1]["max(orderID)"];
  echo $number;
  $num=$number+1;
  //   添加数据
  if($good_id != "" && $member_id != "" && $timeNow !=""){
    $data="insert into tb_order (orderID,goodsID,num,orderDate,OrderState,memberId)values({$num},'{$good_id}','1','{$timeNow}','0','{$member_id}');";
    $result=$connect->query($data);
  }
  
  ?>