require('../css/index.styl')

window.addEventListener('DOMContentLoaded', function () {
	const name = document.getElementById('name');
	const email = document.getElementById('email');
	const required = document.querySelectorAll('.js-form [required]');
	const errorClass = document.querySelectorAll('.js-error');
	const length = required.length;
	const submit = document.querySelectorAll('.js-submit')[0];

	let error = [];
	submit.addEventListener('click', function (e) {
		e.preventDefault();
		const form = this.closest('form');
		for (let i = 0; i < length; i += 1) {
			if (!required[i].checkValidity()) {
				error.push(required[i].getAttribute('type'));
			}
		}
		errorClass.innerHTML = `Введите ${error.join(' ')}`;
		console.log(errorClass, errorClass.innerHTML);
	});

	function falidate (nameS) {
		nameS.checkValidity();
	}
});