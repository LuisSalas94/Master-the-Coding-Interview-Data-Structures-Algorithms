class Node {
	constructor(value) {
		this.left = null;
		this.right = null;
		this.value = value;
	}
}

class BinarySearchTree {
	constructor(root) {
		this.root = null;
	}

	insert(value) {
		const newNode = new Node(value);
		//if empty
		if (this.root === null) {
			this.root = newNode;
		} else {
			let currentNode = this.root;
			//traverse node until place is found
			while (true) {
				if (value < currentNode.value) {
					//left
					if (!currentNode.left) {
						currentNode.left = newNode;
						return this;
					}
					currentNode = currentNode.left;
				} else {
					//right
					if (!currentNode.right) {
						currentNode.right = newNode;
						return this;
					}
					currentNode = currentNode.right;
				}
			}
		}
	}

	lookUp(value) {}
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(1);
console.log(tree);

JSON.stringify(traverse(tree.root));

function traverse(node) {
	const tree = { value: node.value };
	tree.left = node.left === null ? null : traverse(node.left);
	tree.right = node.right === null ? null : traverse(node.right);
	return tree;
}
