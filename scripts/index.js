function init() {
    // bind a function to happen when 
    // the user presses a key in the search box
    document.getElementById("query").addEventListener("keypress", onkey)
    clickSearch(); // shows empty search message
}
init();