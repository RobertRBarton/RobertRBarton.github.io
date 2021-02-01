var document;

//These set up the navigation bar
document.getElementById("home").onclick = function () {
	location.href = "index.html";
};

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function createFromHTML(htmlString) {

    let temp = document.createElement("template");
    temp.innerHTML = htmlString.trim();

    return temp.content.firstElementChild.innerHTML;
}