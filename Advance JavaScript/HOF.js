// Higher Order Functions : Functions that operate on other Functions
// In simple terms , A function that accepts other function as an argument 
// or return other function is a hiher order function.
// features of HOF:
// 1. A function that accepts other fn as argument.
// 2. A function that returns another function.

//So, according to def of HOF, we can say

// var argFn = () => {
//     return console.log("I am a fn passed as arg to HOF");
// }

// function iamHOF(fn){
//     fn();
//     return () => {
//         console.log("I am returned fn from HOF");
//         return "Hello learning HOF";
//     }
// }


// let result = iamHOF(argFn)();
// console.log("I am result of HOF", result);

// var points = (grade, credit) => {
//     return grade * credit;
// }
// function compute(fn){
//     return fn;
//     // return () => {
//     //     return "Success";
//     // }
// }

// function compute(){
//     return function points(grade, credit){
//         return grade * credit;
//     }
// }

// let result = compute()(4, 5);
// console.log("I am result of HOF", result);


//why are we using HOF?
//lets see
//suppose we want to calculate the area of circle, circumference of circle,
// and diameter of circel
//lets say we have an array of radius of circle


// name => { return `My name is ${name}`; }
// let result = ("Asiya");
// console.log(result);
//After running this I got Asiya in conole


//Elaboarate


//Asiyaaaa......Document this like what you were trying to do and what you
//expected and what you have got and what you have learned. Important
//fine.....let me write the correcct code for the above code 

//correct approach is 

// console.log((name) =>  `My name is ${name}`("Asiya")); 

//This will console an anonymous function just that

// const myName = (name) => `My name is ${name}`;
// console.log(myName("Asiya"));

//This will console My name is Asiya


//exmaple of HOF


// function sum(a, b){
//     return a + b;
// }
// function findSum(fn){
//    return fn();
// }

// const value = findSum(() => sum(2, 3));
// console.log("value is ", value)

// custom for loop on HOF

// function customForEach(arr, callback) {
//     for (let i = 0; i < arr.length; i++) {
//         callback(arr[i], i, arr);
//     }
// }

// let result = customForEach([1, 2, 3], (num, index) => console.log(`Index ${index}: ${num}`));

// console.log(result);


// const checkNum = (num) => {
//     if(num % 2 === 0){
//         return "Even";
//     }else{
//         return "Odd";
//     }
// }
// console.log(checkNum(7)); 

// const isPrime = (num) => {
//     if(num === 1 || num === 0){
//         return "Not Prime";
//     }
//     for(let i = 2; i < num; i++){
//         if(num % i === 0){
//             return "Not Prime";
//         }
//     }
//     return "Prime";
// }

// console.log(isPrime(0));


// example of HOF

// function greet(){
//     // console.log("Hello Asiya");
//     return "hello beauty"
// }

// function iamHof(fn){
//     // fn();
//     return () => {
//         let stored = fn();
//         console.log("I am store value from greet function that is callback fn",stored);
//         return "I am returned from HOF";
//     }
// }

// let result = iamHof(greet)();
// console.log("I am result of HOF", result);


// Question:
// Write a function called multiplyBy that accepts a number (multiplier) as an argument and returns a new function. The returned function should accept a number (x) and return the result of multiplying x by the multiplier you passed to multiplyBy.

function multiplyBy(multiplier){
    return (x) => {
        let result = x * multiplier;
        return result;
    }
}

const ans = multiplyBy(6)

//the ans variable stores the value returned by multiplyBy function
//so the value returned by multiplyBy function is actually a function 
//since multiplyBy is HOF so again while printing the result we are passing some value
// console.log(ans(9));


// Question:
// Write a higher-order function called createCounter. This function should take an initial value as an argument (startValue) and return an object with the following methods:

// increment(): Increases the counter by 1 and returns the new value.
// decrement(): Decreases the counter by 1 and returns the new value.
// getValue(): Returns the current value of the counter.
// The counter should remember its state (i.e., the value) between calls, even though the methods (increment, decrement, getValue) are called separately.


function createCounter(startValue){
    return {
       increment: () => {
        return startValue = startValue + 1;
       },
       decrement: () => {
        return startValue = startValue - 1;
       },
       currentValue: () => {
        return startValue = startValue;
       },
    }
}

// let counter = createCounter(10);
// console.log(counter.currentValue());
// console.log(counter.increment());
// console.log(counter.increment());
// console.log("decreeent started")
// console.log(counter.decrement());
// console.log(counter.currentValue());


// Question:
// Write a higher-order function called debounce. This function will take a function (fn) and a time delay (delay) as parameters and return a new function. When the returned function is called multiple times within the delay period, it will only call fn once after the delay period has passed.

// Debounce behavior:
// The function fn should only be executed once after the last call is made, and after the specified delay.
// If the returned function is called multiple times within the delay, it should reset the timer and delay calling fn until after the last call.

// function debounce(fn, delay){
//     return () => {

//     }

// }

//For area of circle we can us Array.protoype to make it like .map() function

// const array = [1, 2,3];

// let res = array.map(x =>  x * x );
// console.log(res);
// console.log(array);


const people = [
    { firstName: "Asiya", lastName: "Farhath", age: 22 },
    { firstName: "Suhail", lastName: "Roushan", age: 25 },
    { firstName: "Ali", lastName: "Khan", age: 28 },
    { firstName: "Ayesha", lastName: "Begum", age: 24 }
];

// console.log(people);

// const output = people.filter((x) => {
//     if(x.age < 28){
//        return x.firstName;
//     }   
// }).map(x => x.firstName);

// console.log(output);

// const output = people.reduce(function(acc, curr){
//    if(curr.age < 35){
//        acc.push(curr.firstName)
//    }
//    return acc;
// }, [])

// console.log(output);


// setInterval(() => { console.log("I love you")}, 2000);
