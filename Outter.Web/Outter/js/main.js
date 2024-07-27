
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
document.querySelector('.clickable-div').addEventListener('click', function() {
  const link = this.getAttribute('data-link');
  if (link) {
    window.location.href = link;
  }
});


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

// Project
let slideIndex = 0;
const lightbox = document.getElementById('lightbox');
const images = document.querySelectorAll('.collage img');
const slides = document.querySelectorAll('.lightbox-content img');

images.forEach((img, index) => {
    img.addEventListener('click', () => {
        openLightbox(index);
    });
});

function openLightbox(index) {
    lightbox.style.display = 'block';
    showSlides(slideIndex = index);
}

function closeLightbox() {
    lightbox.style.display = 'none';
}

function showSlides(index) {
    slides.forEach((slide, i) => {
        slide.style.display = 'none';
        if (i === index) {
            slide.style.display = 'block';
        }
    });
}

function plusSlides(n) {
    slideIndex += n;
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    } else if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    showSlides(slideIndex);
}

document.querySelector('.close').addEventListener('click', closeLightbox);
document.querySelector('.prev').addEventListener('click', () => plusSlides(-1));
document.querySelector('.next').addEventListener('click', () => plusSlides(1));

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});
