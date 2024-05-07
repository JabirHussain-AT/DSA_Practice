const read=require('readline-sync')

function main(){
   let  array=[];
   getArray(array);
   displayArray(array);
}

function getArray(array){
    
    let size=parseInt(read.question("enter the size of array"))
     for (let i = 0; i < size; i++) {
        array[i]=read.question(" ")
     }
}
function displayArray(value){
    console.log(value);
}

main()



