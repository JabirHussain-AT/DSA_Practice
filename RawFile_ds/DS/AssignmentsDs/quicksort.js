// let array = [4,3,6,5,2,7,1]
// let lb = 0 
// let ub = array.length-1
// function quickSort(a,lb,ub){
//    if (lb < ub){
//     let loc = partition(a,lb,ub)
//        quickSort(a,lb,loc-1)
//        quickSort(a,loc+1,ub)
// }
// }
// function partition(a,lb,ub){
//     let pivot = a[ub]
//     let start = lb
//     let end = ub-1
//     while(start < end){
//         while(pivot > a[start]){
//             start++
//         }
//         while(pivot < a[end]){
//             end--
//         }
//         if(start < end ){
//             let temp = a[start]
//             a[start] = a[end]
//             a[end] = temp
           
           
//         }
//     }
//     let temp = a[ub]
//     a[ub] = a[start]
//     a[start] = temp
//     return start
// }
// quickSort(array,lb,ub)
// console.log(array);



// function quickSort(array){
//     if(array.length<2){
//         return array
//     }
//     let leftarray = []
//     let rightarray = []
//     let pivot = array[array.length-1]
    
//     for(let i = 0 ; i < array.length-1; i++){
//         if(array[i]>pivot){
//             leftarray.push(array[i])
//         }else{
//             rightarray.push(array[i])
//         }
//     }
//     return [...quickSort(leftarray),pivot,...quickSort(rightarray)]
// }
// let arr = [2,4,35,5,75,4,6,58,5,7]
// let anirudh  = quickSort(arr);
// console.log(anirudh);









function quickSort(array){
    if(array.length<2){
        return array
    }

    let leftarray = []
    let rightarray = []
    let pivot = array[array.length-1]

    for(let i = 0 ; i < array.length ; i++){
        if(array[i] < pivot){
            leftarray.push(array[i])
        }else if(array[i] > pivot){
            rightarray.push(array[i])
        }
    }
    return [...quickSort(leftarray),pivot,...quickSort(rightarray)]
}

console.log(quickSort([12,4,5,54,67,3,45,12]))