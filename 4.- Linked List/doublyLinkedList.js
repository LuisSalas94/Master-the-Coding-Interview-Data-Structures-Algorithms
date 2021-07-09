class Node {
	constructor(value, next, prev) {
		this.value = value;
		this.next = null;
		this.prev = null;
	}
}

class DoublyLinkedList {
	constructor(value, head, next, tail, length) {
		this.head = {
			value: value,
			next: null,
			prev: null,
		};
		this.tail = this.head;
		this.length = 1;
	}

	append(value) {
		const newNode = new Node(value);
		newNode.prev = this.tail;
		this.tail.next = newNode;
		this.tail = newNode;
		this.length++;
	}

	prepend(value) {
		const newNode = new Node(value);
		newNode.next = this.head;
		this.head.prev = newNode;
		this.head = newNode;
		this.length++;
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

	insert(index, value) {
		if (index >= this.length) return this.append(value);
		const newNode = new Node(value);
		//get the previous node before desired new node
		const leader = this.traverseToIndex(index - 1);
		const follower = leader.next;
		leader.next = newNode;
		newNode.prev = leader;
		newNode.next = follower;
		follower.prev = newNode;
		this.length++;
		return this.printList();
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

	remove(index) {
		const leader = this.traverseToIndex(index - 1);
		const unwantedNode = leader.next;
		leader.next = unwantedNode.next;
		this.length--;
		return this.printList();
	}
}

const myDoublyLinkedList = new DoublyLinkedList(10);
myDoublyLinkedList.append(5);
myDoublyLinkedList.append(16);
myDoublyLinkedList.prepend(1);
myDoublyLinkedList.insert(2, 99);
console.log(myDoublyLinkedList.printList());
