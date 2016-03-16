// Return an English translated sentence of the passed binary string.

// The binary string will be space separated.

var binaryAgent = function(str) {
	var result = "";
	var splitted = str.split(" ");
	var myBinary = function(num){
    var sum = 0;
    var toBeDivided = 128;
      for(var i = 0; i < num.length; i++){
        if(num[i] === "1"){
          sum += toBeDivided;
        }
      	toBeDivided /= 2;
     	}
      return sum;
    }

	for(var i = 0; i < splitted.length; i++) {
		result += String.fromCharCode(myBinary(splitted[i]));	
	}
  	return result;
}

