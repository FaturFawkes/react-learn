let character = ["Captain America", "Ironman", "Black Panther"];

for (let i = 0; i < character.length; i++) {
  // console.log(character[i])
}

for (let key of character) {
  // console.log(key)
}

for (let key in character) {
  // console.log(character[key]);
}

// Foreach && Map
let motorbike = ["Yamaha", "Honda", "Vespa", "Viar"];
// 1
let motorForEach = motorbike.forEach((item, index) => {
  // console.log(item);
});

let randomNested = [
  {
    name: "John",
    id: 10,
  },
  {
    name: "Fatur",
    id: 11,
  },
  {
    name: "Jonas",
    id: 12,
  },
];

// 2
let randomMap = randomNested.map((value, index) => {
  // console.log(value)
})