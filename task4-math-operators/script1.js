'use strict';

let num1 = parseFloat(prompt('Enter the first number:'));
let num2 = parseFloat(prompt('Enter the second number:'));

if (!isNaN(num1) && !isNaN(num2)) {
	if (num1 > num2) {
		alert(`Number ${num1} is greater than number ${num2}.`);
		console.log(`Number ${num1} is greater than number ${num2}.`);
	} else if (num1 < num2) {
		alert(`Number ${num1} is less than number ${num2}.`);
		console.log(`Number ${num1} is less than number ${num2}.`);
	} else {
		alert('The entered numbers are equal.');
		console.log('The entered numbers are equal.');
	}
} else {
	alert('Please enter numbers correctly.');
	console.log('Please enter numbers correctly.');
}
