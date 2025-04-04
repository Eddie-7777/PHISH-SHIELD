<?php
// Read and decode the JSON input
$data = json_decode(file_get_contents("php://input"));

// Safety check
if (!$data || !isset($data->quiz_type) || !isset($data->score) || !isset($data->total_questions)) {
    http_response_code(400);
    echo json_encode(["success" => false, "error" => "Missing or invalid data"]);
    exit;
}

// Extract values
$quizType = $data->quiz_type;
$score = $data->score;
$total = $data->total_questions;

try {
    // Use correct login: phishuser / password123
    $pdo = new PDO("mysql:host=localhost;dbname=phishshield", "phishuser", "password123");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $stmt = $pdo->prepare("INSERT INTO quiz_results (quiz_type, score, total_questions) VALUES (?, ?, ?)");
    $stmt->execute([$quizType, $score, $total]);

    echo json_encode(["success" => true, "message" => "Result saved"]);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["success" => false, "error" => $e->getMessage()]);
}
?>


