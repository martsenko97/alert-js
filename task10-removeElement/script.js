function removeElement(array, item) {
	for (let i = array.length - 1; i >= 0; i--) {
		if (
			array[i] === item ||
			(Array.isArray(item) && JSON.stringify(array[i]) === JSON.stringify(item))
		) {
			array.splice(i, 1);
		}
	}
}

const array = [1, 2, 3, 4, 5, 'string', [1, 2, 3]];
const newItem = [1, 2, 3];
removeElement(array, newItem);
console.log(array);
