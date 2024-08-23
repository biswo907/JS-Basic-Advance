console.log("Biswo");


const CalculateTable = (value) => {
    for (i = 1; i <= 10; i++) {
        console.log(`${value} * ${i} = ${value * i}`);
    }
}

// CalculateTable(9)


// Array Methods

//✅Array.sort()
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




