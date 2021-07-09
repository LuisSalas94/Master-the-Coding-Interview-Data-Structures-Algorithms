class Node {
	constructor(value, next) {
		this.value = value;
		this.next = null;
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
		/* const newNode = {
			value: value,
			next: null,
		}; */
		const newNode = new Node(value);
		newNode.next = this.head;
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
		const nextPointer = leader.next;
		leader.next = newNode;
		newNode.next = nextPointer;
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

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
//console.log(myLinkedList.printList());
myLinkedList.remove(2);
console.log(myLinkedList.printList());
//console.log(myLinkedList.traverseToIndex(2));
