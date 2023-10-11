'use strict';

let distanceInKm = parseFloat(prompt('Enter distance in kilometers:'));
let distanceInFeet = parseFloat(prompt('Enter distance in feet:'));

let distanceInMeters = distanceInFeet * 0.305;

if (!isNaN(distanceInKm) && !isNaN(distanceInFeet)) {
	if (distanceInKm < distanceInMeters) {
		alert('The distance in kilometers is less than the distance in feet.');
		console.log(
			'The distance in kilometers is less than the distance in feet.'
		);
	} else if (distanceInKm > distanceInMeters) {
		alert('The distance in kilometers is greater than the distance in feet.');
		console.log(
			'The distance in kilometers is greater than the distance in feet.'
		);
	} else {
		alert('The distances are equal.');
		console.log('The distances are equal.');
	}
} else {
	alert('Please enter numbers correctly.');
	console.log('Please enter numbers correctly.');
}
