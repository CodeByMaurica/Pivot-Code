// OBJECTS
// key : value
const person = {
  name: "Robert",
  email: "leo-email.com",
  phoneNumber: 222_222_222,
  job: "teacher",
  age: 35,
  isFavorite: false,
  photo: "leo.png",
  greet: function () {
    alert("Hello " + this.name)
  }
}

// get a value with the key
console.log(person.age);
// get a value with DYNAMIC key
console.log(person["job"]);
// update a value
person.email = "123@yahoo.com";
person.phoneNumber = 123_4567_890;
// add stuff to object
person.money = 0;

console.log(person);
// 6:55
// chatgpt 3 practice
// PART 1
const book = {
  title: "The Hobbit",
  author: "Tolkien",
  pages: 10,
}

console.log(book.title);
console.log(book.page);
// PART 2
let movie = {
  name: "Inception",
  rating: 9
};
movie.rating = 10;
movie.year = 2010;
// PART 3

console.log("---METHODS---");

// person.greet();
// pet object
const pet = {
  name: "kitty",
  breed: "cat",
  info: function () {
    console.log(this.name + " is a " + this.breed)
  }
}

pet.info();

// car object
const car = {
  brand: "Toyota",
  model: 2020,
  describe: function () {
    console.log("This car is a " + this.model + " " + this.brand);
  }
}

car.describe();

// card object
const profile = {
  name: "Max",
  age: 40,
  hobbies: ["reading books", "playing piano", "going on hikes"],
  greet: function () {
    console.log("Hello my name is " + this.name)
  }
}

console.log(profile.greet())