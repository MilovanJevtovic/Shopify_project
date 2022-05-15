const shortCut = document.getElementById("shortcut");
var a = 0;


window.addEventListener("scroll", scrollFunction);

function scrollFunction() {

    if (window.scrollY < 100) {
        shortCut.style.display = "none";
    } else if (window.scrollY > 100) {
        shortCut.style.display = "block";
    }
}

const closeButton = document.getElementById("iksic-button");

closeButton.addEventListener("click", function() {
    shortCut.style.visibility = "hidden";
})