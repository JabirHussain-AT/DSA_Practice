let a=[1,2,3,4,5,6]
function search(a,t){
    for(let i=0;i<a.length;i++){
        if(a[i]===t){
            return i         
        }
    }
    return -1
}

result = (search(a,4));
console.log(`4 is found at index ${result}`);

















// 2.count occurrence of element

// let array = [1,3,4,3,2,5,3,4,3,2]
// let target = 3
// let count = 0
//     for(let i = 0; i<array.length ; i++){   
//             if(array[i]===target){
//                 count++
//             }
//         }
//         console.log("the count of occurence of "+target+" is "+count);






// 3. return the index of first occurance of a target element 

// let array = [1,3,4,6,3,2,6,5,6,7,8,9,10]
// let target = 6
// function firstOccurrence(array,target){
//     for(i=0;i<array.length;i++){
//         if(array[i]===target){
//         return i      
//         }
//     }
// }
// let result = firstOccurrence(array,target)

// console.log(`the first occurence of ${target} is at ${result}th index`);
