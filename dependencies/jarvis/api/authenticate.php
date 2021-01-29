<?php

require "dataHandler.php";

$req = curl_init();

curl_setopt($req, CURLOPT_URL, "https://jarvis.bit-academy.nl/api/v1/authenticate");
curl_setopt($req, CURLOPT_POST, true);
curl_setopt($req, CURLOPT_RETURNTRANSFER, true);
curl_setopt($req, CURLOPT_HEADER, false);

curl_setopt($req, CURLOPT_POSTFIELDS, json_encode(array("email" => $_POST["email"], "password" => $_POST["password"])));
curl_setopt($req, CURLOPT_HTTPHEADER, array("X-XSRF-TOKEN:" . $_SESSION["XSRF-TOKEN"], "Cookie:XSRF-TOKEN=" . $_SESSION["XSRF-TOKEN"]));

//handling headers
curl_setopt($req, CURLOPT_HEADERFUNCTION, array("dataHandler", "responseHeaderCallback"));

$reqRes = curl_exec($req);

if(curl_getinfo($req, CURLINFO_HTTP_CODE) === 200){
    $_SESSION["userInfo"] = json_decode(base64_decode(explode(".", $_SESSION["Authorization"])[1]), true);
    
    echo "succes";
}else{
    echo "error";
}

//closing to save memory
curl_close($req);
