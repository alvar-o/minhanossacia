document.addEventListener("DOMContentLoaded", function() {
  var menuButton = document.querySelector(".toggle-nav");
  var header = document.querySelector("header");
  var navMenu = document.querySelector(".nav-menu");

  menuButton.addEventListener('click', function() {
    header.classList.remove('no-animation');
    header.classList.toggle('expanded');
    navMenu.classList.toggle('expanded');
  });
});
