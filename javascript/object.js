// Object

// Access value key in object
let user = {
  name: "Nur Fatchurohman",
  age: 25,
};
// console.log("Name of User : ", user.name);
// console.log("Age of User : ", user.age);

// Add value key ke object
let person = {
  name: "Tom",
  language: "Javasript",
  workExperience: 5,
};
// person["address"] = "Jonggol"; // menambahkan value key key object

// Update value key di dalam objek
let laptop = {
  type: "macbook air",
  year: 2019,
  processor: "intel",
};
laptop["year"] = 2023;
// console.log(laptop.year);

// Delete key di dalam object
let pet = {
  type: "cat",
  name: "Chika",
  age: 4,
};
delete pet.age;

// Check key is in object
let listArray = {
  a: 1,
  b: 2,
  c: 3,
  d: 3,
};
let propertyNotPresent = listArray["e"];
// console.log(propertyNotPresent) // undefined

// Check data type
let superHero = {
  name: "Dr Strange",
  city: "Manhattan NY",
  villain: "Thanos",
};
let res = typeof superHero;
// console.log("type of superhero : ", res)

// Nested Object
let personal = {
  name: "Tom Holland",
  title: "Student",
  address: {
    street: "Park avenue",
    city: "Queens, NY",
    state: "NY",
    zip: 18909,
  },
  hobbies: [
    "Playing football",
    "Feeding pet",
    "Learning a new programming language",
  ],
};

// Access Nested Object
let accessStreet = personal.address.street; // mengakses value object di dalam nested object
let accessHobby = personal.hobbies[1]; // mengakses value array di dalam nested object
// console.log("result of street is : ", accessStreet);
// console.log("result of hobby is : ", accessHobby);

// Add Nested Object
personal.address["country"] = "USA"; // add key value object in nested object
personal.hobbies.push("Fishing"); //add value of array in nested object from behind
personal.hobbies.unshift("Fishing") // add value of array in nested object from the front

personal.address.city = "Miami, FL"; // update value object in nested object
personal.hobbies[0] = "Playing volley ball"; // add value array in nested object
// console.log("result after updated address : ", personal.address);
// console.log("result after updated hobbies : ", personal.hobbies);

// Looping Object
let motorcycle = {
  type: "scooter",
  name: "honda",
  year: "2023",
};

for (let key in motorcycle) {
  // console.log(key)
  // console.log(motorcycle[key]);
}

// Clone Object
let marvel = {
  character: "Ironman",
  name: "Tony Stark",
  company: "Stark Industries",
};

let duplicate1 = Object.assign({}, marvel); // copy used object assign
let duplicate2 = { ...marvel }; // copy used spread operator
let duplicate3 = JSON.parse(JSON.stringify(marvel)); // copy used JSON method (effective for deep copy or parse to string)
console.log(duplicate3)