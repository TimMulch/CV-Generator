<?php
$dbservername = "daanklein.nl:3310";
$dbusername = "root";
$dbpassword = "tim_hackt_nasa_met_html"; // Sensitive data, do not commit to Github
$connection = new PDO("mysql:host=$dbservername;dbname=cv_generator", $dbusername, $dbpassword);
?>