function toggleTopMenu() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
const hamburger=document.getElementById("hamburger");
hamburger.addEventListener("click", toggleTopMenu);