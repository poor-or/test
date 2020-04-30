<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
header('Access-Control-Allow-Headers:x-requested-with,content-type');

    $con=new mysqli("localhost", "root", "123456", "stu");
    $txt=$con->query("select id,name,parent_id from tb_area;");
    while($area=$txt->fetch_assoc()){
        $areaList[]=$area;      
    }
    echo json_encode($areaList);
    $con->close();
?>