const backToTop = document.getElementById("backToTopButton");

backToTop.addEventListener("click", function() {

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });

});