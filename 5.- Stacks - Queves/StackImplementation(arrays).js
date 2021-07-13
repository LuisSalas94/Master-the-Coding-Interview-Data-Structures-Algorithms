class Stack {
	constructor() {
		this.array = [];
	}

	//top element
	peek() {
		return this.array[this.array.length - 1];
	}

	//add node to the top
	push(value) {
		this.array.push(value);
		return this;
	}

	//remove from the top
	pop() {
		this.array.pop();
		return this;
	}
}

const myStack = new Stack();
myStack.push("google");
myStack.push("udemy");
myStack.push("discord");
myStack.pop();
//console.log(myStack.peek());
console.log(myStack);
