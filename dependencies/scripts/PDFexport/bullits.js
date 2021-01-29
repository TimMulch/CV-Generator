function MakeBullit(doc, object) {
    bullitIndex++;

    switch (object.contentType) {
        case 'list':
            MakeBullitList(doc, object, bullitIndex);
            break;
        case 'text':
            MakeBullitText(doc, object, bullitIndex);
            break;
        case 'skills':
            MakeBullitSkills(doc, object, bullitIndex);
            break;
        case 'projects':
            MakeBullitProjects(doc, object, bullitIndex);
            break;
        case 'halfList':
            MakeBullitHalfList(doc, object, bullitIndex);
            break;
        default:
            break;
    }
}

function MakeBullitList(doc, object, index) {
    if (halfWidth) {
        halfWidth = false;
        halfWidthIndexHeight = 0;
    }

    MakeBullitNote(doc, object.bullitName, index);

    //filling the table
    doc.setFontSize(fontSize);
    indexHeight += 10;

    for (dataObject of object.data) {
        doc.setFont(fontFamily, 'bold');
        doc.setTextColor(defaultBlue.hexString());
        doc.text(pageMargin, indexHeight + fontSize, dataObject.period);
        doc.setTextColor(defaultGrey.hexString());
        doc.text(pageMargin + 115, indexHeight + fontSize, dataObject.index);
        indexHeight += (fontSize * lineHeight);

        doc.setFont(fontFamily, 'normal');
        doc.setTextColor(defaultGrey.hexString());
        doc.text(pageMargin + 115, indexHeight + fontSize, dataObject.value);
        indexHeight += (fontSize * lineHeight) * 2;
    }
}

function MakeBullitText(doc, object, index) {
    if (halfWidth) {
        halfWidth = false;
        halfWidthIndexHeight = 0;
    }

    MakeBullitNote(doc, object.bullitName, index);

    //making the text
    doc.setFont(fontFamily, 'normal');
    doc.setFontSize(fontSize);
    doc.setTextColor('black');
    indexHeight += (fontSize * lineHeight) * 3;

    doc.text(pageMargin, indexHeight, doc.splitTextToSize(object.text, 595 - (2 * pageMargin)));

    indexHeight += DisplayTextHeight(595 - (2 * pageMargin), object.text, fontFamily, fontSize);
    indexHeight += objectMargin;
}

function MakeBullitSkills(doc, object, index) {
    MakeBullitNote(doc, object.bullitName, index);

    indexHeight += 10;

    doc.addImage(object.canvas, 'PNG', pageMargin, indexHeight, object.canvasWidth, object.canvasHeight);

    indexHeight += object.canvasHeight;
    indexHeight += objectMargin;
}

function MakeBullitProjects(doc, object, index) {
    if (halfWidth) {
        halfWidth = false;
        halfWidthIndexHeight = 0;
    }

    MakeBullitNote(doc, object.bullitName, index);

    indexHeight += (fontSize * lineHeight) * 3;

    if (object.data.length > 0) {
        doc.setFont(fontFamily, 'bold');
        doc.setFontSize(13);
        doc.setTextColor('black');

        doc.text(pageMargin, indexHeight, object.data[0].value);
        doc.addImage(object.data[0].image, 'PNG', pageMargin, indexHeight + 10, ((595 - (2 * pageMargin)) - halfWidthMargin) / 2, 120);

        if (object.data.length > 1) {
            doc.text(pageMargin + halfWidthMargin + ((595 - (2 * pageMargin)) - halfWidthMargin) / 2, indexHeight, object.data[1].value);
            doc.addImage(object.data[1].image, 'PNG', pageMargin + halfWidthMargin + ((595 - (2 * pageMargin)) - halfWidthMargin) / 2, indexHeight + 10, ((595 - (2 * pageMargin)) - halfWidthMargin) / 2, 120);
        }
        
        indexHeight += 10 + 120;
    }

    indexHeight += objectMargin;
}

function MakeBullitHalfList(doc, object, index) {
    let tempIndex = 0;
    let tempHalfwidth = false;
    let tempMargin = pageMargin;

    if (!halfWidth) {
        MakeBullitNote(doc, object.bullitName, index);
        indexHeight += 10;
        halfWidthIndexHeight += 42;
        tempHalfwidth = false;
        halfWidth = true;
    } else {
        tempIndex = indexHeight;
        indexHeight -= halfWidthIndexHeight;
        MakeBullitNote(doc, object.bullitName, index);
        tempMargin = pageMargin + halfWidthMargin + ((595 - (2 * pageMargin)) - halfWidthMargin) / 2;
        indexHeight += 10;
        tempHalfwidth = true;
        halfWidth = false;
    }

    //making the list
    for (dataObject of object.data) {
        doc.setDrawColor(defaultBlue.hexString());
        doc.setLineWidth(3);
        doc.rect(tempMargin + 1.5, indexHeight, 29, 40);
        doc.addImage('dependencies/img/icons/' + dataObject.icon, 'PNG', tempMargin + 8.5, indexHeight + 12, 15, 15);

        //making the text
        doc.setFont(fontFamily, 'bold');
        doc.setFontSize(12);
        doc.setTextColor('black');
        if(!object.isUrl){
            doc.text(tempMargin + 32 + 6, indexHeight + 12 + (40 - (12 * lineHeight)) / 2, dataObject.value);
        }else{
            doc.textWithLink(dataObject.value, tempMargin + 32 + 6, indexHeight + 12 + (40 - (12 * lineHeight)) / 2, { url: 'http://' + dataObject.value });
        }

        indexHeight += 40 + 10;
        if (!tempHalfwidth) {
            halfWidthIndexHeight += 40 + 10;
        }
    }

    indexHeight += objectMargin;
    if (!tempHalfwidth) {
        halfWidthIndexHeight += objectMargin;
    }

    if (tempHalfwidth) {
        indexHeight = tempIndex;
        halfWidthIndexHeight = 0;
    }
}

//making the bullit note
function MakeBullitNote(doc, name, index = 0) {
    let tempMargin = pageMargin;

    if (halfWidth) {
        tempMargin = pageMargin + halfWidthMargin + ((595 - (2 * pageMargin)) - halfWidthMargin) / 2;
    }

    //setting the color to main blue
    doc.setFillColor(defaultBlue.hexString());

    //making bullit
    doc.rect(tempMargin, indexHeight, 32, 32, 'F');
    
    doc.setFont(fontFamily, 'bolder');
    doc.setFontSize(14);
    doc.setTextColor('white');
    doc.text(tempMargin + 4, indexHeight + 27, (index.toString().length < 2 ? '0' + index.toString() : index.toString()) + '.');

    indexHeight += 32;

    //making bullit text
    doc.setFillColor(defaultBlue.hexString());
    doc.rect(tempMargin + 40, indexHeight - 2, DisplayTextWidth(name, fontFamily, 15, 'bolder') + 2, 2, 'F');

    doc.setFont(fontFamily, 'bolder');
    doc.setFontSize(15);
    doc.setTextColor(defaultBlue.hexString());

    doc.text(tempMargin + 40, indexHeight - 7, name);
}