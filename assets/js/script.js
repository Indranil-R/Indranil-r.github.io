var lastscrollTop = 0;
navbar = document.getElementById("navbar");
window.addEventListener("scroll", function () {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastscrollTop) {
        navbar.style.top = "-20rem";
    } else {
        navbar.style.top = "0";
    }
    lastscrollTop = scrollTop;
})
