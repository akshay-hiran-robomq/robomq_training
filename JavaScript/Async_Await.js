// console.log("This is Async await tutorial"); // step-1

// const akshay = async () => {
//   console.log("Inside akshay function"); //step-3

//   // step -5 : Promise is pending
//   const response = await fetch("https://api.github.com/users");
//   console.log("before Response"); // step-7

//   const users = await response.json();
//   console.log("users resolved"); //step-8
//   return users;
// };

// console.log("Before calling Akshay"); // step-2
// let a = akshay();
// console.log("After calling akshay"); // step-4
// console.log(a);
// console.log("Last line of the code"); // step-6



// const getData = async () => {
//     let data = "Hello World";
//     return data;
// }
// let x = getData();
// console.log(x);
// getData().then(data => console.log(data));



const getData = async () => {
	let y = await "Hello World";
	return y;
}

console.log(1);
let x=getData();
console.log(x)
console.log(2);

