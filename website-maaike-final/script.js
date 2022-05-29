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

//Checks if the position of the vinyl plate aligns with the center of the player
function recordOnPlayer(el1, el2) {
  const postionPlayer = el1.getBoundingClientRect();
  const positionVinyl = el2.getBoundingClientRect();

  return !(
    postionPlayer.top > positionVinyl.bottom ||
    postionPlayer.right < positionVinyl.left ||
    postionPlayer.bottom < positionVinyl.top ||
    postionPlayer.left > positionVinyl.right
  );
}

var songs = new Array("audio/Maaike Song.mp3", "audio/Maaike Song 2.mp3");
var needle = document.querySelector(".needle");
var plates = document.getElementsByClassName("record-plate");
var player = document.querySelector("#plate-spot");

var vinylSound = new Audio("audio/vinyl sf.mp3");
vinylSound.loop = true;
vinylSound.volume = 0.05;
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
    elmnt.style.zIndex = 2
    elmnt.classList.remove("fixed-on-player");
    elmnt.classList.remove("playing");
    audio.pause();
    vinylSound.pause();
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

    if (recordOnPlayer(player, elmnt)) {
      elmnt.style.zIndex = 1
      elmnt.classList.add("fixed-on-player");
      needle.classList.add("on-vinyl");
      setTimeout(function () {
        audio.play();
        vinylSound.play();
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
