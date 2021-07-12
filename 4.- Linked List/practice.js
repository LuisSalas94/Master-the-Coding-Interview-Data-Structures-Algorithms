class Node {
	constructor(value, next) {
		this.value = value;
		this.next = next;
	}
}

class LinkedList {
	constructor(value, head, next, tail, length) {
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
		const leader = this.traverseIndex(2 - 1);
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
		while (currentNode != null) {
			array.push(currentNode.value);
			currentNode = currentNode.next;
		}

		return array;
	}
}

const myNewLinkedList = new LinkedList(10);
myNewLinkedList.append(20);
myNewLinkedList.append(30);
myNewLinkedList.append(40);
myNewLinkedList.prepend(5);
//myNewLinkedList.insert(2, 15);
myNewLinkedList.remove(2);

//console.log(myNewLinkedList.printList());
