const ftoc = function(fahr) {
	let cels = (fahr - 32) * (5/9);
	
	cels = Math.round(cels*10);
	cels = cels / 10;
	
	return cels;
}

const ctof = function(cels) {
	let fahr = cels * (9/5) + 32;
	
	fahr = Math.round(fahr*10);
	fahr = fahr / 10;
	
	return fahr;
}

module.exports = {
  ftoc,
  ctof
}
