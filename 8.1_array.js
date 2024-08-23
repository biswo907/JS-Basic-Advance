// ✅ What is an Array in JavaScript/TypeScript?
// 👉 An array is a special type of object in JavaScript/TypeScript that allows you to store multiple values in a single variable. Arrays are ordered collections, where each value is assigned a specific index (a number representing the element's position in the array) that starts at 0.

// 📝 Array Definition and Basic Usage


// 🌟 Define an array
let fruits = ["Apple", "Banana", "Cherry"];  // 🍏🍌🍒 An array of fruits

// 🛠️ Accessing elements in an array
// console.log(fruits[0]);  // 🍏 Access the first element - Output: "Apple"
// console.log(fruits[1]);  // 🍌 Access the second element - Output: "Banana"
// console.log(fruits[2]);  // 🍒 Access the third element - Output: "Cherry"

// 📏 Checking the length of an array
// console.log(fruits.length);  // 🔢 Length of the array - Output: 3

// 🔄 Modifying elements in an array
fruits[1] = "Blueberry";  // 🫐 Change the second element to "Blueberry"
// console.log(fruits);  // 🍏🫐🍒 Output: ["Apple", "Blueberry", "Cherry"]

// ➕ Adding new elements to the array
fruits[3] = "Date";  // 🌴 Adding a fourth element
// console.log(fruits);  // 🍏🫐🍒🌴 Output: ["Apple", "Blueberry", "Cherry", "Date"]

// 💥 Trying to access an element outside of the array's length
// console.log(fruits[10]);  // ❓ Undefined, as there is no element at index 10


// ✅ 1. Adding Elements to an Array

// push(): Adds elements to the end of an array
let numbers = [1, 2, 3];
numbers.push(4, 5);  // Adds 4 and 5 to the end
// console.log('push:', numbers); // Output: [1, 2, 3, 4, 5]

// unshift(): Adds elements to the beginning of an array
numbers.unshift(0);  // Adds 0 to the beginning
// console.log('unshift:', numbers); // Output: [0, 1, 2, 3, 4, 5]

// ✅ 2. Removing Elements from an Array

// pop(): Removes the last element from an array
let lastElement = numbers.pop();  // Removes 5
// console.log('pop:', numbers, 'last element:', lastElement); // Output: [0, 1, 2, 3, 4], last element: 5

// shift(): Removes the first element from an array
let firstElement = numbers.shift();  // Removes 0
// console.log('shift:', numbers, 'first element:', firstElement); // Output: [1, 2, 3, 4], first element: 0

// ✅ 3. Iterating Over an Array

// forEach(): Executes a function for each element in the array
// numbers.forEach(num => console.log(`forEach: ${num}`));  // Output: 1, 2, 3, 4 (each on a new line)

// map(): Creates a new array by applying a function to each element
let doubled = numbers.map(num => num * 2);
// console.log('map:', doubled); // Output: [2, 4, 6, 8]

// ✅ 4. Finding Elements in an Array

// find(): Returns the first element that satisfies the provided function
let found = numbers.find(num => num > 2);
// console.log('find:', found); // Output: 3

// filter(): Creates a new array with all elements that pass the test implemented by the provided function
let filtered = numbers.filter(num => num > 2);
// console.log('filter:', filtered); // Output: [3, 4]

// ✅ 5. Sorting and Reversing an Array

// Array.sort()
// The array.sort() method in JavaScript is used to sort the elements of an array in place and returns the sorted array.
//It Modify in Original array not return new array


//👉 Case-1 :string
// const names = ['lipu', 'biswo', 'bapu', 'tapu', "abhinash"];
// console.log("...", names.sort()); // Output-[ 'abhinash', 'bapu', 'biswo', 'lipu', 'tapu' ]


//👉Case-2 :Number
// const numbers = [30, 4, 100, 25, 10];
// const numbersInString = ["30", "4", "100", "25", "10"];

// console.log(numbers.sort());  // Output: [ 10, 100, 25, 30, 4 ]
// console.log(numbersInString.sort()); // Output:[ '10', '100', '25', '30', '4' ]

//👉 Case-3:Number -->The best way to sort The Number in an array
// const numbers = [30, 4, 100, 25, 10];
// numbers.sort((a, b) => a - b); // Assending Order
// numbers.sort((a, b) => b - a); // Desending Order
// console.log(numbers); // Output: [4, 10, 25, 30, 100]


// reverse(): Reverses the order of the elements in an array || reverse() is an ECMAScript1 (ES1) feature.

// reverse(): Reverses the order of the elements in an array
// Reverses the sorted array
let unsortedNumbers = [4, 1, 3, 2];
// console.log('reverse:', unsortedNumbers.reverse()); // Output: [4, 3, 2, 1]


// ✅ 6. Combining Arrays

// concat(): Combines two or more arrays into a new array
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
// console.log('concat:', array1.concat(array2)); // Output: [1, 2, 3, 4, 5, 6]
// console.log('destructure.......:', [...array1, ...array2]); // Output: [1, 2, 3, 4, 5, 6]

// ✅ 7. Checking for the Existence of Elements

// includes(): Checks if an array includes a certain element
const combined = [1, 2, 3, 4, 5, 6]
// console.log('includes 2:', combined.includes(34)); // Output: false

// indexOf(): Returns the first index of a given element, or -1 if not found
// let indexOfFour = combined.indexOf(4);
// console.log('indexOf 4:', indexOfFour); // Output: 3

// ✅ 8. Transforming Arrays

// reduce(): Reduces an array to a single value
let sum = combined.reduce((acc, curr) => acc + curr, 0);
// console.log('reduce sum:', sum); // Output: 21

// join(): Joins all elements of an array into a string
let joined = combined.join('-');
// console.log('join:', joined); // Output: "1-2-3-4-5-6"
// console.log("-----------------------", combined.join(" ")); // Output: "1 2 3 4 5 6"



// ✅ 9. Working with Array Subsets

// slice(): Returns a shallow copy of a portion of an array
let sliced = combined.slice(1, 4); // from index 1 (inclusive) to index 4 (exclusive)
// console.log('slice:', sliced); // Output: [2, 3, 4]

// splice(): Changes the contents of an array by removing/replacing elements
const spliceArr = [1, 2, 3, 4, 5];
spliceArr.splice(1, 2)  //remove 2 elements starting from index 1
// console.log('splice:', spliceArr); //Output: [ 1, 4, 5]


const spliceArr2 = [1, 2, 3, 4, 5];
spliceArr2.splice(3, 2, 'a', 'b') //remove 2 elements starting from index 3 and add "a" and "b"
// console.log('splice:', spliceArr2); // Output: [ 1, 2, 3, 'a', 'b' ]

// ✅ 10. Flattening Arrays

// flat(): Flattens an array to the specified depth
let nestedArray = [1, [2, [3, [4]]]];
// let flatArray = nestedArray.flat(2);
// console.log('flat:', flatArray); // Output: [1, 2, 3, [4]]

// flatMap(): Maps and flattens the result into a new array
// let flatMapped = [1, 2, 3].flatMap(x => [x, x * 2]);
// console.log('flatMap:', flatMapped); // Output: [1, 2, 2, 4, 3, 6]



// ✅ 11. Finding the Maximum and Minimum Values in an Array

// Math.max() and Math.min() with apply(): Find the max and min values
let numberArray = [5, 12, 8, 130, 44];
// console.log(Math.max(...numberArray));
// console.log(Math.min(...numberArray));


// ✅ 12. Working with Multidimensional Arrays

// Nested Arrays: Accessing elements in a 2D array
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

//   console.log(matrix[0][1]); // Output: 2 (row 0, column 1)
//   console.log(matrix[1][2]); // Output: 6 (row 1, column 2)
//   console.log(matrix[2][0]); // Output: 7 (row 2, column 0)


// ✅ 13. Converting Arrays to Other Data Structures

// Array to Object: Convert an array to an object
let peopleArray = [['name', 'Alice'], ['age', 25], ['job', 'Engineer']];
let peopleObject = Object.fromEntries(peopleArray);
// console.log('Array to Object:', peopleObject); // Output: {name: "Alice", age: 25, job: "Engineer"}

// Array to Set: Remove duplicates by converting to a Set
let duplicatesArray = [1, 2, 2, 3, 4, 4, 5];
let uniqueSet = new Set(duplicatesArray);
// console.log([...uniqueSet]);

// ✅ 14. Removing Duplicates from an Array

// Using Set: A simple way to remove duplicates
let arrayWithDuplicates = [1, 2, 3, 4, 4, 5, 5];
let uniqueArrayUsingSet = Array.from(new Set(arrayWithDuplicates));
// console.log('Unique Array (Set):', uniqueArrayUsingSet); // Output: [1, 2, 3, 4, 5]

// Using filter() with indexOf(): Another approach to remove duplicates
let uniqueArrayUsingFilter = arrayWithDuplicates.filter((item, index) => {
    return arrayWithDuplicates.indexOf(item) === index;
});
// console.log('Unique Array (filter):', uniqueArrayUsingFilter); // Output: [1, 2, 3, 4, 5]

// ✅ 15. Performance Considerations

// Mutating vs. Non-Mutating Methods: Example of mutating methods
let mutableArray = [1, 2, 3];
mutableArray.push(4);  // Modifies the original array
// console.log('Mutable Array:', mutableArray); // Output: [1, 2, 3, 4]

// Non-Mutating Methods: Example of non-mutating methods
let originalArray = [1, 2, 3];
let newArray = originalArray.concat([4]);  // Returns a new array, original array is unchanged
// console.log('Original Array:', originalArray); // Output: [1, 2, 3]
// console.log('New Array:', newArray); // Output: [1, 2, 3, 4]


// ✅ 16. Array Destructuring

// Destructuring Assignment: Extract values into variables
let [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log('first:', first); // Output: 1
console.log('second:', second); // Output: 2
console.log('rest:', rest); // Output: [3, 4, 5]

// ✅ 17. Sparse Arrays

// Understanding Sparse Arrays: Arrays with undefined elements
let sparseArray = [1, , 3]; // The middle element is empty
console.log('sparseArray:', sparseArray); // Output: [1, <1 empty item>, 3]
console.log('length of sparseArray:', sparseArray.length); // Output: 3

// ✅ 18. Array Methods with Callback Functions

// some(): Tests whether at least one element passes the test
let hasNegative = numbers.some(num => num < 0);
console.log('some (negative):', hasNegative); // Output: false

// every(): Tests whether all elements pass the test
let allPositive = numbers.every(num => num > 0);
console.log('every (positive):', allPositive); // Output: true

// ✅ 19. Flattening Arrays with Different Depths

// flatMap(): Maps and flattens the result into a new array
let nested = [1, [2, [3, [4]]]];
let flatMappedArray = nested.flatMap(x => x);
console.log('flatMap:', flatMappedArray); // Output: [1, [2, [3, [4]]]]

// ✅ 20. Working with Arrays of Objects

// Sorting Arrays of Objects: Sorting by a property
let people = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
    { name: 'Jim', age: 35 }
];
people.sort((a, b) => a.age - b.age);
console.log('sorted by age:', people);
// Output: [{ name: 'Jane', age: 25 }, { name: 'John', age: 30 }, { name: 'Jim', age: 35 }]

// Grouping Arrays of Objects: Grouping by a property
let groupedByAge = people.reduce((group, person) => {
    const { age } = person;
    group[age] = group[age] || [];
    group[age].push(person);
    return group;
}, {});
console.log('grouped by age:', groupedByAge);
// Output: { '25': [{ name: 'Jane', age: 25 }], '30': [{ name: 'John', age: 30 }], '35': [{ name: 'Jim', age: 35 }] }




