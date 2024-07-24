// Unit test for divide function
function testDivide() {
	// Test case 1: Dividing 10 by 2 should return 5
	let result1 = divide(10, 2);
	console.assert(result1 === 5, "Test case 1 failed");

	// Test case 2: Dividing 0 by any number should return 0
	let result2 = divide(0, 5);
	console.assert(result2 === 0, "Test case 2 failed");

	// Test case 3: Dividing a number by 0 should return null
	let result3 = divide(8, 0);
	console.assert(result3 === null, "Test case 3 failed");
}

// Run the unit test
testDivide();