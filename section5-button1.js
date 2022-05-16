const button1Drop = document.getElementById("button1");
const button2Drop = document.getElementById("button2");
const button3Drop = document.getElementById("button3");
const button4Drop = document.getElementById("button4");
const list1Drop = document.getElementById("list1");
const list2Drop = document.getElementById("list2");
const list3Drop = document.getElementById("list3");
const list4Drop = document.getElementById("list4");

button1Drop.addEventListener("click", function() {
    if (list1Drop.style.display == "block") {
        list1Drop.style.display = "none";
    } else {
        list1Drop.style.display = "block";
    }
})
button2Drop.addEventListener("click", function() {
    if (list2Drop.style.display == "block") {
        list2Drop.style.display = "none";
    } else {
        list2Drop.style.display = "block";
    }
})
button3Drop.addEventListener("click", function() {
    if (list3Drop.style.display == "block") {
        list3Drop.style.display = "none";
    } else {
        list3Drop.style.display = "block";
    }
})
button4Drop.addEventListener("click", function() {
    if (list4Drop.style.display == "block") {
        list4Drop.style.display = "none";
    } else {
        list4Drop.style.display = "block";
    }
})