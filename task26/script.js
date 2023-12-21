'use strict';

const categories = ['Смартфони', 'Ноутбуки', 'Телевізори'];
const productsByCategory = {
	Смартфони: [
		{ name: 'iPhone', description: 'Найновіший смартфон від Apple' },
		{ name: 'Samsung Galaxy', description: 'Популярна модель від Samsung' },
		{
			name: 'Google Pixel',
			description: 'Смартфон з чистим Android від Google',
		},
	],
	Ноутбуки: [
		{ name: 'MacBook Pro', description: 'Потужний ноутбук від Apple' },
		{ name: 'Dell XPS', description: 'Легкий та потужний ноутбук від Dell' },
		{
			name: 'HP Spectre',
			description: 'Елегантний та стильний ноутбук від HP',
		},
	],
	Телевізори: [
		{ name: 'Samsung QLED', description: '4K телевізор з чітким зображенням' },
		{ name: 'LG OLED', description: 'Телевізор з технологією OLED від LG' },
		{
			name: 'Sony Bravia',
			description: 'Якісний та стильний телевізор від Sony',
		},
	],
};

const container = document.createElement('div');
container.className = 'container mt-4';

const row = document.createElement('div');
row.className = 'row';

const categoriesElement = document.createElement('div');
categoriesElement.className = 'col-md-4 mt-4';

const productsElement = document.createElement('div');
productsElement.className = 'col-md-4 mt-4';

const productInfoElement = document.createElement('div');
productInfoElement.className = 'col-md-4 mt-4';

const orderFormElement = document.createElement('div');
orderFormElement.className = 'col-md-12 mt-4';

document.body.appendChild(container);
container.appendChild(row);
row.appendChild(categoriesElement);
row.appendChild(productsElement);
row.appendChild(productInfoElement);
row.appendChild(orderFormElement);

const categoriesTitle = document.createElement('h2');
categoriesTitle.textContent = 'Категорії';
categoriesElement.appendChild(categoriesTitle);

const productsTitle = document.createElement('h2');
productsTitle.textContent = 'Список товарів';

const productInfoTitle = document.createElement('h2');

function renderCategories() {
	clearElement(categoriesElement);
	categoriesElement.appendChild(categoriesTitle);
	categories.forEach(category => {
		const categoryElement = createButton(
			category,
			'list-group-item list-group-item-action'
		);
		categoryElement.addEventListener('click', () => renderProducts(category));
		categoriesElement.appendChild(categoryElement);
	});
}

function renderProducts(category) {
	clearElement(productsElement);
	productsElement.appendChild(productsTitle);
	productsByCategory[category].forEach(product => {
		const productElement = createButton(
			product.name,
			'list-group-item list-group-item-action'
		);
		productElement.addEventListener('click', () => renderProductInfo(product));
		productsElement.appendChild(productElement);
	});
}

function renderProductInfo(product) {
	clearElement(productInfoElement);

	productInfoElement.appendChild(productInfoTitle);

	const productInfoText = document.createElement('div');
	productInfoText.className = 'mb-3';

	const productNameHeader = document.createElement('h2');
	productNameHeader.textContent = `Інформація про ${product.name}`;

	const productDescription = document.createElement('p');
	productDescription.textContent = product.description;

	productInfoText.appendChild(productNameHeader);
	productInfoText.appendChild(productDescription);

	const buyButton = createButtonWithIcon('btn btn-primary');
	buyButton.addEventListener('click', () => renderOrderForm(product));

	productInfoElement.appendChild(productInfoText);
	productInfoElement.appendChild(buyButton);
}

function renderOrderForm(product) {
	clearElement(orderFormElement);

	const orderFormTitle = document.createElement('h2');
	orderFormTitle.textContent = 'Оформлення замовлення';

	const orderForm = document.createElement('form');
	orderForm.addEventListener('submit', event =>
		handleSubmitOrder(event, product)
	);

	const customerNameInput = createInput('text', 'customerName', 'ПІБ покупця');
	const cityInput = createSelect('city', 'Місто', [
		'Київ',
		'Львів',
		'Харків',
		'Одеса',
		'Хмельницький',
	]);
	const deliveryPointInput = createInput(
		'text',
		'deliveryPoint',
		'Склад Нової пошти'
	);
	const paymentMethodInput = createRadioGroup(
		'paymentMethod',
		'Спосіб оплати',
		['Післяплата', 'Оплата банківською карткою']
	);
	const quantityInput = createInput(
		'number',
		'quantity',
		'Кількість товару',
		1,
		1
	);
	const commentInput = createTextarea('comment', 'Коментар до замовлення');

	const submitButton = document.createElement('button');
	submitButton.type = 'submit';
	submitButton.className = 'btn btn-primary';
	submitButton.textContent = 'Підтвердити замовлення';

	orderForm.appendChild(customerNameInput);
	orderForm.appendChild(cityInput);
	orderForm.appendChild(deliveryPointInput);
	orderForm.appendChild(paymentMethodInput);
	orderForm.appendChild(quantityInput);
	orderForm.appendChild(commentInput);
	orderForm.appendChild(submitButton);

	orderFormElement.appendChild(orderFormTitle);
	orderFormElement.appendChild(orderForm);
}

function handleSubmitOrder(event, product) {
	event.preventDefault();
	if (validateOrderForm(event)) {
		displayOrderInfo(event, product);
	} else {
		alert("Будь ласка, заповніть всі обов'язкові поля форми.");
	}
}

function validateOrderForm(event) {
	const requiredFields = [
		'customerName',
		'city',
		'deliveryPoint',
		'paymentMethod',
		'quantity',
	];
	for (const field of requiredFields) {
		const value = event.target.elements[field].value.trim();
		if (!value) {
			return false;
		}
	}

	const quantity = event.target.elements.quantity.value;
	if (quantity < 0) {
		return false;
	}

	return true;
}

function displayOrderInfo(event, product) {
	clearElement(orderFormElement);

	const orderInfo = document.createElement('div');
	const orderTitle = document.createElement('h2');
	orderTitle.textContent = 'Інформація про замовлення';
	orderInfo.appendChild(orderTitle);

	appendInfo(orderInfo, 'Товар', product.name);
	appendInfo(
		orderInfo,
		'ПІБ покупця',
		event.target.elements.customerName.value
	);
	appendInfo(orderInfo, 'Місто', event.target.elements.city.value);
	appendInfo(
		orderInfo,
		'Склад Нової пошти',
		event.target.elements.deliveryPoint.value
	);
	appendInfo(
		orderInfo,
		'Спосіб оплати',
		event.target.elements.paymentMethod.value
	);
	appendInfo(
		orderInfo,
		'Кількість товару',
		event.target.elements.quantity.value
	);
	appendInfo(
		orderInfo,
		'Коментар до замовлення',
		event.target.elements.comment.value
	);

	orderFormElement.appendChild(orderInfo);
}

function appendInfo(container, label, text) {
	const infoParagraph = document.createElement('p');
	const strongElement = document.createElement('strong');
	strongElement.textContent = `${label}:`;
	infoParagraph.appendChild(strongElement);
	infoParagraph.appendChild(document.createTextNode(` ${text}`));
	container.appendChild(infoParagraph);
}

function resetView() {
	clearElement(productsElement);
	clearElement(productInfoElement);
	clearElement(orderFormElement);
	renderCategories();
}

function clearElement(element) {
	while (element.firstChild) {
		element.removeChild(element.firstChild);
	}
}

function createButton(
	text,
	className = 'list-group-item list-group-item-action'
) {
	const button = document.createElement('button');
	button.className = className;
	button.textContent = text;
	return button;
}

function createButtonWithIcon(
	className = 'list-group-item list-group-item-action'
) {
	const button = document.createElement('button');
	button.className = className;

	const icon = document.createElement('i');
	icon.className = 'bi bi-cart';

	const buttonText = document.createElement('span');
	buttonText.textContent = ' Купити';

	button.appendChild(icon);
	button.appendChild(buttonText);

	return button;
}

function createInput(type, id, label, defaultValue = '', min = null) {
	const inputDiv = document.createElement('div');
	inputDiv.className = 'mb-3';

	const labelElement = document.createElement('label');
	labelElement.for = id;
	labelElement.textContent = label;

	const inputElement = document.createElement('input');
	inputElement.type = type;
	inputElement.className = 'form-control';
	inputElement.id = id;
	inputElement.value = defaultValue;

	if (min !== null) {
		inputElement.min = min;
	}

	inputDiv.appendChild(labelElement);
	inputDiv.appendChild(inputElement);

	return inputDiv;
}

function createTextarea(id, label, defaultValue = '') {
	const textareaDiv = document.createElement('div');
	textareaDiv.className = 'mb-3';

	const labelElement = document.createElement('label');
	labelElement.for = id;
	labelElement.textContent = label;

	const textareaElement = document.createElement('textarea');
	textareaElement.className = 'form-control';
	textareaElement.id = id;
	textareaElement.value = defaultValue;

	textareaDiv.appendChild(labelElement);
	textareaDiv.appendChild(textareaElement);

	return textareaDiv;
}

function createSelect(id, label, options) {
	const selectDiv = document.createElement('div');
	selectDiv.className = 'mb-3';

	const labelElement = document.createElement('label');
	labelElement.for = id;
	labelElement.textContent = label;

	const selectElement = document.createElement('select');
	selectElement.className = 'form-control';
	selectElement.id = id;

	options.forEach(option => {
		const optionElement = document.createElement('option');
		optionElement.value = option;
		optionElement.textContent = option;
		selectElement.appendChild(optionElement);
	});

	selectDiv.appendChild(labelElement);
	selectDiv.appendChild(selectElement);

	return selectDiv;
}

function createRadioGroup(name, label, options) {
	const radioGroupDiv = document.createElement('div');
	radioGroupDiv.className = 'mb-3';

	const labelElement = document.createElement('label');
	labelElement.textContent = label;

	options.forEach(option => {
		const radioDiv = document.createElement('div');
		radioDiv.className = 'form-check form-check-inline';

		const radioInput = document.createElement('input');
		radioInput.type = 'radio';
		radioInput.className = 'form-check-input';
		radioInput.name = name;
		radioInput.value = option;

		const radioLabel = document.createElement('label');
		radioLabel.className = 'form-check-label';
		radioLabel.textContent = option;

		radioDiv.appendChild(radioInput);
		radioDiv.appendChild(radioLabel);

		radioGroupDiv.appendChild(radioDiv);
	});

	return radioGroupDiv;
}

renderCategories();
