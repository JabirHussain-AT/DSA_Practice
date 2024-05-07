// function fibonacci(n){
//     if (n<2){
//         return n
//     }else{
//         return fibonacci(n-2)+fibonacci(n-1)
//     }
// }
// let n = 10
// let result = fibonacci(n)
// console.log(`fibonacci number at index ${n} is ${result}`);







function factorial(n){
    if (n<1){
        return 1
    }else{
        return n*factorial(n-1)
    }
}
let n = 6
let result = factorial(n)
console.log(`factorial of ${n} is ${result}`);