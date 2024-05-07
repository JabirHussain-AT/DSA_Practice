const read=require('readline-sync')

let number=parseInt(read.question("Enter a limit :"))
 let sum=0;
for(let i=1;i<=number;i++){
    if(i%2===0){
        sum+=i;
    }
}
console.log("sum of odd numbers="+sum);

