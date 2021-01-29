// ▒█▀▀█ █▀▀█ █▀▀▄ █▀▀ █░░░█ █▀▀ █▀▀ 
// ▒█▀▀▄ █░░█ █░░█ █▀▀ █▄█▄█ █▀▀ ▀▀█ 
// ▒█▄▄█ ▀▀▀▀ ▀▀▀░ ▀▀▀ ░▀░▀░ ▀▀▀ ▀▀▀

let CV_OBJ = {
    personalInformation: {
        firstName: function () { try { return document.getElementById('inputS1-1').value } catch (e) { return '' } },
        lastName: function () { try { return document.getElementById('inputS1-2').value } catch (e) { return '' } },
        adress: function () { try { return document.getElementById('inputS1-3').value } catch (e) { return '' } },
        zipcode: function () { try { return document.getElementById('inputS1-4').value } catch (e) { return '' } },
        city: function () { try { return document.getElementById('inputS1-5').value } catch (e) { return '' } },
        phoneNumber: function () { try { return document.getElementById('inputS1-6').value } catch (e) { return '' } },
        email: function () { try { return document.getElementById('inputS1-7').value } catch (e) { return '' } },
        dateOfBirth: function () { try { return document.getElementById('inputS1-8').value } catch (e) { return '' } },
        nationality: function () { try { return document.getElementById('inputS1-9').value } catch (e) { return '' } }
    },
    workExperience: {
        job1: {
            workStartDate: function () { try { return new Date(document.getElementById('inputS2-1-1').value).getFullYear() } catch (e) { return '' } },
            workEndDate: function () { try { return new Date(document.getElementById('inputS2-1-2').value).getFullYear() } catch (e) { return '' } },
            company: function () { try { return document.getElementById('inputS2-1-3').value } catch (e) { return '' } },
            jobDescription: function () { try { return document.getElementById('inputS2-1-4').value } catch (e) { return '' } }
        },
        job2: {
            workStartDate: function () { try { return new Date(document.getElementById('inputS2-2-1').value).getFullYear() } catch (e) { return '' } },
            workEndDate: function () { try { return new Date(document.getElementById('inputS2-2-2').value).getFullYear() } catch (e) { return '' } },
            company: function () { try { return document.getElementById('inputS2-2-3').value } catch (e) { return '' } },
            jobDescription: function () { try { return document.getElementById('inputS2-2-4').value } catch (e) { return '' } }
        },
        job3: {
            workStartDate: function () { try { return new Date(document.getElementById('inputS2-3-1').value).getFullYear() } catch (e) { return '' } },
            workEndDate: function () { try { return new Date(document.getElementById('inputS2-3-2').value).getFullYear() } catch (e) { return '' } },
            company: function () { try { return document.getElementById('inputS2-3-3').value } catch (e) { return '' } },
            jobDescription: function () { try { return document.getElementById('inputS2-3-4').value } catch (e) { return '' } }
        },
        jobsTotal: function () { try { return countWorkExperience - 1 } catch (e) { return 0 } }
    },
    scholarship: {
        edu1: {
            eduStartDate: function () { try { return new Date(document.getElementById('inputS3-1-1').value).getFullYear() } catch (e) { return '' } },
            eduEndDate: function () { try { return new Date(document.getElementById('inputS3-1-2').value).getFullYear() } catch (e) { return '' } },
            schoolName: function () { try { return document.getElementById('inputS3-1-3').value } catch (e) { return '' } },
            euducation: function () { try { return document.getElementById('inputS3-1-4').value } catch (e) { return '' } }
        },
        edu2: {
            eduStartDate: function () { try { return new Date(document.getElementById('inputS3-2-1').value).getFullYear() } catch (e) { return '' } },
            eduEndDate: function () { try { return new Date(document.getElementById('inputS3-2-2').value).getFullYear() } catch (e) { return '' } },
            schoolName: function () { try { return document.getElementById('inputS3-2-3').value } catch (e) { return '' } },
            euducation: function () { try { return document.getElementById('inputS3-2-4').value } catch (e) { return '' } }
        },
        edu3: {
            eduStartDate: function () { try { return new Date(document.getElementById('inputS3-3-1').value).getFullYear() } catch (e) { return '' } },
            eduEndDate: function () { try { return new Date(document.getElementById('inputS3-3-2').value).getFullYear() } catch (e) { return '' } },
            schoolName: function () { try { return document.getElementById('inputS3-3-3').value } catch (e) { return '' } },
            euducation: function () { try { return document.getElementById('inputS3-3-4').value } catch (e) { return '' } }
        },
        educationTotal: function () { try { return countEducation - 1 } catch (e) { return 0 } }
    },
    skills: {
        skillHTML: function () { try { return document.getElementById('inputS4-1').value } catch (e) { return '' } },
        skillCSS: function () { try { return document.getElementById('inputS4-2').value } catch (e) { return '' } },
        skillJavaScript: function () { try { return document.getElementById('inputS4-3').value } catch (e) { return '' } },
        skillPHP: function () { try { return document.getElementById('inputS4-4').value } catch (e) { return '' } },
        skillSQL: function () { try { return document.getElementById('inputS4-5').value } catch (e) { return '' } }
    },
    workflow: {
        title: function () { try { return document.getElementById('inputS5-1').value } catch (e) { return '' } },
        text: function () { try { return document.getElementById('inputS5-2').value } catch (e) { return '' } }
    },
    projects: {
        project1: {
            projectName: function () { try { return document.getElementById('inputS6-1-1').value } catch (e) { return '' } },
            projectIMG: function () {
                return new Promise((res, rej) => {
                    var reader = new FileReader();
                    reader.onload = function (e) {  
                        res(e.target.result);
                    }
                    reader.readAsDataURL(document.getElementById('inputS6-1-2').files[0]);
                });
            }
        },
        project2: {
            projectName: function () { try { return document.getElementById('inputS6-2-1').value } catch (e) { return '' } },
            projectIMG: function () {
                return new Promise((res, rej) => {
                    var reader = new FileReader();
                    reader.onload = function (e) {  
                        res(e.target.result);
                    }
                    reader.readAsDataURL(document.getElementById('inputS6-2-2').files[0]);
                });
            }
        },
        projectsTotal: function () { try { return countProjects - 1 } catch (e) { return 0 } }
    },
    hobbies: {
        hobby1: {
            hobbyDesc: function () { try { return document.getElementById('inputS7-1').value } catch (e) { return '' } }
        },
        hobby2: {
            hobbyDesc: function () { try { return document.getElementById('inputS7-2').value } catch (e) { return '' } }
        },
        hobby3: {
            hobbyDesc: function () { try { return document.getElementById('inputS7-3').value } catch (e) { return '' } }
        }
    },
    links: {
        linkCodepen: function () { try { return 'codepen.io/' + document.getElementById('inputS8-1').value } catch (e) { return '' } },
        linkGitHub: function () { try { return 'github.com/' + document.getElementById('inputS8-2').value } catch (e) { return '' } },
        linkLinkedIn: function () { try { return 'linkedin.com/' + document.getElementById('inputS8-3').value } catch (e) { return '' } }
    }
};

//getting data for the graph;
$(document).ready(async function () {
    if (await JarvisCheckLogin()) {
        let graphData = JSON.parse(await JarvisSkills());

        var ctx = $("#skillChart");
        var data = {
            labels: graphData.data.labels,
            datasets: [{
                label: "JARVIS DATA",
                backgroundColor: "rgba(	0, 5, 99,0.8)",
                data: graphData.data.thisWeek
            }]
        };

        var options = {
            elements: {
                point: {
                    radius: 0
                }
            },
            legend: {
                display: false
            },
            scale: {
                angleLines: {
                    color: 'rgba(0,0,0,1)',
                },
                gridLines: {
                    color: 'rgba(0,0,0,.1)',
                },
                pointLabels: {
                    fontColor: '#000',
                    fontFamily: 'Merriweather',
                    fontSize: 12
                },
                ticks: {
                    min: 0,
                    stepSize: 10,
                    display: false
                }
            },
            tooltips: {
                enabled: false
            }
        };
        new Chart(ctx, {
            type: 'radar',
            data: data,
            options: options
        });
    }
});

$('#topbarIcon').attr('draggable', false);
$('#BIT-LogoCV').attr('draggable', false);
$('#savedIcon').attr('draggable', false);