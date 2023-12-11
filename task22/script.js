'use strict';

function getRandomImage() {
	const imageFiles = ['1.jpg', '2.jpg', '3.jpg', '4.jpeg', '5.jpg'];

	return new Promise((resolve, reject) => {
		const randomIndex = Math.floor(Math.random() * imageFiles.length);
		const randomImage = imageFiles[randomIndex];
		const imgElement = document.createElement('img');
		imgElement.onload = () => resolve(imgElement);
		imgElement.onerror = reject;
		imgElement.src = `images/${randomImage}`;
	});
}

getRandomImage()
	.then(img => {
		img.classList.add('img-fluid', 'rounded', 'mx-auto', 'd-block');
		img.style.width = '500px';

		document.body.appendChild(img);
	})
	.catch(error => {
		console.error('Сталась помилка при завантаженні зображення:', error);
	});
