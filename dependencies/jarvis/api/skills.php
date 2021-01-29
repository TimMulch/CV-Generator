<?php

require "dataHandler.php";

$req = curl_init();

$headerData = array(
    "Cookie:Authorization=" . $_SESSION["Authorization"]
);  

curl_setopt($req, CURLOPT_URL, "https://jarvis.bit-academy.nl/api/v1/stats/students/" . $_SESSION["userInfo"]["sub"] . "/skills");
curl_setopt($req, CURLOPT_RETURNTRANSFER, true);
curl_setopt($req, CURLOPT_HEADER, false);

curl_setopt($req, CURLOPT_HTTPHEADER, $headerData);

//handling headers
curl_setopt($req, CURLOPT_HEADERFUNCTION, array("dataHandler", "responseHeaderCallback"));

$reqRes = curl_exec($req);

if(curl_getinfo($req, CURLINFO_HTTP_CODE) === 200){
    echo json_encode(array("status" => "succes", "data" => json_decode($reqRes, true)));
}else{
    echo json_encode(array("status" => "error"));
}

//echo $reqRes;

//closing to save memory
curl_close($req);
