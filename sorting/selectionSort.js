//selection sort 
// function selectionSort(arr){
//     let length = arr.length ;
//     for(let i = 0 ; i < length ; i++){
//       let minIndex = i 
//       for(let j = i + 1 ; j < length ; j++ ){
//           if(arr[j] < arr[minIndex]){
//               minIndex = j
//           }
//       }
//       if(minIndex !== i ){
//           [arr[i] , arr[minIndex ]] = [arr[minIndex ] , arr[ i ]]
//       }
//     }
//     return arr
//   }
  
  console.log(selectionSort([4000000,3253,32,2332,3]))

  function selectionSort(arr){
    for(let i = 0 ; i < arr.length ; i ++){
        let minIndex = i
        for( let j = i + 1 ; j < arr.length ; j++){
            if(arr[j ] < arr[minIndex]) minIndex = j
        }
        if( minIndex !== i) [arr[i],arr[minIndex]] = [arr[minIndex] , arr[i]]
    }
    return arr
  }