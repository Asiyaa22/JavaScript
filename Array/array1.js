//looping through array

let cars = ["Thar","Mercedes","BMW","Bugatti"];
for(let i=0; i<cars.length; i++){
    // console.log(cars[i]);
}

//forEach

// var a = [1,2,3,4];
// a.forEach(function(val){
//     if(val<2){
//         console.log(val);
//     }
// }
// )


const filtered = [];

const nums = [1, 2, 14, 5, 7, 10, 11, 12];
nums.forEach(function(item){
 if(item <= 10){
    filtered.push(item)
 }
})

console.log("filtered Array is: ", filtered);