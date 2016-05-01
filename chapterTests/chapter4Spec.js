describe('print range between two numbers with third argument as step', function() {
	it('question 1', function() {
		var result = range(1,10,1);
		expect(result).toEqual([1,2,3,4,5,6,7,8,9,10]);
	});

	it('question 2', function() {
		var result = range(5,2,-1);
		expect(result).toEqual([5,4,3,2]);
	});

	describe('sums an array of numbers', function() {
		it('question 3', function() {
			var result = sum(range(1,10));
			expect(result).toEqual(55);
		});
	});
});

describe('lists', function() {

	describe('inverts the order of an array', function() {
		it('by creating a new array', function() {
			var result = reverseArray(['A','B','C','D']);
			expect(result).toEqual('D','C','B','A');
		});
		it('modifies existing array', function() {
			var arrayValue = [1,2,3,4,5];
			reverseArrayInPlace(arrayValue);
			expect(arrayValue).toEqual([5,4,3,2,1]);
		});
	});

	describe('converts an array to a list', function() {
		it('question 1', function() {
			var result = arrayToList([10,20]);
			expect(result).toEqual({value: 10, rest: {value: 20, rest: null}})
		});
	});

	describe('converts a list to an array', function() {
		it('question 2', function() {
			var result = listToArray(arrayToList([10,20,30]))
			expect(result).toEqual([10,20,30]);
		});
	});

	describe('adds an element to the front of a list', function() {
		it('question 3', function() {
			var result = prepend(10, prepend(20, null));
			expect(result).toEqual({value: 10, rest: {value: 20, rest: null}});
		});
	});

	describe('takes a list and a number and returns the element at the given position in the list', function() {
		it('question 4', function() {
			var result = nth(arrayToList([10, 20, 30]), 1);
			expect(result).toEqual(20);
		});
	});

});