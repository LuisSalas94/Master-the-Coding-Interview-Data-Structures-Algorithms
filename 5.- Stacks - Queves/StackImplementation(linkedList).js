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

	//add node to the top
	push(value) {
		const newNode = new Node(value);
		if (this.length == 0) {
			this.top = newNode;
			this.bottom = newNode;
		} else {
			const holdingPointer = this.top;
			this.top = newNode;
			this.top.next = holdingPointer;
		}
		this.length++;
	}

	//top element
	peek() {
		return this.top.value;
	}

	//remove from the top
	pop() {
		if (!this.top) return null;

		if (this.top === this.bottom) {
			this.bottom = null;
		}

		this.top = this.top.next;
		this.length--;
		return this;
	}
}

const myStack = new Stack();
myStack.push("google");
myStack.push("udemy");
myStack.push("discord");
//console.log(myStack.peek());
//console.log(myStack);
console.log(myStack.pop());
