function fibonacciRe(n) {
	if (n < 2) return n;
	return fibonacciRe(n - 1) + fibonacciRe(n - 2);
}

function fibonacciItera(n) {
	let arr = [0, 1];
	for (let i = 2; i < n + 1; i++) {
		arr.push(arr[i - 2] + arr[i - 1]);
	}
	return arr[n];
}

//console.log(fibonacciItera(10));

//console.log(fibonacciRe(6));
