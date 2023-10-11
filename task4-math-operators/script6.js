'use strict';

let threeDigitNum = parseInt(prompt('Enter a three-digit number'));

if (!isNaN(threeDigitNum) && threeDigitNum >= 100 && threeDigitNum <= 999) {
	let firstDigitOfNum = Math.floor(threeDigitNum / 100);
	let secondDigitOfNum = Math.floor((threeDigitNum / 10) % 10);
	let thirdDigitOfNum = (Math.floor = threeDigitNum % 10);

	let sumDigitsOfNum = firstDigitOfNum + secondDigitOfNum + thirdDigitOfNum;
	let prodDigitsOfNum = firstDigitOfNum * secondDigitOfNum * thirdDigitOfNum;

	let sumEven = sumDigitsOfNum % 2 === 0;
	let sumMultOfFive = sumDigitsOfNum % 5 === 0;
	let prodMore100 = sumDigitsOfNum > 100;

	if (sumEven) {
		alert('The sum of digits is even.');
		console.log('The sum of digits is even.');
	} else {
		alert('The sum of digits is not even.');
		console.log('The sum of digits is not even.');
	}

	if (sumMultOfFive) {
		alert('The sum of digits is a multiple of five.');
		console.log('The sum of digits is a multiple of five.');
	} else {
		alert('The sum of digits is not a multiple of five.');
		console.log('The sum of digits is not a multiple of five.');
	}
	if (prodMore100) {
		alert('The product of digits is greater than 100.');
		console.log('The product of digits is greater than 100.');
	} else {
		alert('The product of digits is not greater than 100.');
		console.log('The product of digits is not greater than 100.');
	}
} else {
	alert('Please enter a three-digit number.');
	console.log('Please enter a three-digit number');
}
