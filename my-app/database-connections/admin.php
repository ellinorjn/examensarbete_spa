<?php
require 'database.php';
header("Access-Control-Allow-Origin: http://localhost:3000");
  
    $statement = $pdo->prepare("SELECT * FROM booking ");
    $statement->execute();

    $statementTwo = $pdo->prepare("SELECT * FROM booking_guest");
    $statementTwo->execute();

    $result = [];


    foreach($statement->fetchAll(PDO::FETCH_ASSOC) as $row) {
        $result[] = $row;
    }
    foreach($statementTwo->fetchAll(PDO::FETCH_ASSOC) as $row) {
        $result[] = $row;
    }

    $bookedTreatments = (object) [
        'bookings' => $result,
    ];

    print(json_encode($bookedTreatments, JSON_PRETTY_PRINT));