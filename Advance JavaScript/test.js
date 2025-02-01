//function dec;aration / state,ment
// function solve(){
//     return a + b;
// }

// solve(2, 2);

//Function expression

// const store = function (a, b){
  
// }

// console.log("hello");
// console.log(a);

// const store_me = (...args) => {
//     console.log(args)
// }
// let output = [1, 2, 3,4 ,5]
// store_me(output);

// let my_promise = new Promise(function (resolve, reject){
// //    resolve("Fetched data")
//     reject("data is rejected, I don't know whats wrong") 
// })

// my_promise.then((result) => {
//     console.log("Result is", result)
// }).catch((error) => {
//     console.log("Error", error)
// })

//Higher ORder Functions

// function iamHOF(fn){
//    return () => {
//     console.log("I am returned from a function")
//    }
// }

// let result = iamHOF(() => {
//     console.log("I am callback")
// });

// console.log(result);

let array = [1, 2, 3, 4];

let result = array.map(function map_call(){
    console.log(arguments)
})
console.log(result);