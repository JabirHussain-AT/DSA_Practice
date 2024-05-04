const read=require('readline-sync')

class calculator{
    addition(){
        let number1=parseFloat(read.question("enter a number"))
        let number2=parseFloat(read.question("enter next number"))
        let sum=number1+number2;
        console.log(sum);

    }
    subtraction(){
        let number1=parseFloat(read.question("enter a number"))
        let number2=parseFloat(read.question("enter next number"))
        let difference=number1-number2;
        console.log(difference);
    }
    multiplication(){
        let number1=parseFloat(read.question("enter a number"))
        let number2=parseFloat(read.question("enter next number"))
        let product=number1*number2;
        console.log(product);
    }
    division(){
        let number1=parseFloat(read.question("enter a number"))
        let number2=parseFloat(read.question("enter next number"))
        let division=number1/number2;
        console.log(division);
    }
}

let choice=parseInt(read.question("enter a choice between 1 to 4 :"))
let calc=new calculator();
if (choice===1){
    calc.addition();
}
else if (choice===2){
    calc.subtraction();
}
else if(choice===3){
    calc.multiplication();
}
else if(choice===4){
    calc.division();
}
else{
    console.log("enter valid choice");
}



