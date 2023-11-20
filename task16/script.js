'use strict';

class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	displayInfo() {
		console.log(`Ім'я: ${this.name}, Вік: ${this.age}`);
	}
}

class Car {
	constructor(brand, model, year, licensePlate, owner) {
		this.brand = brand;
		this.model = model;
		this.year = year;
		this.licensePlate = licensePlate;
		this.setOwner(owner);
	}

	setOwner(owner) {
		if (owner.age >= 18) {
			this.owner = owner;
		} else {
			console.log('Власник повинен бути старше 18 років.');
		}
	}

	displayInfo() {
		console.log(
			`Марка: ${this.brand}, Модель: ${this.model}, Рік: ${this.year}, Номерний знак: ${this.licensePlate}`
		);
		if (this.owner) {
			console.log('Інформація про власника:');
			this.owner.displayInfo();
		} else {
			console.log('Автомобіль немає власника.');
		}
	}
}

const person1 = new Person('Артур', 26);
const person2 = new Person('Олена', 17);

const car1 = new Car('Geely', 'MK', 2008, 'ВХ1234ЕР', person1);
const car2 = new Car('Honda', 'Civic', 2022, 'ВХ5678ВС', person2);

car1.displayInfo();
console.log('---------------------');
car2.displayInfo();
