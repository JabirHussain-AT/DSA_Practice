const read=require('readline-sync')
let myArray=[]
let limit=parseInt(read.question("enter the limit of array"))
for(i=0;i<limit;i++){
    myArray[i]=read.questionInt("")
}

function myFilter(myarray,callback){

    let sum=myarray.reduce((a,b)=>a+b,0)
    console.log(sum);
    console.log(callback(myArray));
   
    
}

function callback(myarray){
    let sum=myarray.reduce((a,b)=>a+b,0)
    if(sum%2===0){
        return true
    }
    else{
        return false
    }
}
callback(myArray);
myFilter(myArray,callback);