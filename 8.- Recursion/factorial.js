function findFactoriaIterative(number) {
	let answer = 1;

	for (let i = 1; i <= number; i++) {
		answer *= i;
	}
	return answer;
}

function findFactoriaRecursive(number) {
	if (number === 1) {
		return 1;
	}

	return number * findFactoriaRecursive(number - 1);
}

console.log(findFactoriaRecursive(2));
