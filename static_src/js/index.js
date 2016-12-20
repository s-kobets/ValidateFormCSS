require('../css/index.styl')

window.addEventListener('DOMContentLoaded', function () {
	const name = document.getElementById('name');
	const email = document.getElementById('email');
	const required = document.querySelectorAll('.js-form [required]');
	const requiredFieldset = document.querySelectorAll('fieldset[required]');
	const errorClass = document.querySelectorAll('.js-error')[0];
	const length = required.length;
	const lengthFieldset = requiredFieldset.length;
	const submit = document.querySelectorAll('.js-submit')[0];

	let error = [];
	submit.addEventListener('click', function (e) {
		e.preventDefault();
		const form = this.closest('form');
		for (let i = 0; i < length; i += 1) {
			let type = required[i].getAttribute('type');
			if (!required[i].checkValidity() && type !== error[error.length - 1]) {
				error.push(type);
			} 
			// else if (required[i].checkValidity() && type === error[error.length - 1]) {
			// 	error.pop();
			// }
		}

		for (let j = 0; j < lengthFieldset; j += 1) {
			let typeFieldset = requiredFieldset[j].getAttribute('type');

			if (requiredFieldset[j].getAttribute('data')) {
				error.push(typeFieldset);
			}
			console.log(checked);
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

	function changeCheckbox(e) {
		let target = e.target;
		if (target.checked) {
			requiredFieldset[0].setAttribute('data-require', true);
		}
		console.log(1);
	}
	// requiredFieldset[0].addEventListener('change', function (e) {
	// 	let target = e.target;
	// 	if (target.tagName === 'input') {
	// 		console.log('change');
	// 	}
	// 	console.log(target);
	// });

	function falidate (nameS) {
		nameS.checkValidity();
	}
});