function insertionSort(arr){
    for(let i = 0 ;  i < arr.length ; i ++){
        let current = arr[i]
        for(var j = i - 1; j >= 0 && arr[j] > current ; j--){
            arr[j + 1] = arr[j]
        }
        arr[j + 1]  = current
    }
    return arr
}
 console.log(insertionSort([20,2,3,21,32,12,3231,1]))































































 //insertion sort 
// function insertionSort (arr){
//     for(let i = 1 ; i < arr.length ;  i++){
//      let currentValue = arr[i]
//      for(var j = i - 1 ; j >= 0 && arr[j] > currentValue ; j--){
//          arr[j + 1] = arr[j]
//      }
//      arr[j + 1] = currentValue
//     }
//      return arr
//  }
 