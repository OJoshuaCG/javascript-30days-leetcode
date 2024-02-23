/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
	for (var i = 0; i < arr.length; i++) {
		arr[i] = fn(arr[i], i);
	}
	return arr;
};

/*
 * map([1,2,3], function plusone(n) { return n + 1; })
 * map([1,2,3], function plusI(n, i) { return n + i; })
 * map([10,20,30], function constant(n, i) { return 42; })
 */
