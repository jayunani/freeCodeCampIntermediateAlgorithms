// Perform a search and replace on the sentence using the arguments provided and return the new 
// sentence.

// First argument is the sentence to perform the search and replace on.

// Second argument is the word that you will be replacing (before).

// Third argument is what you will be replacing the second argument with (after).

function myReplace(str, before, after) {
  	if(before.charCodeAt(0) > 64 && before.charCodeAt(0) < 91){
		return str.replace(before, after[0].toUpperCase() + after.slice(1))
	} else {
		return str.replace(before, after);
	}
}
