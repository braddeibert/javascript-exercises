const repeatString = function(inputString, repeatCount) {
	let newString = inputString;

	    if (repeatCount < 0) {
		            newString = "ERROR";
		        }
	else if (repeatCount == 0) {
		newString = "";
	}
	    else {
		            for (i = 1; i < repeatCount; i++) {
				                newString = newString + inputString;
				            }
		        }

	    return newString;
}

module.exports = repeatString
