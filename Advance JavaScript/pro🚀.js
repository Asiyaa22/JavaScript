// THIS KEYWORD🔑 In JavaScript🚀

// this keyword refers to an Object
// It refers to differnt objects depending on how it is being invoked📞


// 1. This in a object method
// this in a method refers to the object 
// const person = {
//     name: "Asiya",
//     age: 21,
//     fun: function(){
//         // console.log("hello..."+this.age);
// return "hello.." +this.name;

    
// };
// console.log(person.fun());

// 2. this Alone
// when used alone this refers to the global object

// let x = this;
// console.log(x);

// 3. This whwn used with function....It refers to global object
// function myfun(){
    // console.log(this);
    // return this;
// }
// myfun();

// 4. In HTML Event Handlers this refers to the element that receives the event
// var btn = document.querySelector("button");
// this.innerHtml = "submit";
// the above code will not work cause this works with events and the above code is not for events
// btn.addEventListener('click',function(){
//     this.innerHtml = "Do it🚀"
// })

// this in Arrow functions

// let person = {
    // name: "Suhail",
    // age: 20,
    // isAlive: true,
    // bankBalance() {
      // let s1 = () => {
    //    return console.log(`My Name is ${this.name} and My Age is ${this.age}`);
      // };
    //  s1();
    // },
  // };
  
  // person.bankBalance()


// const words = ["zero", "one", "two", "three"];

// console.log(words);
// console.log(words.copyWithin(1, 2, 3));
// console.log(words);


  // let person2 = {
    // name: "Asiya",
    // age: 21,
    // hello(){
        // let s2 = () => {
            // return console.log('My name is ' + this.name + ' and My age is ' + this.age);
    //    return console.log(`My name is ${this.name} and My age is ${this.age}`);
    //    return console.log(`My Name is ${this.name} and My Age is ${this.age}`);

        // };
        // s2();
    // },
    
// }
// person2.hello()


// Async functions ⏱ in JavaScript💖

// console.log("Hello");
// function async_fun(){
// console.log("Fee aman Illah💕");
// }
// setTimeout(async_fun, 5000);

// Developer Sahab 💖 ka code hai yeh 👇
// import fetch from "node-fetch";
// let data = "https://api.sgithub.com/users/suhailroushan13";

// let user = fetch(data);

// console.log(user);

// user
//   .then((d) => {
//     console.log(d, d.urls);
//     console.log(d.statuss);
//   })
//   .catch(() => {
//     console.log("Error hai yeh");
//   });

// Self-Invoking Functions📞
// Self-Invoking Functions are functions which are automatically invoked no need to call them

// code is💻

// var a = (function(){
//   let x = "hello....I am a Self-Invoking function📞";
//   return x;
// })();
// console.log(a);

// Done with self Invoking Function✅

// Closures🚩

// JavaScript closure is a feature that allows inner function to access outer scope of a function
// In closures lexical Scoping funda is used
// A closure is a function having access to the parent scope, even after the parent function has closed.

// Practise karoge toh cheezein aur clear hojaye gi No worries🐱‍💻

// function outer_fun(){
//   var a = 10;
//   function add(){
//   b = 10;
//   // console.log(a+b);
//   // return a+b;
// }
// //  return add;
// }
// let closure_fun = outer_fun();
// console.log(closure_fun());
// closures Done✅

// 1. Call()
// 2. Apply()
// 3. bind()

// call() method in JavaScript is a predefined method
// It is use to call a method from another object (owner object) via passing owner object as an argument

const person1 = {
  first_name: 'Suhail',
  last_name: "Roushan🚀",
  age: 23
};

const person2 = {
  name: "Asiya",
  age: 22,
  qualification: "B.tech",
  hum: function(){
    return `hello, ${this.first_name}💖`;
  }
};

// console.log(person2.hum.call(person1));
// console.log(person2.name);
// console.log(person1.hum);
// const hum = {
//   hum_do: function(){
//     return ${this.name} + ${this.last_name};
//   }
// };
// 

// JavaScript Callbacks:

// I will call back later
// A callback function is a function that is passed as an argument to another function

// function greet(name, callback){
  // console.log(`Hello! ${name}`);
  // callback();
// }

function bye(){
  console.log("Good Bye!");
}
// greet("Asiya",bye);

// CallBack Function

// console.log("Hello");

// let fun1 = (name, fun) => {
  // console.log(`Hello ${name}`);
  // fun();
// };

// let fun2 = (name) => {
  // console.log("I am Fun2");
// };

// fun1("Suhail", fun2);

//EXAMPLE  Removing negative Numbers from array Using callback
const myNumbers = [1, 2, 4, -10, 12, -20, -6, 17];

const posNumbers = removeNeg(myNumbers, (x) => x >= 0);

// Display result
// document.getElementById("demo").innerHTML = posNumbers;

function removeNeg(numbers, callback){
  const myArray = [];
  for(const x of numbers){
    if(callback(x)){
      myArray.push(x);
    }
  }
  return myArray;
}

// console.log(posNumbers);

// Javascript Asynchronous

// function greet(){
//   console.log("Hello, I am Greet");
// }
// function sayName(name){
//   console.log(name);
// }
// setTimeout(greet, 3000);
// sayName("Asiya");\

function greet(name, myfun) {
  // console.log("Hello Main Greet",name);
  myfun(name);
}

function sayName(name) {
  // console.log("Hello ", name);
}

// setTimeout(greet, 5000, "Asiya", sayName);

// setInterval(myFunction, 1000);
// function myFunction(){
//   let d = new Date();
//   document.getElementById("demo").innerHTML = d.getHours()+":"
//   +d.getMinutes()+":"+d.getSeconds();
// }


let promise = new Promise(function(resolve, reject){
  let x = 1;
  if(x==0){
    console.log('vohooo');
  }else{
    console.log('its a match');
  }
});

promise.then(function(value){
 console.log("haan bhai hogayi promise fulfilled!...sukoon");
},
function(error){
  console.log("Dil nakaam hi toh hai....naumeed nahi!");
});