const snakeCase = function (inputString) {
    let inputArray = Array.from(inputString);

    let snakeCase = inputArray.reduce((phrase, curChar) => {
        let charCode = curChar.charCodeAt(0);
    
        //Checks lowercase letters:
        if (charCode > 96 && charCode < 123) {
            return phrase + curChar;
        }
        //Checks uppercase letters:
        else if (charCode > 64 && charCode < 91) {
            
            curChar = curChar.toLowerCase();
            return phrase + curChar;
        }
        else {
            //Prevents mulitple spacing underscores:
            if (phrase.charAt(phrase.length - 1) == "_") {
                return phrase + "";
            }
            //Replaces non-letter characters with underscores:
            else {
                return phrase + "_";
            }
        }

    }, "");

    //Removes trailing underscores:
    if (snakeCase.endsWith("_")){
        return snakeCase.slice(0, snakeCase.length - 1);
    }

    return snakeCase;
}

module.exports = snakeCase
