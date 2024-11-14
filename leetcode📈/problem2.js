// Question 5
//Filter Elements from Array without using Filter method
//solution 1👇
// let array = [1, 10, 20, 2, 3, 30, 40, 5, 50, 60];
// var filteredArray = function fn (array){
//     let filter = [];
//     array.forEach(function (value){
//         if(value % 2 == 0){
//             filter.push(value);
//         }
//         });
//         return filter;
//         }
// console.log(filteredArray(array));
            
//solution 2👇       

// let array = [1, 10, 20, 2, 3, 30, 40, 5, 50, 60];
// var filter = function (array, fn) {
//     const result = [];
//     for(let i = 0; i< array.length; i++){
//         if(fn(array[i], i)){
//             result.push(array[i]);
//         }
//     }
//     return result;
// };
// filter(array = function greater(){
//     return n > 10; 
// })
// console.log(result);

// Question 6
// Array Reduce Transformation

//solution 1👇

// var reduce = function(nums, fn, init) {
//     if( nums.length === 0){
//         return init;
//     }
// let res = init;
// for(let i = 0; i<nums.length; i++){
    // res = fn(res, nums[i]);
    // }
// nums.forEach(num => {        
//     res = fn(res, num);
//     });
//   return res;
// };

// console.log(reduce(nums = [10, 20 , 30], function sum(accum, curr) { return accum + curr; }, init = 0));


// Question 7
// Array Transform over each element in Array

//solution 1👇

// for(let i = 0; i<arr.length; i++){
//     newArray[i] = fn(arr[i], i);     
// }
// var map = function(arr, fn) {
//     let newArray = [];
//     arr.forEach(function(ele, index) {
//         newArray[index] = fn(ele, index);
//     });
//     return newArray;
// };
// console.log(map(arr=[1, 2, 3,4], function plusOne(n){
//    return n + 1;
// }));

//solution 2👇
// var map = function (arr, fn){
//     let newArray = [];
//     for(let i = 0; i<arr.length; i++){
//         newArray[i] = fn(arr[i], i); 
//     }
//     return newArray;
// };
// console.log(map(arr = [1, 2, 3, 4], function pluseone(n){
//     return n + 1;
// }));

// Questtion 8
// Function Composition
// var compose = function(functions) {  
// if(functions.length === 0){
//     return function(x) {
//     return x;
//     }
//  }else {
//     return function(x){
//        var composing = functions[functions.length-1](x);
//     for( let i = functions.length - 2; i<=0; i-- ){
//         composing = functions[i](composing);
//     }
//     return composing;
//     }
//   }
// };
// var compose = function (functions = []) {
//     return function (x) {
//         if (!functions.length) { return x }
//         for (let index = functions.length - 1; index >= 0; index--) {
//             x = functions[index](x)
//         }
//         return x
//     }
// };
// console.log(compose([x => x + 1, x => x * x, x => 2 * x]));

// var compose = function(functions) {
// 	if (functions.length === 0) {
//     return function(x) { return x; };
//   }

//   return functions.reduceRight(function(prevFn, nextFn) {
//     return function(x) {
//       return nextFn(prevFn(x));
//     };
//   });  
// };
// const fn = compose([x => x+1, x => x*x, x => 2*x]);
// console.log(fn(3));

// Question 9 
// Return length of Arguments passed

// var argumentLength = function (args){
//     return args.length;
// };
// console.log(argumentLength([3, null, {}, "3"]));

// Question 10
// Allow one Function call

var once = function(fn) {
    
    return function(...args){
        once(fn);
    }
};
console.log(once(fn = (a,b,c) => (a + b + c), calls = [[1,2,3],[2,3,6]]));