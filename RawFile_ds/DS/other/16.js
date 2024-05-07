const read=require('readline-sync')

let number=parseInt(read.question("enter a number :"))

if(number===1){
    console.log("1 is neither prime nor composite");
}
// else if(number<1){
    else{
        for(i=2;i<number;i++){
            if(number%i==0){
            console.log("not a Prime number");
            break;
        }
        else{
        console.log("entered number is a Prime number");
        break;
        }
        }
}



