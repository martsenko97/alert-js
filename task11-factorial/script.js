'use strict';

function factorial(n) {
	if (n === 0) {
		return 1;
	}
	return n * factorial(n - 1);
}

let continueWorking = true;

while (continueWorking) {
	let n;
	while (true) {
		const userInput = prompt('Enter a number for calculate its factorial:');

		if (userInput === null) {
			continueWorking = false;
			break;
		}

		n = parseInt(userInput);

		if (!isNaN(n)) {
			break;
		} else if (userInput === '') {
			alert('This is a bad digit. Please enter a valid number.');
		} else {
			alert('This is a bad digit. Please enter a valid number.');
		}
	}

	if (!continueWorking) {
		break;
	}

	const result = factorial(n);
	alert(`Factorial of ${n}! = ${result}`);

	const continueInput = confirm('Do you want to continue working with me?');
	if (!continueInput) {
		continueWorking = false;
	}
}

alert('Goodbye, see you later.');
