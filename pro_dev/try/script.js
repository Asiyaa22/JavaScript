// import data from "./data.json" assert { type: 'json' };
const data = require('./data.json')
console.log(data);
const done = require('./done.json')
console.log(done);

const pushFunction = () => {
    while( data.length > 0){
        const quote = data.shift();
        done.push(quote);
        console.log(done);
    }
}

pushFunction();

console.log(done);

