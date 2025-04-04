<?php
header('Content-Type: application/json');

try {
    $pdo = new PDO("mysql:host=localhost;dbname=phishshield", "root", "password123");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $stmt = $pdo->query("SELECT quiz_type, score, total_questions, timestamp FROM quiz_results ORDER BY timestamp DESC");
    $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode(["success" => true, "data" => $results]);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["success" => false, "error" => $e->getMessage()]);
}
?>

