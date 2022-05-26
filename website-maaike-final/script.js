// Contact me form input interaction
let fields = document.querySelectorAll(".field");

const form = document.getElementById("contact-form");
form.addEventListener("submit", () => {
  form.submit();
  alert("Thank you for your interest in my work! Your email was sent.");
});

for (let i = 0; i < fields.length; i++) {
  fields[i].firstElementChild.addEventListener("focus", () => {
    fields[i].querySelector("label").classList.add("top");
    fields[i].querySelector(".border").style.transform = "scale(1)";
  });
  fields[i].firstElementChild.addEventListener("blur", () => {
    if (fields[i].firstElementChild.value.length <= 0) {
      fields[i].querySelector("label").classList.remove("top");
    }
    fields[i].querySelector(".border").style.transform = "scale(0)";
  });
}

// Tree video play on hover
document.getElementById("myVid").addEventListener("mouseover", function () {
  this.play();
});

// Hamburger Menu
function openMobileMenu(menu) {
  menu.classList.toggle("open");
}

function submitForm() {
  window.location.reload();
}

//Vinyl
function recordOnPlayer(el1, el2) {
  el1.offsetBottom = el1.offsetTop + el1.offsetHeight;
  el1.offsetRight = el1.offsetLeft + el1.offsetWidth;
  el2.offsetBottom = el2.offsetTop + el2.offsetHeight;
  el2.offsetRight = el2.offsetLeft + el2.offsetWidth;

  return !(
    el1.offsetBottom < el2.offsetTop ||
    el1.offsetTop > el2.offsetBottom ||
    el1.offsetRight < el2.offsetLeft ||
    el1.offsetLeft > el2.offsetRight
  );
}

var songs = new Array("audio/Maaike Song.mp3", "audio/Maaike Song 2.mp3");
var needle = document.querySelector(".needle");
var plates = document.getElementsByClassName("record-plate");
var player = document.getElementById("vinyl-holder");

var vinylSF = new Audio("audio/vinyl sf.mp3");
vinylSF.loop = true;
vinylSF.volume = 0.05;
var audio = new Audio();

for (var plate of plates) {
  dragElement(plate);
}

function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.classList.remove("playing");
    audio.pause();
    vinylSF.pause();
    needle.classList.remove("on-vinyl");
    audio.currentTime = 0;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;

    audio.src = songs[[...plates].indexOf(elmnt)];

    if (recordOnPlayer(elmnt, player)) {
      needle.classList.add("on-vinyl");
      setTimeout(function () {
        audio.play();
        vinylSF.play();
        elmnt.classList.add("playing");
      }, 1000);
    }
  }
}

// Scroll to top button
mybutton = document.querySelector(".button-scroll");
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 900 ||
    document.documentElement.scrollTop > 900
  ) {
    mybutton.style.display = "block";
    mybutton.style.bottom = "1.5rem";
    if (
      document.body.scrollTop > 2820 ||
      document.documentElement.scrollTop > 2820
    ) {
      mybutton.style.bottom = "4.5rem";
    }
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0; // this is for safari
  document.documentElement.scrollTop = 0; // this is for everything with chromium and firefox
}
