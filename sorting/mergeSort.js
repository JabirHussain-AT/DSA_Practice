function mergeSort(arr){
    if(arr.length <= 1) {
        return arr
    }
    let middle = Math.floor( arr.length / 2)
    let leftArr = arr.slice(0,middle)
    let rightArr = arr.slice(middle )

    let sortedLeft  = mergeSort(leftArr)
    let sortedRight = mergeSort(rightArr)
    return merge( sortedLeft ,sortedRight  )
}

function merge(left , right){
    let result = []
    let leftIndex =0
    let rightIndex = 0

    while( leftIndex < left.length  && rightIndex < right.length){
        if( left[leftIndex] < right[rightIndex] ){
            result.push(left[leftIndex])
            leftIndex++
        }else{
            result.push(right[rightIndex])
           rightIndex++
        }
    }
    while( leftIndex < left.length ){
        result.push(left[leftIndex])
        leftIndex++
    }
    while( rightIndex < right.length ){
        result.push(right[rightIndex])
        rightIndex++
    }
    return result
}

const array = [7,85,23,241,2,5334,12,4]
console.log(mergeSort(array))




























// function mergeSort(arr){
//     if(arr.length  <= 1) return arr

//     let middle = Math.floor(arr.length/2)
//     let leftHalf = arr.slice(0,middle)
//     let rightHalf = arr.slice(middle)

//     let sortedLeftHalf = mergeSort(leftHalf)
//     let sortedRightHalf = mergeSort(rightHalf)

//     return merge(sortedLeftHalf , sortedRightHalf)
// }

// function merge(left , right){
//     let result = []
//     let leftIndex = 0 ;
//     let rightIndex = 0 ;

//     while(leftIndex < left.length && rightIndex < right.length){
//         if( left[leftIndex] < right[rightIndex ]){
//             result.push(left[leftIndex])
//             leftIndex++
//         }else{
//             result.push(right[rightIndex])
//             rightIndex++
//         }
//     }
//     while(leftIndex < left.length){
//         result.push(left[leftIndex])
//         leftIndex++
//     }
//     while(rightIndex < right.length){
//         result.push(right[rightIndex])
//         rightIndex++
//     }

//     return result
// }