let loginForm = 'loginForm';
let loginFormEmail = 'loginEmail';
let loginFormPassword = 'loginPassword';

$(document).ready(function () {
    //adding eventlistener to login form
    if (document.getElementById(loginForm) != null) {
        document.getElementById(loginForm).addEventListener('submit', (e) => {
            e.preventDefault();

            JarvisRefresh(JarvisAutenticate);
        });
    }
});

//authenticating
function JarvisAutenticate() {
    $.ajax({
        url: 'dependencies/jarvis/api/authenticate.php',
        type: 'post',
        data: {
            email: document.getElementById(loginFormEmail).value,
            password: document.getElementById(loginFormPassword).value
        },
        success: function (data) {
            if(data == 'succes'){
                location.reload();
            }
        }
    });
}
