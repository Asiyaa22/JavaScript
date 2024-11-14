//Array push() method
//push() method adds elements to array

let cars = ["Thar","Mercedes","BMW","Bugatti"];
// console.log(cars);
cars.push("lambo");
// console.log(cars);

// we can also add element using length property

let car = ["Thar","Mercedes","BMW","Bugatti"];
car[car.length]='lambo';
// console.log(car);


// --Slice() and Splice() methods in array:

// slice() mehtod : Arrey ke subpart ko nikal kardeta hai
// Splice() method : Array me elements ko add karta ya delete karta hai

var obhai = [2, 4, 5, 6, 8, 10];  //ye Array hai
var sunno_miya = [1,3,5,7,9,0];
// console.log(obhai.slice(1,5));
// x = obhai.splice(2, 4);
// console.log(x);

// at() method
y = obhai.at(0);
// console.log(y);

// concat() Method
z = obhai.concat(sunno_miya);
// console.log(z);

// toString() method 
// console.log(obhai.toString())

// pop() method - It removes last element from the array!
method = obhai.pop();
// console.log(method);

// shifting() method - It is same as pop() method but it works on first element instead of last
sunne = obhai.shift();
// console.log(sunne);

sunaiye = sunno_miya.shift();
// console.log(sunaiye);
// console.log("Ye ich hogaya bus!");

for(let i=0; i<sunno_miya.length; i++){
    // console.log(sunno_miya[i]);
}
// console.log("1st loop khatam!....");
bolo = sunno_miya.unshift(1);
// console.log(bolo);
// console.log("hao kaam ko kuch hai hi nai na");
for(let i = 0; i<sunno_miya.length; i++){
    // console.log(sunno_miya[i]);
}
// flat() method - it returns a new array by converting mutiDimensional array int 1D-array
const meriZindagi = [["Asiya Farhath"],["Dream Admi"]];
let uskiZindagi = meriZindagi.flat();
// console.log(uskiZindagi.toString());

// flatMap() method - 
var array = [1,2,3];
var newArray = array.flatMap((x)=>x*2);
console.log(newArray);

