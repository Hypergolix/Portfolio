// Open and closes the top navigation menu by switching between the classes

// temporary "classState" boolean (string for now, readability) whether open or closed. 

var classState = false;

var menu = document.getElementById('main01');

$(document).ready(function () {
    $('#menu_icon1').click(function () {
        $(this).toggleClass('open');
        var element = document.getElementById("animateNav");
        var element2 = document.getElementById("animateTxt");
        element.classList.toggle("animation");
        element2.classList.toggle("animate__fadeOut");
        document.getElementById("animateTxt").style.visibility = "visible"; // Not the best implementation - shouldn't cause perf issues
        classState = !classState;
        console.log(classState);
    });
});

var pageName = "";
function loadPage(pageNr) {
    console.log(pageName);
    switch (pageNr) {
        case 0:
            pageName = "Genesis";
            break;
        case 1:
            pageName = "Animation";
            break;
        case 2:
            pageName = "Responsive Nav";
            break;
        default:
            break;
    }
    console.log(pageName);
    console.log(`Project_pages/${pageName}/index.html`);
    // document.getElementById("projectWindow").src = `Project_pages/${pageName}/index.html`;
}

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