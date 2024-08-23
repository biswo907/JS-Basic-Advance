// **JavaScript Data Types: Definitions and Examples**

// 1.✅✅✅ **Primitive Types**: Represent single values and are immutable.

// Number
let num = 42;           // 📏 Integer number
let floatNum = 3.14;    // 📏 Floating-point number

// String
let singleQuoteStr = 'Hello'; // 🗣️ String with single quotes
let doubleQuoteStr = "World"; // 🗣️ String with double quotes
let templateStr = `Hello, ${singleQuoteStr}!`; // 🗣️ Template string with interpolation

// Boolean
let isTrue = true;     // ✅ Boolean true
let isFalse = false;   // ❌ Boolean false

// Null
let emptyValue = null; // 🚫 Null value

// Undefined
let unassigned;       // 🔲 Undefined value (implicitly)

// Symbol
let uniqueSymbol = Symbol('description'); // 🔑 Unique symbol

// BigInt
let bigIntValue = 1234567890123456789012345678901234567890n; // 🔢 BigInt value

// 2.✅✅✅ **Object Types**: Can store collections of data and more complex entities.

// Object
let person = {
    name: 'Mayank',     // 🧑 Name property
    age: 30,           // 🎂 Age property
    isEmployed: true,  // 💼 Employment status
    message: function () {
        console.log("Hello, my name is " + this.name);
    }
};



//Dot Notation
console.log(person.name);      // Mayank

//Bracket Notation
console.log(person['name']);   // Mayank

// Adding a property
person.isSleeping = false;

// Modifying a property
person.age = 22;

// Deleting a property
delete person.age;

person.message(); // Output: Hello, my name is Mayank


// Array
let numbers = [1, 2, 3, 4, 5]; // 📋 Array of numbers
let mixedArray = [1, 'text', true, null]; // 📋 Array with mixed types

// Function
function greet(name) {
    return `Hello, ${name}!`; // 👋 Function with greeting
}

console.log(greet('World')); // 🌍 Calls the function and prints: Hello, World!

// Example usage of each data type
console.log(num);            // 📏 Output: 42
console.log(floatNum);       // 📏 Output: 3.14
console.log(singleQuoteStr); // 🗣️ Output: Hello
console.log(doubleQuoteStr); // 🗣️ Output: World
console.log(templateStr);    // 🗣️ Output: Hello, Hello!
console.log(isTrue);         // ✅ Output: true
console.log(isFalse);        // ❌ Output: false
console.log(person);         // 🧑 Output: { name: 'Alice', age: 30, isEmployed: true }
console.log(numbers);        // 📋 Output: [1, 2, 3, 4, 5]
console.log(mixedArray);     // 📋 Output: [1, 'text', true, null]
console.log(emptyValue);     // 🚫 Output: null
console.log(unassigned);     // 🔲 Output: undefined
console.log(uniqueSymbol);   // 🔑 Output: Symbol(description)
console.log(bigIntValue);    // 🔢 Output: 1234567890123456789012345678901234567890n
