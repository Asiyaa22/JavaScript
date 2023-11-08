//JavaScript Get Date Methods

//The new Date constructor
//In JavaScript, date objects are created with new Date()


// Date Get Methods 
   /*      Method                                 Description

    getFullYear()              	Get year as a four digit number (yyyy)
    getMonth()	                Get month as a number (0-11)
    getDate()	                Get day as a number (1-31)
    getDay()	                Get weekday as a number (0-6)
    getHours()	                Get hour (0-23)
    getMinutes()	            Get minute (0-59)
    getSeconds()	            Get second (0-59)
    getMilliseconds()	        Get millisecond (0-999)
    getTime()	                Get time (milliseconds since January 1, 1970)  */

// The get methods above return Local time.
// UTC Date get Methods
// getUTCFullyear and so on 

console.log("Printing according to local time")
const x = new Date();
console.log(x.getFullYear());
console.log(x.getDate());
console.log(x.getDay());
console.log(x.getMonth());
console.log(x.getHours());
console.log(x.getMinutes());
console.log(x.getSeconds());
console.log(x.getMilliseconds());




// UTC Get Methods
console.log("Printing According to UTC")
console.log(x.getUTCDate());
console.log(x.getUTCDay());
console.log(x.getUTCMonth());
console.log(x.getUTCHours());
console.log(x.getUTCMinutes());
console.log(x.getUTCSeconds());
console.log(x.getUTCMilliseconds());











