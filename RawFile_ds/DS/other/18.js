const read=require('readline-sync')

let mark1=parseFloat(read.question("score of written test"));
let mark3=parseFloat(read.question("score of assignments"));
let mark2=parseFloat(read.question("score of lab exams"));
let overallmark=((mark1*0.7)+(mark2*0.2)+(mark3*0.1))

console.log("Grade of student ="+overallmark)



