// ✅ What is an Object in JavaScript/TypeScript?
// 👉 In JavaScript/TypeScript, an object is a collection of key-value pairs, where each key is associated with a specific value. 
// The keys are also known as properties or attributes, and the values can be of any data type, including functions, 
// which are known as methods when defined inside an object.

// 🧑‍💼 Create an object based on the Person interface
const person = {
    name: "Alice",  // 🧑 Name of the person
    age: 28,  // 🎂 Age of the person
    job: "Software Engineer",  // 💼 Job title
    isMarried: false,  // 💍 Marital status

    // 💬 Greet method implementation
    greet() {
        return `👋 Hello, my name is ${this.name}!`;
    },

    // 🎉 Celebrate birthday method implementation
    celebrateBirthday() {
        this.age += 1;  // 🎂 Increase the age by 1
        console.log(`🎉 Happy Birthday! You are now ${this.age} years old.`);
    },
};

// 🛠️ Using the object methods
console.log(person.greet());  // 👋 Hello, my name is Alice!
person.celebrateBirthday();  // 🎉 Happy Birthday! You are now 29 years old.

// 🔄 Inserting/Adding a new property
person.hobbies = ["Reading", "Traveling"];  // 🆕 Added a new property 'hobbies'
console.log(`🎨 Hobbies: ${person.hobbies}`);  // 🎨 Hobbies: Reading, Traveling

// ✂️ Deleting a property
delete person.isMarried;  // ❌ Removed 'isMarried' property
console.log(`💍 Marital Status: ${person.isMarried}`);  // 💍 Marital Status: undefined

// 📑 Checking if a property exists
console.log(`🔍 Has 'job' property: ${'job' in person}`);  // 🔍 Has 'job' property: true

// 📝 Accessing properties using Dot Notation
console.log(person.name);  // 🧑 Alice

// 📝 Accessing properties using Bracket Notation
console.log(person['name']);  // 🧑 Alice

// 🔄 Adding a new property
person.isSleeping = false;  // 🆕 Added 'isSleeping' property
console.log(`🛌 Is Sleeping: ${person.isSleeping}`);  // 🛌 Is Sleeping: false

// 🔧 Modifying an existing property
person.age = 22;  // 🎂 Updated age
console.log(`🎂 Updated Age: ${person.age}`);  // 🎂 Updated Age: 22

// ✂️ Deleting an existing property
delete person.age;  // ❌ Removed 'age' property
console.log(`🎂 Age after deletion: ${person.age}`);  // 🎂 Age after deletion: undefined
