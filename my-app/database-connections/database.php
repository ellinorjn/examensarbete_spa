<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
    $pdo = new PDO(
    "mysql:host=localhost;dbname=spa;charset=utf8",
    "root",
    "root"
    );