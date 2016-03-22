// DNA Pairing
// The DNA strand is missing the pairing element. Take each character, get its pair, and return 
// the results as a 2d array.

// Base pairs are a pair of AT and CG. Match the missing element to the provided character.

// Return the provided character as the first element in each array.

// pair("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
// pair("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].

function pair(str) {
	var splitted = str.split("");
	var newArr = [];
	for(var i = 0; i < splitted.length; i++) {
		newArr.push(Array(splitted[i]));
	}
	for(var j = 0; j < newArr.length; j++) {
		if(newArr[j][0] === "A") {
			newArr[j].push("T");
		}
		if(newArr[j][0] === "T") {
			newArr[j].push("A");
		}
		if(newArr[j][0] === "C") {
			newArr[j].push("G");
		}
		if(newArr[j][0] === "G") {
			newArr[j].push("C");
		}
	}
	return newArr;
}
