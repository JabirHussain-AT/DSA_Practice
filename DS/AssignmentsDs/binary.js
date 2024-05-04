let array = [1,2,3,4,5,6,7,8,9]

let leftIndex = 0;
let rightIndex = array.length-1;

function binarySearch(array , target){
    while(leftIndex <= rightIndex){
        let middleIndex = Math.floor((leftIndex+rightIndex)/2)

        if(target === array[middleIndex]){
            return middleIndex
        }
        if(target<array[middleIndex]){
            rightIndex = middleIndex-1
        }else{
            leftIndex = middleIndex+1
        }
    }
    return -1
}
console.log(binarySearch(array,9))