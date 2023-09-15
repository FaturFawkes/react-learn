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
    this.color = color
  }
}

class Banana extends Fruit {
  price: number

  constructor(price: number, color: string,) {
    super(color)
    this.price = price
  }

  display(): void {
    console.log("Color of Banana fruit is :", this.color)
    console.log("Price of Banana fruit is :", this.price)
  }
}

let fruitObj = new Banana(4000, "Yellow");
fruitObj.display()
