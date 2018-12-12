<?php
require 'database.php';
header("Access-Control-Allow-Origin: http://localhost:3000");
    $currentDate = $_GET['date'];


    $statement = $pdo->prepare("SELECT * FROM booking WHERE `date`= '$currentDate'");
    $statement->execute();

    $statementTwo = $pdo->prepare("SELECT * FROM booking_guest WHERE `date`= '$currentDate'");
    $statementTwo->execute();

    $ten = 0;
    $eleven = 0;
    $twelve = 0;
    $fourteen = 0;
    $fifteen = 0;
    $sixteen = 0;
    $result = [];


    foreach($statement->fetchAll(PDO::FETCH_ASSOC) as $row) {
        $result[] = $row;

        switch($row["time"]){
            case "10:00:00":
                $ten += 1;
                break;
            case "11:00:00":
                $eleven += 1; 
                break;
            case "12:00:00":
                $twelve += 1;
                break;
            case "14:00:00";
                $fourteen += 1;
                break;
            case "15:00:00";
                $fifteen += 1;
                break;
            case "16:00:00";
                $sixteen += 1;
                break;
        }
    }
    foreach($statementTwo->fetchAll(PDO::FETCH_ASSOC) as $row) {
        $result[] = $row;

        switch($row["time"]){
            case "10:00:00":
                $ten += 1;
                break;
            case "11:00:00":
                $eleven += 1; 
                break;
            case "12:00:00":
                $twelve += 1;
                break;
            case "14:00:00";
                $fourteen += 1;
                break;
            case "15:00:00";
                $fifteen += 1;
                break;
            case "16:00:00";
                $sixteen += 1;
                break;
        }
    }

    $bookedTreatments = (object) [
        'bookings' => $result,
        'ten' => $ten,
        'eleven' => $eleven,
        'twelve' => $twelve,
        'fourteen' => $fourteen,
        'fifteen' => $fifteen,
        'sixteen' => $sixteen
    ];

    print(json_encode($bookedTreatments, JSON_PRETTY_PRINT));