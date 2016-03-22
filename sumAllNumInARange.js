// We'll pass you an array of two numbers. Return the sum of those two 
// numbers and all numbers between them.

// The lowest number will not always come first.

// sumAll([1, 4]) should return 10.
// sumAll([4, 1]) should return 10.
// sumAll([5, 10]) should return 45.
// sumAll([10, 5]) should return 45.

function sumAll(arr) {	
	var result = [];
	var add = function(a,b){return a + b};
	var start, end;

	if(arr[0] < arr[1]) {
		start = arr[0];
		end = arr[1];
	} else {
		start = arr[1];
		end = arr[0];
	}
	for(var i = start; i <= end; i++) {
		result.push(i);
	}
	return result.reduce(add);
}
