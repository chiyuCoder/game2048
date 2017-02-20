var gete = {
    id: function(id) {
        return document.getElementById(id);
    },
    cls: function(cls, par) {
        var partag = document.getElementById(par)? document.getElementById(par) : document,
            hisSib = partag.getElementsByTagName("*"),
            hiscls = [],
            him;
        for (him = 0; him < hisSib.length; him++) {
            if (hisSib[him].className == cls) {
                hiscls.push(hisSib[him]);
            }
        }
        return hiscls;
    },
    tag: function (tag, par) {
        var partag = document.getElementById(par) ? document.getElementById(par) : document,
            hisSib = partag.getElementsByTagName(tag);
        return hisSib;
    }
},
    eventutil = {
        add: function (organ, beh, func) {
            if (organ.addEventListener) {
                organ.addEventListener(beh, func, false);
            } else {
                if (organ.attachEvent)  {
                    organ.attachEvent("on" + beh, func);
                } else {
                    organ['on' + beh] = func;
                }
            }
        },
        remove: function (organ, beh, func) {
            if (organ.removeEventListener) {
                organ.removeEventListener(beh, func, false);
            } else {
                if (organ.detachEvent) {
                    organ.detachEvent("on" + beh, func);
                } else {
                    organ['on' + beh] = null;
                }
            }
        },
        getEv: function (event) {
          return event ? event : window.event;  
        },
        rewrite: function (event) {
            if (event.preventDefault) {
                event.preventDefault();
            } else {
                event.returnValue = null;
            }
        },
        refocus: function (event) {
            if (event.stopPropagation) {
                event.stopPropagation();
            } else {
                event.cancelBubble = true;
            }
        }
    };