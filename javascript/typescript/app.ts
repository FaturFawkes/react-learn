// Hoisting
// Declaration after initiate value
numA = 10;
var numA;

// let and const cannot use hoisting

// Block Scope
var numberA = 15;
if (true) {
  var numberA = 20;
}
// console.log(numberA) // 20

let numberB = 30;
if (true) {
  let numberB = 20;
}
// console.log(numberB) // 30

const numberC = 50;
if (true) {
  const numberC = 90;
}
// console.log(numberC) // 50

// Let vs Const
// let x = 12;
// x = 10;
// let y: string;
// y = 20 // error type not string

let z: any;
z = 121;
z = "Hello World";

// Boolean
let boolA: boolean = true;
let boolB: boolean = false;

// Print to string
// console.log(boolA.toString());
// console.log(boolB.toString())

// Print to boolean
// console.log(boolA.valueOf())
// console.log(boolB.valueOf())

// Print data type
// console.log(typeof boolA.toString())
// console.log(typeof boolA.valueOf())

// Number
let numX: number = 10
let numY: number = 15

let decimalX: number = 0.7
let decimalY: number = 0.5
let sumDecimal = decimalX + decimalY
// console.log(sumDecimal)

// String
let firstChar: string = 'Type'

