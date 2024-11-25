// 2621 Sleep

async function sleep(millis){
    return new Promise((resolve) => {
        setTimeout(resolve, millis)
    })
}
let t = Date.now()
console.log(`start time ${t}`);
sleep(100).then(() => console.log(Date.now() - t))