// let str = "abc"

// let str1=[]
// for(i=0;i<str.length;i++){
//     let pos=str.charCodeAt(i)+2
//     if(pos <= 122){
//         str1[i] = pos
//     }
//     else{
//         str1[i] = 96+pos%122
//     }
// }
// console.log(String.fromCharCode.apply(null,str1));








// let str = 'dog cat dog cat'
// let str2 = 'abab'
// let strone = str.split(' ');
// let strtwo = str2.split('');
// console.log(strone,strtwo);
// for(let i=1; i<4; i++){
//     if(strone[0] == strone[i]){
//         ptrnofone = i;
//     }
//     if(strtwo[0] == strtwo[i]){
//         ptrnoftwo = i;
//     }
// }
// console.log(ptrnofone === ptrnoftwo);


let str = "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
let splitstring = str.split(' ');
let strlen = splitstring.length;
let thirdlastword = splitstring[strlen-3]
let lastthreewords = thirdlastword.concat(' '+splitstring[strlen-2] + ' ' + splitstring[strlen-1]) 

console.log("Last three words in given string is : "+lastthreewords);

