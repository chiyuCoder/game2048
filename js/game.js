var plate = gete.id("four2"),
    dishes = gete.tag("li", "four2"),
    bgnBtn = gete.id("start"),
    bgnSay = gete.tag("p", "start")[0],
    sc = gete.id("sc"),
    textNum = [],
    toe = false,
    game = {
        value: function () {
            var twod = [];
            for (var x = 0; x < 4; x ++) {
                twod[x] = new Array();
                for (var y = 0; y < 4; y ++) {
                    for (var z = 0; z < 16; z ++) {
                        if (x == Math.floor(z / 4) && y == z %4) {
                            if (dishes[z].innerText != "" && dishes[z].innerText != null) {
                                twod[x][y] = parseInt(dishes[z].innerText);
                            } else {
                                twod[x][y] = 0;
                            }
                        }
                    }
                }
            }
            return twod;
        },
        init: function () {
            for (var divx = 0; divx < 16; divx ++) {
                dishes[divx].innerText = "";
            }
        }, 
        color: function () {           
            game.cooren();
            for (var clr = 0; clr < dishes.length; clr ++) {
                dishes[clr].removeAttribute("class");
                if (dishes[clr].innerText != "" && dishes[clr].innerText != null) {
                    dishes[clr].setAttribute("class","numEq" + dishes[clr].innerText);
                }
            }
        },
        start: function () {
            game.init();
            var rand1 = Math.floor(Math.random() * 8),
                rand2 = Math.floor(Math.random() * 16);
            if (rand1 == rand2) {
                dishes[rand1].innerText = "2";
                dishes[rand1 + 4].innerText = "4";
            } else {
                dishes[rand1].innerText = "4";
                dishes[rand2].innerText = "2";
            }
            toe = true;
        },
        end: function () {            
            bgnBtn.style.display = "block";
            bgnSay.innerText = "Continue";
            toe = false;
        },        
        cooren: function () {
            var chk = 0;
            for (var sz = 0; sz < 16; sz ++) {
                if (dishes[sz].innerText == "" || dishes[sz].innerText == null) {
                    chk += 0;
                } else {
                    chk += 1;
                }       
            }
            if (chk == 16) {
                console.log("full");
                var toEnd = true,
                    chkva = game.value();
                if (chkva[3][3] == chkva[3][2] || chkva[3][3] == chkva[2][3]) {
                    toEnd = false ;
                } else {
                    for (var dx = 0; dx < 3; dx ++) {
                       if (chkva[dx][3] == chkva[dx + 1][3] || chkva[3][dx] == chkva[3][dx + 1]) {
                           toEnd = false;
                       } else {
                           for (var dy = 0; dy < 3; dy ++) {
                               if (chkva[dx][dy] == chkva[dx][dy + 1] || chkva[dx][dy] == chkva[dx + 1][dy]) {
                                   toEnd = false;
                               }
                           }
                       }      
                    }
                }
                if (toEnd) {
                    game.end();
                }
            }
        },
        random: function () { 
            var sx10 = Math.floor(Math.random() * 16),
                sx2 = Math.floor(Math.random() * 2),
                sx2V = [2, 4];
            if (dishes[sx10].innerText == "" || dishes[sx10].innerText == null) {
                dishes[sx10].innerText = sx2V[sx2];
            } else {
                game.random();
            }
        },
        calflow: function (arr) {
            if (arr[3] == arr[2]) {
                if (arr[2] == 0) {
                    if (arr[1] == arr[0]) {
                        return [0, 0, 0, 2 * arr[0]];
                    } else {
                        if (arr[1] == 0) {
                            return [0, 0, 0, arr[0]];
                        } else {
                            return [0, 0, arr[0], arr[1]];
                        }
                    }
                } else {
                    if (arr[1] == arr[0]) {
                        return [0, 0, 2 * arr[1], 2 * arr[2]];
                    } else {
                        if (arr[1]== 0) {
                            return [0, 0, arr[0], 2 * arr[2]];
                        } else {
                            return [0, arr[0], arr[1] , 2 * arr[2]];
                        }
                    }
                }
            } else {
                if (arr[2] == 0) {
                    if (arr[3] == arr[1]) {
                        return [0, 0, arr[0], 2 * arr[1]];
                    } else {
                        if (arr[1] == 0) {
                            if (arr[3] == arr[0]) {
                                return [0, 0, 0, 2 * arr[0]];
                            } else {
                                return [0, 0, arr[0], arr[3]];
                            }
                        } else {
                            if (arr[1] == arr[0]) {
                                return [0, 0, 2 * arr[0], arr[3]];
                            } else {
                                return [0, arr[0], arr[1], arr[3]];
                            }
                        }
                    }
                } else {//arr[2] != 0
                    if (arr[3] == 0) {
                        if (arr[2] == arr[1]) {
                            return [0, 0, arr[0], 2 * arr[1]];
                        } else {
                            if (arr[1] == arr[0]) {
                                return [0, 0, 2 * arr[1], arr[2]];
                            } else {
                                if (arr[1] == 0) {
                                    if (arr[0] == arr[2]) {
                                        return [0, 0, 0, 2 * arr[0]];
                                    } else {
                                        return [0, 0, arr[0], arr[2]];
                                    }
                                } else {
                                    return [0, arr[0], arr[1], arr[2]];
                                }
                            }
                        }
                    } else {//arr[2] != 0 , arr[2] != arr[3], arr[3] != 0
                        if (arr[2] == arr[1]) {
                            return [0, arr[0], 2 * arr[1], arr[3]];
                        } else {
                            if (arr[1] == arr[0]) {
                                return [0, 2 * arr[1], arr[2], arr[3]];
                            } else {
                                if (arr[1] == 0) {
                                    if (arr[2] == arr[0]) {
                                        return [0, 0, 2 * arr[2], arr[3]];
                                    } else {
                                        return [0, arr[0], arr[2], arr[3]];
                                    }
                                } else {
                                    return [arr[0], arr[1], arr[2], arr[3]];
                                }
                            }
                        }
                    }
                }
            }
        },
        recode: function (code) {
            for (var cox = 0; cox < 4; cox++) {
                for (var coy = 0; coy < 4; coy++) {
                    for (var coz = 0; coz < 16; coz ++) {
                        if (coz == 4 * cox + coy) {
                            if (code[cox][coy] == 0) {
                                dishes[coz].innerText = "";
                            } else {
                                dishes[coz].innerText = code[cox][coy];
                            }
                        }
                    }
                }
            }
        },
        right: function (bef, a, b) {
            var resultbef = [],
                resbef = [],
                myre = [];
            for (var dovzx = 0; dovzx < 4; dovzx ++) {
                resultbef[dovzx] = [];
                for (var dovzy = 0; dovzy < 4; dovzy ++) {
                    resultbef[dovzx][dovzy] = bef[dovzx][a + b * dovzy];
                }
                resbef[dovzx] = game.calflow(resultbef[dovzx]);
            }
            for (var rezx = 0; rezx < 4; rezx ++) {
                myre[rezx] = [];
                for (var rezy = 0; rezy < 4; rezy ++) {
                    myre[rezx][rezy] = resbef[rezx][a + b * rezy]; 
                }
            }
            game.recode(myre);
        },
        down: function (bef, a, b) {
            var upv = [],
                upva = [],
                upvb = [];
            for (var upvx = 0; upvx < 4; upvx ++) {
                upv[upvx] = [];
                for (var upvy = 0; upvy < 4; upvy ++) {
                    upv[upvx][upvy] = bef[a + b * upvy][upvx];
                }                
                upva[upvx] = game.calflow(upv[upvx]);
            }
            for (var upvzx = 0; upvzx < 4; upvzx ++) {
                upvb[upvzx] = [];
                for (var upvzy = 0; upvzy < 4; upvzy ++) {
                    upvb[upvzx][upvzy] = upva[upvzy][a + b * upvzx];
                }
            }
            game.recode(upvb);
        }
    };
function calsc(preva) {
    var score = 0;
    for (var scx = 0; scx < 4; scx ++ ) {
        for (var scy = 0;scy < 4; scy ++) {
            score += preva[scx][scy];
        }
    }
    if (score <  10) {
        score = "000" + score;
    } else {
        if (score < 100) {
            score = "00" + score;
        } else {
            if (score < 1000) {
                score = "0" + score;
            } else {
                score += 0;
            }
        }
    }
    sc.innerText = score;
}

window.onload = function () {
    bgnBtn.style.display = "block";
    eventutil.add(bgnSay, "click", function () {
        bgnBtn.style.display = "none";
        game.start();
        game.color();
    });
    document.onkeydown = function (event) {
        event = event || window.event;
        keynum = event.keyCode || event.which;
        var befv = game.value();
        calsc(befv);
        if (toe) {
            switch (keynum) {
                case 87:
                case 38://up
                   // console.log("up:" + "\n" + befv);
                    event.preventDefault();
                    game.down(befv, 3, -1);
                    game.random();
                    game.color();
                    break;
                case 68:
                case 39://right
                    //console.log("rt:" + "\n" + befv);
                    event.preventDefault();
                    game.right(befv, 0, 1);
                    game.random();
                    game.color();
                    break;
                case 65:
                case 37://left
                   // console.log("lf:" + "\n" + befv);
                    event.preventDefault();
                    game.right(befv, 3, -1);
                    game.random();
                    game.color();
                    break;
                case 83:
                case 40://down
                    //console.log("dw:" + "\n" + befv);
                    event.preventDefault();
                    game.down(befv, 0, 1);
                    game.random();
                    game.color();
                    break;
                default:
                    console.log(keynum);
            }
        }
    }
}
