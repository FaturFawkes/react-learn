// Ternary Operator
// let age = 20;
// function ternaryDriveCheck(age) {
//   let canDrive = age > 17 ? "yes" : "no";
//   return canDrive;
// }
// console.log(ternaryDriveCheck(age));

// Ternary If Elseif Else
// let temp = 15;
// function ternaryTemp(temp) {
//   let result =
//     temp > 40
//       ? "TOO HOT"
//       : temp > 36
//       ? "HOT"
//       : temp > 32
//       ? "NORMAL"
//       : temp > 15
//       ? "COLD"
//       : "TOO COLD";
//   return result;
// }
// console.log(ternaryTemp(temp));

// Ternary If Elseif with backtik and literal template
// let temp = 33;
// function ternaryTemp(temp) {
//   let result =
//     temp > 40
//       ? "HOT"
//       : `${
//         temp > 32 && temp <= 36
//           ? "NORMAL"
//           : "COOL"
//       }`
//   return result;
// }
// console.log(ternaryTemp(temp));

// Ternary Nested
// let person = {
//   vehicle : "bike",
//   age : 5
// }
// function isAdmitted(vehicle, age) {
//   let res =
//     vehicle == "bike"
//       ? age > 50
//         ? true
//       : age > 10
//         ? true
//       : false :
//     vehicle == "car"
//       ? age >= 18
//         ? true
//       : age < 18
//         ? false
//       : age > 60
//         ? false
//       : false
//     : false
//   return res
// }
// console.log(isAdmitted(person.vehicle, person.age))

// Switch Case
const trafficLight = "red green blue";
function trafficLightCase(signal) {
  switch (signal) {
    case "green":
      console.log("GO!");
      break;
    case "yellow":
      console.log("Be Ready");
      break;
    case "red":
      console.log("STOP!");
      break;
    default:
      console.log("You're gay");
      break;
  }
}
trafficLightCase(trafficLight);
