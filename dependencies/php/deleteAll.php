<?php
session_start();
include '../jarvis/api/checkLogin.php';
include 'pdo.php';
$sanitized = filter_input_array(INPUT_POST, FILTER_SANITIZE_MAGIC_QUOTES);

$db_links_raw = file_get_contents("links.json");
$db_links = json_decode($db_links_raw, true);

if($sanitized['action'] == "deleteAll"){
    foreach($db_links['links'] as $item){
        echo $item['db-table-name']."\n";
        foreach ($connection->query("DELETE FROM ".$item['db-table-name']." WHERE userId='".$_SESSION["userInfo"]["sub"]."'") as $dbdata) {
            echo "Deleted for: ".$item['db-table-name'];
        };

    }
}

?>