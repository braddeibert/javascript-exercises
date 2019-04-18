const caesar = function (message, shift) {
    let inputArray = Array.from(message);
    shift = shift % 26;

    let encrypted = inputArray.reduce((total, current) => {
        let code = current.charCodeAt(0);

        if ((code >= 97 && code <= 122)) {
            code = code + shift;
            if (code > 122) {
                code = 96 + (code - 122);
            }
            if (code < 97) {
                code = 123 - (97 - code);
            }
        }

        if (code >= 65 && code <= 90) {
            code = code + shift;
            if (code > 90) {
                code = 64 + (code - 90);
            }
            if (code < 65) {
                code = 91 - (65 - code);
            }
        }

        return total + String.fromCharCode(code);
    }, "");

    return encrypted;
}

module.exports = caesar
