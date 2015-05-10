ar bio = {
	"name": "Douglas Edge",
	"role": "Web Developer",
	"contacts": {
			"mobile": "650-555-5555",
			"email": "allsmilesnnc@gmail.com",
			"github": "allsmilesnnc",
			"twitter": "@johndoe",
			"location": "Charlotte"
				  },
	"welcomeMessage" : "lorem ipsum dolor amet etc etc etc.",
	"skills": ["awesomeness", "delivering things", "cryogenic sleep",
				"saving the universe", "HTML", "CSS",
				"JavaScript", "managing people", "analyzing data",
				"communicating with others", "organization", "listening"],
	"bioPic": "images/fry.jpg"
		   }


bio.display = function() {


var formattedName = HTMLheaderName.replace("%data%", bio["name"]);

var formattedRole = HTMLheaderRole.replace("%data%", bio["role"]);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts").append(formattedMobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts").append(formattedEmail);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").append(formattedGithub);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedLocation);

var formattedBioPic = HTMLbioPic.replace("%data%", bio["bioPic"]);
	$("#header").append(formattedBioPic);
var formattedWelcomeMessage = HTMLWelcomeMsg.replace("%data%", bio["welcomeMessage"]);
	$("#header").append(formattedWelcomeMessage);

if (bio.skills.length > 0){
 	$("#header").append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
 		$("#skills").append(formattedSkill);
 		formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
 		$("#skills").append(formattedSkill);
 		formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
 		$("#skills").append(formattedSkill);
 		formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
 		$("#skills").append(formattedSkill);
 		formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
 		$("#skills").append(formattedSkill);
 		formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);
 		$("#skills").append(formattedSkill);
 		formattedSkill = HTMLskills.replace("%data%", bio.skills[6]);
 		$("#skills").append(formattedSkill);
 		formattedSkill = HTMLskills.replace("%data%", bio.skills[7]);
 		$("#skills").append(formattedSkill);
 		formattedSkill = HTMLskills.replace("%data%", bio.skills[8]);
 		$("#skills").append(formattedSkill);
 		formattedSkill = HTMLskills.replace("%data%", bio.skills[9]);
 		$("#skills").append(formattedSkill);
 		formattedSkill = HTMLskills.replace("%data%", bio.skills[10]);
 		$("#skills").append(formattedSkill);
 		formattedSkill = HTMLskills.replace("%data%", bio.skills[11]);
 		$("#skills").append(formattedSkill);
		}
}

bio.display();

var education = {
	"schools": [
		{
			"name": "Methodist University",
			"location": "Fayetteville, NC, US",
			"degree": "BA",
			"major": ["Computer Science", "Mathematics"],
			"dates": 1997,
			"url": "http://www.methodist.edu/"
		},
		{
			"name": "Liberty University",
			"location": "Lynchburg, VA, US",
			"degree": "Masters",
			"major": ["Business Administration"],
			"dates": 2007,
			"url": "http://www.liberty.edu/"
		}
	],
     "onlineCourses": [
	{
		"title": "JavaScript Syntax",
		"school" : "Udacity",
		"dates" : 2014,
		"url": "http://www.udacity.com/course/ud804"
	}

	]
 }

education.display = function() {

	for (school in education.schools){
		$('#education').append(HTMLschoolStart);
	var formattedSchoolName = HTMLschoolName.replace('%data%', education.schools[school].name);
	var formattedSchoolDegree = HTMLschoolDegree.replace('%data%', education.schools[school].degree);
		$('.education-entry:last').append(formattedSchoolName);
		$('.education-entry:last').append(formattedSchoolDegree);
	var formattedSchoolDates = HTMLschoolDates.replace('%data%', education.schools[school].dates);
		$('.education-entry:last').append(formattedSchoolDates);
	var formattedSchoolLocation = HTMLschoolLocation.replace('%data%', education.schools[school].location);
		$('.education-entry:last').append(formattedSchoolLocation);
	var formattedSchoolMajor = HTMLschoolMajor.replace('%data%', education.schools[school].major);
		$('.education-entry:last').append(formattedSchoolMajor);
		}

	for (online in education.onlineCourses) {
		$('#education').append(HTMLschoolStart);
		$('.education-entry:last').append(HTMLonlineClasses);
	var formattedOnlineTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[online].title);
	var formattedOnlineSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[online].school);
		$('.education-entry:last').append(formattedOnlineTitle);
		$('.education-entry:last').append(formattedOnlineSchool);
	var formattedOnlineDates = HTMLonlineDates.replace('%data%', education.onlineCourses[online].dates);
		$('.education-entry:last').append(formattedOnlineDates);
	var formattedOnlineURL = HTMLonlineURL.replace('%data%', education.onlineCourses[online].url);
		$('.education-entry:last').append(formattedOnlineURL);
		}

}

education.display();

var work = {
	"jobs": [
	{
		"employer": "AT&T",
		"title": "Network Manager",
		"location": "Charlotte, NC",
		"dates": "April 2005 - Future",
		"description": "Supervisor in the Network Reliablity Center"
	},
	{
		"employer": "AT&T",
		"title": "Technician",
		"location": "Charlotte, NC",
		"dates": "September 2000 - April 2005",
		"description": "Technician in the Network Reliablity Center"
	}

	]
}

work.display = function() {
	for (job in work.jobs){
	// create new div for work experience
	$("#workExperience").append(HTMLworkStart);
	// concat employer and title
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

	var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);


	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);

	}

}

work.display();


var projects = {
	"projects": [
	{
		"title": "Sample Project 1",
		"dates": "2014",
		"description": "Here is an example of work and the 1st project that I completed with my Udacity training.",
		"images": [ "images/HTLMNinja.jpg",
					"images/mug.jpg"
		]
	}


	]
}

projects.display = function() {


	for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
 			$(".project-entry:last").append(formattedTitle);

 		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
 			$(".project-entry:last").append(formattedDates);

 		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
			$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
		for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
					$(".project-entry:last").append(formattedImage);
			}
		}

   }
}

projects.display();

//display footer contact information
var footer = {};
footer.display = function() {

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#footerContacts").append(formattedMobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#footerContacts").append(formattedEmail);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#footerContacts").append(formattedGithub);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#footerContacts").append(formattedLocation);
}

footer.display();


function locationizer(work_obj) {
	var locationArray = [];

	for (job in work_obj.jobs) {
		var newLocation = work_obj.jobs[job].location;
		locationArray.push(newLocation);
	}
		return locationArray;
}

//internationalize name function
function inName(name) {
	bio.name = bio.name.trim().split(" ");
	console.log(bio.name);
	bio.name[1] = bio.name[1].toUpperCase();
	bio.name[0] = bio.name[0].slice(0,1).toUpperCase() + bio.name[0].slice(1).toLowerCase();

	return bio.name[0] +" "+bio.name[1];
}
$('#main').append(internationalizeButton);


$("#mapDiv").append(googleMap);

console.log(locationizer(work));

// The following code will display in the console window each click's x and y location on the web page
$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x,y);
});
