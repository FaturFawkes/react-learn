// String

let strVar = "lorem ipsum";
let accessFirst = strVar[0]; // l
// console.log(`word of ${strVar}`)

let firstThree = strVar.substring(0, 4); // get 3 char from the front
// console.log(firstThree)

let restOfString1 = strVar.substring(3); // remove 3 char from the front
let restOfString3 = strVar.substring(3, strVar.length);
// console.log(restOfString3);

// Parse to number
let title = "JamesBond107";
let lastThree = title.substring(title.length - 3, title.length);
let parseNumber = parseInt(lastThree);
// console.log(parseNumber);

let numVar = 2.67;

// Parse to string
let number = 88124;
let strConv = number.toString();
// console.log(strConv);
