/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
	return {
		toBe: function (another) {
			if (val === another) {
				return true;
			}
			//return { error: "Not Equal" };
			throw new Error("Not Equal");
		},
		notToBe: function (another) {
			if (val !== another) {
				//return { value: true };
				return true;
			}
			//return { error: "Equal" };
			throw new Error("Equal");
		},
	};
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
