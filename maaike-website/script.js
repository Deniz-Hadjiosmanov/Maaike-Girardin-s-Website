function openMobileMenu(menu) {
    menu.classList.toggle('open');
}

function submitForm() {
    window.location.reload();
}

document.getElementById("myVid").addEventListener("mouseover", function() {
	this.play();
});

document.getElementById("myVid").addEventListener("mouseleave", function() {
	this.pause();
});

