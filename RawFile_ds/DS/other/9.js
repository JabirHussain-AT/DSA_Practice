const read=require('readline-sync')

let number=parseInt(read.question("Enter a limit :"))
 let num=""
for(let i=1;i<=number;i++){
    {
        for(let j=1;j<=i;j++){
            num+=j
        }
        num+= "\n";
    }
}
console.log(num);

