const fibonacci = function(input) {
    input = parseInt(input);
    
    if (input < 0) {
        return "OOPS";
    }

    let prevTerm2 = 1, prevTerm1 = 1, nextTerm;
    for (i = 3; i <= input; i++){
        nextTerm = prevTerm2 + prevTerm1;
        prevTerm2 = prevTerm1;
        prevTerm1 = nextTerm;
    }

    return nextTerm;
}

module.exports = fibonacci
