function checkAge(num: number) {
  if (num < 17) {
    return "You're too young";
  } else if (num >= 17 && num <= 21) {
    return "Middle age";
  }
  return "Adult";
}
// console.log(checkAge(22));

// name, age => not null
// address? => nullable
function greetingSelf(
  name: string,
  age: number,
  address?: string,
  id: number = 1
): string {
  if (address != null) {
    return `Id.${id} My Name is ${name}, I'm ${age} years old. I live in ${address}`;
  }
  return `Id.${id} My Name is ${name}, I'm ${age} years old`;
}
// console.log(greetingSelf("fatur", 21));

// Lamda Function
const sumOfNumber = (x: number, y: number) => {
  return x + y;
};
// console.log(sumOfNumber(5, 7));

// Never => return error
function throwError(errorMessage: string): never {
  throw new Error(errorMessage);
}

function keepProcessing(): never {
  while (true) {
    console.log("infinite loop");
  }
}

function func() {
  return throwError("error infinite loop!");
}
// console.log(throwError("error anying"))

// Void
function warnUser(): void {
  console.log("This is warning message");
}

let unknown: void = undefined;

function tryNumber(input: number) {
  if (input > 5) {
    return "bilangan lebih dari 5";
  }
  return warnUser();
}
// console.log(tryNumber(4))

// Anonymous Function
const message = function () {
  return "lorem ipsum dolor sit amet";
};
console.log(message())
