// ✅ What is an Array in JavaScript/TypeScript?
// 👉 An array is a special type of object in JavaScript/TypeScript that allows you to store multiple values in a single variable. Arrays are ordered collections, where each value is assigned a specific index (a number representing the element's position in the array) that starts at 0.
// JavaScript Array Methods - Summary and Examples

// ✅ 1. push() 
// 👉 Adds one or more elements to the end of an array and returns the new length of the array.
// 📝 Note: This method modifies the original array, it does not return a new array.

let arr1 = [1, 2, 3];
arr1.push(4, 5, 6);
// console.log('push:', arr1); // Output: [1, 2, 3, 4, 5, 6]

// ✅ 2. pop() 
// 👉 Removes the last element from an array and returns that element.
// 📝 Note: This method modifies the original array, it does not return a new array.

let arr2 = [1, 2, 3];
let last = arr2.pop(); // last = 3, arr2 = [1, 2]
// console.log('pop:', arr2, 'last element:', last); // Output: [1, 2] last element: 3

// ✅ 3. shift() 
// 👉 Removes the first element from an array and returns that element.
// 📝 Note: This method modifies the original array, it does not return a new array.

let arr3 = [1, 2, 3];
let first = arr3.shift(); // first = 1, arr3 = [2, 3]
// console.log('shift:', arr3, 'first element:', first); // Output: [2, 3] first element: 1

// ✅ 4. unshift() 
// 👉 Adds one or more elements to the beginning of an array and returns the new length of the array.
// 📝 Note: This method modifies the original array, it does not return a new array.

let arr4 = [2, 3];
arr4.unshift(0, 1);
// console.log('unshift:', arr4); // Output: [0, 1, 2, 3]

// ✅ 5. concat() 
// 👉 Merge two or more arrays into one array and return it.
// 📝 Note: This method does not modify the original arrays.

let arr5 = [1, 2];
let arr6 = [3, 4];
let merged = arr5.concat(arr6); // merged = [1, 2, 3, 4]
console.log('concat:', merged);

// ✅ 6. slice() 
// 👉 Get a portion of an array by specifying start and end indices.
// 📝 Note: This method does not modify the original array.

let arr7 = [1, 2, 3, 4];
let sliced = arr7.slice(1, 3); // sliced = [2, 3]
console.log('slice:', sliced);

// ✅ 7. splice() 
// 👉 Add or remove elements from an array at a specific index.
// 📝 Note: This method modifies the original array and returns an array of removed elements.

let arr8 = [1, 2, 3, 4];
arr8.splice(1, 2, 9, 10); // arr8 = [1, 9, 10, 4]
console.log('splice:', arr8);

// ✅ 8. forEach() 
// 👉 Execute a provided function once for each array element.
// 📝 Note: This method does not modify the original array.

let arr9 = [1, 2, 3];
arr9.forEach((item) => console.log('forEach:', item)); // 1, 2, 3

// ✅ 9. map() 
// 👉 Create a new array with the results of calling a provided function on every element.
// 📝 Note: This method does not modify the original array.

let arr10 = [1, 2, 3];
let squared = arr10.map(x => x * 2); // squared = [2, 4, 6]
console.log('map:', squared);

// ✅ 10. filter() 
// 👉 Create a new array with all elements that pass the test implemented by the provided function.
// 📝 Note: This method does not modify the original array.

let arr11 = [1, 2, 3, 4];
let even = arr11.filter(x => x % 2 === 0); // even = [2, 4]
console.log('filter:', even);

// ✅ 11. reduce() 
// 👉 Apply a function against an accumulator and each element to reduce it to a single value.
// 📝 Note: This method does not modify the original array.

let arr12 = [1, 2, 3, 4];
let sum = arr12.reduce((acc, curr) => acc + curr, 0); // sum = 10
console.log('reduce:', sum);

// in reduce 1st acc is undefined and curr is 1st item of the array then it add all in acc 

// ✅ 12. reduceRight() 
// 👉 Apply a function against an accumulator and each element from right-to-left to reduce it to a single value.
// 📝 Note: This method does not modify the original array.

let arr13 = ['a', 'b', 'c'];
let result = arr13.reduceRight((acc, curr) => acc + curr, ''); // result = 'cba'
console.log('reduceRight:', result);

// ✅ 13. find() 
// 👉 Return the first element that satisfies the provided testing function.
// 📝 Note: This method does not modify the original array.

let arr14 = [1, 2, 3, 4];
let found = arr14.find(x => x > 2); // found = 3
console.log('find:', found);

// ✅ 14. findIndex() 
// 👉 Return the index of the first element that satisfies the provided testing function.
// 📝 Note: This method does not modify the original array.

let arr15 = [1, 2, 3, 4];
let index = arr15.findIndex(x => x > 2); // index = 2
console.log('findIndex:', index);

// ✅ 15. indexOf() 
// 👉 Return the first index at which a given element can be found in the array, or -1 if it is not present.
// 📝 Note: This method does not modify the original array.

let arr16 = [1, 2, 3, 4];
let index2 = arr16.indexOf(3); // index2 = 2
console.log('indexOf:', index2);

// ✅ 16. lastIndexOf() 
// 👉 Return the last index at which a given element can be found in the array, or -1 if it is not present.
// 📝 Note: This method does not modify the original array.

let arr17 = [1, 2, 3, 2, 4];
let lastIndex = arr17.lastIndexOf(2); // lastIndex = 3
console.log('lastIndexOf:', lastIndex);

// ✅ 17. every() 
// 👉 Test if all elements in the array pass the test implemented by the provided function.
// 📝 Note: This method does not modify the original array.

let arr18 = [2, 4, 6];
let allEven = arr18.every(x => x % 2 === 0); // allEven = true
console.log('every:', allEven);

// ✅ 18. some() 
// 👉 Test if at least one element in the array passes the test implemented by the provided function.
// 📝 Note: This method does not modify the original array.

let arr19 = [1, 2, 3];
let someEven = arr19.some(x => x % 2 === 0); // someEven = true
console.log('some:', someEven);

// ✅ 19. includes() 
// 👉 Check if the array contains a certain element and return true or false.
// 📝 Note: This method does not modify the original array.

let arr20 = [1, 2, 3];
let hasTwo = arr20.includes(2); // hasTwo = true
console.log('includes:', hasTwo);

// ✅ 20. join() 
// 👉 Join all elements of an array into a string using a specified separator.
// 📝 Note: This method does not modify the original array.

let arr21 = ['a', 'b', 'c'];
let joined = arr21.join('-'); // joined = 'a-b-c'
console.log('join:', joined);

// ✅ 21. reverse() 
// 👉 Reverse the elements of an array in place.
// 📝 Note: This method modifies the original array.

let arr22 = [1, 2, 3];
arr22.reverse(); // arr22 = [3, 2, 1]
console.log('reverse:', arr22);

// ✅ 22. sort() 
// 👉 Sort the elements of an array in place.
// 📝 Note: This method modifies the original array. By default, elements are sorted as strings.

let arr23 = [3, 1, 2];
arr23.sort(); // arr23 = [1, 2, 3]
console.log('sort:', arr23);

// ✅ 23. fill() 
// 👉 Fill all elements of an array from a start index to an end index with a static value.
// 📝 Note: This method modifies the original array.

let arr24 = [1, 2, 3];
arr24.fill(0); // arr24 = [0, 0, 0]
console.log('fill:', arr24);

// ✅ 24. copyWithin() 
// 👉 Copy part of the array to another location within the same array.
// 📝 Note: This method modifies the original array.

let arr25 = [1, 2, 3, 4, 5];
arr25.copyWithin(0, 3, 4); // arr25 = [4, 2, 3, 4, 5]
console.log('copyWithin:', arr25);

// ✅ 25. flat() 
// 👉 Flatten nested arrays into a single array.
// 📝 Note: This method does not modify the original array.

let arr26 = [1, [2, [3, [4]]]];
let flatArr = arr26.flat(2); // flatArr = [1, 2, 3, [4]]
console.log('flat:', flatArr);

// ✅ 26. flatMap() 
// 👉 Map each element using a mapping function and flatten the result into a new array.
// 📝 Note: This method does not modify the original array.

let arr27 = [1, 2, 3];
let flatMapped = arr27.flatMap(x => [x * 2]); // flatMapped = [2, 4, 6]
console.log('flatMap:', flatMapped);

// ✅ 27. Array.from() 
// 👉 Create a new array instance from an array-like or iterable object.
// 📝 Note: This method does not modify the original object.

let str = "123";
let arr28 = Array.from(str); // arr28 = ['1', '2', '3']
console.log('Array.from:', arr28);
