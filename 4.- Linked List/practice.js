class Node {
	constructor(value, next) {
		this.value = value;
		this.next = null;
	}
}

class LinkedList {
	constructor(value, tail, length, head, next) {
		this.head = {
			value: value,
			next: null,
		};
		this.tail = this.head;
		this.length = 1;
	}

	append(value) {
		const newNode = new Node(value);
		this.tail.next = newNode;
		this.tail = newNode;
		this.length++;
	}

	preppend(value) {
		const newNode = new Node(value);
		newNode.next = this.head;
		this.head = newNode;
		this.length++;
	}

	insert(index, value) {
		if (index >= this.length) return this.append(value);
		const newNode = new Node(value);
		const leader = this.traverseIndex(index - 1);
		const nextPointer = leader.next;
		leader.next = newNode;
		newNode.next = nextPointer;
		this.length++;
		return this.printList();
	}

	remove(index) {
		const leader = this.traverseIndex(index - 1);
		const unwanterNode = leader.next;
		leader.next = unwanterNode.next;
		this.length--;
		return this.printList();
	}

	traverseIndex(index) {
		let counter = 0;
		let currentNode = this.head;
		while (counter !== index) {
			currentNode = currentNode.next;
			counter++;
		}
		return currentNode;
	}

	printList() {
		let array = [];
		let currentNode = this.head;

		while (currentNode !== null) {
			array.push(currentNode.value);
			currentNode = currentNode.next;
		}
		return array;
	}
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(20);
myLinkedList.append(30);
myLinkedList.preppend(5);
myLinkedList.insert(2, 15);
console.log(myLinkedList.printList());
