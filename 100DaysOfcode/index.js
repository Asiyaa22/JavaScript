// Question 1
// sum of two numbers such that it adds up to target value
// In output return indices
// 1st Approach
// Time Complexity is O(n*2)
// function sum(a, b){
//     return a + b;
// }
// function addNum(nums, target){
//     for(let i=0; i<nums.length; i++){
//         for(let j=1; j<nums.length; j++){
//             if(sum(nums[i], nums[j]) == target){
//                 return [nums.indexOf(nums[i]), nums.indexOf(nums[j])];
//             }
//         }
//     }
// }
// console.log(addNum([1, 3, 2, 4], 3));

// 2nd Approach
// Time Complexity is O(n)

function addNum(nums, target){
    //creating hashMap object
    let hashMap = {};

    for(let i = 0; i<nums.length; i++){
        let hashEle = target - nums[i];
        if(hashMap.hasOwnProperty(hashEle)){ //checking if hashElement is present in hasMap
            return [hashMap[hashEle], i];
        }
        hashMap[nums[i]] = i; //store the currnet number index in hashMap
    }
    return null; //return null if solution is not found
}

console.log(addNum([1, 4, 3, 5], 5));


