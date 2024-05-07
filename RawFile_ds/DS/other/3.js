const read=require('readline-sync')

let P=parseInt(read.question("enter the principal amount :"))
let R=parseFloat(read.question("enter the  interest rate:"))
let n=parseFloat(read.question("enter the number of years :"))

let SI=(P*n*R)/100
console.log("Simple interest ="+SI)