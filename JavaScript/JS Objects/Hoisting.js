// In 'Var' datatype declaration hoisted to the top but initialization is not.
// console.log(a);
// Hello()
// function Hello() {
//     console.log("hello world!")
// }
// var a = 9;
// console.log(a)


// Behavior of Hoisting is different for var and let,const

// const a;
// var b;
// let c;
// // console.log(a);
// console.log(b);
// console.log(c);
// Hello(); 
// function Hello() {
//     console.log("hello world!")
// }
// a=9;
// b=6;
// c=7;

// console.log(a)
// console.log(b)
// console.log(c)


// Function and Class expression are hoisted.

// var greet = funtion(){
//     console.log("hello World!");
// }
// greet()



// Hoisted Example 
// let a = 1;
// function b(){
//     a=10;
//     return;

//     function a() {console.log(a)}
// }
// b()
// console.log(a)

// Output : 1

// Hoisting Intewiew Question
// function foo(){
//     function bar(){
//         return 3;
//     }
//     return bar();

//     function bar(){
//         return 8;
//     }
// }
// alert(foo());

// Output : Show 8 in Alert prompt

// Interview Question 3
// function parent(){
//     var hoisted = "I'm a Variable";
//     function hoisted(){
//         return "I'm a function";
//     }
//     return hoisted();
// }
// console.log(parent());

// Output : typeerror hoisted is not a function, variable and function both represent with the same name.


// Interview Question -5

// alert(foo());
// function foo(){
//     var bar = function(){
//         return 3;
//     }
//     return bar();
//     var bar  = function(){
//         return 8;
//     };
// }

// Output : Show 3 in Alert bar