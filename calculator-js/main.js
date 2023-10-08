'use string';

let num1 = prompt('Enter the first number:');
let num2 = prompt('Enter the second number for calculation:');

num1 = parseFloat(num1);
num2 = parseFloat(num2);

if (isNaN(num1) || isNaN(num2)) {
	alert('Please enter a valid number for calculation!');
} else {
	let sum = num1 + num2;
	let diff = num1 - num2;
	let mult = num1 * num2;
	let div = num1 / num2;

	alert(`Calculation is finished!
    Sum: ${num1} + ${num2} = ${sum}
    Diff: ${num1} - ${num2} = ${diff}
    Mult: ${num1} * ${num2} = ${mult}
    Div: ${num1} / ${num2} = ${div}`);
}
