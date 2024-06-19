
window.transitionToPage = function(href) {
    document.querySelector('body').style.opacity = 0
    setTimeout(function() {
        window.location.href = href
    }, 200)
}

document.addEventListener('DOMContentLoaded', function(event) {
    document.querySelector('body').style.opacity = 1
})

// StickyNavBar
window.onscroll = function() {StickyFunction()};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function StickyFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

// PopUP, Snackbar
function PopUpFunction() {
  var x = document.getElementById("snackbar");
  x.className = "show";

  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);

  PopUpFunction()
}

// Themes

// DarkMode Theme
function DarkModeFunction() {
  var dark = document.body;
  dark.classList.toggle("dark-mode");
}

// LightMode Theme
function LightModeFunction() {
  var light = document.body;
  light.classList.toggle("light-mode");
}

