'use string';

const hours = prompt(
	'Please enter the number of hours for conversion to seconds:'
);

if (!isNaN(hours)) {
	const seconds = hours * 3600;
	alert(`In ${hours} hours, there are ${seconds} seconds.`);
} else {
	alert('Please enter a numeric value for the number of hours to convert!');
}
