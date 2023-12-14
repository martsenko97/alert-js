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

document.body.appendChild(container);
container.appendChild(row);
row.appendChild(categoriesElement);
row.appendChild(productsElement);
row.appendChild(productInfoElement);

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
	buyButton.addEventListener('click', () => handleBuy(product));

	productInfoElement.appendChild(productInfoText);
	productInfoElement.appendChild(buyButton);
}

function handleBuy(product) {
	alert(`Товар "${product.name}" куплений!`);
	resetView();
}

function resetView() {
	clearElement(productsElement);
	clearElement(productInfoElement);
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

renderCategories();
