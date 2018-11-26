<?php

require 'database.php';

    $currentDate = $_GET['date'];

    $statement = $pdo->prepare("SELECT * FROM booking WHERE `date`= '$currentDate'");
    $statement->execute();
    $personInfo = $statement->fetchAll(PDO::FETCH_ASSOC);

    print(json_encode($personInfo, JSON_PRETTY_PRINT));