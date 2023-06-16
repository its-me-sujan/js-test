//using var keyword
var a = "123";
console.log(a);

//using let keyword
let b = '456';
console.log(b);  

//using const keyword
const c = 23; 
console.log(c);  
// alert('hello world');
 
// const age = prompt('how old are you?');
// console.log(age);
   
// const isStd = confirm('Are you an Student?');
// console.log(isStd);


let x = 1;
let y = 2;
//using if statement
if (x == 1){
    console.log('x is 1');
} 
//using && operator
if (x === 1 && y === 2){
    console.log("&& operator tested");
}
//using || operator
if((x = 1) || (y = 3)){
    console.log("|| operator tested");
}
if(x != 3){
    console.log("! operator tested");
}
//using ternary operator
if (x === 1){
    console.log("x is 1");
}else{
    console.log("x is not 1");
}

let result = x === 1 ? "x is 1" : "x is not 1";
result = x === 1? "x is 1" : x === 2 ? "x is 2" : "x is not 1 or 2";
console.log(result);