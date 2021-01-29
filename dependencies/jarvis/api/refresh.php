<?php

require "dataHandler.php";

$req = curl_init();

curl_setopt($req, CURLOPT_URL, "https://jarvis.bit-academy.nl/api/v1/authenticate/refresh");
curl_setopt($req, CURLOPT_RETURNTRANSFER, true);
curl_setopt($req, CURLOPT_HEADER, false);

//handling headers
curl_setopt($req, CURLOPT_HEADERFUNCTION, array("dataHandler", "responseHeaderCallback"));

$reqRes = curl_exec($req);

//closing to save memory
curl_close($req);