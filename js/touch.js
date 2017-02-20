//和game.js共同使用
plate.ontouchstart = function (event) {
    event.preventDefault();
    if (toe) {//alert("start");
        var startx = event.touches[0].clientX,
            starty = event.touches[0].clientY,
            touchValue = game.value();
            calsc(touchValue);
        //alert("pos:(" + startx + ", " + starty + ")");
        plate.ontouchend = function (event) {
            var endx = event.changedTouches[0].clientX,
                endy = event.changedTouches[0].clientY,
                disx = endx - startx,
                disy = endy -  starty,
                tanTheta = disy / disx;
            if (tanTheta > 1 || tanTheta < -1) {
                if (disy > 0) {
                    game.down(touchValue, 0, 1);
                } else {
                    game.down(touchValue, 3 , -1);
                }
            } else {
                if (disx < 0) {
                    game.right(touchValue, 3, -1);
                } else {
                    game.right(touchValue, 0, 1);
                }
            }
            game.random();
            game.color();
        }
    } else {
        bgnSay.onclick();
    }
}