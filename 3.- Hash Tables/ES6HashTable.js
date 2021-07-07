const hash = (key, size) => {
	let hashedkey = 0;
	for (let i = 0; i < key.length; i++) {
		hashedkey += key.charCodeAt(i);
	}
	return hashedkey % size;
};

class HashTable {
	constructor() {
		this.size = 20;
		this.buckets = Array(this.size);

		//populate each bucket with a MAP()
		for (let i = 0; i < this.buckets.length; i++) {
			this.buckets[i] = new Map();
		}
	}

	insert(key, value) {
		let idx = hash(key, this.size);
		this.buckets[idx].set(key, value);
	}

	remove(key) {
		let idx = hash(key, this.size);
		let deleted = this.buckets[idx].get(key);
		this.buckets[idx].delete(key);
		return deleted;
	}

	search(key) {
		let idx = hash(key, this.size);
		return this.buckets[idx].get(key);
	}
}

const hashTable = new HashTable();
hashTable.insert("serena", "moon");
hashTable.insert("amy", "mercury");
hashTable.insert("rei", "mars");
hashTable.insert("lita", "jupiter");
hashTable.insert("mina", "venus");
hashTable.insert("darien", "tuxedo mask");

console.log(hashTable.search("rei"));
console.log(hashTable.search("lita"));
console.log(hashTable.search("serena"));

hashTable.remove("darien");
hashTable.remove("mina");
console.log(hashTable);