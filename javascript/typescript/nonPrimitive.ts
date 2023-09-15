let listRandom: number[] = [6, 7, 8, 9, 10];
let listRandomStr: (number | string)[] = [6, 7, "joko", "wi"];
let listRandomGeneric: Array<number> = [6, 7, 8]; // with generic
let listRandomGenericStr: Array<number | string> = [6, 7, "puan", "widodo"]; // with generic

// Tuple
let combinate: [number, string];
combinate = [21, "thomas shelbew"];
// console.log(combinate[1].toUpperCase()); // method for auto capitalize in a string

// Object
let personal = {
  firstName: "Nur",
  lastName: "Fatchurohman",
  id: 122,
  fullname() {
    return this.firstName + " " + this.lastName;
  },
};
// console.log(personal.fullname())

// Object as type
class Fish {
  type = "shark";
  sound = "no";
}

class Reptil {
  type = "crocodile";
  sound = "no";
}

class Aves {
  type = "eagle";
  sound = "yes";
  swim() {
    console.log("cannot swim");
  }
}

let fish: Fish = new Fish();
let reptil: Reptil = new Reptil();
let aves: Aves = new Aves();
// console.log("Type of FIsh", fish.type)