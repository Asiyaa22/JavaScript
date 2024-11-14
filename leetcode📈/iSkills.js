// Question 1
// toLowerCase
var toLowerCase = function (s){
    let result = "";

    for(let i = 0; i<s.length; i++){
    const charCode = s.charCodeAt(i);

    if(charCode > 64 && charCode<91){
      result += String.fromCharCode(charCode + 32);
      continue;
    }
    result += s[i];
    }
    return result;
};

console.log(toLowerCase("Hello"));