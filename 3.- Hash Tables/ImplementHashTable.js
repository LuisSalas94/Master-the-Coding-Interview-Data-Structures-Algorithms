class HashTable {
	constructor(size, data) {
		this.data = new Array(size);
	}

	//let hash private
	_hash(key) {
		let hash = 0;
		for (let i = 0; i < key.length; i++) {
			hash = (hash + key.charCodeAt(i) * i) % this.data.length;
		}
		return hash;
	}

	set(key, value) {
		let address = this._hash(key);
		if (!this.data[address]) {
			this.data[address] = [];
		}
		this.data[address].push([key, value]);
		console.log(address);
		return this.data;
	}

	get(key) {
		let address = this._hash(key);
		const currentBucket = this.data[address];
		if (currentBucket) {
			for (let i = 0; i < currentBucket.length; i++) {
				if (currentBucket[i][0] === key) {
					return currentBucket[i][1];
				}
			}
		}
		return undefined;
	}

	//iterate
	keys() {
		const keysArray = [];
		for (let i = 0; i < this.data.length; i++) {
			if (this.data[i]) {
				keysArray.push(this.data[i][0][0]);
			}
		}
		return keysArray;
	}
}

const myHashTable = new HashTable(50);
myHashTable.set("grapes", 1000);
myHashTable.set("apples", 54);
myHashTable.set("oranges", 2);
console.log(myHashTable.get("apples"));
console.log(myHashTable.keys());
console.log(myHashTable._hash("apples"));
