const read=require('readline-sync')


let array1=[];
let array2=[];
let temp=[];
let size=read.question("enter the size of array")
console.log("enter the values of  Array1")
for(let i=0;i<size;i++){
     array1[i]=parseInt(read.question(" "))
    }
 console.log("enter the values of  Array2")

for(i=0;i<size;i++){
    array2[i]=parseInt(read.question(" "))
}
for(i=0;i<size;i++){
    temp[i]=array1[i]
    array1[i]=array2[i]
    array2[i]=temp[i]
}
console.log(array1);
console.log(array2);

