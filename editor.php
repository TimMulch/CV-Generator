<?php
session_start();

require "dependencies/jarvis/api/checkLogin.php";
require "dependencies/php/pdo.php";
?>
<!DOCTYPE html>
<html lang="nl">

<head>
    <!-- PAGE -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=2, shrink-to-fit=no">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="icon" type="image/png" href="dependencies/img/favicon.ico">
    <title>CV Editor | Bit Academy</title>
    <!-- ReqLib CSS -->
    <link rel="stylesheet" type="text/css" href="dependencies/libs/fontawesome-5.14/css/all.css">
    <link rel="stylesheet" type="text/css" href="dependencies/libs/aos-master-2.3.1/css/aos.css">
    <link rel="stylesheet" type="text/css" href="dependencies/libs/toastr/toastr.min.css">
    <!-- Custom CSS -->
    <link rel="stylesheet" type="text/css" href="dependencies/styles/main.css">
    <link rel="stylesheet" type="text/css" href="dependencies/styles/editor.css">
</head>
<body>
    <?php if(!$loggedIn){ ?>
    <div id="loginBlur">
        <div id="loginWrap">
            <div class="loginContainer">
                <div id="loginLogoContainer">
                    <img class="logoBit" src="dependencies/img/logo_black.svg">
                    <img class="logoSwap" src="dependencies/img/swap.svg">
                    <img class="logoCVG" src="dependencies/img/cv_logo.png">
                </div>
                <form id="loginForm">
                    <div class="testtest">
                        <p class="loginlable">E-Mail</p>
                        <input id="loginEmail" type="email" placeholder="E-Mail">
                    </div>
                    <div class="testtest">
                        <p class="loginlable">Wachtwoord</p>
                        <input id="loginPassword" type="password" placeholder="Wachtwoord">
                    </div>
                    <a></a><p></p>
                    <input id="loginSubmit" type="submit" value="Inloggen">
                </form>
            </div>
            <div class="loginContainer">
                <img src="dependencies/img/bit-login.png">
            </div>
        </div>
    </div>
    <?php } else { ?>
    <div id="page_wrapper">
        <div id="toastBarWrap">
            <div id="toastBar"></div>
        </div>
        <div id="sideMenu" style="left: -1000px;">
            <?php

            ?>
            <div class="SM-settingContainer" id="SM-personalContainer">
                <div class="SM-settingOption">
                    <div class="SM-header SM-headerFixed">
                        <i class="fas fa-user-alt"></i>
                        <div class="SM-title">Persoonsgegevens</div>
                    </div>
                </div>
                <div class="SM-settingContainer SM-settingContainerInputs SM-inputContainer">
                    <form class="SM-inputOption SM-form">
                        <button id="SM-uploadIMG1" class="SM-addButton SM-buttonMaxWidth"><i
                                class="fad fa-file-upload"></i>Upload CV Foto</button>
                        <input type="file" id="inputS0-1" placeholder="Foto" style='display: none;'>
                        <div class="SM-Fix SM-settingOption SM-input SM-textInput">
                            <input type="text" placeholder="Voornaam" onKeyUp="updateInput(this.id, this.value)"
                                onFocusOut="ajaxRequest(this)" id="inputS1-1" value="">
                        </div>
                        <div class="SM-Fix SM-settingOption SM-input SM-textInput">
                            <input type="text" placeholder="Achternaam" onKeyUp="updateInput(this.id, this.value)"
                                onFocusOut="ajaxRequest(this)" id="inputS1-2" value="">
                        </div>
                        <div class="SM-Fix SM-settingOption SM-input SM-textInput">
                            <input type="text" placeholder="Adres + huisnummer"
                                onKeyUp="updateInput(this.id, this.value)" onFocusOut="ajaxRequest(this)"
                                id="inputS1-3" value="">
                        </div>
                        <div class="SM-Fix SM-settingOption SM-input SM-textInput">
                            <input type="text" placeholder="Postcode" onKeyUp="updateInput(this.id, this.value)"
                                onFocusOut="ajaxRequest(this)" id="inputS1-4" value="">
                        </div>
                        <div class="SM-Fix SM-settingOption SM-input SM-textInput">
                            <input type="text" placeholder="Woonplaats" onKeyUp="updateInput(this.id, this.value)"
                                onFocusOut="ajaxRequest(this)" id="inputS1-5" value="">
                        </div>
                        <div class="SM-Fix SM-settingOption SM-input SM-textInput">
                            <input type="text" placeholder="Telefoon" onKeyUp="updateInput(this.id, this.value)"
                                onFocusOut="ajaxRequest(this)" id="inputS1-6" value="">
                        </div>
                        <div class="SM-Fix SM-settingOption SM-input SM-textInput">
                            <input type="email" placeholder="Email" onKeyUp="updateInput(this.id, this.value)"
                                onFocusOut="ajaxRequest(this)" id="inputS1-7" value="">
                        </div>
                        <div class="SM-Fix SM-settingOption SM-input SM-textInput">
                            <input type="date" placeholder="Geboortedatum" onFocusOut="ajaxRequest(this)"
                                id="inputS1-8" value="">
                        </div>
                        <div class="SM-Fix SM-settingOption SM-input SM-textInput">
                            <input type="text" placeholder="Nationaliteit" onKeyUp="updateInput(this.id, this.value)"
                                onFocusOut="ajaxRequest(this)" id="inputS1-9" value="">
                        </div>
                    </form>
                </div>
            </div>
            <div class="SM-settingContainer" id="SM-workExperienceContainer">
                <div class="SM-settingOption">
                    <div class="SM-header SM-headerFixed">
                        <i class="fas fa-briefcase"></i>
                        <div class="SM-title">Werkervaring</div>
                        <div class="SM-addButton" id="addWorkExperience"><i class="fas fa-plus"></i></div>
                        <div class="SM-removeButton" id="delWorkExperience"><i class="fas fa-minus"></i></div>
                    </div>
                </div>
                <div class="SM-settingContainer SM-settingContainerInputs SM-inputContainer" id="SM-workExperience">
                    <td></td>
                </div>
            </div>
            <div class="SM-settingContainer" id="SM-educationContainer">
                <div class="SM-settingOption">
                    <div class="SM-header SM-headerFixed">
                        <i class="fas fa-graduation-cap"></i>
                        <div class="SM-title">Educatie</div>
                        <div class="SM-addButton" id="addEducation"><i class="fas fa-plus"></i></div>
                        <div class="SM-removeButton" id="delEducation"><i class="fas fa-minus"></i></div>
                    </div>
                </div>
                <div class="SM-settingContainer SM-settingContainerInputs SM-inputContainer" id="SM-educatie">
                    <td></td>
                </div>
            </div>
            <div class="SM-settingContainer" id="SM-workflowContainer">
                <div class="SM-settingOption">
                    <div class="SM-header SM-headerFixed">
                        <i class="fas fa-desktop"></i>
                        <div class="SM-title">Tekst Container</div>
                    </div>
                </div>
                <div class="SM-settingContainer SM-settingContainerInputs SM-inputContainer">
                    <form class="SM-inputOption SM-form">
                    <div class="SM-Fix SM-settingOption SM-input SM-textInput">
                            <input type="text" placeholder="Titel" onKeyUp="updateInput(this.id, this.value)"
                                onFocusOut="ajaxRequest(this)" id="inputS5-1">
                        </div>
                        <div class="SM-Fix SM-settingOption SM-input SM-textInput">
                            <textarea id="inputS5-2" onKeyUp="updateInput(this.id, this.value)"
                                onFocusOut="ajaxRequest(this)"
                                placeholder="Voor het stukje workflow schrijf je een klein verhaaltje over hoe jij werkt, welke programma's gebruik jij tijdens het programmeren? Wat is je routine met troubleshooting? etc."></textarea>
                        </div>
                    </form>
                </div>
            </div>
            <div class="SM-settingContainer" id="SM-projectsContainer">
                <div class="SM-settingOption">
                    <div class="SM-header SM-headerFixed">
                        <i class="fas fa-project-diagram"></i>
                        <div class="SM-title">Projects</div>
                        <div class="SM-addButton" id="addProject"><i class="fas fa-plus"></i></div>
                        <div class="SM-removeButton" id="delProject"><i class="fas fa-minus"></i></div>
                    </div>
                </div>
                <div class="SM-settingContainer SM-settingContainerInputs SM-inputContainer" id="SM-projects"></div>
            </div>
            <div class="SM-settingContainer" id="SM-hobbiesContainer">
                <div class="SM-settingOption">
                    <div class="SM-header SM-headerFixed">
                        <i class="fas fa-futbol"></i>
                        <div class="SM-title">Hobbies</div>
                    </div>
                </div>
                <div class="SM-settingContainer SM-settingContainerInputs SM-inputContainer">
                    <form class="SM-inputOption SM-form">
                        <div class="SM-Fix SM-settingOption SM-input SM-textInput">
                            <input type="text" placeholder="Hobby 1" onFocusOut="ajaxRequest(this)" onKeyUp="updateInput(this.id, this.value)" id="inputS7-1">
                        </div>
                        <div class="SM-Fix SM-settingOption SM-input SM-textInput">
                            <input type="text" placeholder="Hobby 2" onFocusOut="ajaxRequest(this)" onKeyUp="updateInput(this.id, this.value)" id="inputS7-2">
                        </div>
                        <div class="SM-Fix SM-settingOption SM-input SM-textInput">
                            <input type="text" placeholder="Hobby 3" onFocusOut="ajaxRequest(this)" onKeyUp="updateInput(this.id, this.value)" id="inputS7-3">
                        </div>
                    </form>
                </div>
            </div>
            <div class="SM-settingContainer" id="SM-linksContainer">
                <div class="SM-settingOption">
                    <div class="SM-header SM-headerFixed">
                        <i class="fas fa-link"></i>
                        <div class="SM-title">Links</div>
                    </div>
                </div>
                <div class="SM-settingContainer SM-settingContainerInputs SM-inputContainer">
                    <form class="SM-inputOption SM-form">
                        <div class="SM-Fix SM-settingOption SM-input SM-textInput">
                            <p>codepen.io/</p>
                            <input type="text" placeholder="username" style="margin-left: -3px;" onFocusOut="ajaxRequest(this)" onKeyUp="updateInput(this.id, this.value)" id="inputS8-1">
                        </div>
                        <div class="SM-Fix SM-settingOption SM-input SM-textInput">
                            <p>github.com/</p>
                            <input type="text" placeholder="username" style="margin-left: -3px;" onFocusOut="ajaxRequest(this)" onKeyUp="updateInput(this.id, this.value)" id="inputS8-2">
                        </div>
                        <div class="SM-Fix SM-settingOption SM-input SM-textInput">
                            <p>linkedin.com/</p>
                            <input type="text" placeholder="username" style="margin-left: -3px;" onFocusOut="ajaxRequest(this)" onKeyUp="updateInput(this.id, this.value)" id="inputS8-3">
                        </div>
                    </form>
                </div>
            </div>
            <div class="SM-settingContainer">
                <div class="SM-settingOption SM-hoverable">
                    <div class="SM-header">
                        <i class="fas fa-image"></i>
                        <div class="SM-title">CV Foto</div>
                    </div>
                    <label class="toggleSwitch">
                        <input type="checkbox" id="toggleSection0" checked>
                        <span class="toggle"></span>
                    </label>
                </div>
                <div class="SM-settingOption SM-hoverable">
                    <div class="SM-header">
                        <i class="fas fa-user-alt"></i>
                        <div class="SM-title">Persoonsgegevens</div>
                    </div>
                    <label class="toggleSwitch">
                        <input type="checkbox" id="toggleSection1" checked>
                        <span class="toggle"></span>
                    </label>
                </div>
                <div class="SM-settingOption SM-hoverable">
                    <div class="SM-header">
                        <i class="fas fa-briefcase"></i>
                        <div class="SM-title">Werkervaring</div>
                    </div>
                    <label class="toggleSwitch">
                        <input type="checkbox" id="toggleSection2" checked>
                        <span class="toggle"></span>
                    </label>
                </div>
                <div class="SM-settingOption SM-hoverable">
                    <div class="SM-header">
                        <i class="fas fa-graduation-cap"></i>
                        <div class="SM-title">Educatie</div>
                    </div>
                    <label class="toggleSwitch">
                        <input type="checkbox" id="toggleSection3" checked>
                        <span class="toggle"></span>
                    </label>
                </div>
                <div class="SM-settingOption SM-hoverable">
                    <div class="SM-header">
                        <i class="fas fa-brain"></i>
                        <div class="SM-title">Skills</div>
                    </div>
                    <label class="toggleSwitch">
                        <input type="checkbox" id="toggleSection4" checked>
                        <span class="toggle"></span>
                    </label>
                </div>
                <div class="SM-settingOption SM-hoverable">
                    <div class="SM-header">
                        <i class="fas fa-desktop"></i>
                        <div class="SM-title">Workspace</div>
                    </div>
                    <label class="toggleSwitch">
                        <input type="checkbox" id="toggleSection5" checked>
                        <span class="toggle"></span>
                    </label>
                </div>
                <div class="SM-settingOption SM-hoverable">
                    <div class="SM-header">
                        <i class="fas fa-project-diagram"></i>
                        <div class="SM-title">Projects</div>
                    </div>
                    <label class="toggleSwitch">
                        <input type="checkbox" id="toggleSection6" checked>
                        <span class="toggle"></span>
                    </label>
                </div>
                <div class="SM-settingOption SM-hoverable">
                    <div class="SM-header">
                        <i class="fas fa-futbol"></i>
                        <div class="SM-title">Hobbies</div>
                    </div>
                    <label class="toggleSwitch">
                        <input type="checkbox" id="toggleSection7" checked>
                        <span class="toggle"></span>
                    </label>
                </div>
                <div class="SM-settingOption SM-hoverable">
                    <div class="SM-header">
                        <i class="fas fa-link"></i>
                        <div class="SM-title">Links</div>
                    </div>
                    <label class="toggleSwitch">
                        <input type="checkbox" id="toggleSection8" checked>
                        <span class="toggle"></span>
                    </label>
                </div>
            </div>
            <div class="SM-settingOption">
                <div class="SM-header SM-headerFixed">
                    <i class="fas fa-paint-roller"></i>
                    <div class="SM-title">Kleur palette (binnekort)</div>
                </div>
            </div>
            <div class="SM-settingContainer">
                <a>
                    <div class="SM-settingContainer SM-settingContainerInputs SM-inputContainer">
                        <div class="SM-Fix SM-settingOption SM-input SM-textInput SM-button"><i
                                class="fas fa-palette"></i>Bit-Academy Blauw</div>
                    </div>
                </a>
                <a>
                    <div class="SM-settingContainer SM-settingContainerInputs SM-inputContainer">
                        <div class="SM-Fix SM-settingOption SM-input SM-textInput SM-button"><i
                                class="fas fa-palette"></i>Bit-Academy Dark</div>
                    </div>
                </a>
                <a>
                    <div class="SM-settingContainer SM-settingContainerInputs SM-inputContainer">
                        <div class="SM-Fix SM-settingOption SM-input SM-textInput SM-button"><i
                                class="fas fa-palette"></i>Colorful</div>
                    </div>
                </a>
            </div>
            <div class="SM-settingOption">
                <div class="SM-header SM-headerFixed">
                    <i class="fas fa-cog"></i>
                    <div class="SM-title">Voorkeuren</div>
                </div>
            </div>
            <div class="SM-settingContainer">
                <div class="SM-settingOption">
                    <div class="SM-header">
                        <i class="fas fa-user-secret"></i>
                        <div class="SM-title">Geheimemodus</div>
                    </div>
                    <label class="toggleSwitch">
                        <input type="checkbox" id="confidentialMode">
                        <span class="toggle"></span>
                    </label>
                </div>
                <div class="SM-settingOption">
                    <div class="SM-header">
                        <i class="fas fa-th-list"></i>
                        <div class="SM-title">Forceer Verticale Weergave</div>
                    </div>
                    <label class="toggleSwitch">
                        <input type="checkbox" id="dualPreviewMode">
                        <span class="toggle"></span>
                    </label>
                </div>
                <div class="SM-settingOption">
                    <div class="SM-header">
                        <i class="fas fa-search-minus"></i>
                        <div class="SM-title">Kleinere weergave</div>
                    </div>
                    <label class="toggleSwitch">
                        <input type="checkbox" id="smallerPreviewMode">
                        <span class="toggle"></span>
                    </label>
                </div>
            </div>
            <div class="SM-settingOption">
                <div class="SM-header SM-headerFixed">
                    <i class="fas fa-file-export"></i>
                    <div class="SM-title">Download & Exporteren</div>
                </div>
            </div>
            <div class="SM-settingContainer">
                <a id="download_pdf">
                    <div class="SM-settingContainer SM-settingContainerInputs SM-inputContainer">
                        <div class="SM-Fix SM-settingOption SM-input SM-textInput SM-button"><i
                                class="far fa-file-pdf"></i>Download in PDF</div>
                    </div>
                </a>
                <a id="print_pdf">
                    <div class="SM-settingContainer SM-settingContainerInputs SM-inputContainer">
                        <div class="SM-Fix SM-settingOption SM-input SM-textInput SM-button"><i
                                class="far fa-print"></i>PDF naar Printer</div>
                    </div>
                </a>
            </div>
        </div>
    </div>
    <div id="page_topbar_editor">
        <a onclick="sideMenu()">
            <div class="page-button">
                <i class="fas fa-bars"></i>
            </div>
        </a>
        <a href="index.html" id="page_logo_small"><img id="topbarIcon" src="dependencies/img/logo_white.svg"></a>
        <div id="page_buttons"></div>
    </div>
    <div id="screenSizeNotification">
        <div id="screenSizeNotification_content">
            <i class="fas fa-sad-tear"></i>
            <p>Op dit moment werkt de app niet op deze resolutie...</p>
        </div>
    </div>
    <div class="loadingio-spinner-rolling-r7yg351qlqb">
        <div class="ldio-538d2fuq0s6">
            <div></div>
        </div>
    </div>
    <style type="text/css">
        @keyframes ldio-538d2fuq0s6 {
            0% {
                transform: translate(-50%, -50%) rotate(0deg);
            }

            100% {
                transform: translate(-50%, -50%) rotate(360deg);
            }
        }

        .ldio-538d2fuq0s6 div {
            position: absolute;
            width: 57px;
            height: 57px;
            border: 13px solid #a6afdf;
            border-top-color: transparent;
            border-radius: 50%;
        }

        .ldio-538d2fuq0s6 div {
            animation: ldio-538d2fuq0s6 0.8333333333333334s linear infinite;
            top: 50px;
            left: 50px
        }

        .loadingio-spinner-rolling-r7yg351qlqb {
            width: 20px;
            height: 20px;
            display: inline-block;
            overflow: hidden;
            background: none;
        }

        .ldio-538d2fuq0s6 {
            width: 100%;
            height: 100%;
            position: relative;
            transform: translateZ(0) scale(0.2);
            backface-visibility: hidden;
            transform-origin: 0 0;
            /* see note above */
        }

        .ldio-538d2fuq0s6 div {
            box-sizing: content-box;
        }
    </style>
    <div id="page_content" class="">
        <div id="saveIndicator">
            <div id="page_saved">
                <span class="pageInditcator">
                    <img id="savedIcon" src="dependencies/img/cloud-saved.svg">
                    <p>Opgeslagen</p>
                </span>
            </div>
            <div id="page_saving">
                <span class="pageInditcator">
                    <div class="loadingio-spinner-rolling-r7yg351qlqb">
                        <div class="ldio-538d2fuq0s6">
                            <div></div>
                        </div>
                    </div>
                    <p>Opslaan...</p>
                </span>
            </div>
        </div>
        <div class="CV" id="printPage">
            <div class="CV-content">
                <div class="CVS-header">
                    <div id="CVC_lable" class="CVC-hover">
                        <div>
                            <img id="overheid" src="dependencies/img/overheid.png">
                            <audio id="EGoverheid">
                                <source src="dependencies/scripts/overheid.mp3">
                                </source>
                            </audio>
                        </div>
                        <p id="CVText">CV</p>
                    </div>
                    <div id="CVC_BITLogo">
                        <img id="BIT-LogoCV" src="dependencies/img/logo_dark.svg">
                    </div>
                    <div id="CVC_lableIMG">
                        <div class="confidentialIMG" id="inputS0-1L"></div>
                    </div>
                </div>
                <div onclick="sideMenuAnchor('personal')" id="CVS-personal" class="CVC-hover">
                    <table id="CVC_personal">
                        <tr>
                            <td>Naam:</td>
                            <td class="confidential"><em id="inputS1-1L"></em><em id="inputS1-2L"></em></td>
                        </tr>
                        <tr>
                            <td>Adres:</td>
                            <td class="confidential" id="inputS1-3L"></td>
                        </tr>
                        <tr>
                            <td>Postcode:</td>
                            <td class="confidential" id="inputS1-4L"></td>
                        </tr>
                        <tr>
                            <td>Woonplaats:</td>
                            <td class="confidential" id="inputS1-5L"></td>
                        </tr>
                        <tr>
                            <td>Telefoon:</td>
                            <td class="confidential" id="inputS1-6L"></td>
                        </tr>
                        <tr>
                            <td>Email:</td>
                            <td class="confidential" id="inputS1-7L"></td>
                        </tr>
                        <tr>
                            <td>Geboortedatum:</td>
                            <td class="confidential" id="inputS1-8L"></td>
                        </tr>
                        <tr>
                            <td>Nationaliteit:</td>
                            <td class="confidential" id="inputS1-9L"></td>
                        </tr>
                    </table>
                </div>
                <div onclick="sideMenuAnchor('workExperience')" id="CVS-workExperience" class="CVC-hover">
                    <div class="CVC-header" style="padding: 0 73px;">
                        <div class="CVC-numberBlock" style="background-color: #000563;" id="num1"></div>
                        <div class="CVC-title">Werkervaring</div>
                    </div>
                    <table id="CVC_workExperience">
                        <tr></tr>
                    </table>
                </div>
                <div onclick="sideMenuAnchor('education')" id="CVS-education" class="CVC-hover">
                    <div class="CVC-header" style="padding: 0 73px">
                        <div class="CVC-numberBlock" style="background-color: #000563;" id="num2"></div>
                        <div class="CVC-title">Educatie</div>
                    </div>
                    <table id="CVC_educatie">
                        <tr></tr>
                    </table>

                </div>
                <div onclick="sideMenuAnchor('skills')" id="CVS-skills" class="CVC-hover">
                    <div class="CVC-header" style="padding: 0 73px;">
                        <div class="CVC-numberBlock" style="background-color: #000563;" id="num3"></div>
                        <div class="CVC-title">Vaardigheden</div>
                    </div>
                    <div id="CVC_skillChart">
                        <div id="content-fluidchart">
                            <div id="CVC_skillChartWrap">
                                <canvas id="skillChart"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="CV" id="printPage2">
            <div class="CV-content">
                <div onclick="sideMenuAnchor('workflow')" id="CVS-workflow" class="CVC-hover">
                    <div class="CVC-header" style="padding: 0 73px;">
                        <div class="CVC-numberBlock" style="background-color: #000563;" id="num4"></div>
                        <div class="CVC-title" id="inputS5-1L"></div>
                    </div>
                    <div id="CVC_tools">
                        <textarea class="CVC-smallText confidential" id="inputS5-2L" readonly></textarea>
                    </div>
                </div>
                <div onclick="sideMenuAnchor('projects')" id="CVS-projects" class="CVC-hover">
                    <div class="CVC-header" style="padding: 0 73px;">
                        <div class="CVC-numberBlock" style="background-color: #000563;" id="num5"></div>
                        <div class="CVC-title">Projecten</div>
                    </div>
                    <div id="CVC_projects">
                    </div>
                </div>
                <div class="CV-dualSection">
                    <div onclick="sideMenuAnchor('hobbies')" id="CVS-hobbies" class="CVC-hover">
                        <div class="CVC-header" style="padding: 0 73px;">
                            <div class="CVC-numberBlock" style="background-color:#000563;" id="num6">
                                <p></p>
                            </div>
                            <div class="CVC-title">Hobbies</div>
                        </div>
                        <div class="CVC-itemBar">
                            <i class="fas fa-code confidential"></i>
                            <p class="confidential" id="inputS7-1L"></p>
                        </div>
                        <div class="CVC-itemBar">
                            <i class="fas fa-gamepad confidential"></i>
                            <p class="confidential" id="inputS7-2L"></p>
                        </div>
                        <div class="CVC-itemBar">
                            <i class="fas fa-route confidential"></i>
                            <p class="confidential" id="inputS7-3L"></p>
                        </div>
                    </div>
                    <div onclick="sideMenuAnchor('links')" id="CVS-links" class="CVC-hover">
                        <div class="CVC-header" style="padding: 0 73px;">
                            <div class="CVC-numberBlock" style="background-color: #000563;" id="num7">
                                <p></p>
                            </div>
                            <div class="CVC-title">Links</div>
                        </div>
                        <div class="CVC-itemBar">
                            <i class="fab fa-codepen"></i>
                            <p class="confidential">codepen.io/<em id="inputS8-1L"></em></p>
                        </div>
                        <div class="CVC-itemBar">
                            <i class="fab fa-github"></i>
                            <p class="confidential">github.com/<em id="inputS8-2L"></em></p>
                        </div>
                        <div class="CVC-itemBar">
                            <i class="fab fa-linkedin-in"></i>
                            <p class="confidential">linkedin.com/<em id="inputS8-3L"></em></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    <footer>
        <div id="footer-desktop">
            <div class="footer-wrap">
                <div class="inner-wrap">
                    <div id="section_footer">
                        <div id="section_footer_logo">
                            <img id="content_footer_logo" src="dependencies/img/logo_white.svg">
                            <p id="content_footer_logotext">© 2020, BMK</p>
                        </div>
                        <div id="section_footer_links" style="margin: 45px 0">
                            <div class="section-content-links">
                                <p class="content-footer-title">CV-Generator</p>
                                <ul class="content-footer-list">
                                    <a href="#">
                                        <li class="content-footer-link">Editor</li>
                                    </a>
                                    <a href="#">
                                        <li class="content-footer-link">Beheer CV</li>
                                    </a>
                                    <a href="#">
                                        <li class="content-footer-link shaking-animation">Verwijder CV</li>
                                    </a>
                                </ul>
                            </div>
                            <div class="section-content-links">
                                <p class="content-footer-title">Bit-Academy</p>
                                <ul class="content-footer-list">
                                    <a href="">
                                        <li class="content-footer-link">Wie zijn wij?</li>
                                    </a>
                                    <a href="">
                                        <li class="content-footer-link">Onderwijs</li>
                                    </a>
                                    <a href="">
                                        <li class="content-footer-link">Contact</li>
                                    </a>
                                </ul>
                            </div>
                            <div class="section-content-links">
                                <p class="content-footer-title">Externe Webapps</p>
                                <ul class="content-footer-list">
                                    <a target="_blank" href="https://jarvis.bit-academy.nl/a/dashboard">
                                        <li class="content-footer-link">Jarvis</li>
                                    </a>
                                    <a target="_blank" href="https://bitlab.bit-academy.nl/">
                                        <li class="content-footer-link">Bitlab</li>
                                    </a>
                                    <a target="_blank"
                                        href="https://bit-acad.slack.com/ssb/redirect?entry_point=homepage_nav">
                                        <li class="content-footer-link">Slack</li>
                                    </a>
                                </ul>
                            </div>
                            <div class="section-content-links">
                                <p class="content-footer-title">Development</p>
                                <ul class="content-footer-list">
                                    <a target="_blank"
                                        href="https://www.notion.so/bitacademy/CV-Generator-ece169fb171a463b87dbddc7836537ae">
                                        <li class="content-footer-link">CV Notion</li>
                                    </a>
                                    <a target="_blank" href="https://bitlab.bit-academy.nl/almere-projecten/project-2">
                                        <li class="content-footer-link">CV Bitlab</li>
                                    </a>
                                    <a target="_blank" href="https://app.slack.com/client/TAV6CF2KW/G01FS6VS5AS">
                                        <li class="content-footer-link">CV Slack</li>
                                    </a>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="footer-mobile">
            <div class="footer-wrap">
                <div class="inner-wrap" style="margin: 0 15px">
                    <div id="section_footer-m">
                        <div id="section_footer_logo" style="margin: 40px 0; width: 100%;">
                            <img id="content_footer_logo" src="dependencies/img/logo_white.svg">
                            <p id="content_footer_logotext">© 2020, BMK</p>
                        </div>
                        <div id="section_footer_links-m">
                            <div class="section-footer-linksplit">
                                <div class="section-content-links-m" style="margin-right: 7px;">
                                    <p class="content-footer-title">CV-Generator</p>
                                    <ul class="content-footer-list">
                                        <a href="#">
                                            <li class="content-footer-link-m">Editor</li>
                                        </a>
                                        <a href="#">
                                            <li class="content-footer-link-m">Beheer CV</li>
                                        </a>
                                        <a href="#">
                                            <li class="content-footer-link-m">Verwijder CV</li>
                                        </a>
                                    </ul>
                                </div>
                                <div class="section-content-links-m" style="margin-left: 7px;">
                                    <p class="content-footer-title">Bit-Academy</p>
                                    <ul class="content-footer-list">
                                        <a href="">
                                            <li class="content-footer-link-m">Wie zijn wij?</li>
                                        </a>
                                        <a href="">
                                            <li class="content-footer-link-m">Onderwijs</li>
                                        </a>
                                        <a href="">
                                            <li class="content-footer-link-m">Contact</li>
                                        </a>
                                    </ul>
                                </div>
                            </div>
                            <div class="section-footer-linksplit">
                                <div class="section-content-links-m" style="margin-right: 7px;">
                                    <p class="content-footer-title">Extere Webapps</p>
                                    <ul class="content-footer-list">
                                        <a href="">
                                            <li class="content-footer-link-m">Jarvis</li>
                                        </a>
                                        <a href="">
                                            <li class="content-footer-link-m">Bitlab</li>
                                        </a>
                                        <a href="">
                                            <li class="content-footer-link-m">Slack</li>
                                        </a>
                                    </ul>
                                </div>
                                <div class="section-content-links-m" style="margin-left: 7px;">
                                    <p class="content-footer-title">Development</p>
                                    <ul class="content-footer-list">
                                        <a href="">
                                            <li class="content-footer-link-m">CV Notion</li>
                                        </a>
                                        <a href="">
                                            <li class="content-footer-link-m">CV Slack</li>
                                        </a>
                                        <a href="https://bitlab.bit-academy.nl/almere-projecten/project-2">
                                            <li class="content-footer-link-m">CV Bitlab</li>
                                        </a>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <?php } ?>
    <script src="dependencies/libs/jQuery-3.4.1/jQuery-3.2.1.js"></script>
    <script src="dependencies/libs/aos-master-2.3.1/js/aos.js"></script>
    <script src="dependencies/libs/ChartJS-2.9.3/Chart.min.js"></script>
    <script src="dependencies/libs/jsPDF/jspdf.umd.min.js"></script>
    <script src="dependencies/libs/keyMageJS/keyMage.js"></script>
    <script src="dependencies/libs/sweetAlert-2.1.2/sweetalert.min.js"></script>
    <script src="dependencies/libs/toastr/toastr.min.js"></script>
    <script src="dependencies/scripts/core.js"></script>
    <script src="dependencies/scripts/editor.js"></script>
    <script src="dependencies/scripts/sidemenu.js"></script>
    <script src="dependencies/scripts/ajaxrequest.js"></script>
    <script src="dependencies/scripts/keybinds.js"></script>
    <script src="dependencies/jarvis/login.js"></script>
    <script src="dependencies/jarvis/functions.js"></script>
    <script src="dependencies/scripts/PDFexport/main.js"></script>
    <script src="dependencies/scripts/PDFexport/bullits.js"></script>
    <script src="dependencies/scripts/PDFexport/misc.js"></script>
    <script src="dependencies/scripts/PDFexport/data.js"></script>
    <script>
        <?php 
            $db_links_raw = file_get_contents("dependencies/php/links.json");
            $db_links = json_decode($db_links_raw, true);
            foreach($db_links['links'] as $item){

                $sql = "SELECT ".$item["db-item-name"]." FROM ".$item["db-table-name"]." WHERE userId='".$_SESSION["userInfo"]["sub"]."'";
                foreach ($connection->query($sql) as $dbdata) {
                    echo "if (document.getElementById('".$item['id']."') != null) {\n";
                    echo "document.getElementById('".$item['id']."').value = '".$dbdata[0]."'; document.getElementById('".$item['id']."L').innerHTML = '".$dbdata[0]."'; }";
                }; 
            }
        ?>
    </script>
</body>

</html>