// 1.Promise then() Method: It is invoked when a promise is either resolved or rejected. 
// 2. Promise catch() Method: It is invoked when a promise is either rejected or some error has occurred in execution. 

let promise = new Promise(function (resolve, reject) {
  const x = "Akshay Kumar Hiran";
  const y = "Akshay Kumar Hiran";
  if (x === y) {
    resolve();
  
  } 
  else {
    reject();
  }
});

promise
  .then(function () {
    console.log("Success, You are Succesided.");
  })
  .catch(function () {
    console.log("Some error has been occurred");
  });
