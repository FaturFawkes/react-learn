// For Loop
// for (let i = 1; i <= 10; i++) {
//     console.log(i)
// }

// While Loop
// function whileLoop(number) {
//     let i = 0
//     while(i <= number) {
//         console.log(i)
//         i++
//     }
// }
// whileLoop(10)

// Do While Loop
// function doWhileLoop(number) {
//     let i = 1
//     do {
//         console.log(i)
//         i++
//     } while (i < 2)
// }
// doWhileLoop(1)

// Continue & Break
// function continueBreak(number) {
//   for (let i = 0; i < 10; i++) {
//     if (i == 2) {
//       continue; // skip iterasi yang berjalan
//     }
//     if (i > 5) {
//       break; // mengentikan iterasi
//     }
//     console.log(i);
//   }
// }
// continueBreak(10);

// Recursive Loop
function recursiveLoop(number) {
  if (number == 1) {
    return number;
  }
  let res = number * recursiveLoop(number - 1);
  return res;
}
console.log(recursiveLoop(6));
