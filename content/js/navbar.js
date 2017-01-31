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
	for (var i = 0; i < navLinks.length; i++) {

		if (window.location.href === navLinks[i].href) {
			console.log(navLinks[i].href);
			navLinks[i].classList.add("currentLink");
			return;
		}
	}
};

window.addEventListener('load', highlightCurrentLink);
