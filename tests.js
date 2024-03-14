const assert = require('assert');
const { add, sub, multiply, div } = require('./calculator');


assert.strictEqual(add(5, 3), 8);
assert.strictEqual(add(-5, 3), -2);
assert.strictEqual(add(0, 0), 0);


assert.strictEqual(sub(5, 3), 2);
assert.strictEqual(sub(3, 5), -2);
assert.strictEqual(sub(0, 0), 0);


assert.strictEqual(multiply(5, 3), 15);
assert.strictEqual(multiply(-5, 3), -15);
assert.strictEqual(multiply(0, 0), 0);


assert.strictEqual(div(6, 3), 2);
assert.strictEqual(div(-6, 3), -2);
assert.strictEqual(div(5, 2), 2.5);
assert.strictEqual(div(0, 5), 0);
assert.throws(() => { div(5, 0); }, Error);

console.log("passed all tests!");
