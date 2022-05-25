/* Contact me form input interaction */
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

/* Tree video play on hover */
document.getElementById("myVid").addEventListener("mouseover", function () {
	this.play();
});
  

  /*----Hamburger Menu-----*/
function openMobileMenu(menu) {
    menu.classList.toggle('open');
}

function submitForm() {
    window.location.reload();
}



