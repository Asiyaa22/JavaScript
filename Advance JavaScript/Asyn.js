function firstStep(init, callback){
    const result = init + 1;
    callback(result)
}
function secondStep(init, callback){
    const result = init + 2;
    callback(result)
}
function thirdStep(init, callback){
    const result = init + 3;
    callback(result)
}

function do_operation(){
    firstStep(0, (result1) => {
        secondStep(result1, (result2) => {
            thirdStep(result2, (result3) => {
                console.log(result3)
            })
        })
    })
}

do_operation();