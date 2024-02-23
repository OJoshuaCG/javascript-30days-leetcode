/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
	const filteredArray = [];
	for (let i = 0; i < arr.length; i++) {
		fn(arr[i], i) && filteredArray.push(arr[i]);
	}
	return filteredArray;
};

/*
 * filter([0, 10, 20, 30], function greaterThan10(n) {	return n > 10;});
 * filter([1, 2, 3], function firstIndex(n, i) { return i === 0;});
 * filter([-2, -1, 0, 1, 2], function plusOne(n) {	return n + 1;});
 */
