'use strict';

let a = parseInt(prompt('Enter number a:'));
let b = parseInt(prompt('Enter number b:'));

if (!isNaN(a) && !isNaN(b)) {
	if (a % b === 0) {
		alert(`${a} is a divisor of ${b}.`);
		console.log(`${a} is a divisor of ${b}.`);
	} else {
		alert(`${a} is not a divisor of ${b}.`);
		console.log(`${a} is not a divisor of ${b}.`);
	}

	if (b % a === 0) {
		alert(`${b} is a divisor of ${a}.`);
		console.log(`${b} is a divisor of ${a}.`);
	} else {
		alert(`${b} is not a divisor of ${a}.`);
		console.log(`${b} is not a divisor of ${a}.`);
	}
} else {
	alert('Please enter valid numbers.');
	console.log('Please enter valid numbers.');
}
