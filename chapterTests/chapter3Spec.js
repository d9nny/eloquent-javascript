'use strict';

describe('returns the smallest argument', function(){

  it('question 1', function(){
    var result = min(0,10);
    expect(result).toEqual(0);
  });

  it('question 2', function(){
    var result = min(0,-10);
    expect(result).toEqual(-10);
  });

});

describe('returns true if even', function(){

  it('question 1', function(){
    var result = isEven(50);
    expect(result).toEqual(true);
  });

  it('question 2', function(){
    var result = isEven(75);
    expect(result).toEqual(false);
  });

  it('question 3', function(){
    var result = isEven(-1);
    expect(result).toEqual(false);
  });
});

describe('given an argument, it counts the number of occurances in given string', function() {

	it('question 1', function() {
		var result = countChar('BBC' 'B');
		expect(result).toEqual(2);
	});
	it('question 2', function() {
		var result = countChar('kakkerlak', 'k');
		expect(result).toEqual(4);
	});

});

