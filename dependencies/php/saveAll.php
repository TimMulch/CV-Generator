<?php
session_start();
include '../jarvis/api/checkLogin.php';
include 'pdo.php';
$sanitized = filter_input_array(INPUT_POST, FILTER_SANITIZE_MAGIC_QUOTES);

$db_links_raw = file_get_contents("links.json");
$db_links = json_decode($db_links_raw, true);
// print_r($sanitized);
// foreach($sanitized as $item){
//     print_r($item[0]);
foreach($sanitized as $item){
    foreach($item as $key){
            echo $key[0]; //input name
    }
}

// foreach ($connection->query("SELECT COUNT(*) FROM ".$object["db-table-name"]." WHERE userId='".$_SESSION["userInfo"]["sub"]."'") as $dbdata) {
//     echo "\nThis user has ".$dbdata[0]." registered entries in the database";
//     };
    
    
//     if(intval($dbdata[0]) == 0){ // No record in database yet
//         echo "\nNo record in db yet.";
//         $sql = "INSERT INTO ".$object["db-table-name"]." (userId, ".$object["db-item-name"].") VALUES ('".$_SESSION["userInfo"]["sub"]."', '".$_POST['value']."')";
//         echo "\nSQL: ".$sql;
//         $result = $connection->prepare($sql);
//         $result->execute();
//     } else { // A record has already been found for this user, UPDATE instead of INSERT.
//         echo "\nA record has been found, using update instead of insert.";
//         $sql = "UPDATE ".$object["db-table-name"]." SET ".$object["db-item-name"]."='".$_POST['value']."' WHERE userId='".$_SESSION["userInfo"]["sub"]."'";
//         echo "\nSQL: ".$sql;
//         $result = $connection->prepare($sql);
//         $result->execute();
//     }


//     foreach ($connection->query("DELETE FROM ".$item['db-table-name']." WHERE userId='".$_SESSION["userInfo"]["sub"]."'") as $dbdata) {
//         echo "Deleted for: ".$item['db-table-name'];
//     };
// }

?>