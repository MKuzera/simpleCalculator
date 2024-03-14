
function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function div(a, b) {
    if (b === 0) {
        throw new Error('Zero alert!');
    }
    return a / b;
}

console.log("5 + 3 = " +  add(5, 3));
console.log("10 - 4 = " +sub(10, 4));
console.log("7 * 2 = " +multiply(7, 2));
console.log("20 / 5 = " +div(20, 5));

module.exports = { add, sub, multiply, div };