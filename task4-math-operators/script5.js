'use strict';

let numFull = parseInt(prompt('Please enter a two-digit number:'));

if (!isNaN(numFull) && numFull >= 10 && numFull <= 99) {
	let firstPartOfNum = Math.floor(numFull / 10);

	let secondPartOfNum = numFull % 10;

	if (firstPartOfNum > secondPartOfNum) {
		alert(
			`The first digit (${firstPartOfNum}) is greater than the second digit (${secondPartOfNum}).`
		);
		console.log(
			`The first digit (${firstPartOfNum}) is greater than the second digit (${secondPartOfNum}).`
		);
	} else if (firstPartOfNum < secondPartOfNum) {
		alert(
			`The second digit (${secondPartOfNum}) is greater than the first digit (${firstPartOfNum}).`
		);
		console.log(
			`The second digit (${secondPartOfNum}) is greater than the first digit (${firstPartOfNum}).`
		);
	} else {
		alert(`Both digits (${firstPartOfNum}) are equal.`);
		console.log(`Both digits (${firstPartOfNum}) are equal.`);
	}
} else {
	alert('Please enter a two-digit number.');
	console.log('Please enter a two-digit number.');
}
