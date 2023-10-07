'use string';

const hours = prompt(
	'Будь ласка, введіть кількість годин для конвертації в секунди:'
);

if (!isNaN(hours)) {
	const seconds = hours * 3600;
	alert(`У ${hours} годиах є ${seconds} секунд.`);
} else {
	alert(
		'Будь ласка, введіть числове значення кількості годин для конвертації!'
	);
}
