<?php
session_start();

class dataHandler {
    public function responseHeaderCallback($curl, $headerLine) {
        if(strpos($headerLine, "set-cookie:") !== false){
            $cookie = str_replace("set-cookie: ", "", $headerLine);
    
            $cookie = explode("=", explode(";", $cookie)[0]);
    
            $_SESSION[$cookie[0]] = $cookie[1];
        }
        if(strpos($headerLine, "Set-Cookie:") !== false){
            $cookie = str_replace("Set-Cookie: ", "", $headerLine);
    
            $cookie = explode("=", explode(";", $cookie)[0]);
    
            $_SESSION[$cookie[0]] = $cookie[1];
        }
    
        return strlen($headerLine);
    }
}
