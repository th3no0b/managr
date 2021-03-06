// Version 2.0
///////////////////////////////////////
//START Node Webkit Stuff            //
///////////////////////////////////////
//get node webkit GUI - WIN
var gui = require('nw.gui');
// get the window object
var win = gui.Window.get();

//Keyboard shortcuts
document.onkeydown = function (pressed) {
    if (pressed.ctrlKey === true && pressed.keyCode === 116) {
        if(window.popup){
            if(!window.popup.isclosed){
                window.popup.close();
                console.log("closed");
            }
        }
        sessionStorage.clear();
        pressed.preventDefault();
        win.reloadDev();
        return false;
    } else if (pressed.keyCode === 116) {
        if(window.popup){
            if(!window.popup.isclosed){
                window.popup.close();
                console.log("closed");
            }
        }
        var expire = sessionStorage.getItem('cachedExpire');
        if(expire) {
            var expireTime = 300*1000 // n*1000 where n = seconds to get milliseconds
            var now = new Date().getTime();
            expired = now-parseInt(expire);
            if (expired >= expireTime) {
                sessionStorage.clear();
            }
        }
        pressed.preventDefault();
        win.reload();
        return false;
    }
}
///////////////////////////////////////
//END Node Webkit Stuff              //
///////////////////////////////////////


function autoHeightAnimate(element, time){
  	var curHeight = element.height(), // Get Default Height
    autoHeight = element.css('height', 'auto').height(); // Get Auto Height
    element.height(curHeight); // Reset to Default Height
    element.stop().animate({ height: autoHeight }, parseInt(time)); // Animate to Auto Height
}

function checkAtts(a, obj) {
    // a: attributes to check.
    // obj: object to check against.
    if (!obj) {
        return false;
    }
    for (i = 0; i < a.length; i++) {
        if (obj.indexOf(a[i]) != -1) {
            return true;
        }
    }
    return false;
}


function getHex(r, g, b) {
    return '#' + this.byte2Hex(r) + this.byte2Hex(g) + this.byte2Hex(b);
}

function byte2Hex(n) {
    var nybHexString = '012345789abcdef';
    return String(nybHexString.substr((n >> 4) & 0x0f, 1)) + nybHexString.substr(n & 0x0f, 1);
}

function stripScripts(s) {
    var elem = $("<p>"+s+"<script>alert('hahaha');</script></p>");
    elem.find('script').each(function(){
        $(this).remove();
    });
    return elem.prop('outerHTML');
}
