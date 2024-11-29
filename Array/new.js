const names =[
    {
    id: 1,
    firstName: "Asiya",
    meaning: "Comforter or Healer The one who tend to weak bllafnv afh nouashf ajbf f hjfoaiushfaf"
    },
    {
        id: 2,
        firstName: "Farhath",
        meaning: "Happiness Joy pleasure sjhdfiashcb sdbiabdifbsuhabp badifg"
    },
    {
        id: 3,
        firstName: "yo",
        meaning: "I love coding and Trading Money and the power Power and the money minute after minute hour after hour"
    },
];

// console.log("Meaning: ", names[2].meaning);

// const meaningOfName = [];
// names.forEach(function(val){
//     meaningOfName.push(val.meaning.substring(0, 14));
// })

// function copy(val){
//     return val.meaning.substring(0, 14);
// }
//arrow function

// var copy = (val) => {
//     return val.meaning.substring(0, 14);
// }
// var sum = (x) => {
//     return x + x;
// }

// console.log("Arrow function: ", sum(2) );
// const newArray = names.map(copy);
const newArray = names.map(val => val.meaning.substring(0, 14));
console.log("Array by map method:", newArray)

// console.log(meaningOfName);


// var copied = function copy(){
//     return names[1].meaning;
// }

// console.log("copied variable", copied());