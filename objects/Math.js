//JavaScript Math Object
// console.log("Hello, Learning Math object");
// console.log(Math.floor(Math.random()*10)+1);


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
console.log(getRndInteger(2,3));

// function random(min,max){
//     return Math.floor(Math.random()*(max-min + 1)+ min);
//   }
//   console.log(random(1,4))
