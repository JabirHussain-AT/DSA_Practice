const read=require('readline-sync')

let limit=parseInt(read.question("enter the limit of array"))

let array=[]
let newArray=[]
console.log("enter the values of array");
for(i=0;i<limit;i++){
    array[i]=parseInt(read.question(" "))
}
for(i=0;i<limit-1;i++){
    newArray[i]=array[i]*array[i+1]
}
console.log(newArray);



