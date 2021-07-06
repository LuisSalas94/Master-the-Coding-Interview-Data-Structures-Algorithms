/* class Array {
	constructor(length, data) {
		this.length = 0;
		this.data = {};
	}

	get(index) {
		return this.data[index];
	}

	push(item) {
		this.data[this.length] = item;
		this.length++;
	}

	pop() {
		const lastItem = this.data[this.length - 1];
		delete this.data[this.length - 1];
		this.length--;
		return lastItem;
	}

	delete(index) {
		const item = this.data[index];
		this.shifItems(index);
		return item;
	}

	shifItems(index) {
		for (let i = index; i < this.length - 1; i++) {
			this.data[index] = this.data[index + 1];
		}

		delete this.data[this.length - 1];
		this.length--;
	}
}

const newArray = new Array();
newArray.push("hi");
newArray.push("how");
newArray.push("are");
newArray.push("you");
newArray.delete(0);
console.log(newArray);
 */

/* function a(n) {
	let count = 0;
	for (let i = 0; i < n; i++) {
		count += 1;
	}
	count += 3;
	return count;
}

console.log(a(2)); */
