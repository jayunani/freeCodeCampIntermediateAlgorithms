//Create a function that sums two arguments together. If only one 
//argument is provided, then return a function that expects one argument 
//and returns the sum.

// For example, add(2, 3) should return 5, and add(2) should return a 
//function.

// Calling this returned function with a single argument will then 
//return the sum:

// var sumTwoAnd = add(2);

// sumTwoAnd(3) returns 5.

function add() {
  var sum = 0;
  var secondSum = 0;
  for(var i = 0; i < arguments.length; i++){
    if(typeof arguments[i] !== "number") {        
      return undefined;
      } else {
        sum += arguments[i];
      }
    }
    
  if(arguments.length > 1) {
    return sum;
  } else {
    return function(nums2) {
      for(var j = 0; j < arguments.length; j++){
        if( typeof arguments[j] === "number") {
          sum += arguments[j];
        } else {
          return undefined;
        } 
      }
    return sum;
    };
  }
} 
