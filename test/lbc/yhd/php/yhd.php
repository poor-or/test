
 <?php
    $servername="localhost";
    $name="root";
    $password="123456";
    $mysql="movies";
    $con=new mysqli($servername,$name,$password,$mysql); 
    // if($con->$con_error){
    //     die("连接失败:".$con->$con_error);
    // }
    $text=$_GET["value"];
    $select="select * from tb_goods where goodsName like '%".$text."%';";
    $txt=$con->query($select);
    $arr=[];
    while($row=$txt->fetch_assoc()){
            $arr[]=$row;
        };
        $json=json_encode($arr);
    echo $json;
    $con->close();
?>
