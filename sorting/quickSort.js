// function quickSort(arr){
//     let length = arr.length ; 
//     if(length <= 1) return arr
//     let pivot = arr[Math.floor(arr.length /2 )]
//     let left = []
//     let right = []
//     for(let i = 0 ; i < length ; i++){
//         if( arr[i] < pivot ){
//             left.push(arr[i])
//         }else if(arr[i ] > pivot){
//             right.push(arr[i])
//         }

//     }
//     let sortedLeft = quickSort(left)
//     let sortedRight = quickSort (right)
//     return [...sortedRight , pivot , ...sortedLeft]
// }


const array = [7000, 85, 23, 241, 2, 5334, 12, 4,6,4354];
console.log(quickSort(array));






























































// function quickSort(arr){
//     const length = arr.length
//     if(arr.length <= 1) return arr
//     const pivot = arr[Math.floor(arr.length / 2)]
//     const left = []
//     const right = []
//     for(let i = 0 ; i < length  ; i++ ){
//         if(arr[i] < pivot){
//             left.push(arr[i])
//         }else if(arr[i] > pivot){
//             right.push(arr[i])
//         }
//     }

//     const sortedLeft = quickSort(left)
//     const sortedRight = quickSort(right)
//     return [...sortedLeft ,pivot ,...sortedRight]
// }