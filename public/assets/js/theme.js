/*
Template Name: WebAi - AI Startup & Technology Landing Page HTML Template
Version: 1.0
Author: coderthemes
Email: support@coderthemes.com
File: theme.js
*/

// Lucid Icons
lucide.createIcons();

// Animation on Scroll
AOS.init();

// Sticky Navbar
function windowScroll() {
  const navbar = document.getElementById("navbar-sticky");
  if (navbar) {
    if (
      document.body.scrollTop >= 50 ||
      document.documentElement.scrollTop >= 50
    ) {
      navbar.classList.add("nav-sticky");
    } else {
      navbar.classList.remove("nav-sticky");
    }
  }
}
window.addEventListener("scroll", (ev) => {
  ev.preventDefault();
  windowScroll();
});

// Navbar Active Class
var spy = new Gumshoe("#navbar-navlist a", {
  // Active classes
  // navClass: 'active', // applied to the nav list item
  // contentClass: 'active', // applied to the content
  offset: 80,
});

// Back To Top Start
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  var mybutton = document.getElementById("back-to-top");
  if (mybutton != null) {
    if (
      document.body.scrollTop > 500 ||
      document.documentElement.scrollTop > 500
    ) {
      mybutton.classList.add("opacity-100");
      mybutton.classList.remove("opacity-0");
    } else {
      mybutton.classList.add("opacity-0");
      mybutton.classList.remove("opacity-100");
    }
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
