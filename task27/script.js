'use strict';

const categories = ['Смартфони', 'Ноутбуки', 'Телевізори'];
const productsByCategory = {
	Смартфони: [
		{
			name: 'iPhone',
			description: 'Найновіший смартфон від Apple',
			price: 45000,
		},
		{
			name: 'Samsung Galaxy',
			description: 'Популярна модель від Samsung',
			price: 8000,
		},
		{
			name: 'Google Pixel',
			description: 'Смартфон з чистим Android від Google',
			price: 35000,
		},
	],
	Ноутбуки: [
		{
			name: 'MacBook Pro',
			description: 'Потужний ноутбук від Apple',
			price: 80000,
		},
		{
			name: 'Dell XPS',
			description: 'Легкий та потужний ноутбук від Dell',
			price: 25000,
		},
		{
			name: 'HP Spectre',
			description: 'Елегантний та стильний ноутбук від HP',
			price: 32000,
		},
	],
	Телевізори: [
		{
			name: 'Samsung QLED',
			description: '4K телевізор з чітким зображенням',
			price: 90000,
		},
		{
			name: 'LG OLED',
			description: 'Телевізор з технологією OLED від LG',
			price: 85500,
		},
		{
			name: 'Sony Bravia',
			description: 'Якісний та стильний телевізор від Sony',
			price: 31100,
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

	const myOrdersBtn = createButton('Мої замовлення', 'btn btn-primary mt-4');
	myOrdersBtn.addEventListener('click', renderMyOrders);
	categoriesElement.appendChild(myOrdersBtn);
}

function renderProducts(category) {
	clearElement(productsElement);
	productsElement.appendChild(productsTitle);

	productsByCategory[category].forEach(product => {
		const productElement = createButton(
			`${product.name} - Ціна: ${product.price || 'Недоступна'} грн`,
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
	productDescription.textContent = `${product.description}, Ціна: ${
		product.price || 'Недоступна'
	} грн`;

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
	orderFormTitle.textContent = 'Форма замовлення';
	orderFormElement.appendChild(orderFormTitle);

	const productInfo = document.createElement('div');
	appendInfo(productInfo, 'Назва товару', product.name);
	appendInfo(
		productInfo,
		'Опис товару',
		`${product.description}, Ціна: ${product.price || 'Недоступна'} грн`
	);

	const customerNameInput = createInput(
		'text',
		'customerName',
		'ПІБ покупця',
		'',
		true
	);
	const citySelect = createSelect(
		'city',
		'Місто',
		['Київ', 'Львів', 'Одеса'],
		true
	);
	const novaPoshtaBranchInput = createInput(
		'text',
		'novaPoshtaBranch',
		'Склад Нової пошти',
		'',
		true
	);
	const paymentMethodRadioGroup = createRadioGroup(
		'paymentMethod',
		'Спосіб оплати',
		['Післяплата', 'Оплата карткою'],
		true
	);
	const quantityInput = createInput(
		'number',
		'quantity',
		'Кількість',
		'1',
		true,
		1
	);
	const commentTextarea = createTextarea(
		'comment',
		'Коментар до замовлення',
		'',
		false
	);

	const submitButton = createButton('Замовити', 'btn btn-success');
	submitButton.addEventListener('click', () => submitOrder(product));

	orderFormElement.appendChild(productInfo);
	orderFormElement.appendChild(customerNameInput);
	orderFormElement.appendChild(citySelect);
	orderFormElement.appendChild(novaPoshtaBranchInput);
	orderFormElement.appendChild(paymentMethodRadioGroup);
	orderFormElement.appendChild(quantityInput);
	orderFormElement.appendChild(commentTextarea);
	orderFormElement.appendChild(submitButton);
}

function submitOrder(product) {
	const customerName = document.getElementById('customerName').value;
	const city = document.getElementById('city').value;
	const novaPoshtaBranch = document.getElementById('novaPoshtaBranch').value;
	const paymentMethod = document.querySelector(
		'input[name="paymentMethod"]:checked'
	);
	const quantity = document.getElementById('quantity').value;

	if (
		!customerName ||
		!city ||
		!novaPoshtaBranch ||
		!paymentMethod ||
		!quantity
	) {
		displayValidationMessage();
		return;
	}

	const order = {
		product: product.name,
		quantity: quantity,
		date: new Date().toLocaleString(),
		price: calculateTotalPrice(product.price, quantity),
		customerName: customerName,
		city: city,
		novaPoshtaBranch: novaPoshtaBranch,
		paymentMethod: paymentMethod.value,
	};

	const savedOrders = JSON.parse(localStorage.getItem('orders')) || [];
	savedOrders.push(order);
	localStorage.setItem('orders', JSON.stringify(savedOrders));

	renderMyOrders();
}

function displayValidationMessage() {
	const validationMessage = document.createElement('p');
	validationMessage.style.color = 'red';
	validationMessage.textContent =
		"Будь ласка, заповніть всі обов'язкові поля форми.";
	orderFormElement.appendChild(validationMessage);
	setTimeout(() => {
		validationMessage.remove();
	}, 3000);
}

function calculateTotalPrice(price, quantity) {
	return price * quantity;
}

function renderMyOrders() {
	clearElement(categoriesElement);
	clearElement(productsElement);
	clearElement(productInfoElement);
	clearElement(orderFormElement);

	const myOrdersTitle = document.createElement('h2');
	myOrdersTitle.textContent = 'Мої замовлення';
	categoriesElement.appendChild(myOrdersTitle);

	const savedOrders = JSON.parse(localStorage.getItem('orders')) || [];

	if (savedOrders.length === 0) {
		const noOrdersMessage = document.createElement('p');
		noOrdersMessage.textContent = 'У вас немає збережених замовлень.';
		categoriesElement.appendChild(noOrdersMessage);
	} else {
		savedOrders.forEach((order, index) => {
			const orderElement = createButton(
				`Дата: ${order.date}, Ціна: ${order.price} грн`,
				'list-group-item list-group-item-action'
			);
			orderElement.addEventListener('click', () =>
				renderOrderDetails(order, index)
			);
			categoriesElement.appendChild(orderElement);
		});
	}
}

function renderOrderDetails(order, index) {
	clearElement(categoriesElement);

	const orderDetailsTitle = document.createElement('h2');
	orderDetailsTitle.textContent = 'Деталі замовлення';
	categoriesElement.appendChild(orderDetailsTitle);

	const orderInfo = document.createElement('div');
	appendInfo(orderInfo, 'Дата', order.date);
	appendInfo(orderInfo, 'Ціна', `${order.price} грн`);
	appendInfo(orderInfo, 'ПІБ покупця', order.customerName);
	appendInfo(orderInfo, 'Місто', order.city);
	appendInfo(orderInfo, 'Склад Нової пошти', order.novaPoshtaBranch);
	appendInfo(orderInfo, 'Спосіб оплати', order.paymentMethod);
	appendInfo(orderInfo, 'Кількість', order.quantity);

	const deleteButton = createButton('Видалити замовлення', 'btn btn-danger');
	deleteButton.addEventListener('click', () => deleteOrder(index));
	orderInfo.appendChild(deleteButton);

	categoriesElement.appendChild(orderInfo);
}

function deleteOrder(index) {
	const savedOrders = JSON.parse(localStorage.getItem('orders')) || [];
	savedOrders.splice(index, 1);
	localStorage.setItem('orders', JSON.stringify(savedOrders));
	renderMyOrders();
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

function createInput(
	type,
	id,
	label,
	defaultValue = '',
	isRequired = false,
	min = null
) {
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

	if (isRequired) {
		inputElement.required = true;
	}

	if (min !== null) {
		inputElement.min = min;
	}

	inputDiv.appendChild(labelElement);
	inputDiv.appendChild(inputElement);

	return inputDiv;
}

function createTextarea(id, label, defaultValue = '', required = false) {
	const textareaDiv = document.createElement('div');
	textareaDiv.className = 'mb-3';

	const labelElement = document.createElement('label');
	labelElement.for = id;
	labelElement.textContent = label;

	const textareaElement = document.createElement('textarea');
	textareaElement.className = 'form-control';
	textareaElement.id = id;
	textareaElement.value = defaultValue;
	textareaElement.required = required;

	textareaDiv.appendChild(labelElement);
	textareaDiv.appendChild(textareaElement);

	return textareaDiv;
}

function createSelect(id, label, options, required = false) {
	const selectDiv = document.createElement('div');
	selectDiv.className = 'mb-3';

	const labelElement = document.createElement('label');
	labelElement.for = id;
	labelElement.textContent = label;

	const selectElement = document.createElement('select');
	selectElement.className = 'form-control';
	selectElement.id = id;
	selectElement.required = required;

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

function createRadioGroup(name, label, options, required = false) {
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
		radioInput.required = required;

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
