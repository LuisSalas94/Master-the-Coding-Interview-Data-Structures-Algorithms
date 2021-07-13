class Node {
	constructor(value) {
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

	//get first element
	peek() {
		return this.first;
	}

	//add
	enqueve(value) {
		const newNode = new Node(value);
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
	dequeve(value) {
		if (!this.first) {
			return null;
		}

		if (this.first === this.last) {
			this.last = null;
		}

		const holdingPointer = this.first;
		this.first = this.first.next;
		this.length--;
		return this;
	}
}

const myQueve = new Queve();
myQueve.enqueve("maria");
myQueve.enqueve("claudia");
myQueve.enqueve("paola");
myQueve.enqueve("milagros");
myQueve.dequeve();
myQueve.dequeve();
myQueve.dequeve();
console.log(myQueve);
