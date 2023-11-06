function createSum() {
	let total = 0;

	return function (x) {
		total += x;
		return total;
	};
}

const sum = createSum();

console.log(sum(5));
console.log(sum(10));
console.log(sum(25));
