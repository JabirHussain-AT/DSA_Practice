const read=require('readline-sync')

let mark=parseFloat(read.question("Enter your mark :"))

if(mark>=50 && mark<=100){
    console.log("passed")
}
else if(mark>100){
    console.log("enter number below 100");
}
else{
    console.log("failed");
}