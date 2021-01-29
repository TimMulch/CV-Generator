var sessionID = Math.floor(Math.random()*1000000);
function ajaxRequest(object){
    consoleDebugLog(consolePrefix + consoleDebugCount + "%c" + "AjaxRequest sturen naar de database...");
    $.ajax({
        url: 'dependencies/php/ajaxrequest.php', 
        type: 'post',
        data: {id: object.id, value: object.value, sessionID: sessionID},
        success: function (data) {
            console.log(data);
            consoleDebugLog(consolePrefix + consoleDebugCount + "%c" + "De database heeft de verstuurde AjaxRequest ontvangen");
        }
    });
}
function saveAll() {
    var inputs = [
        ['inputS1-1', document.getElementById('inputS1-1').value],
        ['inputS1-2', document.getElementById('inputS1-2').value],
        ['inputS1-3', document.getElementById('inputS1-3').value],
        ['inputS1-4', document.getElementById('inputS1-4').value],
        ['inputS1-5', document.getElementById('inputS1-5').value],
        ['inputS1-6', document.getElementById('inputS1-6').value],
        ['inputS1-7', document.getElementById('inputS1-7').value],
        ['inputS1-8', document.getElementById('inputS1-8').value],
        ['inputS1-9', document.getElementById('inputS1-9').value],

    
        ['inputS5-1', document.getElementById('inputS5-1').value],
        ['inputS5-2', document.getElementById('inputS5-2').value],


        ['inputS8-1', document.getElementById('inputS5-2').value],
        ['inputS8-2', document.getElementById('inputS5-2').value],
        ['inputS8-3', document.getElementById('inputS5-2').value]
];
    $.ajax({
        url: 'dependencies/php/saveAll.php', 
        type: 'post',
        data: {action: inputs},
        success: function (data) {
            console.log('saved data!');
        }
    });
}

function deleteAll() {
    $.ajax({
        url: 'dependencies/php/deleteAll.php', 
        type: 'post',
        data: {action: "deleteAll"},
        success: function (data) {
            location.href = 'index.html';
        }
    });
}