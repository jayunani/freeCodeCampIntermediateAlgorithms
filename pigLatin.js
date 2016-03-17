//Translate the provided string to pig latin.
// Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to 
// the end of the word and suffixes an "ay".

// If a word begins with a vowel you just add "way" to the end.

// translate("california") should return "aliforniacay".
// translate("paragraphs") should return "aragraphspay".

function translate(str) {
	var splitted = str.split("");
	var firstVowel = str.search(/[aeiou]/);
	
	if(firstVowel != 0) {
		var captured = splitted.splice(0, firstVowel);
		return splitted.join("") + captured.join("") + "ay";
	} else {
		return str + "way"
	};
}
