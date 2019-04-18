function translate(message) {
	//Taking word(s) into an array:
	var words = message.split(" ");
	let translated = "";

	words.forEach(word => {
		let translating = true;
		while (translating) {
			if (word.startsWith('qu')) {
				word = word.slice(2, word.length) + word.charAt(0) + word.charAt(1);
			}
			else if (word.startsWith('a')
				|| word.startsWith('e')
				|| word.startsWith('i')
				|| word.startsWith('o')
				|| word.startsWith('u')) {
				word = word + "ay";
				translating = false;
			}
			else {
				word = word.slice(1, word.length) + word.charAt(0);
			}
		}
		translated = translated + word + " ";
	});

	if (translated.endsWith(" ")){
		translated = translated.slice(0, translated.length - 1);
	}

	return translated;
}


module.exports = {
	translate
}

