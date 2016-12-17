require('../css/index.styl')

window.addEventListener('DOMContentLoaded', function () {
	const name = document.getElementById('name');
	const email = document.getElementById('email');
	const required = document.querySelectorAll('.js-form [required]');
	const errorClass = document.querySelectorAll('.js-error')[0];
	const length = required.length;
	const submit = document.querySelectorAll('.js-submit')[0];

	let error = [];
	submit.addEventListener('click', function (e) {
		e.preventDefault();
		const form = this.closest('form');
		for (let i = 0; i < length; i += 1) {
			let type = required[i].getAttribute('type');
			if (!required[i].checkValidity() && type !== error[error.length - 1]) {
				error.push(type);
			} else if (required[i].checkValidity() && type === error[error.length - 1]) {
				error.pop();
			}
			console.log(required[i].checkValidity(), error);
		}
		errorClass.innerHTML = '';

		if (error.length > 0) {
			errorClass.innerHTML = `Введите ${error.join(' ')}`;
			error = [];
			errorClass.classList.add('error');
			errorClass.classList.remove('success');
		} else {
			errorClass.classList.remove('error');
			errorClass.classList.add('success');
			errorClass.innerHTML = 'Данные введены верно'
		}
	});

	function falidate (nameS) {
		nameS.checkValidity();
	}
});