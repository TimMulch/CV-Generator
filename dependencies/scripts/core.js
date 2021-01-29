AOS.init({
    once: true
});

$(document).ready(function(){
    $(this).scrollTop(0);
});

var consoleDebugCount = 1;
var consoleIconE = '⚠️ ';
var consoleIconW = '⚠️ ';
var consolePrefix = "# ";

function consoleLog(content,styling) {setTimeout(console.log.bind(console,'%c'+content,styling));;}
function consoleDebugLog(content) {setTimeout(console.debug.bind(console,'%c'+content,'margin-right: 8px; border-radius: 3px; padding: 5px 8px; background-color: #000563; font-family: Merriweather; font-size: 12px; font-weight: 500; color: #FFF','font-family: Merriweather; font-size: 12px; font-weight: 600; color: #7084CB'));consoleDebugCount++}
function consoleDebugWarn(content) {setTimeout(console.debug.bind(console,'%c'+content,'margin-right: 8px; border-radius: 3px; padding: 5px 8px; background-color: #F5BD00; font-family: Merriweather; font-size: 12px; font-weight: 500; color: #FFF','font-family: Merriweather; font-size: 12px; font-weight: 600; color: #F5BD00'));consoleDebugCount++}
function consoleDebugError(content) {setTimeout(console.debug.bind(console,'%c'+content,'margin-right: 8px; border-radius: 3px; padding: 5px 8px; background-color: #EE5965; font-family: Merriweather; font-size: 12px; font-weight: 500; color: #FFF','font-family: Merriweather; font-size: 12px; font-weight: 600; color: #EE5965'));consoleDebugCount++}

consoleLog("CV Generator", 'height: 100px; font-family: Merriweather; font-size: 50px; font-weight: 800; color: #FFF');
consoleLog("Created by Tim Mulch, Rick Bodewes & Daan Klein", 'font-family: Merriweather; font-size: 15px; font-weight: 500; color: #FFF');
consoleLog("This webapp is still in early development.", 'border-radius: 8px; padding: 5px 8px; background-color: #000563; font-family: Merriweather; font-size: 12px; font-weight: 500; color: #FFF');
consoleLog("⚠️ To see all activity, turn on verbose level in your console settings", 'margin-bottom: 20px; border-radius: 3px; padding: 5px 8px; background-color: #F5BD00; font-family: Merriweather; font-size: 12px; font-weight: 500; color: #FFF');

// consoleDebugLog(consolePrefix+consoleDebugCount+"%c"+"message");
// consoleDebugWarn(consolePrefix+consoleDebugCount+"%c"+consoleIconW+"message");
// consoleDebugError(consolePrefix+consoleDebugCount+"%c"+consoleIconE+"message");

// var myVariable = {a:[1,2,3,4], b:"some text"};

// sessionStorage['myvariable'] = JSON.stringify(myVariable);
// var readValue = JSON.parse(sessionStorage['myvariable']);
// console.log(readValue);

function pageScroll() {
    $("html, body").animate({ scrollTop: $(href).offset().top }, 800);
}