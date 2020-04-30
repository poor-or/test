<?php
header("Access-Control-Allow-Origin: *");
 header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
 header('Access-Control-Allow-Headers:x-requested-with,content-type');
 
 $con=new mysqli("localhost", "root", "123456", "stu");
  $select="select MemberID,RealName,MobileTel,Email,Address from tb_member ;";
  $txt=$con->query($select);
  while($pro=$txt->fetch_assoc()){
      $content[]=$pro;
  } ;
  print_r(json_encode($content));
  ?>