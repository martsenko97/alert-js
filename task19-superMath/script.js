'use strict';

class SuperMath {
	check(obj) {
		const { X, Y, znak } = obj;

		if (this.isValidZnak(znak)) {
			const userConfirm = this.confirmOperation(X, Y, znak);

			if (userConfirm) {
				const result = this.calculate(X, Y, znak);
				console.log(`Result: ${result}`);
				alert(`Result: ${result}`);
			} else {
				console.log('Operation canceled. Please enter new data.');
				this.input();
			}
		} else {
			console.log('Invalid operation. Please enter a valid  operation.');
			this.input();
		}
	}

	input() {
		const X = parseFloat(prompt('Enter the value for X:'));
		const Y = parseFloat(prompt('Enter the value for Y:'));
		const znak = prompt('Enter the operation (+ - / * %):');

		this.check({ X, Y, znak });
	}

	isValidZnak(znak) {
		const validOperations = ['+', '-', '/', '*', '%'];
		return validOperations.includes(znak);
	}

	confirmOperation(X, Y, znak) {
		const confirmMessage = `Do you want to perform the operation ${znak} with ${X} and ${Y}?`;
		return confirm(confirmMessage);
	}

	calculate(X, Y, znak) {
		switch (znak) {
			case '+':
				return X + Y;
			case '-':
				return X - Y;
			case '*':
				return X * Y;
			case '/':
				return X / Y;
			case '%':
				return X % Y;
			default:
				return NaN;
		}
	}
}

const p = new SuperMath();
const obj = { X: 3, Y: 3, znak: '+' };
p.check(obj);
