class Node {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.size = 0;
	}

	//Insert first node
	insertFirst(data) {
		this.head = new Node(data, this.head);
		this.size++;
	}

	//Insert last node
	insertLast(data) {
		let node = new Node(data);
		let current;
		//if empty, make head
		if (!this.head) {
			this.head = node;
		} else {
			current = this.head;
			while (current.next) {
				current = current.next;
			}
			current.next = node;
		}
		this.size++;
	}

	//Insert at index
	insertAt(data, index) {
		//if index is out of range
		if (index > 0 && index > this.size) return;

		//if first index
		if (index === 0) {
			this.head = new Node(data, this.head);
			return;
		}

		const node = new Node(data);
		let current, previous;
		//set current to first
		current = this.head;
		let count = 0;
		while (count < index) {
			previous = current; //Node before index
			count++;
			current = current.next;
		}
		node.next = current;
		previous.next = node;
		this.size++;
	}

	//Get at index
	getAt(index) {
		let current = this.head;
		let count = 0;
		while (current) {
			if (count == index) {
				console.log(current.data);
			}
			count++;
			current = current.next;
		}
		return null;
	}

	//Remove at index
	removeAt(index) {
		if (index > 0 && index > this.size) {
			return;
		}
		let current = this.head;
		let previous;
		let count = 0;
		if (index === 0) {
			this.head = current.next;
		} else {
			while (count < index) {
				count++;
				previous = current;
				current = current.next;
			}
			previous.next = current.next;
		}
		this.size--;
	}

	//Print list data
	printList() {
		let array = [];
		let current = this.head;
		while (current != null) {
			array.push(current.data);
			current = current.next;
		}
		return array;
	}
}

const myLinkedList = new LinkedList(100);
myLinkedList.insertFirst(100);
myLinkedList.insertFirst(200);
myLinkedList.insertFirst(300);
myLinkedList.insertLast(400);
myLinkedList.insertAt(500, 2);
myLinkedList.removeAt(2);
console.log(myLinkedList.printList());
