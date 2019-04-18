const reverseString = function(inputString) {
	let reverseArray = [];
	
	for(i = 0; i <= inputString.length; i++){
		reverseArray.push(inputString.charAt(inputString.length - i));
	}
	
	let reversedString = "";
	
	for(i = 0; i < reverseArray.length; i++){
		reversedString = reversedString + reverseArray[i];
	}
	
	return reversedString;
}

module.exports = reverseString
