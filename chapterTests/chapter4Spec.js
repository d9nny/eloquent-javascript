describe('range - print range between two numbers with third argument as step', function() {
	it('question 1', function() {
		var result = range(1,10,1);
		expect(result).toEqual([1,2,3,4,5,6,7,8,9,10]);
	});

	it('question 2', function() {
		var result = range(5,2,-1);
		expect(result).toEqual([5,4,3,2]);
	});

	describe('sum', function() {
		it('sums an array of numbers', function() {
			var result = sum([1,2,3,4,5,6,7,8,9,10]);
			expect(result).toEqual(55);
		});
	});
});

describe('lists', function() {

	describe('inverts the order of an array', function() {
		it('reverseArray - by creating a new array', function() {
			var result = reverseArray(['A','B','C','D']);
			expect(result).toEqual(['D','C','B','A']);
		});
		it('reverseArrayInPlace - modifies existing array', function() {
			var arrayValue = [1,2,3,4,5];
			reverseArrayInPlace(arrayValue);
			expect(arrayValue).toEqual([5,4,3,2,1]);
		});
	});

	describe('arrayToList', function() {
		it('converts an array to a list', function() {
			var result = arrayToList([10,20]);
			expect(result).toEqual({value: 10, rest: {value: 20, rest: null}})
		});
	});

	describe('listToArray', function() {
		it('converts a list to an array', function() {
			var result = listToArray({value: 10, rest: {value: 20, rest: {value: 30, rest: null}}})
			expect(result).toEqual([10,20,30]);
		});
	});

	describe('prepend', function() {
		it('adds an element to the front of a list', function() {
			var result = prepend(10, prepend(20, null));
			expect(result).toEqual({value: 10, rest: {value: 20, rest: null}});
		});
	});

	describe('nth', function() {
		it('takes a list and a number and returns the element at the given position in the list', function() {
			var result = nth({value: 10, rest: {value: 20, rest: {value: 30, rest: null}}}, 1);
			expect(result).toEqual(20);
		});
	});

	describe('deepEqual - it returns true only if two values are the same value or are objects with the same properties whose values are also equal', function() {
		it('question 1', function() {
			var obj = {here: {is: "an"}, object: 2};
			var result = deepEqual(obj, obj);
			expect(result).toEqual(true);
		});
		it('question 2', function() {
			var obj = {here: {is: "an"}, object: 2};
			var result = deepEqual(obj, {here: 1, object: 2});
			expect(result).toEqual(false);
		});
		it('question 3', function() {
			var obj = {here: {is: "an"}, object: 2};
			var result = deepEqual(obj, {here: {is: "an"}, object: 2});
			expect(result).toEqual(true);
		});
	});

});