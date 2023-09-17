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

type behavioutType = {
  type: string;
};

type addressType = {
  city?: string;
  country: string;
};

interface objType {
  name: string;
  age: number;
  job: string;
  isMarried: boolean;
  address: addressType;
  hobbies: string[];
}

// create object from interface
const person_1: objType = {
  name: "Nur Fatchurohman",
  age: 21,
  job: "Fullstack Developer",
  isMarried: false,
  address: {
    city: "Bogor",
    country: "Indonesia",
  },
  hobbies: ["Coding", "Running", "Mancing"],
};
console.log(person_1)

interface personalType extends addressType {
  name: string;
}

const peoples: personalType[] = [
  {
    name: "John Doe",
    country: "UK",
    city: "London",
  },
  {
    name: "Budi",
    country: "Indonesia",
    city: "Jakarta",
  },
  {
    name: "Fatur",
    country: "Indonesia",
    city: "Bogor",
  },
];

let arrPeople = peoples.forEach((people: personalType, index: number) => {
  console.log(people.city)
  return people
})

// console.log(arrPeople)