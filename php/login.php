<?php
include "db.php";

$email = $_POST['email'];
$password = $_POST['password'];

// Prepared statement
$stmt = $conn->prepare("SELECT id, name, email, password FROM users WHERE email=?");
$stmt->bind_param("s", $email);
$stmt->execute();

$result = $stmt->get_result();

if ($row = $result->fetch_assoc()) {

    // Verify password
    if (password_verify($password, $row['password'])) {

        // Remove password before sending
        unset($row['password']);

        echo json_encode([
            "status" => "success",
            "user" => $row
        ]);

    } else {
        echo json_encode(["status" => "error"]);
    }

} else {
    echo json_encode(["status" => "error"]);
}

$stmt->close();
$conn->close();
?>