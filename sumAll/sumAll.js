const sumAll = function(num1, num2) {
	let sum = 0;

	if (typeof(num1) != 'number' || typeof(num2) != 'number' 
		|| num1 < 0 || num2 < 0) {
		return "ERROR";
	}

	if (num1 <= num2) {
		for (i = num1; i <= num2; i++){
			sum = sum + i; 	
		}
	}
	else if (num1 >= num2) {
		for (i = num2; i <= num1; i++){
			sum = sum + i;
		}
	}
	else {
		return "ERROR";
	}

	return sum;

}

module.exports = sumAll
