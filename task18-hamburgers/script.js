'use strict';

class Hamburger {
	constructor(size, stuffing) {
		this.size = size;
		this.stuffing = stuffing;
		this.toppings = [];
	}

	static SIZES = {
		SMALL: { price: 50, calories: 20 },
		LARGE: { price: 100, calories: 40 },
	};

	static STUFFINGS = {
		CHEESE: { price: 10, calories: 20 },
		SALAD: { price: 20, calories: 5 },
		POTATO: { price: 10, calories: 15 },
	};

	static TOPPINGS = {
		MAYO: { price: 20, calories: 5 },
		SAUCE: { price: 15, calories: 0 },
	};

	addTopping(topping) {
		this.toppings.push(topping);
	}

	calculate(type) {
		let total = 0;

		if (type === 'price') {
			total += Hamburger.SIZES[this.size].price;
			total += Hamburger.STUFFINGS[this.stuffing].price;
			this.toppings.forEach(topping => {
				total += Hamburger.TOPPINGS[topping].price;
			});
		} else if (type === 'calories') {
			total += Hamburger.SIZES[this.size].calories;
			total += Hamburger.STUFFINGS[this.stuffing].calories;
			this.toppings.forEach(topping => {
				if (Hamburger.TOPPINGS[topping]) {
					total += Hamburger.TOPPINGS[topping].calories;
				}
			});
		}
		return total;
	}

	calculatePrice() {
		return this.calculate('price');
	}

	calculateCalories() {
		return this.calculate('calories');
	}
}

let hamburger = new Hamburger('SMALL', 'CHEESE');
hamburger.addTopping('MAYO');

console.log('Calories: ' + hamburger.calculateCalories());
console.log('Price: ' + hamburger.calculatePrice());

hamburger.addTopping('SAUCE');
console.log('Price with sauce: ' + hamburger.calculatePrice());
