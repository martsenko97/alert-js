'use strict';

class ImageSlider {
	constructor(images) {
		this.images = images;
		this.currentIndex = 0;
		this.container = document.createElement('div');
		this.container.className =
			'container mt-5 text-center d-flex justify-content-center align-items-center';

		this.prevButton = this.createButton('Prev', 'prev', '←');
		this.container.appendChild(this.prevButton);

		this.imageElement = document.createElement('img');
		this.imageElement.className = 'img-fluid mx-2';
		this.imageElement.style.width = '400px';
		this.container.appendChild(this.imageElement);

		this.nextButton = this.createButton('Next', 'next', '→');
		this.container.appendChild(this.nextButton);

		document.body.appendChild(this.container);

		this.imageElement.addEventListener('load', () => {
			this.imageElement.style.width = '400px';
		});

		this.prevButton.addEventListener('click', () => {
			this.currentIndex =
				(this.currentIndex - 1 + this.images.length) % this.images.length;
			this.updateImage();
			this.updateButtonVisibility();
		});

		this.nextButton.addEventListener('click', () => {
			this.currentIndex = (this.currentIndex + 1) % this.images.length;
			this.updateImage();
			this.updateButtonVisibility();
		});

		this.updateButtonVisibility();

		this.updateImage();
	}

	createButton(label, direction, arrow) {
		const button = document.createElement('button');
		button.type = 'button';
		button.className = `btn btn-secondary ${direction}`;
		button.innerText = `${arrow} ${label}`;
		return button;
	}

	updateImage() {
		this.imageElement.src = this.images[this.currentIndex];
		this.imageElement.alt = `Image ${this.currentIndex + 1}`;
	}

	updateButtonVisibility() {
		this.prevButton.style.display = this.currentIndex === 0 ? 'none' : 'block';
		this.nextButton.style.display =
			this.currentIndex === this.images.length - 1 ? 'none' : 'block';
	}
}

document.addEventListener('DOMContentLoaded', function () {
	const images = [
		'images/image1.jpg',
		'images/image2.jpg',
		'images/image3.jpg',
		'images/image4.jpg',
		'images/image5.jpg',
	];

	const slider = new ImageSlider(images);
});
