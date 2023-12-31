// Class
class Motorbike {
  engine: string;

  constructor(engine: string) {
    this.engine = engine;
  }

  display(): void {
    console.log("Function display engine is :", this.engine);
  }
}

let randomObj = new Motorbike("XXSY1");
// randomObj.display()

class Fruit {
  color: string;

  constructor(color: string) {
    this.color = color;
  }
}

class Banana extends Fruit {
  price: number;

  constructor(price: number, color: string) {
    super(color);
    this.price = price;
  }

  display(): void {
    console.log("Color of Banana fruit is :", this.color);
    console.log("Price of Banana fruit is :", this.price);
  }
}

let fruitObj = new Banana(4000, "Yellow");
// fruitObj.display()

// Interface
interface Person {
  firstName: string;
  lastName: string;
  age?: number;
  getFullName(): string;
}

// Implement Interface
const person: Person = {
  firstName: "Bnox",
  lastName: "Geming",
  age: 30,
  getFullName(): string {
    return this.firstName + " " + this.lastName
  }
}

class PersonImpl implements Person{
  firstName: string
  lastName: string
  age?: number
  
  constructor(firstName: string, lastName: string, age?: number) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
  }
  
  getFullName(): string {
    return this.firstName + this.lastName
  } 
} 

const person1: Person = new PersonImpl("Fatur", "Rohman") 
console.log(person1.getFullName())