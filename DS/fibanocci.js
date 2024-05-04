// function fibonacci(n){
//     const fib=[0,1]
//     for (let i=2;i<10-1;i++){
//         fib[i]=fib[i-1]+fib[i-2]
//     }
//     return fib
// }
let s = '"a-bC-dEf-ghIj"'
function reverseOnlyLetters(s) {
      let arr = [];
    for(let i=0;i<s.length;i++){
        arr.push(s[i])
    }
    let start = 0;
    let end = s.length-1;
    while(start < end){
        if(!(s.charAt(start)>='A' ||( s.charAt(start)<='Z' && s.charAt(start)>='a' )|| s.charAt(start)<='z')){
            start++
        }
        if(!(s.charAt(end)>='A' || (s.charAt(end)<='Z' && s.charAt(end)>='a') || s.charAt(end)<='z')){
            end--
        }
        if((s.charAt(start)>='A' || (s.charAt(start)<='Z' && s.charAt(start)>='a' )|| s.charAt(start)<='z') && (s.charAt(end)>='A' ||( s.charAt(end)<='Z' && s.charAt(end)>='a') || s.charAt(end)<='z') ){
            let temp = arr[start]
            arr[start] = arr[end]
            arr[end] = temp    
            start++;
            end--;
        }
    }
    let str = arr.join('').toString()
    return str;
};


console.log(reverseOnlyLetters(s));

