<?php
require 'database.php';
header("Access-Control-Allow-Origin: http://localhost:3000");
$bookingInformation = json_decode(file_get_contents('php://input'));
$bookingInfo = json_decode(json_encode($bookingInformation), True);


echo var_dump($bookingInfo);
    $id = $bookingInfo['id'];



    $statement = $pdo->prepare("DELETE FROM booking WHERE ID = '$id'");
    $statement->execute();
    $delete = $statement->fetchAll(PDO::FETCH_ASSOC);

    $statementTwo = $pdo->prepare("DELETE FROM booking_guest WHERE ID = '$id'");
    $statementTwo->execute();
    $delete = $statementTwo->fetchAll(PDO::FETCH_ASSOC);

    print(json_encode($delete, JSON_PRETTY_PRINT));