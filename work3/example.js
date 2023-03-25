// // function myFunc(theObject) {
// //   //   theObject.make = "Toyota";
// //   const newObj = {
// //     ...theObject,
// //     make: "Toyota",
// //   };

// //    return newObj;
// //    }
// // square();
// // const myCar = {
// //   make: "Honda",
// //   model: "Acord",
// //   year: 1998,
// // };

// // const x = myCar.make;

// // console.log(x, " property x");
// // const response = myFunc(myCar);
// // console.log(response, " resp");

// // const y = myCar.make;
// // console.log(y, " property y");

// // const square = function (number) {
// //   return number * number;
// // };

// // const result = square(8);
// // console.log(result);

// // if (true) {
// //   console.log(x);
// //   var x = 1;
// // }

// // console.log(x);
// //var y block scope chi chanachum
// // function square(number) {
// //   return number * number;
// // }

// // console.log(square(8));

// // let myFunc;
// // let num = 1;

// // if (num === 1) {
// //   myFunc = function () {
// //     console.log("barev");
// //   };
// // } else {
// //   myFunc = function () {
// //     console.log("barev1");
// //   };
// // }

// // myFunc();

// // function addSquares(a, b) {
// //   function square(x) {
// //     return x * x;
// //   }
// //   return square(a) + square(b);
// // }

// // const a = addSquares(2, 3);
// // console.log(a);

// // sum(a)(b)(c)
// // a + b + c

// // function sum(a) {
// //   console.log(a, " 1ini mej");
// //   return function (b) {
// //     console.log(b, " 2rdi mej");
// //     return function (c) {
// //       console.log(c, " 3rdi mej");
// //       return a + b + c;
// //     };
// //   };
// // }

// // console.log(sum(10)(20)(30));

// // (function a() {
// //   ////////////////////////////////////////
// //   var a = "ddd";
// //   console.log("barev");
// // })();

// // function a() {
// //   console.log(i);
// // }

// // function b() {
// //   const i = 1;
// //   a();
// // }

// // const i = 0;

// // b();

// // function greetings() {
// //   let message = "hi";

// //   function sayHi() {
// //     console.log(message);
// //   }

// //   sayHi();
// // }

// // greetings();

// // function greetings() {
// //   let message = "hi";
// //   console.log("mtav 1");
// //   function sayHi() {
// //     console.log("mtav 2");
// //     console.log(message);
// //   }
// //   return sayHi;
// // }

// // const hi = greetings();

// // hi();
// // console.log(hi);

// // function a(a, b) {
// //   console.log(arguments);
// // }

// // a(4, 5, 2, 8, 0, 4);

// // function func1() {
// //   console.log(arguments[0]);
// //   console.log(arguments[1]);
// //   console.log(arguments[2]);
// //   console.log(arguments[7]);
// // }

// // func1(1, 2, 3, 9, 10, 45);

// // let tea = "sweet";

// // if (true) {
// //   tea = "sour";
// //   var tea = "iced";
// // }

// // console.log(tea);

// // function foo(a) {
// //   console.log(this.num + a);
// // }

// // const obj = {
// //   num: 7,
// // };

// // // foo(5);
// // foo.call(obj, 5, 8, "sd");

// // function add(a, b) {
// //   console.log(this.num + a + b);
// // }

// // const obj = { num: 2 };

// // add.apply(obj, [3, 5]);

// // const obj = {
// //   num: 2,
// // };

// // function add(a, b) {
// //   console.log(this.num + a + b);
// // }

// // add.apply(obj, [3, 5]);
// // foo.call(obj, 5, 8, "sd");
// let obj = {
//   num : 5,
//   a:5
// }
// function add(num, a){
//   return this.num + this.a
// }
// console.log(add.call(1, 4));
// // const bindedFunction = add.bind(obj, 4, 4);

// // bindedFunction();

// // const obj1 = {
// //   name: "Jack",
// //   surName: "Brawn",
// //   age: 25,
// //   city: "London",
// //   bio: function () {
// //     console.log(
// //       `hi My name is ${this.name} my surname is ${this.surName} I'm ${this.age} years old, I'm living in ${this.city}`
// //     );
// //   },
// // };

// // const obj2 = {
// //   name: "John",
// //   surName: "Doolan",
// //   age: 32,
// //   city: "Paris",
// //   bio: function () {
// //     console.log(
// //       `hi My name is ${this.name} my surname is ${this.surName} I'm ${this.age} years old, I'm living in ${this.city}`
// //     );
// //   },
// // };

// // obj1.bio.apply(obj2);
// // const { bio } = obj1;
// // bio.call(obj1);
// // bio.call(obj2);

// // obj1.bio();

// // const { bio } = obj1;

// // bio();

// // const [a, b] = [1, 2, 3, 5, 5];

// // console.log(a);
// // console.log(b);

// // function User(name, surName) {
// //   this.name = name;
// //   this.surName = surName;
// //   this.age = 35;
// // }

// // const user1 = new User("John", "Scott");
// // console.log(user1);
// // const user2 = new User("Bob", "Doolan");
// // console.log(user2);
// // function User(name, age) {
// //   this.name = name;
// //   this.age = age;
// //   //   this.surName = "gggg";
// //   //   this.displayName = function () {
// //   //     console.log(`hi my name is ${this.name}`);
// //   //   };
// // }

// // User.prototype.displayName = function () {
// //   console.log(`hi my name is ${this.name}`);
// // };

// // const user1 = new User("John", 34);
// // console.log(user1, " user1");
// // const user2 = new User("Bob", 23);
// // console.log(user2, " user2");
// // user1.displayName();
// // user2.displayName();

// // function Person() {
// //   this.name = " John";
// //   this.age = 23;
// // }

// // const person1 = new Person();

// // const person2 = new Person();

// // person1.gender = "male";
// // person1.greet = function () {
// //   console.log("hi");
// // };

// // person2.greet();
function Animal(name){
  this.name = name
}
Animal.prototype.speal = function(){
  console.log(`${this.name} make a noise`);
}
class Dog extends Animal{
  speak(){
    console.log(`${this.name} barks`);
  }
}
let res = new Dog('boby')
console.log(res);