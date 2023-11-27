'use strict';

class DoubleNode {
	constructor(value, previous = null, next = null) {
		this.value = value;
		this.previous = previous;
		this.next = next;
	}
}

class MyDoublyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.size = 0;
	}

	addNode(value) {
		const newNode = new DoubleNode(value);

		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			newNode.previous = this.tail;
			this.tail.next = newNode;
			this.tail = newNode;
		}

		this.size++;
	}

	removeNode(value) {
		let current = this.head;

		while (current) {
			if (current.value === value) {
				if (current.previous) {
					current.previous.next = current.next;
				} else {
					this.head = current.next;
				}

				if (current.next) {
					current.next.previous = current.previous;
				} else {
					this.tail = current.previous;
				}

				this.size--;
				return;
			}

			current = current.next;
		}
	}

	findNode(value) {
		let current = this.head;

		while (current) {
			if (current.value === value) {
				return current;
			}

			current = current.next;
		}

		return null;
	}

	convertToArray() {
		const result = [];
		let current = this.head;

		while (current) {
			result.push({
				value: current.value,
				previous: current.previous,
				next: current.next ? current.next.value : null,
			});
			current = current.next;
		}

		return result;
	}
}

const myLinkedList = new MyDoublyLinkedList();
myLinkedList.addNode('data1');
myLinkedList.addNode('data2');
myLinkedList.addNode('data3');

console.log('Size:', myLinkedList.size);
console.log('Head:', myLinkedList.head.value);
console.log('Tail:', myLinkedList.tail.value);

myLinkedList.removeNode('data2');
console.log('Size after removal:', myLinkedList.size);

const foundNode = myLinkedList.findNode('data1');
console.log('Search result:', foundNode);

const arrayRepresentation = myLinkedList.convertToArray();
console.log('Array representation:', arrayRepresentation);
