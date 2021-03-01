// DO NOT CHANGE ANYTHING IN THIS FILE.
// IF YOU CHANGE THE TEST, YOU WILL RECEIVE 0 FOR THIS ASSIGNMENT.

const { squareNumbers } = require('./square_numbers');

test('should return [1, 4, 9] when numbers=[1, 2, 3]', () => {
  expect(squareNumbers([1, 2, 3])).toEqual([1, 4, 9]);
});

test('should return [1] when numbers=[1]', () => {
  expect(squareNumbers([1])).toEqual([1]);
});

test('should return [] when numbers=[]', () => {
  expect(squareNumbers([])).toEqual([]);
});

test('should return [1, 4, 9, 16] when numbers=[1, 2, 3, 4]', () => {
  expect(squareNumbers([1, 2, 3, 4])).toEqual([1, 4, 9, 16]);
});

test('should return [-1, 0, 1] when numbers=[1, 0, 1]', () => {
  expect(squareNumbers([-1, 0, 1])).toEqual([1, 0, 1]);
});