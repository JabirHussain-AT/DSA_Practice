// ascending order

function bubbleSort(arr){
    let swapped
    do{
        swapped = false
    for(let i = 0; i<arr.length-1; i++){
        if(arr[i] > arr[i+1]){
            let temp = arr[i]
            arr[i] = arr[i+1]
            arr[i+1] = temp
            swapped = true
        }
    }
    }while(swapped)

}

let array = [1,3,2,5,6,4,9,7,8]
bubbleSort(array)
console.log(array);











// descending order

// let array = [3,4,5,-1,3,8,9,4,8]
// function bubbleSort(array){
//     let swapped
//     do{
//         swapped = false
//         for(i = 0; i < array.length-1; i++){
//             if(array[i]<array[i+1]){
//                let temp = array[i]
//                 array[i] = array[i+1]
//                 array[i+1] = temp
//                 swapped = true
//             }
//         }
//     }while(swapped)
// }

// bubbleSort(array)
// console.log(array);






// let array = [1,3,2,5,6,4,9,7,8]
// function bubbleSort(array){
//     let swapped;
//     do{
//         swapped = false
//         for(i = 0 ; i < array.length-1 ; i++){
//             if(array[i]>array[i+1]){
//                 let temp = array[i]
//                 array[i] = array[i+1]
//                 array[i+1] = temp
//                 swapped = true
//             }
//         }
//     }while(swapped)

//     return array
// }

// console.log(bubbleSort(array));