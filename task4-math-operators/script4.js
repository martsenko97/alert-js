'use strict';

let number = parseInt(prompt('Enter a number:'));

if (!isNaN(number)) {
	let lastDigit = number % 10;
	if (lastDigit % 2 === 0) {
		alert(`The last digit (${lastDigit}) is even.`);
		console.log(`The last digit (${lastDigit}) is even.`);
	} else {
		alert(`The last digit (${lastDigit}) is odd.`);
		console.log(`The last digit (${lastDigit}) is odd.`);
	}
} else {
	alert('Please enter a number correctly.');
	console.log('Please enter a number correctly.');
}
