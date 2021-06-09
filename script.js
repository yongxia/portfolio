Pts.namespace(window);

var space = new CanvasSpace("#canvas");
space.setup({ bgcolor: "#123" });
var form = space.getForm();

(function () {

    var pts = [];

    space.add({

        // init with 500 random points 
        start: (bound) => { pts = Create.distributeRandom(space.innerBound, 800); },

        animate: (time, ftime) => {

            let r = Math.abs(space.pointer.x - space.center.x) / space.center.x * 150 + 70;
            let range = Circle.fromCenter(space.pointer, r);
            pts.rotate2D(0.0005, space.center);

            // check if each point is within circle's range
            for (let i = 0, len = pts.length; i < len; i++) {
                if (Circle.withinBound(range, pts[i])) {
                    form.fillOnly("#fff").point(pts[i], 1);
                } else {
                    form.fillOnly("#fff").point(pts[i], 0.5);
                }

            }
        }

    });

    space.bindMouse().bindTouch().play();

})();

var names = ["name-y", "name-o", "name-n", "name-g"];
var colors = ["#ff2d5d", "#42dc8e", "#2e43eb", "#ffe359"];

function shuffle(array) {
    let m = array.length, t, i;

    while (m) {
        i = Math.floor(Math.random() * m--);
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }

    return array;
}

function changeColor(id, color) {
    document.getElementById(id).style.color = color;
}

var slideIndex = 0;
showSlides();
function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex >= slides.length) { slideIndex = 0 }

    slides[slideIndex].style.display = "block";

    setTimeout(showSlides, 2500);
}

window.setInterval(() => {
    let shuffled = shuffle(colors);
    names.forEach((id, index) => changeColor(id, shuffled[index]))
}, 1000);