'use strict';

alert('Welcome to calculator 3.2');

let continueCalculation = true;
let history = [];

function showNotification(type) {
	switch (type) {
		case 'goodbye':
			alert('Goodbye, see you later.');
			break;
		case 'invalidInput':
			alert('This is a bad digit. Please enter a valid number.');
			break;
		case 'divisionByZero':
			alert('Division by zero is not allowed.');
			break;
	}
}

function getUserNumber(promptMessage) {
	while (true) {
		let userInput = prompt(promptMessage);

		if (userInput === null) {
			showNotification('goodbye');
			continueCalculation = false;
			return null;
		}

		if (userInput === '') {
			showNotification('invalidInput');
		} else {
			let number = parseFloat(userInput);
			if (!isNaN(number)) {
				return number;
			} else {
				showNotification('invalidInput');
			}
		}
	}
}

function performOperation(operation, a, b) {
	switch (operation) {
		case 'add':
			let sum = a + b;
			history.push(`Sum: ${a} + ${b} = ${sum}`);
			return sum;
		case 'diff':
			let diff = a - b;
			history.push(`Diff: ${a} - ${b} = ${diff}`);
			return diff;
		case 'mult':
			let mult = a * b;
			history.push(`Mult: ${a} * ${b} = ${mult}`);
			return mult;
		case 'div':
			if (b === 0) {
				showNotification('divisionByZero');
				return null;
			}
			let div = a / b;
			history.push(`Div: ${a} / ${b} = ${div}`);
			return div;
		case 'sqrt':
			let sqrt = Math.sqrt(a);
			history.push(`Sqrt: √${a} = ${sqrt}`);
			return sqrt;
		case 'sin':
			let sin = Math.sin(a);
			history.push(`Sin: sin(${a}) = ${sin}`);
			return sin;
		case 'cos':
			let cos = Math.cos(a);
			history.push(`Cos: cos(${a}) = ${cos}`);
			return cos;
		case 'exp':
			let exp = Math.exp(a);
			history.push(`Exp: exp(${a}) = ${exp}`);
			return exp;
		default:
			showNotification('invalidInput');
			return null;
	}
}

while (continueCalculation) {
	let userInput = prompt(
		'What action do you want to perform? Add, Diff, Mult, Div, Sqrt, Sin, Cos, Exp, or History'
	);

	if (userInput === null) {
		showNotification('goodbye');
		continueCalculation = false;
		break;
	}

	userInput = userInput.toLowerCase();

	if (userInput === 'history') {
		if (history.length === 0) {
			alert("You haven't performed any operations yet.");
		} else {
			let historyMessage = 'Your operations:\n';
			history.forEach(operation => {
				historyMessage += operation + '\n';
			});
			alert(historyMessage);
			const continueWorking = confirm(
				'Do you want to continue working with me?'
			);
			if (!continueWorking) {
				continueCalculation = false;
				showNotification('goodbye');
				break;
			}
		}
	} else if (['add', 'diff', 'mult', 'div'].includes(userInput)) {
		let firstNumber = getUserNumber('Enter the first number:');
		if (firstNumber === null) break;

		let secondNumber = getUserNumber('Enter the second number:');
		if (secondNumber === null) break;

		let result = performOperation(userInput, firstNumber, secondNumber);
		if (result !== null) {
			alert(`Result of ${userInput} operation: ${result}`);
		}
	} else if (['sqrt', 'sin', 'cos', 'exp'].includes(userInput)) {
		let number = getUserNumber('Enter a number:');
		if (number === null) break;

		let result = performOperation(userInput, number);
		if (result !== null) {
			alert(`Result of ${userInput} operation: ${result}`);
		}
	} else {
		showNotification('invalidInput');
	}
}
