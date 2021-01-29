//Adding all page elements
async function CreatePDFdata() {
    let CVgenOBJ = [];
    let personalData = [];
    let workExperience = [];
    let scholarShip = [];
    let projects = [];
    let hobbies = [];
    let links = [];

    //making header
    CVgenOBJ.push({ type: 'header', enabled: true, height: 107, stacked: false });

    //making personalData
    personalData.push({ index: 'Naam:', value: CV_OBJ.personalInformation.firstName() + ' ' + CV_OBJ.personalInformation.lastName() });
    personalData.push({ index: 'Adres:', value: CV_OBJ.personalInformation.adress() });
    personalData.push({ index: 'Postcode:', value: CV_OBJ.personalInformation.zipcode() });
    personalData.push({ index: 'Woonplaats:', value: CV_OBJ.personalInformation.city() });
    personalData.push({ index: 'Telefoon:', value: CV_OBJ.personalInformation.phoneNumber() });
    personalData.push({ index: 'Email:', value: CV_OBJ.personalInformation.email() });
    personalData.push({ index: 'Geboortedatum:', value: CV_OBJ.personalInformation.dateOfBirth() });
    personalData.push({ index: 'Nationaliteit:', value: CV_OBJ.personalInformation.nationality() });

    CVgenOBJ.push({ type: 'personal_info', enabled: document.getElementById('CVS-personal').style.display == '', height: 0, stackHeight: fontSize * lineHeight, stacked: true, data: personalData });

    //making workExperience
    for(let i = 0; i < CV_OBJ.workExperience.jobsTotal(); i++){
        workExperience.push({ index: CV_OBJ.workExperience['job' + (i + 1)].company(), value: CV_OBJ.workExperience['job' + (i + 1)].jobDescription(), period: CV_OBJ.workExperience['job' + (i + 1)].workStartDate() + ' - ' + CV_OBJ.workExperience['job' + (i + 1)].workEndDate() });
    }

    CVgenOBJ.push({ type: 'bullit', contentType: 'list', enabled: document.getElementById('CVS-workExperience').style.display == '', height: 32 + 10, stackHeight: (fontSize * lineHeight) * workExperience.length, stacked: true, bullitName: 'WERKERVARING', data: workExperience });

    //making scolarships
    for(let i = 0; i < CV_OBJ.scholarship.educationTotal(); i++){
        scholarShip.push({ index: CV_OBJ.scholarship['edu' + (i + 1)].schoolName(), value: CV_OBJ.scholarship['edu' + (i + 1)].euducation(), period: CV_OBJ.scholarship['edu' + (i + 1)].eduStartDate() + ' - ' + CV_OBJ.scholarship['edu' + (i + 1)].eduEndDate() });
    }

    CVgenOBJ.push({ type: 'bullit', contentType: 'list', enabled: document.getElementById('CVS-education').style.display == '', height: 32 + 10, stackHeight: (fontSize * lineHeight) * workExperience.length, stacked: true, bullitName: 'EDUCATIE', data: scholarShip });

    //making the skills
    CVgenOBJ.push({ type: 'bullit', contentType: 'skills', enabled: document.getElementById('CVS-skills').style.display == '', height: 150 + 32 + 10, stacked: false, bullitName: 'SKILLS', canvasWidth: 300, canvasHeight: 150, canvas: document.getElementById('skillChart') });

    //making a text element
    CVgenOBJ.push({ type: 'bullit', contentType: 'text', enabled: document.getElementById('CVS-workflow').style.display == '', height: 32 + ((fontSize * lineHeight) * 3) + DisplayTextHeight(595 - (2 * pageMargin), CV_OBJ.workflow.text(), fontFamily, fontSize), stacked: false, bullitName: CV_OBJ.workflow.title(), text: CV_OBJ.workflow.text() });

    //making the projects
    for(let i = 0; i < CV_OBJ.projects.projectsTotal(); i++){
        projects.push({ value: CV_OBJ.projects['project' + (i + 1)].projectName(), image: await CV_OBJ.projects['project' + (i + 1)].projectIMG() });
    }

    CVgenOBJ.push({ type: 'bullit', contentType: 'projects', enabled: document.getElementById('CVS-projects').style.display == '', height: 120 + 32 + (fontSize * lineHeight) * 3, stacked: false, bullitName: 'MIJN PROJECTEN', data: projects });

    //making the hobbies and links lists
    hobbies.push({ value: CV_OBJ.hobbies.hobby1.hobbyDesc(), icon: 'code.png' });
    hobbies.push({ value: CV_OBJ.hobbies.hobby2.hobbyDesc(), icon: 'gamepad.png'  });
    hobbies.push({ value: CV_OBJ.hobbies.hobby3.hobbyDesc(), icon: 'route.png'  });

    CVgenOBJ.push({ type: 'bullit', contentType: 'halfList', enabled: document.getElementById('CVS-hobbies').style.display == '', height: 32 + 10, stackHeight: 39 + 13, stacked: true, bullitName: 'HOBBIES', data: hobbies, isUrl: false });
    
    links.push({ value: CV_OBJ.links.linkCodepen(), icon: 'codepen.png' });
    links.push({ value: CV_OBJ.links.linkGitHub(), icon: 'github.png'  });
    links.push({ value: CV_OBJ.links.linkLinkedIn(), icon: 'linkedin.png'  });

    CVgenOBJ.push({ type: 'bullit', contentType: 'halfList', enabled: document.getElementById('CVS-links').style.display == '', height: 32 + 10, stackHeight: 39 + 13, stacked: true, bullitName: 'LINKS', data: links, isUrl: true });

    return CVgenOBJ;
}