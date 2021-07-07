//Google Question
/* 
Given an array = [2,5,1,2,3,5,1,2,4]
It should return 2

Given an array = [2,1,1,2,3,5,1,2,4]
It should return 1

Given an array = [2,3,4,5]
It should return undefined
*/

function repeat(arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] === arr[j]) {
				return arr[i];
			}
		}
	}
	return undefined;
}

//let arr = [2, 1, 1, 2, 3, 5, 1, 2, 4];
//console.log(repeat(arr));

function repeat2(arr) {
	let map = {};
	for (let i = 0; i < arr.length; i++) {
		if (map[arr[i]] !== undefined) {
			return arr[i];
		} else {
			map[arr[i]] = i;
		}
	}
	console.log(map);
	return undefined;
}

let arr = [2, 5, 5, 2, 3, 5, 1, 2, 4];
console.log(repeat(arr));
