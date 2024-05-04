function bubblesort(arr){
    let notSwapped = true
    for(let i = 0 ; i < arr.length ; i ++){
        for(let j = i + 1 ; j < arr.length - i -1 ; j++){

            if( arr[j + 1 ] < arr[j]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
                notSwapped = false 
            }
        }
        if( notSwapped ){
            return 'already sorted'
        }

    }
    return arr
}
   console.log(bubblesort([1,20,5,5,4534]))
   // console.log(bubblesort([1,2,3,4,5,6,7]))

































   //bubble sort 
// function bubblesort(arr){
//     const length = arr.length ;
//     let notSwapped = true
//     for( let i = 0 ; i < arr.length ; i++){
//        for(let j = 0 ; j < length - i -1 ; j++){
//            if(arr[j]>arr[j+1]){
//                [arr[j],arr[j+1]] = [arr[j+1] , arr[j]]
//                notSwapped = false ;
//            }
//        }
//        if( notSwapped ){
//            console.log('its sorted')
//             return arr
//            }
//     }
//     return arr
//    }
   