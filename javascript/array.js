let arr = [];

let carTypes = ["Toyota", "Honda", "Suzuki"];
let scores = [70, 85, 90, 60];

// Change Value
carTypes[0] = "BMW";

// Add value from behind
carTypes.push("Hino");
// Add value from the front
carTypes.unshift("Mazda");
// Remove value from behind
carTypes.pop();
// Remove value fron the front
carTypes.shift();

// Copy array with slice
let sample = ["a", "b", "c", "d", "e"];
let copy = sample.slice()
let spreadOfSample = [...sample]
// console.log(spreadOfSample)

let sliceOfSample = sample.slice(1, 4)
// console.log(sliceOfSample)

// Looping Array
// char is index
for (let char in sample) {
  // console.log(sample[char])
}

// char is value
for (let char of sample) {
  // console.log(char)
}

