mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
    mybutton.style.display = "block";
} else {
    mybutton.style.display = "none";
}
}

function topFunction() {
  document.body.scrollTop = 0; // this is for safari
  document.documentElement.scrollTop = 0; // this is for everything with chromium and firefox
}