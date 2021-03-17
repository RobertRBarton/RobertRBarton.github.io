var document;
var displayDropdown=false;

//These set up the navigation bar
document.getElementById("home").onclick = function () {
	location.href = "index.html";
};

document.getElementById("resume").onclick = function () {
	location.href = "resume.html";
};


document.getElementById("ethics").onclick = function () {
	location.href = "ethics.html";
};

document.getElementById("genEd").onclick = function () {
	location.href = "genEdRef.html";
};

document.getElementById("goals").onclick = function () {
	location.href = "future.html";
};

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
	
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
	var content=document.getElementById("myDropdown")
  if (content.style.display=="inline-block") {
    content.style.display="none";
  }else if(event.target.id=="projects"){
	document.getElementById("myDropdown").style.display="inline-block";
  }
}

function createFromHTML(htmlString) {

    let temp = document.createElement("template");
    temp.innerHTML = htmlString.trim();

    return temp.content.firstElementChild.innerHTML;
}