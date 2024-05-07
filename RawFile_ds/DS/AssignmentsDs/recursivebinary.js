// let array=[2,4,6,8,10]


// function recursiveBinary(arr,t){
//     return search(arr,t,0,arr.length-1)
// }
// function search(arr,t,leftIndex,rightIndex){
//     if(leftIndex>rightIndex){
//         return -1
//     }

//     let middleIndex=Math.floor((leftIndex+rightIndex)/2)

//     if(t===arr[middleIndex]){
//         return middleIndex
//     }

//     if(t<arr[middleIndex]){
//         return search(arr,t,leftIndex,middleIndex-1)
//     }else{
//         return search(arr,t,middleIndex+1,rightIndex)
//     }
// }
// console.log("the target is at index "+ recursiveBinary(array,8));










// let array1 = [1,2,2,3,4,5,5,6,7,8,8,9]
// function binarySearch(array,target){
//     return search(array,target,0,array.length-1)
// }

// function search(array,target,leftIndex,rightIndex){
//     if(leftIndex>rightIndex){
//         return -1
//     }
//     let middleIndex = Math.floor((leftIndex+rightIndex)/2)
//     if(target === array[middleIndex]){
//         return middleIndex
//     }

//     if(target < array[middleIndex]){
//         return search(array,target,0,middleIndex-1)
//     }else{
//         return search(array,target,middleIndex+1,array.length-1)
//     }
// }

// console.log(binarySearch(array1,2));





let array = [1,2,3,4,5,6,7,8,9]

function binarySearch(array,target){
    return result(array,target,0,array.length)

}

function result(array,target,leftIndex,rightIndex){
    if(leftIndex>rightIndex){
        return -1
    }
    let middleIndex = Math.floor((leftIndex+rightIndex)/2)
    if(target === array[middleIndex]){
        return middleIndex
    }
    if(target<array[middleIndex]){
       return result( array , target , leftIndex , middleIndex-1)
    }else{
        return result(array,target,middleIndex+1,rightIndex)
    }
}

console.log(binarySearch(array,8));