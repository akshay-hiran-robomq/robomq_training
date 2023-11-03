const fs = require('node:fs');

fs.readFile('file.txt', 'utf-8',(arr,data)=>{
    console.log(arr,data);
})

// for intentionaly block the read file
const a = fs.readFileSync('file.txt')
console.log(a.toString());

// fs.writeFile('file.txt',"This is a Data",()=>{
//     console.log("Written Successfully");
// })
// console.log("Finished reading file");

// b = fs.writeFileSync('file2.txt', "Thiis is Data 2");
//   console.log(b);
//   console.log("finished reading file");

