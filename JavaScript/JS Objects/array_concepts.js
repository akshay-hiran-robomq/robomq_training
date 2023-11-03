// We have to add this to run prompt in vs code
const prompt = require('prompt-sync')()


var n;
n = prompt("Enter the Digit");
let myArr = Array.from(n);
for(let i in myArr){
    sum+=myArr[i];
    console.log(sum)
}