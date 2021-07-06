function mergeSortedArrays(array1, array2) {
	const mergedArray = [];

	let array1FirstItem = array1[0];
	let array2FirstItem = array2[0];

	let i = 1;
	let j = 1;

	if (array1.length === 0) return array2;
	if (array2.length === 0) return array1;

	while (array1FirstItem || array2FirstItem) {
		if (!array2FirstItem || array1FirstItem < array2FirstItem) {
			mergedArray.push(array1FirstItem);
			array1FirstItem = array1[i];
			i++;
		} else {
			mergedArray.push(array2FirstItem);
			array2FirstItem = array2[j];
			j++;
		}
	}

	return mergedArray;
}

console.log(mergeSortedArrays([0, 4, 5, 6], [54, 3, 7]));
