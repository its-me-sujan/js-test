// //using var keyword
// var a = "123";
// console.log(a);

// //using let keyword
// let b = '456';
// console.log(b);  

// //using const keyword
// const c = 23; 
// console.log(c);  
// // alert('hello world');
 
// const age = prompt('how old are you?');
// // console.log(age);
   
// // const isStd = confirm('Are you an Student?');
// // console.log(isStd);


// let x = 1;
// let y = 2;
// //using if statement
// if (x == 1){
//     console.log('x is 1');
// } 
// //using && operator
// if (x === 1 && y === 2){
//     console.log("&& operator tested");
// }
// //using || operator
// if((x = 1) || (y = 3)){
//     console.log("|| operator tested");
// }
// if(x != 3){
//     console.log("! operator tested");
// }
// //using ternary operator
// if (x === 1){
//     console.log("x is 1");
// }else{
//     console.log("x is not 1");
// }

// let result = x === 1 ? "x is 1" : "x is not 1";
// // result = x === 1? "x is 1" : x === 2 ? "x is 2" : "x is not 1 or 2";
// console.log(result);

// //for loops

// // for(let i = 0; i < 10; i++){
// //     console.log(i);
// // }

// //function

// // function add(a,b){
// //     console.log(a + b);
// // }

// // add(2,3);

// const add = (a,b) => {
//     console.log(a+b);
// };

// add(3,4);  

//task 0
// console.log("Hello world");
// const PI = 3.14;
// console.log(PI);

//task 1
// const add = (a,b) => {
//     if(a === b){
//         console.log(3*(a+b));
//     }else{
//         console.log(a+b);
//     }
// }
// let a = prompt("Enter first integer: ");
// let b = prompt("Enter second number: ");
// add(a,b);

// task 2
// const isMul = (a) => {
//     let result = a < 0 ? "Negative number": a%3==0 || a%7==0 ? "Multiple of 3 or 7" : "Not multiple of 3 or 7";
//     console.log(result);  
// }
// let num = prompt("Enter a number : ");
// isMul(num);

// task 3
// const date = Date();
// console.log(date)

// task 4
// const mulordiv = (a,b) => {
//     let choice = prompt("Enter '*' for multiplication, '/' for division : ");
//     if(choice == '*'){
//         console.log(`multiplication of ${a} and ${b} is ${a*b}`);
//     }
//     if(choice == '/'){
//         console.log(`division of ${a} and ${b} is ${a/b}`);
//     }
// } 
// let a = prompt("Enter first number : ");
// let b = prompt("Enter second number : ");
// mulordiv(a,b);
