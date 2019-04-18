const palindromes = function(inputString) {
    inputString = inputString.toLowerCase();
    
    let bareString = "";
    for (i = 0; i < inputString.length; i++) {
        if (inputString.charCodeAt(i) > 96 && inputString.charCodeAt(i) < 123) {
            bareString = bareString + inputString.charAt(i);
        }
    }

    let reversedString = "";
    for (i = bareString.length; i >= 0; i--) {
        reversedString = reversedString + bareString.charAt(i);
    }

    if (bareString == reversedString) {
        return true;
    }
    else {
        return false;
    }
}

module.exports = palindromes
