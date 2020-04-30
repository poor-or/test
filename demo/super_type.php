<?php 
  $con=new mysqli("localhost","root","123456","supertype");
   if($con->$con_error){
       die("连接失败:".$con->$con_error);
   }
   $txt=$con->query("select *from supertype")
   while($area=$txt->fetch_assoc()){
       $areaList[]=$area;
   }
   echo json_encode($areaList);
   $con->close()
?>