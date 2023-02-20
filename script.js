// Navbar toggle

const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
	navMenu.classList.toggle('show-menu');
});

// Form validation

const form = document.querySelector('#booking-form');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const message = document.querySelector('#message');
const errorName = document.querySelector('#error-name');
const errorEmail = document.querySelector('#error-email');
const errorMessage = document.querySelector('#error-message');

form.addEventListener('submit', (e) => {
	if (name.value === '' || name.value == null) {
		e.preventDefault();
		errorName.textContent = 'Please enter your name.';
	} else {
		errorName.textContent = '';
	}

	if (email.value === '' || email.value == null) {
		e.preventDefault();
		errorEmail.textContent = 'Please enter your email.';
	} else if (!validateEmail(email.value)) {
		e.preventDefault();
		errorEmail.textContent = 'Please enter a valid email address.';
	} else {
		errorEmail.textContent = '';
	}

	if (message.value === '' || message.value == null) {
		e.preventDefault();
		errorMessage.textContent = 'Please enter a message.';
	} else {
		errorMessage.textContent = '';
	}
});

function validateEmail(email) {
	const re = /\S+@\S+\.\S+/;
	return re.test(email);
}
