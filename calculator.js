
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

module.exports = { add, sub, multiply, div };