// 🛠️ Object Cloning Techniques

// ✅ Shallow Cloning
// 👉 Creates a new object with the same properties as the original object.
// 📝 Note: This method does not create deep copies of nested objects.

// 1. Object.assign() 
// 👉 Copies the values of all enumerable own properties from one or more source objects to a target object.
// 📝 Note: This method modifies the target object.

const original1 = { a: 1, b: 2 };
const clone1 = Object.assign({}, original1);
console.log('Object.assign:', clone1); // Output: { a: 1, b: 2 }

// 2. Spread Operator (`...`) 
// 👉 Creates a shallow copy of the object by spreading its properties into a new object.
// 📝 Note: This method does not modify the original object.

const original2 = { a: 1, b: 2 };
const clone2 = { ...original2 };
console.log('Spread Operator:', clone2); // Output: { a: 1, b: 2 }

// 3. Array.prototype.slice() (for arrays)
// 👉 Creates a shallow copy of an array.
// 📝 Note: This method does not work for objects, only for arrays.

const originalArray = [1, 2, 3];
const cloneArray = originalArray.slice();
console.log('Array.prototype.slice:', cloneArray); // Output: [1, 2, 3]

// ✅ Deep Cloning
// 👉 Creates a new object with the same properties as the original object, including nested objects.
// 📝 Note: This method ensures that changes to nested objects in the clone do not affect the original object.

// 1. JSON Methods 
// 👉 Converts the object to a JSON string and then parses it back to create a deep copy.
// 📝 Note: Does not handle functions, `undefined`, `Symbol`, `Date`, `Map`, `Set`, and `RegExp`.

const original3 = { a: 1, b: { c: 2 } };
const clone3 = JSON.parse(JSON.stringify(original3));
console.log('JSON Methods:', clone3); // Output: { a: 1, b: { c: 2 } }

// 2. Lodash's `cloneDeep` Method
// 👉 Uses Lodash's `cloneDeep` method to create a deep copy of the object.
// 📝 Note: Requires the Lodash library.

const _ = require('lodash');
const original4 = { a: 1, b: { c: 2 } };
const clone4 = _.cloneDeep(original4);
console.log('Lodash cloneDeep:', clone4); // Output: { a: 1, b: { c: 2 } }

// 3. Custom Recursive Function 
// 👉 Custom function to deeply clone an object by recursively copying its properties.
// 📝 Note: Handles arrays and nested objects.

function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') return obj; // 🛑 Base case: not an object
    if (Array.isArray(obj)) return obj.map(deepClone); // 🛠️ Recursive case: array
    const clone = {}; // 🛠️ Create a new object
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            clone[key] = deepClone(obj[key]); // 🛠️ Recursive case: object property
        }
    }
    return clone;
}

const original5 = { a: 1, b: { c: 2 } };
const clone5 = deepClone(original5);
console.log('Custom Recursive Function:', clone5); // Output: { a: 1, b: { c: 2 } }
