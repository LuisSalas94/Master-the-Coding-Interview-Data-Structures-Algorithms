class Node {
	constructor(value, next) {
		this.value = value;
		this.next = null;
	}
}

class newLinkedList {
	constructor(value, next, head, tail, length) {
		this.head = {
			value: value,
			next: null,
		};
		this.tail = this.head;
		this.length = 1;
	}

	//helper methods
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
		const array = [];
		let currentNode = this.head;
		while (currentNode != null) {
			array.push(currentNode.value);
			currentNode = currentNode.next;
		}
		return array;
	}

	append(value) {
		const newNode = new Node(value);
		this.tail.next = newNode;
		this.tail = newNode;
		this.length++;
	}

	prepend(value) {
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
		const unwantedNode = leader.next;
		leader.next = unwantedNode.next;
		this.length--;
		return this.printList();
	}
}

const myNewLinkedList = new newLinkedList(10);
myNewLinkedList.append(8);
myNewLinkedList.append(16);
myNewLinkedList.append(18);
myNewLinkedList.prepend(8);
myNewLinkedList.insert(2, 12);
myNewLinkedList.remove(1);
console.log(myNewLinkedList.printList());
