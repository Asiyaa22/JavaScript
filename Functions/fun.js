/*Arrow function provides us with more precise approch to writting
It was introduced in ES6 version 
Arrow funtions enable us to write functions with simpler and shorter syntax & make our code more readable and organised 
*/

//Normal function in JavaScript
function multiply(a, b){
    return a*b;
}
console.log(multiply(5,6));

//Arrow Function 
let fun1 = (a, b)=>a*b;
console.log(fun1(5,6));

// If we've more lines to process then we use return keyword

var number = (a, b)=> {
    c = 6;
    return (a+b)*c;  //return keyword is used
}
console.log(number(4, 2));

// const str = () => "Whatt color is Your Bugatti?!";
// console.log(str);

//yo!
var motivation = (a, b) => {
    // a = "Whatt color is"; 
    // b = " Your Bugatti?!";

    return a+b; 
    
    //if return is !specified then the console.log will print undefined
}
console.log(motivation("what color is", " Your Bugaatii?!"));
//it was Yo
