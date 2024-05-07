const read=require('readline-sync')


let array=[];
let size=read.question("enter the size of array")
console.log("Enter the values of array");
for(i=0;i<size;i++){
    array[i]=parseInt(read.question(" "))
}
for(i=0;i<size;i++){
    if(array[i]%2===0){
        count+=1;
    }
}
console.log("Number of even numbers in the given array is "+count);



