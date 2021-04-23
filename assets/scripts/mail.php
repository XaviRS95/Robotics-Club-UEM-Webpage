<?php
$email = $_POST['mail'];
$subject = $_POST['subject'];
$text = $_POST['text'];
$to = "javrom95@gmail.com";
$headers = "From: "+$email
mail($to,$subject,$text,$headers);
?>
