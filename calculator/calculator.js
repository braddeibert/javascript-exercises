function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function sum([...args]) {
	let sum = args.reduce(function(prev, cur){
		return prev + cur;
	}, 0);
	
	return sum;
}

function multiply([...args]) {
	let product = args.reduce(function(prev, cur){
		return prev*cur;
	}, 1);

	return product;
}

function power(a, b) {
	return a ** b;
}

function factorial(a) {
	let factorial = a;
	while (a > 1) {
		factorial = factorial * (a-1);
		a--;
	}

	if (a == 0) {
		return 1;
	}

	return factorial;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial
}