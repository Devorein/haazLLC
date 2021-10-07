const colors = [
	'#FDD79F',
	'#F5F5F5',
	'#797A7D',
	'#3B6A6C',
	'#354567',
	'#2589BD',
	'#FCB040',
	'#6A8E8F',
	'#C7C7C7',
];

const allPaths = document.querySelectorAll('span.circle');

function reloadColors(elem) {
	allPaths.forEach(function recolor(elem) {
		elem.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
	});
}

function resetSpeed(elem) {
	allPaths.forEach(function speed(elem) {
		elem.style.animationDuration = Math.random() * (2 - 1) + 1 + 's';
		elem.style.animationDelay = Math.random() * (1 - 0) + 0 + 's';
	});
}

function stopMovement(elem) {
	clearInterval(autoReload);
	allPaths.forEach(function speed(elem) {
		elem.style.animation = 'none';
	});
}

reloadColors();
resetSpeed();

const randInterval = Math.floor(Math.random() * 3500) + 800;

console.log('Reloading every ' + randInterval / 1000 + ' seconds');

autoReload = setInterval(reloadColors, randInterval);

const formElement = document.querySelector('#form');
const formButtonElement = document.querySelector('.form-button');
const inputElements = Array.from(formElement.querySelectorAll('input'));
const textAreaElement = formElement.querySelector('textarea');
const inputErrorElements = Array.from(document.querySelectorAll('.input-error'));
const inputErrorElementsRecord = {};

inputErrorElements.forEach(
	(inputErrorElement) =>
		(inputErrorElementsRecord[inputErrorElement.getAttribute('name')] = inputErrorElement)
);

formButtonElement.onclick = async (e) => {
	e.preventDefault();
	const formData = {};

	[...inputElements, textAreaElement].forEach((inputElement) => {
		const name = inputElement.name,
			value = inputElement.value;
		if (!value) {
			const inputErrorElement = inputErrorElementsRecord[name];
			inputErrorElement.classList.add('opacity-1');
		} else {
			formData[name] = value;
		}
	});

	if (formData.message && formData.company_name && formData.name && formData.email) {
		const googleCaptcha = window.grecaptcha;
		if (googleCaptcha) {
			googleCaptcha.ready(async function () {
				const token = await googleCaptcha.execute('6Lfplq4cAAAAADgQZAndUa11l-PJXBATMeZhgTEe', {
					action: 'submit',
				});
				try {
					await fetch(`https://post-contact-worker.devorein.workers.dev/`, {
						method: 'POST',
						body: JSON.stringify({ ...formData, captchaToken: token }),
						headers: {
							'Content-Type': 'application/json',
						},
					});
					[...inputElements, textAreaElement].forEach((element) => {
						const inputErrorElement = inputErrorElementsRecord[element.name];
						element.value = '';
						inputErrorElement.classList.remove('opacity-1');
					});
					Swal.fire('Thank you!', 'Your email was sent successfully', 'success');
				} catch (err) {
					Swal.fire({
						icon: 'error',
						title: 'Oops...',
						text: err.message,
					});
					console.log(err.message);
				}
			});
		}
	}
};
