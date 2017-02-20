var paltess = gete.id("ssr"),
    mm = gete.id("menu"),
    kup = gete.id("keyup"),
    kdw = gete.id("keydw"),
    klt = gete.id("keylt"),
    krt = gete.id("keyrt"),
    khd = gete.id("keyhd"); 
function hideMenu() {
    mm.style.display = "none";
}
hideMenu();

function showMenu (ecx, ecy) {
    var bx = paltess.getBoundingClientRect().left,
        by = paltess.getBoundingClientRect().top;
    mm.style.left  = ecx - bx + "px";
    mm.style.top = ecy - by + "px";
    mm.style.display = "block";
}

paltess.onmousedown = function (event) {
    if (event.button == 2) {
        paltess.oncontextmenu = function (event) {
            event.preventDefault();
            showMenu (event.clientX, event.clientY);
        }
    }
}

eventutil.add(khd, "click", function () {
    hideMenu();
});
eventutil.add(kup, "click", function () {
    var befv = game.value();
    calsc(befv);
    game.down(befv, 3, -1);
    game.random();
    game.color();
});
eventutil.add(kdw, "click", function () {
    var befv = game.value();
    calsc(befv);
    game.down(befv, 0, 1);
    game.random();
    game.color();    
});
eventutil.add(klt, "click", function () {
    var befv = game.value();
    calsc(befv);
    game.right(befv, 3, -1);
    game.random();
    game.color();
});
eventutil.add(krt, "click", function () {
    var befv = game.value();
    calsc(befv);
    game.right(befv, 0, 1);
    game.random();
    game.color();
});