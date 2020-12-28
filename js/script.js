var navToggler = document.getElementById("navToggler");
var nav = document.getElementById("site-nav");
var searchIcon = document.getElementById("searchIcon");
var formControl = document.getElementById("form-control");
navToggler.addEventListener('click', function() {
    nav.classList.toggle("navToggle");
    formControl.classList.remove('showSearch');
    navToggler.classList.toggle('toggle');
})
searchIcon.addEventListener('click', function() {
    formControl.classList.toggle('showSearch');
})

function getWindowSize() {
    var w = document.documentElement.clientWidth;
    var h = document.documentElement.clientHeight;
    if (w > 1200) {
        nav.classList.remove('navToggle');
        navToggler.classList.remove('toggle');
    }

}
window.addEventListener("resize", getWindowSize);
getWindowSize();