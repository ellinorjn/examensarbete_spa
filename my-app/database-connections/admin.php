<?php
require 'database.php';
header("Access-Control-Allow-Origin: http://localhost:3000");
  
    $statement = $pdo->prepare("SELECT * FROM person_information 
                                INNER JOIN booking 
                                on person_information.ID = booking.person_id
                                ORDER BY `date` ASC");
    $statement->execute();

    $statementTwo = $pdo->prepare("SELECT * FROM booking_guest ORDER BY `date` ASC");
    $statementTwo->execute();


    $result = [];
    $resultGuests = [];


    foreach($statement->fetchAll(PDO::FETCH_ASSOC) as $row) {
        $result[] = $row;
    }
    foreach($statementTwo->fetchAll(PDO::FETCH_ASSOC) as $row) {
        $resultGuests[] = $row;
    }
    

    $bookedTreatments = (object) [
        'bookings' => $result,
        'bookings_guests' => $resultGuests,
    ];

    print(json_encode($bookedTreatments, JSON_PRETTY_PRINT));