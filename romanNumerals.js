// Convert the given number into a roman numeral.

// All roman numerals answers should be provided in upper-case.

function convert(num) {
	var nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
	var romanNums = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
	var result = "";

	 for (var i = 0; i < nums.length; i++) {
        while (num >= nums[i]) {
            result += romanNums[i];
            num -= nums[i];
        }
    }
    return result;
}

convert(36);
