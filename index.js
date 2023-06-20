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

// task 5
// const cel_to_fah = (a) => {
//     console.log(`${a}C is ${(9*a)/5+32}F`);
// }
// const fah_to_cel = (a) => {
//     console.log(`${a}F is ${((a-32)/9)*5}C`);
// }
// let cel = prompt("Enter temperature in celcius: ");
// let fah = prompt("Enter temperature in fahrenheit: ");

// cel_to_fah(cel);
// fah_to_cel(fah);

// task 6
// const countVowel = (str) => {
//     let count = 0;
//     for (let letter of str.toLowerCase()) {
//         if(["a","e","i","o","u"].includes(letter)){
//             count++;
//         }
//     }
//     console.log(count);
// }
// let string = prompt("Enter a string: ");
// countVowel(string);

//object
// const person = {
//     firstName:"john",
//     lastName:"doe",
//     fullName:() => {
//         return `${person.firstName} ${person.lastName}`;
//         // return person.firstName+person.lastName;
//     },
// };

//two ways of accessing object properties
// const fn = person.firstName;
// const fN = person['firstName'];
// const nam = person.fullName();
// console.log(nam)

//array
// creating empty array
// const arr = [];
// const arr = new Array();
// const cars = ["saab","volvo",34,{name:"Alto",company:"Suzuki"}];
//accessing first item
// let firstCar = cars[0];
//accessing last item
// let las = cars[cars.length - 1];
// console.log(las);
// console.log(cars.sort());
// console.log(cars.push("new item"));
// console.log(cars.pop());


// const myFunction = (data) => {
//     console.log(data);
// }

// cars.forEach(myFunction); //ES5
// cars.map(d=>console.log(d)); //ES6

//destructuring objects

//user model
// const user = {
//     firstName:"sujan",
//     lastName:"shrestha",
//     email:"sujan@sujan.com",
//     password:"12345",
//     phone:"983984",
// }
//user list

// const {password, ...rest} = user;
// console.log({rest});
// console.log({rest});


//destructuring arrays

// const user = ["sujan","shrestha","989898"]
// const [first, ...rest] = user;
// console.log({rest});


// const arra = ["sab", "volvo", "bmv"];
// const[first, ...other] = arra;
// console.log(other.toString());

// const myFunction = (data) => {
//     return data.toUpperCase();
// }

// const newUpperCase = arra.map(myFunction).toString();
// console.log({newUpperCase});

//default 
const myName = (salutation, nam ) => {
    if (salutation === ""){
        salutation = salutation || "mr";
    }
    console.log(`${salutation} ${nam}`);
}
 myName("","john");