// 1. Arithmetic Operators
let sum = 5 + 3;           // Addition (+) => 8
let difference = 5 - 3;    // Subtraction (-) => 2
let product = 5 * 3;       // Multiplication (*) => 15
let quotient = 15 / 3;     // Division (/) => 5
let remainder = 5 % 2;     // Modulus (%) => 1
let power = 2 ** 3;        // Exponentiation (**) => 8

// 2. Assignment Operators
let x = 10;                // Assignment (=)
x += 5;                    // Add and Assign (+=) => 15
x -= 3;                    // Subtract and Assign (-=) => 7

// 3. Comparison Operators
let isEqual = 5 == '5';        // Equal (==) => true
let isStrictEqual = 5 === '5'; // Strict Equal (===) => false
let isNotEqual = 5 != '5';     // Not Equal (!=) => false
let isStrictNotEqual = 5 !== '5'; // Strict Not Equal (!==) => true
let isGreater = 10 > 5;        // Greater Than (>) => true
let isLess = 5 < 10;           // Less Than (<) => true
let isGreaterOrEqual = 10 >= 10; // Greater Than or Equal (>=) => true
let isLessOrEqual = 5 <= 10;   // Less Than or Equal (<=) => true

// 4. Logical Operators
let andResult = true && false; // AND (&&) => false
let orResult = true || false;  // OR (||) => true
let notResult = !true;         // NOT (!) => false

// 5. Unary Operators
let unaryPlus = +"5";          // Unary Plus (+) => 5 (number)
let unaryNegation = -5;        // Unary Negation (-) => -5
let a = 5;
a++;                           // Increment (++) => 6
let b = 5;
b--;                           // Decrement (--) => 4

// 6. Ternary (Conditional) Operator
let age = 18;
let canVote = (age >= 18) ? "Yes" : "No"; // Ternary Operator (condition ? exprIfTrue : exprIfFalse) => "Yes"

// 7. Bitwise Operators
let bitwiseAnd = 5 & 1;        // AND (&) => 1 (0101 & 0001 = 0001)
let bitwiseOr = 5 | 1;         // OR (|) => 5 (0101 | 0001 = 0101)
let bitwiseXor = 5 ^ 1;        // XOR (^) => 4 (0101 ^ 0001 = 0100)
let bitwiseNot = ~5;           // NOT (~) => -6 (~0101 = 1010 in two's complement)
let leftShift = 5 << 1;        // Left Shift (<<) => 10 (0101 << 1 = 1010)
let rightShift = 5 >> 1;       // Right Shift (>>) => 2 (0101 >> 1 = 0010)

// 8. Type Operators
let type = typeof 5;           // typeof => "number"
let isInstance = [] instanceof Array; // instanceof => true
