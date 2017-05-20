
/*
This is empty on purpose! Your code to build the resume will go here.
*/

var bio={
  name: "Robin John",
  role: "Front-end(eavour)",
  contact: {
    email: "robin.john@hotmail.com",
    github: "cyniborg",
    location: "Antwerp",
    mobile: "0488.88.63.74"
  },
  skills: ["HTML", "CSS", "JavaScript", "Web design"],
  pictureURL:"http://vignette3.wikia.nocookie.net/simpsons/images/5/5e/Stewie_griffin_by_mighty355-d7u8ws6.png/revision/latest?cb=20161111175109",
  welcomeMessage: "I may not believe in myself but I believe in what I do."
};

var education={
  school:[{
    HTMLschoolName:"Karnataka State Open University",
    HTMLschoolDegree:"Masters in Business Administration",
    HTMLschoolLocation:"Jaipur (Indië)",
    HTMLschoolDates:"2012-2013",
    HTMLschoolMajor: "International Business"
  }
],
online: [
  {
  HTMLonlineTitle:"Marketing in a Digital World",
  HTMLonlineSchool:"University of Illinois",
  HTMLonlineDates:"November 2016",
  HTMLonlineURL:""}
]

};
var work={
  title: "Project Manager",
  employer:"App and Web Technologies",
  dates:"januari 2011 tot november 2013",
  location:"Jaipur, Rajasthan, Indië",
  description:"project manager, communicatie-verantwoordelijke, UI/UX, front-end developer, digitale marketing"
};
var project={
  title:"OVOE world",
  date:"January 2017",
  description:"Front end design and development for the website.",
  image:"https://www.ovoe.world/dist/img/mini-logo.png"
};

function replaced(helper, value){
  var replaced = helper.replace("%data%", value);
  return replaced;
};
var formattedName=replaced(HTMLheaderName, bio.name);
var role = replaced(HTMLheaderRole, bio.role);
var mobile = replaced(HTMLmobile, bio.contact.mobile);
var github = replaced(HTMLgithub, bio.contact.github);
var loca = replaced(HTMLlocation, bio.contact.location);
var email = replaced(HTMLemail, bio.contact.email);
var pictureURL = replaced(HTMLbioPic, bio.pictureURL);
//var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(role);
$("#header").prepend(formattedName);
$("#topContacts").append(email);
$("#topContacts").append(mobile);
$("#topContacts").append(github);
$("#topContacts").append(loca);
$("#header").prepend(pictureURL);

if (bio.skills.length>0){


  $("#header").append(HTMLskillsStart);
  bio.skills.forEach(function(element){
    var skills = replaced(HTMLskills, element);
    $("#skills").append(skills);
  });

}

if (education.length>0){
  $("#education").append(HTMLschoolStart);
  for(list in education){
    if (education[list].length>0){
      for(var i=0; i<education[list].length; i++){
        for (desc in education[list][i]){
          var value = education[list][i][desc];
          var item = replaced(desc, value);
          $("#education").append(item);
          console.log(desc);
        }
      }
    }
  }
  // for(var i=0; i<education.school.length; i++){
  //   education.school[i].forEach(function(element, index){
  //     var edu=replaced(index, element);
  //     $(".education-entry").append(edu);
  //   })
  // }
};
