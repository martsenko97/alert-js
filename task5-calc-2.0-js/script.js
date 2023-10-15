'use strict';

alert('Welcome to calculator!');

let userInput = prompt(
	'What action you want to do? Add, Diff, Mult, Div, Sqrt, Sin, Cos'
);

if (!userInput) {
	alert('Good by, see you later.');
} else {
	if (
		userInput === 'Add' ||
		userInput === 'Diff' ||
		userInput === 'Mult' ||
		userInput === 'Div'
	) {
		let firstNumber = parseFloat(prompt('Enter first number:'));

		if (!isNaN(firstNumber)) {
			let secondNumber = parseFloat(prompt('Enter the second number:'));

			if (!isNaN(secondNumber)) {
				if (userInput === 'Add') {
					let sum = firstNumber + secondNumber;
					alert(`Sum of ${firstNumber} and ${secondNumber} is ${sum}`);
					alert('Good by, see you later.');
				} else if (userInput === 'Diff') {
					let diff = firstNumber - secondNumber;
					alert(`Diff of ${firstNumber} and ${secondNumber} is ${diff}`);
					alert('Good by, see you later.');
				} else if (userInput === 'Mult') {
					let mult = firstNumber * secondNumber;
					alert(`Mult of ${firstNumber} and ${secondNumber} is ${mult}`);
					alert('Good by, see you later.');
				} else if (userInput === 'Div') {
					if (secondNumber !== 0) {
						let div = firstNumber / secondNumber;
						alert(`Div of ${firstNumber} and ${secondNumber} is ${div}`);
						alert('Good by, see you later.');
					} else {
						alert('Division by zero is not allowed.');
					}
				}
			} else {
				alert('This is bad digit, good by');
			}
		} else {
			alert('This is bad digit, good by');
		}
	} else if (
		userInput === 'Sqrt' ||
		userInput === 'Sin' ||
		userInput === 'Cos'
	) {
		let enterNumber = parseFloat(prompt('Enter number:'));

		if (!isNaN(enterNumber)) {
			if (userInput === 'Sqrt') {
				let sqrtResult = Math.sqrt(enterNumber);
				alert(`The square root of ${enterNumber} is ${sqrtResult}`);
				alert('Good by, see you later.');
			} else if (userInput === 'Sin') {
				let sinResult = Math.sin(enterNumber);
				alert(`The sine of a number ${enterNumber} is ${sinResult}`);
				alert('Good by, see you later.');
			} else if (userInput === 'Cos') {
				let cosResult = Math.cos(enterNumber);
				alert(`The cosine of a number ${enterNumber} is ${cosResult}`);
				alert('Good by, see you later.');
			}
		} else {
			alert('This is bad digit, good by');
		}
	} else {
		alert('This is bad digit, good by');
	}
}
