// ------------------- ACTIVE Nav LINK ------------------

var nav = document.querySelector("nav");

var nav_links = nav.getElementsByClassName("nav-link");

for (var i = 0; i < nav_links.length; i++) {
   nav_links[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
   });
}
