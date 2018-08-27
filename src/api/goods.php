<?php
include'connect.php';

// $sql = "select * from user";
$goods = "select * from goods";
// $result = $conn->query($sql);
$goodsResult = $conn->query($goods);
// $row = $result->fetch_all(MYSQLI_ASSOC);
$goodsrow = $goodsResult->fetch_all(MYSQLI_ASSOC);
// echo json_encode($row);
echo json_encode($goodsrow);

?>