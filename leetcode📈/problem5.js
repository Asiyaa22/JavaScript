// 2715 Timeout Cancellation

// var delayed  = setTimeout(() => {
//   const fn = (x) => x * 2;
//   console.log(fn(2));
// }, 1000);

// console.log(`delayed variable ${delayed}`);

// function cancelFn(){
//     clearTimeout(timerId)
// }

function sum(x) {
  return x * 2;
}
var timeOutCancellattion = async function(sum, args, t) {
    return new Promise ((resolve) => {
        const result = [];
        var timerId = setTimeout(() => {
            console.log(sum(...args));
        }, t);
        const cancelMs = 100;
        setTimeout(() => {
            clearTimeout(timerId);
            if (result.length === 0) { 
            console.log("bhai main chala 🚶‍♂️");
            result.push({ time: t, returned: "Timeout canceled" });
            resolve(result);
        }
        }, cancelMs);
        result.push({ time: t, returned: sum(...args) });
    });

//   return result; {phele I was trying to use return result which ws immediately returning result}
  //since I am using return reult
  //This will immediately return the result without waiting for setTimeout fns to complete there work 
};
// setTimeout(timeOutCancellattion(sum, [2], 20), cancelMs);

timeOutCancellattion(sum, [2], 20).then((result) => {
    // console.log(`reult hai bro ${JSON.stringify(result)}`)
    console.log(`result hai bro`, result);
});

// console.log(timeOutCancellattion(sum, [2], 20));

// const cancelMs = 100;
// setTimeout(() => {
//   clearTimeout(timerId);
//   console.log("bhai main chala 🚶‍♂️");
// }, cancelMs);
// const t = 20;
// const fn = (x) => x * 2;

// function sum(x) {
//   return x * 2;
// }
// const args = [2];
// var timerId = setTimeout(() => {
//   console.log(sum(args));
// }, t);

// const result = [];
// result.push({ time: t, returned: sum(...args) });

// setTimeout(() => {
//   console.log(`result hai bro ${JSON.stringify(result)}`);
// }, 60);
//Whenever I am getting output as [object, object] I need to use
//JSON.stringify
//When you use a template literal (`result hai bro ${result}`), the array result is converted to a string.
//When an array is converted to a string, JavaScript calls the .toString() method on its elements.
//For an object inside an array, .toString() converts the object to the string [object Object].
//Why [object Object] Happens
//The [object Object] string is the default string representation of a plain JavaScript object when it is coerced into a string. It’s essentially telling you that it’s an object, but it doesn’t give you details about its properties unless explicitly requested (e.g., via JSON.stringify).

// const start = performance.now();
// console.log(`bhai mai ich hun performance ${start}`);
