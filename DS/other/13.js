const read=require('readline-sync')


let string=read.question("enter a string : ")

palindrome(string);

function palindrome(string){
 const len=string.length
 for(i=0;i<len/2;i++){
    if(string[i]!==string[len-1-i]){
       return console.log("not palindrome");
    }
    else{
       return console.log("it is palindrome");
    }
 }
}




