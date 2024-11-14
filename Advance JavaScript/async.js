// function myLoadFunction(){
//     alert("Dealing With Asynchronous Javascript💕");
// }
let promise = new Promise(function(resolve, reject){
    let x = 0;
    if(x==0){
    //   console.log('vohooo');
    resolve('ook');
    }else{
    //   console.log('its a match');
    reject("had hai bhai kya masla hai tumara");
    }
  });
  
  promise.then(function(value){
   console.log("haan bhai hogayi promise fulfilled!...sukoon");
  },
  function(error){
    console.log("Dil nakaam hi toh hai....naumeed nahi!");
  });