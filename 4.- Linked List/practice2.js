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
			tail: null,
		};
		this.tail = this.head;
		this.length = 1;
	}

	//helper methods
	printList() {
		const array = [];
		let currentNode = this.head;
		while (currentNode != null) {
			array.push(currentNode.value);
			currentNode = currentNode.next;
		}

		return array;
	}

	traverseToIndex(index) {
		let counter = 0;
		let currentNode = this.head;
		while (counter !== index) {
			currentNode = currentNode.next;
			counter++;
		}
		return currentNode;
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
		const leaderNode = this.traverseToIndex(index - 1);
		const nextPointer = leaderNode.next;
		leaderNode.next = newNode;
		newNode.next = nextPointer;
		this.length++;
		return this.printList();
	}
}

const myNewLinkedList = new newLinkedList(8);
myNewLinkedList.append(10);
myNewLinkedList.prepend(4);
myNewLinkedList.append(12);
myNewLinkedList.append(14);
myNewLinkedList.append(18);
myNewLinkedList.insert(5, 16);
console.log(myNewLinkedList.printList());
