
//   🚀 Stack and Heap Memory Allocation in JavaScript - Example and Explanation



/*
  🗃️ Stack Memory Example:
  - In JavaScript, the stack is used to store primitive data types (number, string, boolean, null, undefined, symbol) and function calls.
  - Managed in a LIFO manner (Last-In-First-Out).
  - Automatically managed by the JavaScript engine.
  - Limited in size but fast access.
*/

//https://www.codehelp.in/tutorial/javascript/primitive-v-s-reference-datatypes-in-javascript
// Follow This For Better Understanding With Images⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️

function stackExample() {
    let a = 10;       // 📝 'a' is a primitive type and stored on the stack
    let b = 20;       // 📝 'b' is also stored on the stack
    let result = a + b;  // 📝 'result' is stored on the stack

    console.log("Stack Example:", result);  // 💬 Output: Stack Example: 30
}

/*
  🗃️ Heap Memory Example:
  - In JavaScript, the heap is used to store reference types (objects, arrays, functions).
  - Heap memory is dynamically allocated.
  - Managed by the JavaScript engine's garbage collector, which automatically frees up memory when objects are no longer in use.
  - More flexible than the stack, but access is slower.
*/

function heapExample() {
    let obj = { name: "Biswajit" };  // 📝 'obj' is a reference type and stored on the heap
    obj.age = 25;                    // 📝 'age' property is dynamically added to the object on the heap

    console.log("Heap Example:", obj);  // 💬 Output: Heap Example: { name: 'Biswajit', age: 25 }
}

stackExample();  // 📞 Calling the stack example function
heapExample();   // 📞 Calling the heap example function


//✅ 1. Copying Primitive Values (Value Types)
// Primitive types like numbers, strings, and booleans are copied by value. When you assign a primitive value to another variable, the actual value is copied.

let x = 10;  // 📝 'x' is a primitive value, stored on the stack
let y = x;   // 📋 'y' is a copy of 'x', also stored on the stack

y = 20;      // 🔄 Changing 'y' doesn't affect 'x'

console.log(x);  // 💬 Output: 10
console.log(y);  // 💬 Output: 20

/*
  🎯 Key Point: 'x' and 'y' are independent because primitive values are copied by value.
*/


//✅ 2. Copying Objects and Arrays (Reference Types)
// Objects and arrays are reference types. When you assign an object or array to another variable, you’re copying the reference (or memory address), not the actual object or array.


let obj1 = { name: "Biswajit" };  // 📝 'obj1' is stored in the heap
let obj2 = obj1;                  // 📋 'obj2' is a reference to the same object in the heap

obj2.name = "John";  // 🔄 Changing 'obj2' also affects 'obj1'

console.log(obj1);  // 💬 Output: { name: "John" }
console.log(obj2);  // 💬 Output: { name: "John" }

/*
  🎯 Key Point: 'obj1' and 'obj2' refer to the same object in memory. 
  Changing one affects the other because both point to the same reference.
*/

let arr1 = [1, 2, 3];  // 📝 'arr1' is stored in the heap
let arr2 = arr1;       // 📋 'arr2' is a reference to the same array in the heap

arr2.push(4);  // 🔄 Modifying 'arr2' also affects 'arr1'

console.log(arr1);  // 💬 Output: [1, 2, 3, 4]
console.log(arr2);  // 💬 Output: [1, 2, 3, 4]

/*
  🎯 Key Point: 'arr1' and 'arr2' refer to the same array in memory. 
  Changes to one affect the other because both point to the same reference.
*/


//✅ 3. Copying Objects or Arrays by Value
// If you want to create a copy of an object or array by value (a deep copy), rather than by reference, you can use methods like Object.assign(), the spread operator (...), or JSON methods. This way, the new object or array won’t be affected by changes to the original.

// 📋 Shallow copy using Object.assign or Spread operator
let obj3 = { name: "Biswajit" };
let obj4 = Object.assign({}, obj3);  // 📝 Creates a shallow copy
// or
let obj5 = { ...obj3 };              // 📝 Creates a shallow copy using spread syntax

obj4.name = "John";  // 🔄 Changing 'obj4' doesn't affect 'obj3'

console.log(obj3);  // 💬 Output: { name: "Biswajit" }
console.log(obj4);  // 💬 Output: { name: "John" }

// 📋 Deep copy using JSON methods (works for simple objects)
let arr3 = [1, 2, 3];
let arr4 = JSON.parse(JSON.stringify(arr3));  // 📝 Creates a deep copy of the array

arr4.push(4);  // 🔄 Modifying 'arr4' doesn't affect 'arr3'

console.log(arr3);  // 💬 Output: [1, 2, 3]
console.log(arr4);  // 💬 Output: [1, 2, 3, 4]

/*
  🎯 Key Point: By using methods like Object.assign, spread syntax, or JSON methods,
  you can create independent copies of objects and arrays, so changes in one won't affect the other.
*/


//⚠️⚠️⚠️ Summary:⚠️⚠️⚠️
//👉🤷‍♂️ Primitive Types: Copied by value. Each variable holds its own copy of the data.
//👉🤷‍♂️ Reference Types (Objects/Arrays): Copied by reference. Variables point to the same memory location, so changes to one affect the other.
//👉🤷‍♂️ Deep Copying: To avoid unintended side effects, you can create a deep copy of objects or arrays using techniques like Object.assign, spread syntax, or JSON serialization.