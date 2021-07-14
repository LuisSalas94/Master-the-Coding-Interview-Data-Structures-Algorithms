class Node {
	constructor(value, next) {
		this.value = value;
		this.next = null;
	}
}

class Stack {
	constructor(top, bottom, length) {
		this.top = null;
		this.bottom = null;
		this.length = 0;
	}

	push(value) {
		const newNode = new Node(value);
		//if empty
		if (this.length === 0) {
			this.top = newNode;
			this.bottom = newNode;
		} else {
			const tempPointer = this.top;
			this.top = newNode;
			this.top.next = tempPointer;
		}
		this.length++;
	}

	peek() {
		return this.top.value;
	}

	pop() {
		if (!this.top) return null;
		if (this.top === this.bottom) {
			this.bottom = null;
		}
		this.top = this.top.next;
		this.length--;
	}

	printList() {
		const array = [];
		let currentTop = this.top;
		while (currentTop !== null) {
			array.push(currentTop.value);
			currentTop = currentTop.next;
		}
		return array;
	}
}

const myStack = new Stack();
myStack.push(10);
myStack.push(20);
myStack.push(30);
console.log(myStack.printList());
//console.log(myStack);
