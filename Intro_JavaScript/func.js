/*let do_it = a => {a=12;
console.log(a);
// return a;
}
do_it();*/
// sgpa clac

// var grade;
// console.log(typeof(grade));
// var credit;
// function gpa_calc(grade,credit){

    // val = grade*credit;
    // gpa = val/credit;
    // return gpa;
// }
// var my_gpa = gpa_calc(9, 2);
// console.log(my_gpa);
//ye code run kare toh NaN output aya then mai parameters di function me dekhinge ab kya o/p aata ki
//haan parameters pass kare toh everything was good😘
const grade = [10,10,10,7,7,7,6,6];
const credits = [1.5,1.5,1,3,4,3,4,3];
var count = 0;
for(var i=0; i< grade.length; i++){
    count += grade[i]*credits[i];
}
console.log(count);
var result = 0;
for(let j=0; j<credits.length; j++){
   result += credits[j];
}
console.log(result);
function sgpa_cal(count, result){
    sgpa = count/result;
    return sgpa;
}
var your_sgpac = sgpa_cal(count, result);
console.log(your_sgpac);




// count = 0;
// for(i=0; i<grade.length; i++){
    // count = count + grade[i];
// }
// console.log(count);

