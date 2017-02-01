function addPattern() {
  var body = document.body;
  var path = window.location.pathname;
    if (path === "/") {
        body.className = "pattern";
    }
    else {
        body.className = ""
    }
}

window.addEventListener('load', addPattern);
