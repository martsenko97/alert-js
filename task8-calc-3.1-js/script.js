'use strict';

alert('Welcome to calculator 3.1');

let continueCalculation = true;
let history = [];

while (continueCalculation) {
	let userInput;

	while (true) {
		userInput = prompt(
			'What action do you want to do Add, Diff, Mult, Div, Sqrt, Sin, Cos, Exp, or History'
		);

		if (userInput === null) {
			alert('Goodbye, see you later.');
			continueCalculation = false;
			break;
		}

		userInput = userInput.toLowerCase();

		if (userInput === 'history') {
			if (history.length === 0) {
				alert("You haven't done any operations yet.");
			} else {
				let historyMessage = 'Your operations:\n';
				history.forEach(operation => {
					historyMessage += operation + '\n';
				});
				alert(historyMessage);
			}

			continueCalculation = confirm('Do you want to continue working with me?');
		} else if (
			['add', 'diff', 'mult', 'div', 'sqrt', 'sin', 'cos', 'exp'].includes(
				userInput
			)
		) {
			break;
		} else {
			alert(
				"I don't recognize your operation. Please choose a correct operation: Add, Diff, Mult, Div, Sqrt, Sin, Cos, Exp, or History"
			);
		}
	}

	if (!continueCalculation) {
		break;
	}

	if (['add', 'diff', 'mult', 'div'].includes(userInput)) {
		let validInput = false;

		while (!validInput) {
			let firstNumber = prompt('Enter first number:');

			if (firstNumber === null) {
				alert('Goodbye, see you later.');
				continueCalculation = false;
				break;
			}

			firstNumber = parseFloat(firstNumber);

			if (isNaN(firstNumber)) {
				alert('This is a bad digit. Please enter a valid number.');
			} else {
				let secondNumber = prompt('Enter the second number:');

				if (secondNumber === null) {
					alert('Goodbye, see you later.');
					continueCalculation = false;
					break;
				}

				secondNumber = parseFloat(secondNumber);

				if (isNaN(secondNumber)) {
					alert('This is a bad digit. Please enter a valid number.');
				} else {
					validInput = true;

					switch (userInput) {
						case 'add':
							let sum = firstNumber + secondNumber;
							history.push(`Sum: ${firstNumber} + ${secondNumber} = ${sum}`);
							alert(`Sum of ${firstNumber} and ${secondNumber} is ${sum}`);
							break;

						case 'diff':
							let diff = firstNumber - secondNumber;
							history.push(`Diff: ${firstNumber} - ${secondNumber} = ${diff}`);
							alert(
								`Difference between ${firstNumber} and ${secondNumber} is ${diff}`
							);
							break;

						case 'mult':
							let mult = firstNumber * secondNumber;
							history.push(`Mult: ${firstNumber} * ${secondNumber} = ${mult}`);
							alert(`Mult of ${firstNumber} and ${secondNumber} is ${mult}`);
							break;

						case 'div':
							if (secondNumber === 0) {
								alert('Division by zero is not allowed.');
							} else {
								let div = firstNumber / secondNumber;
								history.push(`Div: ${firstNumber} / ${secondNumber} = ${div}`);
								alert(
									`Division of ${firstNumber} by ${secondNumber} is ${div}`
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
				continueCalculation = false;
				break;
			}

			enterNumber = parseFloat(enterNumber);

			if (isNaN(enterNumber)) {
				alert('This is a bad digit. Please enter a valid number.');
			} else {
				validInput = true;

				switch (userInput) {
					case 'sqrt':
						let sqrt = Math.sqrt(enterNumber);
						history.push(`Sqrt: √${enterNumber} = ${sqrt}`);
						alert(`The square root of ${enterNumber} is ${sqrt}`);
						break;

					case 'sin':
						let sin = Math.sin(enterNumber);
						history.push(`Sin: sin(${enterNumber}) = ${sin}`);
						alert(`The sine of ${enterNumber} is ${sin}`);
						break;

					case 'cos':
						let cos = Math.cos(enterNumber);
						history.push(`Cos: cos(${enterNumber}) = ${cos}`);
						alert(`The cosine of ${enterNumber} is ${cos}`);
						break;

					case 'exp':
						let exp = Math.exp(enterNumber);
						history.push(`Exp: exp(${enterNumber}) = ${exp}`);
						alert(`The exponential value of ${enterNumber} is ${exp}`);
						break;
				}
			}
		}
	}
}
