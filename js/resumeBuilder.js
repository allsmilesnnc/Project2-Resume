var bio = {
 "name": "Douglas Edge",
 "role": "Web Developer",
 "contacts": {
  "mobile": "650-555-5555",
  "email": "allsmilesnnc@gmail.com",
  "github": "allsmilesnnc",
  "githubURL": "https://github.com/rohitcricket?tab=repositories",
  "twitter": "@johndoe",
  "twitterURL": "https://twitter.com/johndoe",
  "linkedin": "Douglas Edge",
  "linkedinURL": "https://www.linkedin.com/pub/douglas-edge/b0/4b3/349",
  "location": "Charlotte, NC"
  },

 "welcomeMessage": "Hi! Hire me! <br> The folks at Udacity have taught me well!",
 "skills": ["awesomeness,", "delivering things,", "cryogenic sleep,",
				"saving the universe,", "HTML,", "CSS,",
				"JavaScript,", "managing people,", "analyzing data,",
				"communicating with others,", "organization,", "listening"],

 "bioPic": "images/fry.jpg"
}


var work = {
	"jobs": [
		{
			"employer": "at&t",
			"title": "Network Manager",
			"location": "Charlotte, NC",
			"dates": "April 2005 - Future",
			"description": "Manager in the Network Reliablity Center"
		},

		{
			"employer": "BellSouth",
			"title": "Technician",
			"location": "Charlotte, NC",
			"dates": "September 2000 - April 2005",
			"description": "Technician in the Network Reliablity Center"

		},

		{
			"employer": "CleanSweep",
			"title": "Systems Administrator",
			"location": "Kannapolis, NC",
			"dates": "July 1997 - September 2000",
			"description": "Responsible for all computing systems"

		}

	]
}

var projects = {
	"projects": [
		{
			"title": "Portfolio Site",
			"dates": "2014",
			"description": "Here is an example of my first work completed with Udacity training.",
			"images": [ "images/HTLMNinja.jpg"
				
			]
		},

		{
			"title": "Orange Udacity Mug",
			"dates": "2014",
			"description": "Here is an example of the 1st project that I completed with my Udacity training.",
			"images": [ "images/mug.jpg"
			]
		}

	]
}


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

	"onlineCourse": [
		{
			"title": "JavaScript Syntax",
			"school": "Udacity",
			"dates": 2014,
			"url" : "http://wwww.udacity.com/ud804"
	
		},

		{
			"title": "Programming for Everybody (Python)",
			"school": "coursera",
			"dates": 2014,
			"url" : "https://www.coursera.org/course/pythonlearn"

		}

	]
} 

// Formatting the headers and topContacts


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedImage = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedWelcomeMsg = HTMLWelcomeMsg.replace('%data%', bio.welcomeMessage);
var formattedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter).replace("#",bio.contacts.twitterURL);
var formattedlinkedin = HTMLlinkedin.replace("%data%", bio.contacts.linkedin).replace("#",bio.contacts.linkedinURL);
var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github).replace("#",bio.contacts.githubURL);
var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);


$("#header").prepend(formattedImage);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$('#header').append(formattedWelcomeMsg);
$("#topContacts").append(formattedmobile);
$("#topContacts").append(formattedemail);
$("#topContacts").append(formattedtwitter);
$("#topContacts").append(formattedlinkedin);
$("#topContacts").append(formattedgithub);
$("#topContacts").append(formattedlocation);

// Display Skills

if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills.join(" "));
    $("#skills").append(formattedSkill);
}



// Display Work Experience
function displayWork() {

	for (job in work.jobs) {

    $("#workExperience").append(HTMLworkStart);
    var formattedworkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedworkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    formattedworkTitle = formattedworkEmployer + formattedworkTitle;
    $(".work-entry:last").append(formattedworkTitle);

    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);

    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);

    }
}

displayWork();

// Display Projects

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


// Display Education

function displayEducation () {
  
   for (school in education.schools) {
	   $("#education").append(HTMLschoolStart);
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

}

displayEducation(); 

// Display Online Classes

function displayonlinecourses() { 

  $(".education-entry:last").append(HTMLonlineClasses);
  for (course in education.onlineCourse) {

	  var formattedonlineTitle =  HTMLonlineTitle.replace("%data%", education.onlineCourse[course].title);
	  $(".education-entry:last").append(formattedonlineTitle);
	  
	  var formattedonlineDates =  HTMLonlineDates.replace("%data%", education.onlineCourse[course].dates);
	  $(".education-entry:last").append(formattedonlineDates);

	  var formattedonlineSchool =  HTMLonlineSchool.replace("%data%", education.onlineCourse[course].school);
	  $(".education-entry:last").append(formattedonlineSchool);
	   
	  var formattedonlineUrl =  HTMLonlineURL.replace("%data%", education.onlineCourse[course].url);
	  $(".education-entry:last").append(formattedonlineUrl);

  }	
			 
}

displayonlinecourses();

// Display Footer Contact Information

$("#footerContacts").append(formattedmobile);
$("#footerContacts").append(formattedemail);
$('#footerContacts').append(internationalizeButton);
$("#footerContacts").append(formattedtwitter);
$("#footerContacts").append(formattedlinkedin);
$("#footerContacts").append(formattedgithub);

// Other Sections


// The following code will display in the console window each click's x and y location on the web page

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);

});

// Internationalize Name Function

function inName(name) {
	bio.name = bio.name.trim().split(" ");
	console.log(bio.name);
	bio.name[1] = bio.name[1].toUpperCase();
	bio.name[0] = bio.name[0].slice(0,1).toUpperCase() + bio.name[0].slice(1).toLowerCase();

	return bio.name[0] +" "+bio.name[1];
}

// Map Section

function locationizer(work_obj) {
   var locationArray = [];

   for (job in work_obj.jobs) {
   	var newLocation = work_obj.jobs[job].location;
   	locationArray.push(newLocation);
   }

   return locationArray;

}

$("#mapDiv").append(googleMap);
