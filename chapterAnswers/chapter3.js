var minNo = function(firstNo, secondNo) {
	return firstNo < secondNo ? firstNo : secondNo;
};

var isEven = function(number) {
	return number % 2 === 0 ? true : false;
};

var countChar = function(string, letter) {
	var count = 0;
	for(var i=0; i < string.length; i++) {
		if (string[i] === letter) {
			count++
		}
	}
	return count;
};