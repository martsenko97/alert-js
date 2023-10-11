'use strict';

let sixDigitNumber = parseInt(prompt('Enter a six-digit number:'));

if (
	!isNaN(sixDigitNumber) &&
	sixDigitNumber >= 100000 &&
	sixDigitNumber <= 999999
) {
	let numberAsString = sixDigitNumber.toString();
	let isMirrorNumber = true;

	for (let i = 0; i < 3; i++) {
		if (numberAsString[i] !== numberAsString[5 - i]) {
			isMirrorNumber = false;
			break;
		}
	}

	if (isMirrorNumber) {
		alert('The given number is a palindrome.');
		console.log('The given number is a palindrome.');
	} else {
		alert('The given number is not a palindrome.');
		console.log('The given number is not a palindrome.');
	}
} else {
	alert('Please enter a six-digit number.');
	console.log('Please enter a six-digit number.');
}
