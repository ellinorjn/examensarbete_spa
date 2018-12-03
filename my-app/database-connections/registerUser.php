<?php
require 'database.php';
header("Access-Control-Allow-Origin: http://localhost:3000");
$personInformation = json_decode(file_get_contents('php://input'));
$personInfo = json_decode(json_encode($personInformation), True);

$name = $personInfo['name'];
$email = $personInfo['email'];
$phone_number = $personInfo['phone_number'];
$password = $personInfo['password'];


    $statement = $pdo->prepare("INSERT INTO person_information (`name`, `email`, `phone_number`,`password`) 
                                VALUES ('$name', '$email', '$phone_number', '$password')");
   $statement->execute();
   $result = $statement->fetchAll(PDO::FETCH_ASSOC);
   print(json_encode($result, JSON_PRETTY_PRINT));