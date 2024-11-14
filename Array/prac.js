// Move all zeroes to the end of the array

// input nums = [0, 1, 0, 3, 12]
const nums = [0, 1, 0, 3, 12];
function moveToEnd(nums){
    nums.forEach((value, index) => {
        if (value === 0){
            nums.splice(nums.indexOf(value),1);
            nums.push(value);
        }
    })
    return nums
}
// console.log(moveToEnd([0, 1, 0, 3, 12]));


// Problem 2 solving on 4th of December 2023
// Power of 2
function isPowerOfTwo(n){
    if( n==1 ){
        return true;
    }
    
    if((n%2) !== 0){
        return false;
    }
    return isPowerOfTwo(n/2);

}
// console.log(isPowerOfTwo(16));

function isPowOf2(nom){
    for( let i=0; i<64; i++ ){
    if(Math.pow(2,i)==nom){
      return true;
    }
}
return false;
}
console.log(isPowOf2(1));
