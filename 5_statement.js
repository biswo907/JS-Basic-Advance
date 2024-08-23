// 1. Variable Declaration Statements
let x = 10;          // 📦 Variable declaration with initialization
const y = 20;        // 📦 Constant declaration with initialization
var z;               // 📦 Variable declaration without initialization

// 2. Expression Statements
x = 10 + 5;          // ➕ Expression statement: assigns 15 to x
console.log(x);     // 📜 Expression statement: prints the value of x

// 3. Assignment Statements
x = 5;               // 📝 Assignment statement: assigns 5 to x
x += 10;             // ➕📝 Assignment with addition: x is now 15

// 4. Control Flow Statements
// Conditional Statements
if (x > 10) {
    console.log('x is greater than 10'); // ✔️ x is greater than 10
} else {
    console.log('x is 10 or less'); // ❌ x is 10 or less
}

// Switch Statement
switch (x) {
    case 1:
        console.log('x is 1'); // 1️⃣ x is 1
        break;
    case 2:
        console.log('x is 2'); // 2️⃣ x is 2
        break;
    default:
        console.log('x is neither 1 nor 2'); // 🔄 x is neither 1 nor 2
}

// Loops
// For Loop
for (let i = 0; i < 5; i++) {
    console.log(i);  // 🔁 Prints 0, 1, 2, 3, 4
}

// While Loop
let i = 0;
while (i < 5) {
    console.log(i);  // 🔁 Prints 0, 1, 2, 3, 4
    i++;
}

// Do-While Loop
let j = 0;
do {
    console.log(j);  // 🔁 Prints 0, 1, 2, 3, 4
    j++;
} while (j < 5);

// 5. Function Statements
function greet(name) {
    return `Hello, ${name}!`; // 👋 Function statement with greeting
}

console.log(greet('Alice')); // 🌟 Prints: Hello, Alice!

// 6. Return Statement
function add(a, b) {
    return a + b; // 🔙 Return statement
}

let result = add(5, 3); // 💡 result is 8

// 7. Break and Continue Statements
// Break
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // 🚪 Exits the loop when i is 5
    }
    console.log(i);  // 🔁 Prints 0, 1, 2, 3, 4
}

// Continue
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue; // ⏭️ Skips the rest of the loop body for even numbers
    }
    console.log(i);  // 🔁 Prints 1, 3, 5, 7, 9
}

// 8. Try/Catch Statements
try {
    let result = riskyFunction(); // ⚠️ Function that might throw an error
} catch (error) {
    console.error('An error occurred:', error); // ❗ Error handling
}

// 9. Throw Statement
function checkNumber(num) {
    if (num < 0) {
        throw new Error('Number must be non-negative'); // 🚨 Throws an error for negative numbers
    }
    return num;
}
