// Drop the elements of an array (first argument), starting from the front, until 
// the predicate (second argument) returns true.

// Return the rest of the array, otherwise return an empty array.

function drop(arr, func) {
  for(var i = 0; i < arr.length; i++) {
  	if(func(arr[i])) {
  		return arr.slice(i);
  	}
  }
  return []; 
}
