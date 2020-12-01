// Open and closes the top navigation menu by switching between the classes

// temporary "classState" boolean (string for now, readability) whether open or closed. 

var classState = false;

var menu = document.getElementById('main01');

$(document).ready(function() {
    $('#menu_icon1').click(function() {
        $(this).toggleClass('open');
        var element = document.getElementById("animateNav");
        element.classList.toggle("animation");
        classState = !classState;
        console.log(classState);
    });
});

// mainElement stores id of main which is main01
// var mainElement = document.getElementById('main01');

// Close the top navigation menu


// When the user clicks anywhere outside of the menu, 

/*
window.onclick = function(event) {
    if (classState == true) {
        if (event.target == menu) {

            menu.style.opacity = '0.8';

        }
    }
}

*/






/*
window.onclick = function(event) {
    if (event.target == mainElement) {
        if (classState == "open") {
            $(this).toggleClass('open');
            var element = document.getElementById("animateNav");
            element.classList.toggle("animation");
            classState = "closed";

        }
    }
}
*/
// This works for now, find better way to keep track of whether menu open rather than storing it as a variable