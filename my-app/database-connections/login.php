<?php
require 'database.php';
header("Access-Control-Allow-Origin: http://localhost:3000");
    $email = $_GET['email'];
    $password = $_GET['password'];

    $statement = $pdo->prepare("SELECT * FROM person_information WHERE `email`= '$email' AND `password` = '$password'");
    $statement->execute();

    $reslut = [];
    foreach($statement->fetchAll(PDO::FETCH_ASSOC) as $row) {
        $result[] = $row;
    }

    $personInformation = (object) [
        'information' => $result,
    ];
    

    print(json_encode($personInformation, JSON_PRETTY_PRINT));

