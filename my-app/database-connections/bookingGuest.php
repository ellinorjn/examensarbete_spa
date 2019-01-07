<?php
require 'database.php';
header("Access-Control-Allow-Origin: http://localhost:3000");
$bookingInformation = json_decode(file_get_contents('php://input'));

$bookingInfo = json_decode(json_encode($bookingInformation), True);

    $name = $bookingInfo['name'];
    $email = $bookingInfo['email'];
    $date = $bookingInfo['date'];
    $time = $bookingInfo['time'];
    $treatment = $bookingInfo['treatment'];


    $statement = $pdo->prepare("INSERT INTO booking_guest (`name`, `email`, `date`, `time`, `treatment`) 
                                VALUES ('$name', '$email', '$date', '$time', '$treatment')");
    $statement->execute();
    $booking = $statement->fetchAll(PDO::FETCH_ASSOC);

    $msg = "Tack för din bokning.";
    $msg = wordwrap($msg,70);
    mail($bookingInfo["email"],"Food Fusion bokningsbekräftelse",$msg); 

    print(json_encode($booking, JSON_PRETTY_PRINT));