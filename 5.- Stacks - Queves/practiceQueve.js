class Node {
	constructor(value, next) {
		this.value = value;
		this.next = null;
	}
}

class Queve {
	constructor(first, last, length) {
		this.first = null;
		this.last = null;
		this.length = 0;
	}

	//add
	enqueve(value) {
		const newNode = new Node(value);
		//if empty
		if (this.length === 0) {
			this.first = newNode;
			this.last = newNode;
		} else {
			this.last.next = newNode;
			this.last = newNode;
		}
		this.length++;
	}

	//remove
	dequeve() {
		if (!this.first) {
			return null;
		}

		if (this.first === this.last) {
			this.last = null;
		}

		const tempPointer = this.first;
		this.first = this.first.next;
		this.length--;
	}

	//first element
	peek() {
		return this.first.value;
	}

	printList() {
		const array = [];
		let currentFirst = this.first;
		while (currentFirst !== null) {
			array.push(currentFirst.value);
			currentFirst = currentFirst.next;
		}
		return array;
	}
}

const myQueve = new Queve();
myQueve.enqueve(10);
myQueve.enqueve(20);
myQueve.enqueve(30);
myQueve.dequeve();
console.log(myQueve.printList());
