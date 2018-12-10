<?php
require 'database.php';
header("Access-Control-Allow-Origin: http://localhost:3000");
$bookingInformation = json_decode(file_get_contents('php://input'));

$bookingInfo = json_decode(json_encode($bookingInformation), True);

$date = $bookingInfo['date'];
$time = $bookingInfo['time'];
$treatment = $bookingInfo['treatment'];




    $statement = $pdo->prepare("INSERT INTO booking (`date`, `time`, `treatment``) 
                                VALUES ('$date', '$time', '$treatment')");
    $statement->execute();
    $booking = $statement->fetchAll(PDO::FETCH_ASSOC);

    print(json_encode($booking, JSON_PRETTY_PRINT));