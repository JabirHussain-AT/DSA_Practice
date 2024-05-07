 
//  search element and return the index
 let array=[2,4,6,8,9]
 function binarySearch(arr,t){
    let leftIndex=0;
    let rightIndex=arr.length-1
    
    while(leftIndex<=rightIndex){
        let middleIndex=Math.floor((leftIndex+rightIndex)/2);
        if(t===arr[middleIndex]){
            return middleIndex
        }
        if(t<arr[middleIndex]){
            rightIndex=middleIndex-1
        }else{
            leftIndex=middleIndex+1
        }
    }
    return -1
 }

let result = binarySearch(array,9);
console.log(`the target element 9 is found at ${result}th index`);










// index of first occurence of a target number

// function firstOccurrence(arr, target) {
//     let leftIndex = 0;
//     let rightIndex = arr.length - 1;
//     let result = -1
  
//     while (leftIndex <= rightIndex) {
//       const mid = Math.floor((leftIndex + rightIndex) / 2);
//       if (arr[mid] === target) {
//         result = mid;
//         rightIndex = mid - 1; 
//       } else if (arr[mid] < target) {
//         leftIndex = mid + 1;
//       } else {
//         rightIndex = mid - 1;
//       }
//     }
//      return result;
//   }
//    let array=[1,2,3,4,5,7,8,9,10,23,34];
//   let target = 5;
//   valueat= firstOccurrence(array,target)
//  console.log(`the first occurance of ${target} is at ${valueat}th index`);



// index of last occurence of a target element

// function LastOccurrence(arr, target) {
//     let leftIndex = 0;
//     let rightIndex = arr.length - 1;
//     let result = -1;
  
//     while (leftIndex <= rightIndex) {
//       const mid = Math.floor((leftIndex + rightIndex) / 2);
//       if (arr[mid] === target) {
//         result = mid;
//         leftIndex = mid + 1;       
//       }else if(arr[mid]<target){
//         leftIndex=mid +1
//       } else {
//         rightIndex = mid - 1;
//       }
//     }
  
//     return result;
//   }
//   let array=[1,2,3,4,5,5,8,9,10,23,34];
//   let target = 5;
//   valueat= LastOccurrence(array,target)
//  console.log(`the last occurance of ${target} is at ${valueat}th index`);






