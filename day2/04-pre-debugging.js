function divide(a, b) {
    if (b === 0) {
        console.error("Error: Division by zero");
        return null; // or any other appropriate action
    }
    return a / b;
}

function calculateArea(radius) {
    let pi = 3.14;
    let unusedVariable = 42;
    return pi * radius * radius;
}

function printNumbers(arr) {
    for (let i = 0; i <= arr.length; i++) {
        console.log(arr[i]);
    }
}

function calc(a, b) {
    return a + b;
}

function greet(name) {
    console.log("Hello, " + name.toString());
}