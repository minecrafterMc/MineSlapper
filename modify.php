<?php
  if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Update the PHP variable with the new value
    $newVariableValue = $_POST['newVariableValue'];
    $gameData = $newVariableValue;

    // Optionally, you can send a response back to JavaScript
    echo json_encode(['success' => true, 'message' => 'Variable updated successfully']);
  }
?>