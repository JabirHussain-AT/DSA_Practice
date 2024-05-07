const read=require('readline-sync')

main()
function main(){
    let array=[]
    let size=parseInt(read.question("enter the size of array"))
    getArray(array,size)
    displayArray(array,size)
}
function getArray(array,size){
    for(i=0;i<size;i++){
        array[i]=[]
        for(j=0;j<size;j++){
            array[i][j]=parseInt(read.question(" "))
        }
    }
}
function displayArray(array,size){
    console.log("array values are : ");
    for(i=0;i<size;i++){
        console.log(array[i]);
    }

}


