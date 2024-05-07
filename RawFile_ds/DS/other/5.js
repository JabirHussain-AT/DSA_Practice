const read=require('readline-sync')

let mark=parseFloat(read.question("Enter your mark :"))

if(mark>=90){
    console.log("A");
}else if(mark<=89 && mark>=80){
    console.log("B");
}else if(mark<=79 && mark>=70){
    console.log("C");
}else if(mark<=69 && mark>=60){
    console.log("D");
}else if(mark<=59 && mark>=50){
    console.log("E");
}else if(mark<50){
    console.log("Failed");
}