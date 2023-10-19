'use strict';

alert('Welcome to calculator!');

let userInput = prompt(
	'What action you want to do? Add, Diff, Mult, Div, Sqrt, Sin, Cos'
);

switch (userInput) {
	case null:
	case '':
		alert('Good by, see you later.');
		break;

	case 'Add':
	case 'Diff':
	case 'Mult':
	case 'Div':
		let firstNumber = parseFloat(prompt('Enter first number:'));

		if (isNaN(firstNumber)) {
			alert('This is a bad digit, good by');
			break;
		}

		let secondNumber = parseFloat(prompt('Enter the second number:'));

		if (isNaN(secondNumber)) {
			alert('This is a bad digit, good by');
			break;
		}

		switch (userInput) {
			case 'Add':
				alert(
					`Sum of ${firstNumber} and ${secondNumber} is ${
						firstNumber + secondNumber
					}`
				);
				break;

			case 'Diff':
				alert(
					`Diff of ${firstNumber} and ${secondNumber} is ${
						firstNumber - secondNumber
					}`
				);
				break;

			case 'Mult':
				alert(
					`Mult of ${firstNumber} and ${secondNumber} is ${
						firstNumber * secondNumber
					}`
				);
				break;

			case 'Div':
				secondNumber === 0
					? alert('Division by zero is not allowed.')
					: alert(
							`Div of ${firstNumber} and ${secondNumber} is ${
								firstNumber / secondNumber
							}`
					  );
				break;
		}

		alert('Good by, see you later.');
		break;

	case 'Sqrt':
	case 'Sin':
	case 'Cos':
		let enterNumber = parseFloat(prompt('Enter number:'));

		if (isNaN(enterNumber)) {
			alert('This is a bad digit, good by');
			break;
		}

		switch (userInput) {
			case 'Sqrt':
				alert(`The square root of ${enterNumber} is ${Math.sqrt(enterNumber)}`);
				break;

			case 'Sin':
				alert(
					`The sine of a number ${enterNumber} is ${Math.sin(enterNumber)}`
				);
				break;

			case 'Cos':
				alert(
					`The cosine of a number ${enterNumber} is ${Math.cos(enterNumber)}`
				);
				break;
		}

		alert('Good by, see you later.');
		break;

	default:
		alert('This is a bad digit, good by');
}
