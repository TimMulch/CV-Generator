<?php
session_start();

$loggedIn = false;

if(isset($_SESSION["Authorization"]) && isset($_SESSION["userInfo"]["sub"]) && isset($_SESSION["XSRF-TOKEN"])){
    if(json_decode(base64_decode(explode(".", $_SESSION["Authorization"])[1]), true)["sub"] === $_SESSION["userInfo"]["sub"]){
        $loggedIn = true;
    }else{
        unset($_SESSION["Authorization"]);
        unset($_SESSION["userInfo"]);
        unset($_SESSION["XSRF-TOKEN"]);
    }
}else{
    if(isset($_SESSION["userInfo"])){
        unset($_SESSION["userInfo"]);
    }
    if(isset($_SESSION["Authorization"])){
        unset($_SESSION["Authorization"]);
    }
    if(isset($_SESSION["XSRF-TOKEN"])){
        unset($_SESSION["XSRF-TOKEN"]);
    }
}

if($loggedIn){
    echo "true";
}else{
    echo "false";
}
