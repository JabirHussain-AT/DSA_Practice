// function mergeSort(array){
// if(array.length<2){
//     return array
// }
// let mid = Math.floor(array.length/2)
// let leftarr = array.slice(0,mid)
// let rightarr = array.slice(mid)
// return merge(mergeSort(leftarr),mergeSort(rightarr));
// }

// function merge(leftarray,rightarray){
//     let sortedarray = []
//     while(leftarray.length && rightarray.length){
//         if(leftarray[0]>=rightarray[0]){
//             sortedarray.push(leftarray.shift())
//         }else{
//             sortedarray.push(rightarray.shift())
//         }
//     }
//     return [...sortedarray,...leftarray,...rightarray]
// }
// let array = [1,75,9,5,3,7]
// console.log(mergeSort(array))




function mergeSort(array){
    if(array.length < 2) return array ;
    let mid = Math.floor(array.length/2)
    let leftarr = array.slice(0,mid)
    let rightarr = array.slice(mid) 
    return merge(mergeSort(leftarr),mergeSort(rightarr))
}


function merge(leftarr,rightarr){
    let sortedArray = []
    while (leftarr.length && rightarr.length){
        if(leftarr[0] >= rightarr[0]){
            sortedArray.push(leftarr.shift())
        }else{
            sortedArray.push(rightarr.shift())
        }
    }
    return [...sortedArray,...leftarr,...rightarr]
}
let arr = [12,3,2,4,6,7,8,34,23]
console.log(mergeSort(arr));

// const myPromise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         const data = "resolved data"
//         resolve(data)
//     },1000)
// })

// myPromise
// .then((result)=>{
//     console.log(result);
// })


