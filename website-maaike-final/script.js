// Contact me form input interaction
let fields = document.querySelectorAll('.field');

const form = document.getElementById('contact-form');
form.addEventListener("submit", () => {
	form.submit();
	alert("Thank you for your interest in my work! Your email was sent.");

})

for (let i = 0; i < fields.length; i++) {
	fields[i].firstElementChild.addEventListener('focus', () => {
		fields[i].querySelector('label').classList.add('top');
		fields[i].querySelector('.border').style.transform = 'scale(1)';
	});
	fields[i].firstElementChild.addEventListener('blur', () => {
		if (fields[i].firstElementChild.value.length <= 0) {
			fields[i].querySelector('label').classList.remove('top');
		}
		fields[i].querySelector('.border').style.transform = 'scale(0)';
	});
}

// Tree video play on hover
document.getElementById("myVid").addEventListener("mouseover", function () {
	this.play();
});


// Hamburger Menu
function openMobileMenu(menu) {
	menu.classList.toggle('open');
}

function submitForm() {
	window.location.reload();
}



// Scroll to top button
mybutton = document.querySelector(".button-scroll");
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
	if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
		mybutton.style.display = "block";
		mybutton.style.bottom = "1.5rem";
		if((document.body.scrollTop > 2820 || document.documentElement.scrollTop > 2820)) {
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