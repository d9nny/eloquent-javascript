var range = function(start, finish, step) {
	var numbers = [],
			i = start; 
	while (i !== finish) {
		numbers.push(i);
		i += step;
	}
	numbers.push(finish);
	return numbers;
};

var sum = function(number) {
	var total = 0;
	for(var i=0; i < number.length; i++) {
		total = total + number[i];
	}
	return total;
};

var reverseArray = function(array) {
	var newArray = [];
	for(var i = array.length - 1; i >= 0; i--) {
		newArray.push(array[i]);
	}
	return newArray;
};

var reverseArrayInPlace = function(array) {
	for(var i = array.length - 2; i >= 0; i--) {
		var value = array.splice(i,1);
		array.push(value[0]);
	}
};

var arrayToList = function(array) {
	var list = {value: array[array.length - 1], rest: null};
	for(var i = array.length - 2; i >= 0; i--) {
		list = {value: array[i], rest: list};
	}
	return list;
};

var listToArray = function(list) {
	var numbers = [];
	for (var node = list; node; node = node.rest) {
		numbers.push(node.value);
	}
	return numbers;
};

var prepend = function(number, list) {
	return {value: number, rest: list};
};

var nth = function(list, index) {
	var count = 0;
	for(var node = list; node; node = node.rest) {
		if (count === index) {
			return node.value;
		}
		count += 1;
	} 
};

var deepEqual = function(object1, object2) {
  if (object1 === object2) return true;
  
  if (object1 == null || typeof object1 != "object" ||
      object2 == null || typeof object2 != "object")
    return false;
  
  var propsInObject1 = 0, 
  		propsInObject2 = 0;

  for (var prop in object1) {
    propsInObject1 += 1;
  }

  for (var prop in object2) {
    propsInObject2 += 1;
    if (!(prop in object1) || !deepEqual(object1[prop], object2[prop])) {
      return false;
    }
  }

  return propsInObject1 == propsInObject2;
};




