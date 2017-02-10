var bio = {
    "name": "Shubham Sapra",
    "role": "Front End Developer",
    "contacts": {
        "mobile": "8437138412",
        "email": "shubham.sapra97@gmail.com",
        "github": "Shubhamsapra",
        "location": "Hoshiarpur"
    },
    "welcomeMessage": "Welcome to my online Resume",
    "skills": ["awesomn", "witty", "front-end-developer", "coder", "creative"],
    "biopic": "images/ppp.jpg"
};

var education = {
    "schools": [{
        "name": "Chitkara University",
        "location": "Rajpura",
        "majors": ["CS" , "ME"],
        "dates": "Feb-2019",
        "degree": "B.E."}
     ],
    "onlineCourses": [{
        "title": "JavaScript Syntax",
        "dates": "Aug-2017 - FUTURE",
        "school": "Udacity",
        "url": "https://classroom.udacity.com/me"
    }, {
        "title": "Python Syntax",
        "dates": "Aug-2018 - FUTURE",
        "school": "Udacity",
        "url": "https://classroom.udacity.com/me"
    }]
};

var projects = {
    "projects": [{
        "title": "Language Transliteration",
        "dates": "Aug-2016",
        "description": "this project was all about language transliteration in which we have to convert one language into another..it was really a tough job but i got to practice python while working with the project. so i know basics of python now",
        "images": ["images/trans.jpg","images/trans2.jpg"]
    }]
};

var work = {
    "jobs": [{
        "employer": "Pizza Hut",
        "title": "Pizza Boy",
        "dates": "Jan-2016",
        "description": "that was the time i was struggling and i has to be a pizza boy. my job timings were from 9am to 8 pm ... that was such such a tiring job..but i needed money that time but then coding came to my life and everything changed..",
        "location": "Jalandhar"
    }, {
        "employer": "Udacity",
        "title": "front end developer",
        "dates": " Feb-2019 - FUTURE",
        "description": "being a front end developer is great relief ..i have to create , update websites which is verymuch satisfying and fun-making . my job at udacity is like a nightmare that will one day will come to life.. love coding!!",
        "location": "US"
    }]
};

bio.display = function() {

    var formattedname = HTMLheaderName.replace("%data%", bio.name);
    var formattedrole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedname+formattedrole);

    var mobo = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts:last").append(mobo);

    var email = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts:last").append(email);

    var github = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts:last").append(github);

    var loc = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts:last").append(loc);

    var welcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(welcome);

    var formatpic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formatpic);

    mobo = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#footerContacts:last").append(mobo);

    email = HTMLemail.replace("%data%", bio.contacts.email);
    $("#footerContacts:last").append(email);

    github = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#footerContacts:last").append(github);

    loc = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#footerContacts:last").append(loc);

    $("#header").append(HTMLskillsStart);
    for(var skills=0; skills<bio.skills.length; skills++){
        var snoop = HTMLskills.replace("%data%", bio.skills[skills]);
        $("#skills").append(snoop);
    }
};
bio.display();

work.display = function() {
    for (var job = 0; job < work.jobs.length; job++) {
        $("#workExperience").append(HTMLworkStart);

        var format_emp = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var format_title = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = format_emp + format_title;

        $(".work-entry:last").append(formattedEmployerTitle);

        var formatdates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formatdates);

        var formatdescrip = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formatdescrip);

        var formatloc = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formatloc);
    }
};
work.display();

projects.display = function() {
    for (var pro = 0; pro < projects.projects.length; pro++) {
        $("#projects").append(HTMLprojectStart);

        var formattitle = HTMLprojectTitle.replace("%data%", projects.projects[pro].title);
        $(".project-entry:last").append(formattitle);

        var formatdates = HTMLprojectDates.replace("%data%", projects.projects[pro].dates);
        $(".project-entry:last").append(formatdates);

        var formatdescrip = HTMLprojectDescription.replace("%data%", projects.projects[pro].description);
        $(".project-entry:last").append(formatdescrip);

        for(var images=0; images<projects.projects[pro].images.length; images++){
          var formatimg = HTMLprojectImage.replace("%data%", projects.projects[pro].images[images]);
          $(".project-entry:last").append(formatimg);
        }
    }
};
projects.display();

education.display = function() {
    for (var sch = 0; sch < education.schools.length; sch++) {
        $("#education").append(HTMLschoolStart);

        var formatsch = HTMLschoolName.replace("%data%", education.schools[sch].name);

        var formatdeg = HTMLschoolDegree.replace("%data%", education.schools[sch].degree);
        $(".education-entry:last").append(formatsch + formatdeg);

        var formatdate = HTMLschoolDates.replace("%data%", education.schools[sch].dates);
        $(".education-entry:last").append(formatdate);

           var formatmaj = HTMLschoolMajor.replace("%data%", education.schools[sch].majors);
           $(".education-entry:last").append(formatmaj);
        var formatloc = HTMLschoolLocation.replace("%data%", education.schools[sch].location);
        $(".education-entry:last").append(formatloc);

    }

    $(".education-entry:last").append(HTMLonlineClasses);

    for (var cor = 0; cor < education.onlineCourses.length; cor++) {

        var formattitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[cor].title);
        $(".education-entry:last").append(formattitle);

        var formatdates = HTMLonlineDates.replace("%data%", education.onlineCourses[cor].dates);
        $(".education-entry:last").append(formatdates);

        var formatschool = HTMLonlineSchool.replace("%data%", education.onlineCourses[cor].school);
        $(".education-entry:last").append(formatschool);

        var formaturl = HTMLonlineURL.replace("%data%", education.onlineCourses[cor].url);
        $(".education-entry:last").append(formaturl);
    }
};
education.display();

$("#mapDiv").append(googleMap);
