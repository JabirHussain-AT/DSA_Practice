const read=require('readline-sync')

let array1=[]
let array2=[]
let sum=[]
let size=read.question("enter the size of array")
console.log("enter the values of array 1");
for(let i=0;i<size;i++){
    array1[i]=[];

    for(let j=0;j<size;j++){
        array1[i][j]=parseInt(read.question(" "))
    }
}
for(let i=0;i<size;i++){
    console.log(array1[i]);
}

console.log("enter the values of array2");
for (let i = 0; i < size; i++) {
    array2[i]=[];

    for (let j = 0; j < size; j++) {
        array2[i][j]=parseInt(read.question(" "))
    }
}
for (let i = 0; i < size; i++) {
    console.log(array2[i]);
}
for (let i = 0; i < size; i++) {
    sum[i]=[];

    for (let j = 0; j < size; j++) {
        sum[i][j]=array1[i][j]+array2[i][j]
    }
}
console.log("sum of 2 arrays is : ");
for (let i = 0; i < size; i++) {
    console.log(sum[i]);
}







