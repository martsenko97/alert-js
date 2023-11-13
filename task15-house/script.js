'use strict';

function Person(name, gender) {
	this.name = name;
	this.gender = gender;
}

function Flat() {
	this.residents = [];
}

Flat.prototype.addResident = function (person) {
	this.residents.push(person);
};

function House(maxFlats) {
	this.flats = [];
	this.maxFlats = maxFlats;
}

House.prototype.addFlat = function (flat) {
	if (this.flats.length < this.maxFlats) {
		this.flats.push(flat);
	} else {
		console.log('Maximum number of flats reached in the house.');
	}
};

const person1 = new Person('Artur', 'male');
const person2 = new Person('Olena', 'female');
const person3 = new Person('Alice', 'female');

const flat1 = new Flat();
flat1.addResident(person1);

const flat2 = new Flat();
flat2.addResident(person2);

const flat3 = new Flat();
flat3.addResident(person3);

const house = new House(3);

house.addFlat(flat1);
house.addFlat(flat2);
house.addFlat(flat3);

console.log(house);
