<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = htmlspecialchars(strip_tags(trim($_POST["name"])));
  $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
  $message = htmlspecialchars(strip_tags(trim($_POST["message"])));

  if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo "Invalid email address.";
    exit;
  }

  $to = "ouzema@yahoo.com";
  $subject = "New Contact Form Submission";
  $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";

  $headers = "From: $to\r\nReply-To: $email";

  if (mail($to, $subject, $body, $headers)) {
    echo "Message sent successfully!";
  } else {
    echo "Oops! Something went wrong.";
  }
}
?>
