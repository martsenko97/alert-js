'use strict';

let threeDigitNumber = parseInt(prompt('Enter a three-digit number:'));

if (
	!isNaN(threeDigitNumber) &&
	threeDigitNumber >= 100 &&
	threeDigitNumber <= 999
) {
	let firstDigit = Math.floor(threeDigitNumber / 100);
	let secondDigit = Math.floor((threeDigitNumber / 10) % 10);
	let thirdDigit = threeDigitNumber % 10;

	let allDigitsIdent = firstDigit === secondDigit && secondDigit === thirdDigit;

	let someDigitsIdent =
		firstDigit === secondDigit ||
		secondDigit === thirdDigit ||
		firstDigit === thirdDigit;

	if (allDigitsIdent) {
		alert('All digits are the same.');
		console.log('All digits are the same.');
	} else {
		alert('Not all digits are the same.');
		console.log('Not all digits are the same.');
	}

	if (someDigitsIdent) {
		alert('There are equal digits among the digits.');
		console.log('There are equal digits among the digits.');
	} else {
		alert('There are no equal digits among the digits.');
		console.log('There are no equal digits among the digits.');
	}
} else {
	alert('Please enter a three-digit number.');
	console.log('Please enter a three-digit number.');
}
