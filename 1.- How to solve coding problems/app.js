//Interview Question 2
const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "a"];

/* function containsItem1(arr1, arr2) {
	let map = {};

	for (let i = 0; i < arr1.length; i++) {
		if (!map[arr1[i]]) {
			const item = arr1[i];
			map[item] = true;
		}
	}

	for (let j = 0; j < arr2.length; j++) {
		if (map[arr2[j]]) {
			return true;
		}
	}
	return false;
}

console.log(containsItem1(array1, array2)); */

//JS Solution
function containsItem2(arr1, arr2) {
	return arr1.some((item) => {
		return arr2.includes(item);
	});
}

console.log(containsItem2(array1, array2));
