const read=require('readline-sync')

let number=parseInt(read.question("Enter a number :"))

for(i=1;i<11;i++){
    console.log(i+"*"+number+"="+i*number);
}
