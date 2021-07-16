function reverseString(str) {
	let arrayStr = str.split("");
	let reversedArray = [];

	function addToArray(array) {
		while (array.length > 0) {
			reversedArray.push(array.pop());
			addToArray(array);
		}
		return;
	}
	addToArray(arrayStr);
	return reversedArray.join("");
}

function reverseStringRecursive(str) {
	if (str === "") {
		return "";
	} else {
		return reverseStringRecursive(str.substr(1)) + str.charAt(0);
	}
}

//console.log(reverseStringRecursive("yoyo master"));
