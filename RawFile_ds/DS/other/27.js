const read=require('readline-sync')

let my_height=read.question("enter the height")

try {
    if(isNaN(my_height)){
        throw "not a number"
    }
    else if(my_height>=77){
        throw "huge height"
    }
    else if(my_height<=0){
        throw "tiny height"
    }
    else{
        console.log(`height is : ${my_height}`)
    }
} catch (error) {
    console.log(error);
}
