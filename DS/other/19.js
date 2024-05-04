const read=require('readline-sync')

let annualIncome=parseFloat(read.question("enter the annual income :"));
if(annualIncome<2_50_000){
    console.log("No Tax");
}else if(annualIncome<=5_00_000){
    console.log("Income Tax Amount= "+annualIncome*.05);
}else if(annualIncome<=10_00_000){
    console.log("Income Tax Amount= "+annualIncome*.2);
}else if(annualIncome<=50_00_000){
    console.log("Income Tax Amount= "+annualIncome*.3);
}
else{
    console.log("enter valid amount");
}



