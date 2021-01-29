var EGoverheid = $("#EGoverheid");
var arraytemp = [];
var tempIncrement = 0;

function genTodayDate() {
    let date = new Date();
    todayD = date.getDate();
    todayM = date.getMonth() + 1;
    todayY = date.getFullYear();
    todayDate = todayM + '.' + todayY;
}

genTodayDate();

var countWorkExperience = 1;
var countEducation = 1;
var countProjects = 1;
var CVSections = ['personal', 'workExperience', 'education', 'skills', 'workflow', 'projects', 'hobbies', 'links']
var CVSectionsT = ['Persoonsgegevens', 'Werkervaring', 'Educatie', 'Vaardigheden', 'Workflow', 'Projecten', 'Hobbies', 'Links']

toastr.options = {
    "closeButton": false,
    "debug": false,
    "newestOnTop": false,
    "progressBar": true,
    "positionClass": "toast-top-right",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
}

function updateNumbering() {
    arraytemp = document.getElementsByClassName("CVC-numberBlock");
    for (var i = 0; i < arraytemp.length; i++) {
        if (arraytemp[i].parentElement.parentElement.style.display == "") {
            arraytemp[i].innerHTML = "0" + (tempIncrement + 1) + ".";
            tempIncrement++;
        }
    }
    consoleDebugLog(consolePrefix + consoleDebugCount + "%c" + "Updated Numbering");
    tempIncrement = 0;
};

updateNumbering();

function updateInput(textInputID, value) {
    if (value == "" || value == null) {
        $('#' + textInputID + 'L').html("&nbsp;");
    } else {
        $('#' + textInputID + 'L').html(value);
    }
};

function sideMenu() {
    var sm = document.getElementById("sideMenu");
    if (sm.style.left == "0px") {
        sm.style.left = "-1000px";
    } else {
        sm.style.left = "0px";
    }
}

function toggleSideMenu(state) {
    var sm = document.getElementById("sideMenu");
    if (state == open && sm.style.left == "-1000px") {
        sm.style.left = "0px";
    } else {}
    if (state == close && sm.style.left == "0px") {
        sm.style.left = "-1000px";
    } else {}
}

function sideMenuAnchor(anchorLoc) {
    toggleSideMenu(open);
    var url = location.href;
    location.href = "#SM-" + anchorLoc + "Container";
    history.replaceState(null, null, url);
}

$('#SM-uploadIMG1').on('click', function () {
    $('#inputS0-1').click();
    return false;
});

$('#SM-uploadIMG1').on('click', function () {
    $('#inputS0-1').click();
    return false;
});

$('#SM-uploadIMG1').on('click', function () {
    $('#inputS0-1').click();
    return false;
});

$("#inputS0-1").change(function () {
    function SMinput1(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#inputS0-1L').css('backgroundImage', 'url(' + e.target.result + ')');
                profileImage = e.target.result;
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
    SMinput1(this);
});

function appeltaart1(input) {
    console.log("input 1");
    var reader = new FileReader();
    reader.onload = function (e) {
        $('#inputS6-1-2L').css('backgroundImage', 'url(' + e.target.result + ')');
        profileImage2 = e.target.result;
    }
    reader.readAsDataURL(input.files[0]);
}

function appeltaart2(input) {
    console.log("input 2");
    var reader = new FileReader();
    reader.onload = function (e) {
        $('#inputS6-2-2L').css('backgroundImage', 'url(' + e.target.result + ')');
        profileImage3 = e.target.result;
    }
    reader.readAsDataURL(input.files[0]);
}

function pizzapunt1() {
    $('#inputS6-1-2').click();
    return false;
}

function pizzapunt2() {
    $('#inputS6-2-2').click();
    return false;
}

// function getRandomColor() {
//     var letters = '0123456789ABCDEF';
//     var color = '#';
//     for (var i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     $('.SM-formLine').css('border-left', '5px solid ' + color);
// }

$("#addWorkExperience").click(function () {
    if (countWorkExperience < 4) {
        $("#CVC_workExperience").append('<tr class="WE' + countWorkExperience + ' CVC-workExperienceInfo"><td class="confidential"><p><em id="inputS2-' + countWorkExperience + '-1L"></em>-<em id="inputS2-' + countWorkExperience + '-2L"></em></p></td><td class="confidential"><p class="CVC-bedrijf" id="inputS2-' + countWorkExperience + '-3L"></p></td></tr><tr class="WE' + countWorkExperience + '"><td></td><td class="confidential"><p class="CVC-functie" id="inputS2-' + countWorkExperience + '-4L"></p></td></tr><tr class="WE' + countWorkExperience + '"><td>&nbsp;</td></tr>');
        $("#SM-workExperience").append('<form id="SM-WE' + countWorkExperience + '" class="SM-inputOption SM-form SM-formLine"><div class="SM-Fix SM-settingOption SM-input SM-textInput"><input type="month" onfocusout="ajaxRequest(this)" placeholder="Ingang dienstverband" id="inputS2-' + countWorkExperience + '-1"></div><div class="SM-Fix SM-settingOption SM-input SM-textInput"><input type="month" onfocusout="ajaxRequest(this)" placeholder="Einde dienstverband" id="inputS2-' + countWorkExperience + '-2"></div><div class="SM-Fix SM-settingOption SM-input SM-textInput"><input type="text" placeholder="Bedrijfsnaam" onKeyUp="updateInput(this.id, this.value)" onfocusout="ajaxRequest(this)" id="inputS2-' + countWorkExperience + '-3"></div><div class="SM-Fix SM-settingOption SM-input SM-textInput"><input type="text" placeholder="Functie" onKeyUp="updateInput(this.id, this.value)" onfocusout="ajaxRequest(this)" id="inputS2-' + countWorkExperience + '-4"></div></form>');
        eval('workExperienceLiveDate' + countWorkExperience + '();')
        countWorkExperience++;
    } else {
        toastr.error('i.v.m. een technische fout kun je tijdelijk maximaal 3 werkervaringen toevoegen op uw CV. Ons excuses voor het ongemak.', 'Er is iets fout gegaan...', {
            timeOut: 10000
        })
    }
    if (countWorkExperience > 4) {
        countWorkExperience--
    };
});

$("#delWorkExperience").click(function () {
    if (countWorkExperience == 2) {
        $('.WE1').remove();
        $("#SM-WE1").remove();
        countWorkExperience--;
    }
    if (countWorkExperience == 3) {
        $('.WE2').remove();
        $("#SM-WE2").remove();
        countWorkExperience--;
    }
    if (countWorkExperience == 4) {
        $('.WE3').remove();
        $("#SM-WE3").remove();
        countWorkExperience--;
    }
});

$("#addEducation").click(function () {
    if (countEducation < 4) {
        $("#CVC_educatie").append('<tr class="EDU' + countEducation + ' CVC-educatieInfo"><td class="confidential"><p><em id="inputS3-' + countEducation + '-1L"></em>-<em id="inputS3-' + countEducation + '-2L"></em></p></td><td class="confidential"><p class="CVC-instituut" id="inputS3-' + countEducation + '-3L"></p></td></tr><tr class="EDU' + countEducation + '"><td></td><td class="confidential"><p class="CVC-functie" id="inputS3-' + countEducation + '-4L"></p></td></tr><tr class="EDU' + countEducation + '"><td>&nbsp;</td></tr>');
        $("#SM-educatie").append('<form id="SM-EDU' + countEducation + '" class="SM-inputOption SM-form SM-formLine"><div class="SM-Fix SM-settingOption SM-input SM-textInput"><input type="month" onfocusout="ajaxRequest(this)" placeholder="Startdatum school/opleiding" id="inputS3-' + countEducation + '-1"></div><div class="SM-Fix SM-settingOption SM-input SM-textInput"><input type="month" onfocusout="ajaxRequest(this)" placeholder="Datum diplomering" id="inputS3-' + countEducation + '-2"></div><div class="SM-Fix SM-settingOption SM-input SM-textInput"><input type="text" placeholder="School" onKeyUp="updateInput(this.id, this.value)" onfocusout="ajaxRequest(this)" id="inputS3-' + countEducation + '-3"></div><div class="SM-Fix SM-settingOption SM-input SM-textInput"><input type="text" placeholder="Opleiding" onKeyUp="updateInput(this.id, this.value)" onfocusout="ajaxRequest(this)" id="inputS3-' + countEducation + '-4"></div></form>');
        eval('educationLiveDate' + countEducation + '();')
    } else {
        toastr.error('i.v.m. een technische fout kun je tijdelijk maximaal 3 educaties toevoegen op uw CV. Ons excuses voor het ongemak.', 'Er is iets fout gegaan...', {
            timeOut: 10000
        })
    }
    if (countEducation > 4) {
        countEducation--
    };
    countEducation++;
});

$("#delEducation").click(function () {
    if (countEducation == 2) {
        $('.EDU1').remove();
        $("#SM-EDU1").remove();
        countEducation--;
    }
    if (countEducation == 3) {
        $('.EDU2').remove();
        $("#SM-EDU2").remove();
        countEducation--;
    }
    if (countEducation == 4) {
        $('.EDU3').remove();
        $("#SM-EDU3").remove();
        countEducation--;
    }
});

$("#addProject").click(function () {
    if (countProjects < 3) {
        $("#CVC_projects").append('<div id="PRO' + countProjects + '" class="CVC-project"><p class="confidential" id="inputS6-' + countProjects + '-1L">&nbsp;</p><div class="SM-projectsIMG" id="inputS6-' + countProjects + '-2L"></div></div>');
        $("#SM-projects").append('<form id="SM-PRO' + countProjects + '" class="SM-inputOption SM-form SM-formLine"><div class="SM-Fix SM-settingOption SM-input SM-textInput"><input type="text" onKeyUp="updateInput(this.id, this.value)" onfocusout="ajaxRequest(this)" placeholder="Project naam" id="inputS6-' + countProjects + '-1"></div><button type="button" onclick="pizzapunt'+countProjects+'()" id="SM-uploadProject' + countProjects + '" class="SM-addButton SM-buttonMaxWidth"><i class="fad fa-file-upload"></i>Upload Project Foto</button><input type="file" onchange="appeltaart'+countProjects+'(this)" id="inputS6-' + countProjects + '-2" placeholder="Foto" style="display: none;"></form>');
    } else {
        toastr.warning('Je kunt maximaal 2 projecten toevoegen', 'Maximum bereikt', {
            timeOut: 10000
        })
    }
    countProjects++;
});

$("#delProject").click(function () {
    if (countProjects == 2) {
        $('#PRO1').remove();
        $("#SM-PRO1").remove();
        countProjects--;
    }
    if (countProjects == 3) {
        $('#PRO2').remove();
        $("#SM-PRO2").remove();
        countProjects--;
    }
    if (countProjects > 3) {
        countProjects--
    };
});

$('#toggleSection0').change(function () {
    if ($('#toggleSection0').is(":checked")) {
        $("#CVC_lableIMG").show();
        $("#CV-imageInput").show();
        consoleDebugLog(consolePrefix + consoleDebugCount + "%c" + "\"CV Image\" has been toggled to enabled trough the side menu");
    } else {
        $("#CVC_lableIMG").hide();
        $("#CV-imageInput").hide();
        consoleDebugLog(consolePrefix + consoleDebugCount + "%c" + "\"CV Image\" has been toggled to disabled trough the side menu");
    }
    if ($('#toggleSection0').not(':checked').length && $('#toggleSection1').not(':checked').length && $('#toggleSection2').not(':checked').length && $('#toggleSection3').not(':checked').length && $('#toggleSection4').not(':checked').length && $('#toggleSection5').not(':checked').length && $('#toggleSection6').not(':checked').length && $('#toggleSection7').not(':checked').length && $('#toggleSection8').not(':checked').length && $('#confidentialMode').not(':checked').length) {
        $("#overheid").css("display", "block");
        $("#CVText").css("display", "none");
        $("#CVC_BITLogo").css("display", "none");
        document.getElementById('EGoverheid').play();
        toastr.success('', 'Je hebt een Easter Egg gevonden!', {
            timeOut: 10000
        });
        consoleDebugWarn(consolePrefix + consoleDebugCount + "%c" + consoleIconW + "Easter egg discovered!");
        setTimeout(function(){
            $("#overheid").css("display", "none");
            $("#CVText").css("display", "block");
            $("#CVC_BITLogo").css("display", "flex");
        }, 2000);
    }
});

$(document).ready(function () {
    $("#inputS1-8").change(function () {
        $("#inputS1-8L").html(this.value);
    });
});

function workExperienceLiveDate1() {
    $("#inputS2-1-1").change(function () {
        let date = new Date($('#inputS2-1-1').val());
        d = date.getDate();
        m = date.getMonth() + 1;
        y = date.getFullYear();
        if (m.length != 1) {
            $("#inputS2-1-1L").html('0' + m + '.' + y);
        } else {
            $("#inputS2-1-1L").html(m + '.' + y);
        }
    });

    $("#inputS2-1-2").change(function () {
        let date = new Date($('#inputS2-1-2').val());
        d = date.getDate();
        m = date.getMonth() + 1;
        y = date.getFullYear();
        if (m == todayM && y == todayY) {
            $("#inputS2-1-2L").html("Heden");
        } else {
            $("#inputS2-1-2L").html(m + '.' + y);
        }
    });
}

function workExperienceLiveDate2() {
    $("#inputS2-2-1").change(function () {
        let date = new Date($('#inputS2-2-1').val());
        d = date.getDate();
        m = date.getMonth() + 1;
        y = date.getFullYear();
        if (m.length != 1) {
            $("#inputS2-2-1L").html('0' + m + '.' + y);
        } else {
            $("#inputS2-2-1L").html(m + '.' + y);
        }
    });

    $("#inputS2-2-2").change(function () {
        let date = new Date($('#inputS2-2-2').val());
        d = date.getDate();
        m = date.getMonth() + 1;
        y = date.getFullYear();
        if (m == todayM && y == todayY) {
            $("#inputS2-2-2L").html("Heden");
        } else {
            $("#inputS2-2-2L").html(m + '.' + y);
        }
    });
}

function workExperienceLiveDate3() {
    $("#inputS2-3-1").change(function () {
        let date = new Date($('#inputS2-3-1').val());
        d = date.getDate();
        m = date.getMonth() + 1;
        y = date.getFullYear();
        if (m.length != 1) {
            $("#inputS2-3-1L").html('0' + m + '.' + y);
        } else {
            $("#inputS2-3-1L").html(m + '.' + y);
        }
    });

    $("#inputS2-3-2").change(function () {
        let date = new Date($('#inputS2-3-2').val());
        d = date.getDate();
        m = date.getMonth() + 1;
        y = date.getFullYear();
        if (m == todayM && y == todayY) {
            $("#inputS2-3-2L").html("Heden");
        } else {
            $("#inputS2-3-2L").html(m + '.' + y);
        }
    });
}

function educationLiveDate1() {
    $("#inputS3-1-1").change(function () {
        let date = new Date($('#inputS3-1-1').val());
        d = date.getDate();
        m = date.getMonth() + 1;
        y = date.getFullYear();
        if (m.length != 1) {
            $("#inputS3-1-1L").html('0' + m + '.' + y);
        } else {
            $("#inputS3-1-1L").html(m + '.' + y);
        }
    });

    $("#inputS3-1-2").change(function () {
        let date = new Date($('#inputS3-1-2').val());
        d = date.getDate();
        m = date.getMonth() + 1;
        y = date.getFullYear();
        if (m == todayM && y == todayY) {
            $("#inputS3-1-2L").html("Heden");
        } else {
            $("#inputS3-1-2L").html(m + '.' + y);
        }
    });
}

function educationLiveDate2() {
    $("#inputS3-2-1").change(function () {
        let date = new Date($('#inputS3-2-1').val());
        d = date.getDate();
        m = date.getMonth() + 1;
        y = date.getFullYear();
        if (m.length != 1) {
            $("#inputS3-2-1L").html('0' + m + '.' + y);
        } else {
            $("#inputS3-2-1L").html(m + '.' + y);
        }
    });

    $("#inputS3-2-2").change(function () {
        let date = new Date($('#inputS3-2-2').val());
        d = date.getDate();
        m = date.getMonth() + 1;
        y = date.getFullYear();
        if (m == todayM && y == todayY) {
            $("#inputS3-2-2L").html("Heden");
        } else {
            $("#inputS3-2-2L").html(m + '.' + y);
        }
    });
}

function educationLiveDate3() {
    $("#inputS3-3-1").change(function () {
        let date = new Date($('#inputS3-3-1').val());
        d = date.getDate();
        m = date.getMonth() + 1;
        y = date.getFullYear();
        if (m.length != 1) {
            $("#inputS3-3-1L").html('0' + m + '.' + y);
        } else {
            $("#inputS3-3-1L").html(m + '.' + y);
        }
    });

    $("#inputS3-3-2").change(function () {
        let date = new Date($('#inputS3-3-2').val());
        d = date.getDate();
        m = date.getMonth() + 1;
        y = date.getFullYear();
        if (m == todayM && y == todayY) {
            $("#inputS3-3-2L").html("Heden");
        } else {
            $("#inputS3-3-2L").html(m + '.' + y);
        }
    });
}

for (let j = 0; j < CVSections.length; j++) {
    $('#toggleSection' + eval(j + 1)).change(function () {
        if ($('#toggleSection' + eval(j + 1)).is(":checked", ("none"))) {
            $('#CVS-' + CVSections[j]).show();
            $('#SM-' + CVSections[j] + 'Container').show();
            updateNumbering();
            consoleDebugLog(consolePrefix + consoleDebugCount + "%c" + "\"" + CVSections[j] + "\" has been toggled to enabled through the side menu");
            toastr.success('Onderdeel is ingeschakeld', CVSectionsT[j], {
                timeOut: 10000
            });
        } else {
            $('#CVS-' + CVSections[j]).hide();
            $('#SM-' + CVSections[j] + 'Container').hide();
            updateNumbering();
            consoleDebugLog(consolePrefix + consoleDebugCount + "%c" + "\"" + CVSections[j] + "\" has been toggled to disabled through the side menu");
            toastr.success('Onderdeel is uitgeschakeld', CVSectionsT[j], {
                timeOut: 10000
            });
        }
    });
}

$('#confidentialMode').change(function () {
    if ($('#confidentialMode').is(":checked")) {
        $(".confidential").css("background-color", "#000");
        $(".confidential").css("color", "#000");
        consoleDebugLog(consolePrefix + consoleDebugCount + "%c" + "\"Confidential Mode\" has been toggled to enabled through the side menu");
    } else {
        $(".confidential").css("background-color", "transparent");
        $(".confidential").css("color", "unset");
        consoleDebugLog(consolePrefix + consoleDebugCount + "%c" + "\"Confidential Mode\" has been toggled to disabled through the side menu");
    }
});

$('#dualPreviewMode').change(function () {
    if ($('#dualPreviewMode').is(":checked")) {
        $("#page_content").css("flex-direction", "row");
        consoleDebugLog(consolePrefix + consoleDebugCount + "%c" + "\"Dual Preview\" has been toggled to enabled through the side menu");
    } else {
        $("#page_content").css("flex-direction", "column");
        consoleDebugLog(consolePrefix + consoleDebugCount + "%c" + "\"Dual Preview\" has been toggled to disabled through the side menu");
    }
});

if ($('#smallerPreviewMode').is(":checked")) {
    $("#page_content").css("transform", "scale(0.7)");
    $("#page_content").removeClass("biggerPreview");
    $("#page_content").addClass("smallerPreview");
    $("footer").addClass("smallerPreviewFooter");
    $("#page_content").addClass("smallerPreviewTopbar");
} else {
    $("#page_content").css("transform", "scale(1)");
    $("#page_content").removeClass("smallerPreview");
    $("#page_content").addClass("biggerPreview");
    $("footer").removeClass("smallerPreviewFooter");
    $("#page_content").removeClass("smallerPreviewTopbar");
};

$('#smallerPreviewMode').change(function () {
    if ($('#smallerPreviewMode').is(":checked")) {
        $("#page_content").css("transform", "scale(0.7)");
        $("#page_content").removeClass("biggerPreview");
        $("#page_content").addClass("smallerPreview");
        $("footer").addClass("smallerPreviewFooter");
        $("#page_content").addClass("smallerPreviewTopbar");
        consoleDebugLog(consolePrefix + consoleDebugCount + "%c" + "\"Smaller Preview\" has been toggled to enabled through the side menu");
    } else {
        $("#page_content").css("transform", "scale(1)");
        $("#page_content").removeClass("smallerPreview");
        $("#page_content").addClass("biggerPreview");
        $("footer").removeClass("smallerPreviewFooter");
        $("#page_content").removeClass("smallerPreviewTopbar");
        consoleDebugLog(consolePrefix + consoleDebugCount + "%c" + "\"Smaller Preview\" has been toggled to disabled through the side menu");
    }
});

$('#smallerPreviewMode').change(function () {
    if ($('#smallerPreviewMode').is(":checked") && $('#dualPreviewMode').not(':checked').length) {
        $("#page_content").css("transform", "scale(0.7)");
        $("#page_content").removeClass("biggerPreview");
        $("#page_content").addClass("smallerPreview");
        $("footer").addClass("smallerPreviewFooter");
        $("#page_content").addClass("smallerPreviewTopbar");
    } else {
        $("#page_content").css("transform", "scale(1)");
        $("#page_content").removeClass("smallerPreview");
        $("#page_content").addClass("biggerPreview");
        $("footer").removeClass("smallerPreviewFooter");
        $("#page_content").removeClass("smallerPreviewTopbar");
    }
});

$('#dualPreviewMode').change(function () {
    if ($('#smallerPreviewMode').is(":checked") && $('#dualPreviewMode').not(':checked').length) {
        $("#page_content").css("transform", "scale(0.7)");
        $("#page_content").removeClass("biggerPreview");
        $("#page_content").addClass("smallerPreview");
        $("footer").addClass("smallerPreviewFooter");
        $("#page_content").addClass("smallerPreviewTopbar2");
    } else {
        $("#page_content").css("transform", "scale(1)");
        $("#page_content").removeClass("smallerPreview");
        $("#page_content").addClass("biggerPreview");
        $("footer").removeClass("smallerPreviewFooter");
        $("#page_content").removeClass("smallerPreviewTopbar2");
    }
});
