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

		if (
			['Add', 'Diff', 'Mult', 'Div', 'Sqrt', 'Sin', 'Cos', 'Exp'].includes(
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

	if (['Add', 'Diff', 'Mult', 'Div'].includes(userInput)) {
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

					let result;

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
	} else if (['Sqrt', 'Sin', 'Cos', 'Exp'].includes(userInput)) {
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

				let result;

				switch (userInput) {
					case 'Sqrt':
						alert(
							`The square root of ${enterNumber} is ${Math.sqrt(enterNumber)}`
						);
						break;

					case 'Sin':
						alert(
							`The sine of a number ${enterNumber} is ${Math.sin(enterNumber)}`
						);
						break;

					case 'Cos':
						alert(
							`The cosine of a number ${enterNumber} is ${Math.cos(
								enterNumber
							)}`
						);
						break;

					case 'Exp':
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

	let continueCalculation = confirm('Do you want continue work with me?');

	if (!continueCalculation) {
		alert('Goodbye, see you later.');
		break;
	}
}
