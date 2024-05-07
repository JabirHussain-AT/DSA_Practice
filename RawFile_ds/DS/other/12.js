const read=require('readline-sync')

let size =read.questionInt("enter the size of array")
let array=[]
let sortedarray=[]
for(i=0;i<size;i++){
    array[i]=read.questionInt("")
}
 sortedarray=array.sort((a,b)=>b-a)

 console.log(sortedarray);




