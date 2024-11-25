//leetcode question 
//2723 Add 2 promises
// let promise1 = Promise.resolve(2);
// let promise2 = Promise.resolve(3);
var addTwoPromises = async function(promise1, promise2){
    const num1 = await promise1;
    const num2 = await promise2;
    const sum = num1 + num2;
    return sum;
}
console.log("Promises result (using .then()):");
addTwoPromises(Promise.resolve(2), Promise.resolve(3)).then((result) => {
    console.log(result); // Output: 5
});

// ✅✅✅ done
//learnings from this question👇

