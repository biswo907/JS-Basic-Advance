// A function is a block of code that: "Takes input (arguments), does something with it, and returns output (a value or a side effect)."

// Real-World Analogy 🎯
//  A function is like a: "Recipe" that takes ingredients (arguments) and produces a dish (output). You can use the same recipe multiple times with different ingredients to produce different dishes.


// 1. **Function Declaration** 📝
// A function declared using the `function` keyword
function add(x, y) {
    // returns the sum of x and y
    return x + y;
}

// 2. **Function Expression** 💡
// A function assigned to a variable or property
const add = function (x, y) {
    // returns the sum of x and y
    return x + y;
};

// 3. **Arrow Function** ➡️
// A concise syntax for functions, introduced in ECMAScript 6
const add = (x, y) => x + y;

// 4. **Callback Function** 📞
// A function passed as an argument to another function, to be executed later
setTimeout(function () {
    // logs "Hello World!" to the console after 1 second
    console.log('Hello World!');
}, 1000);

// 5. **Anonymous Function** 🕵️‍♂️
// A function without a name, often used as a callback or event handler
button.addEventListener('click', function () {
    // logs "Button clicked!" to the console when the button is clicked
    console.log('Button clicked!');
});

// 6. **Immediately Invoked Function Expression (IIFE)** ⚡️
// A function that is executed immediately after it's defined
(function () {
    // logs "Hello World!" to the console
    console.log('Hello World!');
})();

// 7. **Generator Function** 🔁
// A function that returns an iterator, introduced in ECMAScript 6
function* generator() {
    // yields the values 1, 2, and 3
    yield 1;
    yield 2;
    yield 3;
}

// 8. **Async Function** ⏱️
// A function that returns a Promise, introduced in ECMAScript 2017
async function fetchData() {
    // fetches data from a URL and returns the response as JSON
    const response = await fetch('https://example.com/data');
    return response.json();
}

// 9. **Higher-Order Function** 🤝
// A function that takes another function as an argument or returns a function as a result
function double(x) {
    // returns the double of x
    return x * 2;
}

function triple(x) {
    // returns the triple of x
    return x * 3;
}

function compose(f, g) {
    // returns a new function that composes f and g
    return function (x) {
        return f(g(x));
    };
}

const doubleThenTriple = compose(double, triple);
// logs the result of composing double and triple functions with the input 5
console.log(doubleThenTriple(5)); // Output: 30