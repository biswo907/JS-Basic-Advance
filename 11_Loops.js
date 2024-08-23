/*
  🚀 JavaScript Loops - A Comprehensive Guide
  📝 Author: Biswajit Dash
  📅 Date: 2024-08-19
*/

/*
  🔄 1. `for` Loop
  - 📜 **Description:** The classic loop used for running a block of code a specific number of times.
  - 🛠️ **Use Case:** Best for when you know how many times you want to loop.
  - 🧮 **Syntax:**
    for (initialization; condition; increment/decrement) {
      // code to be executed
    }
*/

for (let i = 0; i < 5; i++) {
    console.log(`for loop iteration: ${i}`);  // 💬 Output: 0, 1, 2, 3, 4
}

/*
  🔄 2. `while` Loop
  - 📜 **Description:** Loops through a block of code as long as the specified condition is `true`.
  - 🛠️ **Use Case:** Ideal when the number of iterations is unknown, but you know the condition to stop the loop.
  - 🧮 **Syntax:**
    while (condition) {
      // code to be executed
    }
*/

let count = 0;
while (count < 5) {
    console.log(`while loop count: ${count}`);  // 💬 Output: 0, 1, 2, 3, 4
    count++;
}

/*
  🔄 3. `do...while` Loop
  - 📜 **Description:** Executes the block of code once before checking the condition, then repeats as long as the condition is `true`.
  - 🛠️ **Use Case:** Useful when you need the code to run at least once, regardless of the condition.
  - 🧮 **Syntax:**
    do {
      // code to be executed
    } while (condition);
*/

let num = 0;
do {
    console.log(`do...while loop number: ${num}`);  // 💬 Output: 0, 1, 2, 3, 4
    num++;
} while (num < 5);

/*
  🔄 4. `for...in` Loop
  - 📜 **Description:** Loops through the properties of an object (including inherited properties).
  - 🛠️ **Use Case:** Ideal for iterating over an object's properties.
  - 🧮 **Syntax:**
    for (let key in object) {
      // code to be executed
    }
*/

const obj = { name: "Biswajit", age: 25, city: "Bhubaneswar" };
for (let key in obj) {
    console.log(`for...in loop key: ${key}, value: ${obj[key]}`);  // 💬 Output: name, age, city
}

/*
  🔄 5. `for...of` Loop
  - 📜 **Description:** Loops through the values of an iterable object (like arrays, strings, Maps, Sets).
  - 🛠️ **Use Case:** Best for iterating over arrays, strings, or any other iterable objects.
  - 🧮 **Syntax:**
    for (let value of iterable) {
      // code to be executed
    }
*/

const arr = [10, 20, 30, 40, 50];
for (let value of arr) {
    console.log(`for...of loop value: ${value}`);  // 💬 Output: 10, 20, 30, 40, 50
}

/*
  🔄 6. `forEach` Method (Array)
  - 📜 **Description:** Executes a provided function once for each array element.
  - 🛠️ **Use Case:** Convenient for running a function on each element of an array without manually managing the loop.
  - 🧮 **Syntax:**
    array.forEach(function(element, index, array) {
      // code to be executed
    });
*/

const numbers = [1, 2, 3, 4, 5];
numbers.forEach((num, index) => {
    console.log(`forEach loop index: ${index}, value: ${num}`);  // 💬 Output: 0-1, 1-2, 2-3, 3-4, 4-5
});

/*
  🔄 7. `map` Method (Array)
  - 📜 **Description:** Creates a new array with the results of calling a provided function on every element in the calling array.
  - 🛠️ **Use Case:** Useful when you need a new array based on the transformation of an existing array.
  - 🧮 **Syntax:**
    let newArray = array.map(function(element, index, array) {
      // return element for new array
    });
*/

const squaredNumbers = numbers.map(num => num * num);
console.log(`map loop output: ${squaredNumbers}`);  // 💬 Output: [1, 4, 9, 16, 25]

/*
  🔄 8. `reduce` Method (Array)
  - 📜 **Description:** Executes a reducer function on each element of the array, resulting in a single output value.
  - 🛠️ **Use Case:** Ideal for summing up elements, or for any operation that needs to aggregate array elements into a single result.
  - 🧮 **Syntax:**
    let result = array.reduce(function(accumulator, currentValue, index, array) {
      // return updated accumulator
    }, initialValue);
*/

const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(`reduce loop output: ${sum}`);  // 💬 Output: 15

/*
  🔄 9. `for...await...of` Loop (Async Iteration)
  - 📜 **Description:** Used to iterate over an async iterable object, where each iteration can await a promise.
  - 🛠️ **Use Case:** Useful for iterating over asynchronous operations, like fetching data in a loop.
  - 🧮 **Syntax:**
    for await (let value of asyncIterable) {
      // code to be executed
    }
*/

async function asyncLoopExample() {
    const asyncIterable = {
        async *[Symbol.asyncIterator]() {
            yield "Hello";
            yield "World";
        }
    };

    for await (let value of asyncIterable) {
        console.log(`for...await...of loop value: ${value}`);  // 💬 Output: Hello, World
    }
}

asyncLoopExample();

/*
  📊 Summary and Comparison:
  - `for`: 🔄 Best for traditional loops with a known number of iterations.
  - `while`: 🔄 Great when the number of iterations isn't known but depends on a condition.
  - `do...while`: 🔄 Ensures the loop runs at least once before checking the condition.
  - `for...in`: 🔄 Perfect for iterating over object properties, but be cautious of inherited properties.
  - `for...of`: 🔄 Ideal for iterating over iterable objects like arrays and strings.
  - `forEach`: 🔄 Easy way to run a function for each array element, but can't break the loop.
  - `map`: 🔄 Transforms each element of an array, returning a new array.
  - `reduce`: 🔄 Aggregates array elements into a single value, very powerful for calculations.
  - `for...await...of`: 🔄 Handles asynchronous operations in a loop with awaiting promises.
*/
