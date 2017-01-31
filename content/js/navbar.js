function openNav() {
  var x = document.getElementById("navbar");
  if (x.className === "nav") {
      x.className += " responsive";
  } else {
      x.className = "nav";
  }
}

var highlightCurrentLink = function() {
	var navLinks = document.querySelectorAll(".nav li a:not(.logo)");
    var navPath = window.location.origin + "/" + 
                  window.location.pathname.split("/")[1];
    if (!navPath.endsWith("/")) {
        navPath += "/";
    }
    for (var i = 0; i < navLinks.length; i++) {
		if (navPath === navLinks[i].href) {
            if (navLinks[i].className == "") {
                navLinks[i].classList.add("currentLink");
            }
            return;
		}
	}
};

window.addEventListener('load', highlightCurrentLink);
