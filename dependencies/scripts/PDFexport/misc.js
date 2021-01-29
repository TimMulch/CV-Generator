//functions for calculating text width and height

function DisplayTextWidth(text, font, size, style = 'normal') {
    let textWidth;

    let body = document.getElementsByTagName('body')[0];
    let testObject = document.createElement('span');

    testObject.style.visibility = 'hidden';
    testObject.style.display = 'inline-block';
    testObject.style.whiteSpace = 'pre-line';
    testObject.style.fontFamily = font;
    testObject.style.fontSize = size + 'px';
    testObject.style.fontStyle = style;
    testObject.style.lineHeight = lineHeight;
    testObject.innerHTML = text;

    body.appendChild(testObject);
    textWidth = testObject.clientWidth;

    testObject.parentElement.removeChild(testObject);

    return textWidth;
}

function DisplayTextHeight(width, text, font, size, style = 'normal') {
    let textHeight;

    let body = document.getElementsByTagName('body')[0];
    let testObject = document.createElement('span');

    testObject.style.visibility = 'hidden';
    testObject.style.display = 'inline-block';
    testObject.style.whiteSpace = 'pre-line';
    testObject.style.width = width + 'px';
    testObject.style.fontFamily = font;
    testObject.style.fontSize = size + 'px';
    testObject.style.fontStyle = style;
    testObject.style.lineHeight = lineHeight;
    testObject.innerHTML = text;

    body.appendChild(testObject);
    textHeight = testObject.clientHeight;

    testObject.parentElement.removeChild(testObject);

    return textHeight;
}