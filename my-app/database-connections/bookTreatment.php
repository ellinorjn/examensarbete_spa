<?php
require 'database.php';
header("Access-Control-Allow-Origin: http://localhost:3000");
$bookingInformation = json_decode(file_get_contents('php://input'));
$registerPersonData = json_decode(file_get_contents('php://input'));

$bookingInfo = json_decode(json_encode($bookingInformation), True);
$personData = json_decode(json_encode($registerPersonData), True);

$date = $bookingInfo['date'];
$time = $bookingInfo['time'];
$treatment = $bookingInfo['treatment'];

$person_id = $personData['person_id'];



    $statement = $pdo->prepare("INSERT INTO booking (`date`, `time`, `treatment`, `person_id`) 
                                VALUES ('$date', '$time', '$treatment', '$person_id')");
    $statement->execute();
    $booking = $statement->fetchAll(PDO::FETCH_ASSOC);

    print(json_encode($booking, JSON_PRETTY_PRINT));