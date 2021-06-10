

(function () {

    var pts = [];

    space.add({

        // init with 500 random points 
        start: (bound) => { pts = Create.distributeRandom(space.innerBound, 500); },

        animate: (time, ftime) => {

            let r = Math.abs(space.pointer.x - space.center.x) / space.center.x * 150 + 70;
            let range = Circle.fromCenter(space.pointer, r);
            pts.rotate2D(0.0005, space.center);
            // check if each point is within circle's range
            for (let i = 0, len = pts.length; i < len; i++) {
                if (Circle.withinBound(range, pts[i])) {
                    form.point(pts[i], 1);
                } else {
                    form.fillOnly("#fff").point(pts[i], 0.5);
                }

            }
        }

    });

    space.bindMouse().bindTouch().play();

})();