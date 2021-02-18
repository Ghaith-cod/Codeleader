var side = document.querySelector(".side"),
    btn = document.getElementById("toogler"),
    x = document.getElementById("close");

btn.onclick = function () {
    "use strict";
    side.style.display = "block";
};
x.onclick = function () {
    "use strict";
    side.style.display = "none";
};

var speed = 250,
    str = document.getElementById("str").innerText,
    pos = str.length;


function type() {
    "use strict";
    if (pos < str.length) {
        document.getElementById("str").innerText += str.charAt(pos);
        pos++;
        setTimeout(type, speed);
    } else {
        setTimeout(erase, speed);
    }
}

setTimeout(type, speed);

function erase() {
    "use strict";
    if (pos >= 0) {
        var temp = str.substring(0, pos);
        document.getElementById("str").innerText = temp;
        pos--;
        setTimeout(erase, speed);
    } else {
        setTimeout(type, speed);
    }
}

var filterBtn = document.getElementsByClassName("filter-btn"),
    filterImg = document.getElementsByClassName("filter-img"),
    i,
    j;

for (i = 0; i < filterBtn.length; i++) {
    filterBtn[i].onclick = function () {
        for (j = 0; j < filterImg.length; j++) {
            if (filterImg[j].getAttribute("data-target") == this.getAttribute("data-target") || this.getAttribute("data-target") == "all") {
                filterImg[j].classList.add("show")
                filterImg[j].classList.remove("delete")
            } else {
                filterImg[j].classList.remove("show")
                filterImg[j].classList.add("delete")
            }
        }
    }
}

var up = document.getElementById("up")

window.onscroll = function () {
    if (scrollY == 0) {
        up.style.display = "none";
    } else {
        up.style.display = "block";
    }
}

var activeLink = document.querySelectorAll(".side ul li a"),
    m,
    z;

for (m = 0; m < activeLink.length; m++) {
    activeLink[m].onclick = function () {
        for (z = 0; z < activeLink.length; z++) {
            activeLink[z].classList.remove("active")
        }
        this.classList.add("active")
    }

}
