const read=require('readline-sync')

let number1=parseInt(read.question("enter the first number"))
let number2=parseFloat(read.question("enter the second number"))

let sum=number1+number2;
console.log("sum ="+sum);
