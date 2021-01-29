//this file contains alle functions we use for jarvis
// note: before each call you should refresh, use the prefered function as callback

//refresh function, with callback, to be called every api request
function JarvisRefresh(callBack) {
    $.ajax({
        url: 'dependencies/jarvis/api/refresh.php',
        type: 'get',
        success: function (data) {
            callBack();
        }
    });
}

//skills
function JarvisSkills() {
    return new Promise((res, rej) => {
        $.ajax({
            url: 'dependencies/jarvis/api/skills.php',
            type: 'get',
            success: function (data) {
                if(JSON.parse(data).status == 'succes'){
                    res(data);
                }else{
                    rej('could not return data');
                }
            }
        });
    });
}

//Checking for login
// usage: await JarvisCheckLogin()
// note: await can only be used in async functions
function JarvisCheckLogin() {
    return new Promise((res, rej) => {
        $.ajax({
            url: 'dependencies/jarvis/api/checkLoginAjax.php',
            type: 'get',
            success: function (data) {
                res(data == 'true');
            }
        });
    });
}
