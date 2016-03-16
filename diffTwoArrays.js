// Compare two arrays and return a new array with any items only found in one 
// of the two given arrays, but not both. In other words, return the symmetric 
// difference of the two arrays.

function diff(arr1, arr2) {
  	var concated = arr1.concat(arr2);

  	return concated.filter(function myFilter(val) {
  		if (arr1.indexOf(val) === -1 || arr2.indexOf(val) === -1) {
  			return val;
  		}
  	});
 }

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);
