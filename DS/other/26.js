const read=require('readline-sync')

var my_string=read.question("")
try{
    if(isNaN(my_string)){
        let revString=my_string.split('').reverse().join('')

        console.log(revString);
    }
    else{
        my_string=Number(my_string)
        throw "enter a string"
    }
}
catch(error){
    console.log("error :"+error);
}
finally{
console.log(`Type is ${typeof(my_string)}`);
}
