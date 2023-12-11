'use strict';

const table = document.createElement('table');
table.classList.add('table', 'table-bordered');

for (let i = 0; i < 11; i++) {
	const row = table.insertRow();

	for (let j = 0; j < 11; j++) {
		const cell = row.insertCell();

		if ((i === 0 && j !== 0) || (i !== 0 && j === 0)) {
			cell.classList.add('bg-light', 'text-danger', 'font-weight-bold');
		}

		if (i === 0 && j !== 0) {
			cell.textContent = j;
		} else if (i !== 0 && j === 0) {
			cell.textContent = i;
		} else if (i !== 0 && j !== 0) {
			const result = i * j;
			cell.textContent = result;
			cell.style.color = 'tomato';
		}
	}
}

document.body.appendChild(table);
