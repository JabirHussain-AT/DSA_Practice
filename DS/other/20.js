const read=require('readline-sync')

let size=parseInt(read.question("enter the limit"))
let k=1;
for(let i=1;i<size;i++){
let num=" ";
    for(let j=1;j<=i;j++){
            num+=" "+k;
    k++;
    }
    console.log(num)
}


