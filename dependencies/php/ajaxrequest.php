<?php
session_start();
include '../jarvis/api/checkLogin.php';
echo "\n- LoggedIn: ".$loggedIn;
include 'pdo.php';




if($loggedIn){


    $db_links_raw = file_get_contents("links.json");
    $db_links = json_decode($db_links_raw, true);
    echo "\n- Received Data: ".var_dump($_POST)."\n";
        foreach($db_links["links"] as $object){
            if($_POST["id"] == $object["id"]){
                echo "RECEIVED: ".$object["id"]."\n";
                // First, check if this row exists yet. If not, create one.
            
                // POTENTIALLY WORKING SQL STATEMENT:
                // INSERT INTO personal (userId, firstName) VALUES ('testUserId', 'gay') ON DUPLICATE KEY UPDATE personal SET firstName='gayyyyyyy' WHERE userId='testUserId';
                // foreach ($connection->query("SELECT COUNT(*) FROM ".$object["db-table-name"]." WHERE userId='".$_SESSION["userInfo"]["sub"]."'") as $dbdata) {
                echo "\nTable name: ".$object["db-table-name"];
                echo "\nSessionId: ".$_SESSION["userInfo"]["sub"];
                
                foreach ($connection->query("SELECT COUNT(*) FROM ".$object["db-table-name"]." WHERE userId='".$_SESSION["userInfo"]["sub"]."'") as $dbdata) {
                echo "\nThis user has ".$dbdata[0]." registered entries in the database";
                };
                
                
                if(intval($dbdata[0]) == 0){ // No record in database yet
                    echo "\nNo record in db yet.";
                    $sql = "INSERT INTO ".$object["db-table-name"]." (userId, ".$object["db-item-name"].") VALUES ('".$_SESSION["userInfo"]["sub"]."', '".$_POST['value']."')";
                    echo "\nSQL: ".$sql;
                    $result = $connection->prepare($sql);
                    $result->execute();
                } else { // A record has already been found for this user, UPDATE instead of INSERT.
                    echo "\nA record has been found, using update instead of insert.";
                    $sql = "UPDATE ".$object["db-table-name"]." SET ".$object["db-item-name"]."='".$_POST['value']."' WHERE userId='".$_SESSION["userInfo"]["sub"]."'";
                    echo "\nSQL: ".$sql;
                    $result = $connection->prepare($sql);
                    $result->execute();
                }
            
                // $sql = "INSERT INTO ".$object["db-table-name"]." (userId, ".$object["db-item-name"].") VALUES ('".$_SESSION["userInfo"]["sub"]."', '".$_POST['value']."')";
                // //$sql = "INSERT INTO ".$object["db-table-name"]." (userId, ".$object["db-item-name"].") VALUES ('".$_SESSION["userInfo"]["sub"]."', '".$_POST['value']."') ON DUPLICATE KEY UPDATE ".$object["db-table-name"]." SET ".$object["db-item-name"]."='".$_POST['value']."' WHERE userId='".$_SESSION["userInfo"]["sub"]."'";
                // // $sql = "UPDATE ".$object["db-table-name"]." SET ".$object["db-item-name"]."='".$_POST['value']."' WHERE userId='".$_SESSION["userInfo"]["sub"]."'";
            
                // $result = $connection->prepare($sql);
                // $result->execute();
                echo "\nSQL executed!";
            }
            // print_r($object["id"]);db-item-name
        
        }
    
} else {
    echo "ERROR: User is not logged in";
}

?>
