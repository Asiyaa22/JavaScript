
let data = 
[
    {
      "quote": "Doing it is only way of getting the things"
    },
    {
      "quote": "You already know enough Starting taking Action"
    },
    {
      "quote": "Act like you already have it"
    }
]

let emptyData = [];
// console.log("length of data wali array", data.length);
const pushFunction = () => {
    while(data.length > 0){
        const quote = data.shift();
        console.log("quote", quote);
        console.log("=================")
        emptyData.push(quote);
        console.log("Done!!");
        console.log("data array", data);
        console.log("emptyData", emptyData)
        console.log("=================")
    }
}

pushFunction();

//pop method will remove the last element of array

// console.log("Empty Data", emptyData);

// const pushFunction = () => {
//     for(let i = 0; i <= data.length; i++){
//        emptyData.push(i);
//        console.log("emptyData wali array", emptyData);
//        i++;
//     }
// }

// pushFunction();