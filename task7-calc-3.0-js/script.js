'use strict';

alert('Welcome to calculator 3.0');

while (true) {
	let userInput;

	while (true) {
		userInput = prompt(
			'What action you want to do? Add, Diff, Mult, Div, Sqrt, Sin, Cos, or Exp'
		);

		if (userInput === null) {
			alert('Goodbye, see you later.');
			break;
		}

		userInput = userInput.toLowerCase();

		if (
			['add', 'diff', 'mult', 'div', 'sqrt', 'sin', 'cos', 'exp'].includes(
				userInput
			)
		) {
			break;
		} else {
			alert(
				"I don't recognize your operation. Please choose a correct operation: Add, Diff, Mult, Div, Sqrt, Sin, Cos, or Exp"
			);
		}
	}

	if (['add', 'diff', 'mult', 'div'].includes(userInput)) {
		let validInput = false;

		while (!validInput) {
			let firstNumber = prompt('Enter first number:');

			if (firstNumber === null) {
				alert('Goodbye, see you later.');
				break;
			}

			firstNumber = parseFloat(firstNumber);

			if (isNaN(firstNumber)) {
				alert('This is a bad digit. Please enter a correct digit.');
			} else {
				let secondNumber = prompt('Enter the second number:');

				if (secondNumber === null) {
					alert('Goodbye, see you later.');
					break;
				}

				secondNumber = parseFloat(secondNumber);

				if (isNaN(secondNumber)) {
					alert('This is a bad digit. Please enter a correct digit.');
				} else {
					validInput = true;

					switch (userInput) {
						case 'add':
							alert(
								`Sum of ${firstNumber} and ${secondNumber} is ${
									firstNumber + secondNumber
								}`
							);
							break;

						case 'diff':
							alert(
								`Diff of ${firstNumber} and ${secondNumber} is ${
									firstNumber - secondNumber
								}`
							);
							break;

						case 'mult':
							alert(
								`Mult of ${firstNumber} and ${secondNumber} is ${
									firstNumber * secondNumber
								}`
							);
							break;

						case 'div':
							if (secondNumber === 0) {
								alert('Division by zero is not allowed.');
							} else {
								alert(
									`Div of ${firstNumber} and ${secondNumber} is ${
										firstNumber / secondNumber
									}`
								);
							}
							break;
					}
				}
			}
		}
	} else if (['sqrt', 'sin', 'cos', 'exp'].includes(userInput)) {
		let validInput = false;

		while (!validInput) {
			let enterNumber = prompt('Enter a number:');

			if (enterNumber === null) {
				alert('Goodbye, see you later.');
				break;
			}

			enterNumber = parseFloat(enterNumber);

			if (isNaN(enterNumber)) {
				alert('This is a bad digit. Please enter a correct digit.');
			} else {
				validInput = true;

				switch (userInput) {
					case 'sqrt':
						alert(
							`The square root of ${enterNumber} is ${Math.sqrt(enterNumber)}`
						);
						break;

					case 'sin':
						alert(
							`The sine of a number ${enterNumber} is ${Math.sin(enterNumber)}`
						);
						break;

					case 'cos':
						alert(
							`The cosine of a number ${enterNumber} is ${Math.cos(
								enterNumber
							)}`
						);
						break;

					case 'exp':
						alert(
							`The exponential value of ${enterNumber} is ${Math.exp(
								enterNumber
							)}`
						);
						break;
				}
			}
		}
	}

	let continueCalculation = confirm('Do you want to continue working with me?');

	if (!continueCalculation) {
		alert('Goodbye, see you later.');
		break;
	}
}
