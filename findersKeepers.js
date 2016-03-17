// Create a function that looks through an array (first argument) and 
// returns the first element in the array that passes a truth test (second 
// argument).

function find(arr, func) {
	for(var i = 0; i < arr.length; i++) {
		if(func(arr[i])) {
			return arr[i];
		}
	}
}

