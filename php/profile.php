<?php
include "mongo.php";
include "redis.php";

$email = $_POST['email'];
$action = $_POST['action'];

// Store session in Redis
$redis->set($email, "active");

if ($action == "get") {

    $profile = $collection->findOne(["email" => $email]);

    if ($profile) {
        echo json_encode([
            "status" => "success",
            "profile" => $profile
        ]);
    } else {
        echo json_encode(["status" => "empty"]);
    }

}

if ($action == "save") {

    $age = $_POST['age'];
    $dob = $_POST['dob'];
    $contact = $_POST['contact'];

    $collection->updateOne(
        ["email" => $email],
        ['$set' => [
            "email" => $email,
            "age" => $age,
            "dob" => $dob,
            "contact" => $contact
        ]],
        ["upsert" => true]
    );

    echo json_encode(["status" => "success"]);
}
?>