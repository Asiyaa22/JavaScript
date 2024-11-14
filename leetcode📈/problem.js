function expect(val){
   return {
    toBe : function(val1){
       if(val === val1){
        return true;
       }else{
        throw new Error("Not Equal");
       }
    },
    notToBe: function(val1){
       if(val !== val1){
        return true;
       }else{
        throw new Error("Equal");
       }
    }
   };
}
// expect(5).toBe(4);


// problem 2 : Counter
/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    var current_val = init;
    return {
        increment: function(){
           return ++current_val;
        },
        decrement: function(){
           return --current_val;
        },
        reset: function(){
           return current_val = init;
        }
    };
}
    


const counter = createCounter(2)
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
// counter.decrement(); // 4
 
