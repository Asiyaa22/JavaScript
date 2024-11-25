// Problem 1 Count even Odd Digits

// solution

function countEvenOdd(n){
    let countEven = 0;
    let countOdd = 0;
    let digits = n.toString().split('');
    console.log(digits);

    for(let x of digits){
        if(x % 2 == 0){
           countEven += 1;
        }else{
            countOdd += 1;
        }
    }
    return { even: countEven, odd: countOdd };
}

let count = countEvenOdd(234567);
console.log(`Even: ${count.even}, Odd: ${count.odd}`);

