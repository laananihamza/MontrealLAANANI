let rTop = document.querySelector(".fa-chevron-up");


rTop.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",

    });
};





let clikLink = document.querySelector("#link");
let menu = document.querySelector("#menu");

clikLink.addEventListener("click", readMore);

function readMore() {
    if (clikLink.className == "link") {
        menu.style.display = "block";
        clikLink.className = "link hidden";
    } else if (clikLink.className = "link hidden") {
        menu.style.display = "none";
        clikLink.className = "link";
    }
}


let face = document.getElementById("fb");
let twitter = document.getElementById("tw");
let telegram = document.getElementById("te");
let snap = document.getElementById("sn");

face.addEventListener("click", function () {
    window.open("https://www.facebook.com/", "_blank")
})
twitter.addEventListener("click", function () {
    window.open("https://twitter.com/home", "_blank", "width=768, height= 1280, top=200, left= 350")
})


let x = document.querySelector(".icon")
function change() {
    x.classList.toggle("change");
}
