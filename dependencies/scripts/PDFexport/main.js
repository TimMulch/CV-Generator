//class constructor for colors
class COLOR {
    constructor(R, G, B) {
        this.R = R;
        this.G = G;
        this.B = B;
    }

    hexString(){
        return '#' + this.R.toString(16).padStart(2, '0') + this.G.toString(16).padStart(2, '0') + this.B.toString(16).padStart(2, '0');
    }
}

//PDF variables
let fontSize = 11;
let lineHeight = 1.35;
let fontFamily = 'helvetica';
let pageMargin = 57.25;
let objectMargin = 27;
let halfWidthMargin = 54;

//colors
let defaultBlue = new COLOR(0, 5, 99);
let defaultGrey = new COLOR(88, 88, 90);

//variables used to store temporary data;
let profileImage = '';
let indexHeight = 0;
let halfWidthIndexHeight = 0;
let halfWidth = false;
let bullitIndex = 0;

//adding function to the generate button
$(document).ready(async function () {
    if (await JarvisCheckLogin()) {
        //download button
        document.getElementById('download_pdf').addEventListener('click', () => {generatePDF(true)});

        //print button
        document.getElementById('print_pdf').addEventListener('click', () => {generatePDF(false)});
    }
});

async function generatePDF(isDownload) {
    PDFdata = await CreatePDFdata();

    let doc = new jspdf.jsPDF({ format: [595, 842], unit: 'pt', lineHeight: lineHeight });

    doc.addFont('dependencies/fonts/pdfFonts/MerriweatherSans-Regular.ttf', 'merriweather', 'normal');
    doc.addFont('dependencies/fonts/pdfFonts/MerriweatherSans-ExtraBold.ttf', 'merriweather', 'bolder');
    doc.addFont('dependencies/fonts/pdfFonts/MerriweatherSans-Bold.ttf', 'merriweather', 'bold');
    fontFamily = 'merriweather';

    for (let object of PDFdata) {
        if (object.enabled) {
            let incrementHeight = 0;

            if (object.stacked) {
                incrementHeight += object.stackHeight * object.data.length + object.height;
            } else {
                incrementHeight += object.height;
            }

            if ((incrementHeight + indexHeight) >= 842) {
                if(object.type == 'bullit'){
                    if(object.contentType == 'halfList'){
                        if((incrementHeight + (indexHeight - halfWidthIndexHeight)) >= 842){
                            halfWidthIndexHeight = 0;
                            halfWidth = false;
                            indexHeight = pageMargin;
                            doc.addPage({ format: [595, 842] });
                        }
                    }else{
                        indexHeight = pageMargin;
                        doc.addPage({ format: [595, 842] });
                    }
                }else{
                    indexHeight = pageMargin;
                    doc.addPage({ format: [595, 842] });
                }
                // indexHeight = pageMargin;
                // doc.addPage({ format: [595, 842] });
            }

            switch (object.type) {
                case 'header':
                    MakeHeader(doc, object);
                    break;
                case 'personal_info':
                    MakePersonalInfo(doc, object);
                    break;
                case 'bullit':
                    MakeBullit(doc, object);
                    break;
                default:
                    break;
            }
        }
    }

    //exporting
    if(isDownload){
        doc.save('bitCV');
    }else{
        window.open(doc.output('bloburl', 'CV.pdf'));
    }

    halfWidthIndexHeight = 0;
    halfWidth = false;
    indexHeight = 0;
    bullitIndex = 0;
}

//making the header
function MakeHeader(doc, object) {
    //setting the color to main blue
    doc.setFillColor(defaultBlue.hexString());

    //drawing header objects    
    doc.rect(pageMargin, 0, 92, 107, 'F');

    doc.setFont(fontFamily, 'bolder');
    doc.setFontSize(24);
    doc.setTextColor('white');
    doc.text(pageMargin + ((92 - DisplayTextWidth('CV', fontFamily, 24, 'bolder')) / 2), 107 - 18, 'CV');

    doc.addImage('dependencies/img/logo_dark.png', 'PNG', pageMargin + 92 + 18.75, 32.625, 97.5, 41.25);

    if(profileImage != ''){
        doc.addImage(profileImage, 'PNG', pageMargin + 400.25, 15.75, 75, 75);
    }

    indexHeight += object.height;
    indexHeight += objectMargin;
}

//making the personal info
function MakePersonalInfo(doc, object) {
    doc.setFont(fontFamily, 'bold');
    doc.setFontSize(fontSize);
    doc.setTextColor(defaultBlue.hexString());

    for (let i = 0; i < object.data.length; i++) {
        doc.text(pageMargin, indexHeight + fontSize + (i * object.stackHeight), object.data[i].index);
    }

    doc.setFont(fontFamily, 'normal');
    doc.setTextColor(defaultGrey.hexString());

    for (let i = 0; i < object.data.length; i++) {
        doc.text(pageMargin + 110, indexHeight + fontSize + (i * object.stackHeight), object.data[i].value);
    }

    indexHeight += object.stackHeight * object.data.length;
    indexHeight += objectMargin;
}
