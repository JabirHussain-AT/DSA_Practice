// // // bubble sort

// // let array = [7,4,3,8,2,9,1]
// // function bubbleSort(array){
// //     let swapped;
// //     do{
// //         swapped = false;
// //         for(i = 0; i < array.length; i++){
// //             if(array[i]>array[i+1]){
// //                 let temp = array[i]
// //                 array[i] = array[i+1]
// //                 array[i+1] = temp
// //                 swapped = true
// //             }

// //         }
// //     }while(swapped)
// // }
// // bubbleSort(array)
// // console.log(array);






// //insertion sort

// // let array = [5,1,1,-1,1,3,4,6,2,2,2,7,1,2,8]
// // function insertionSort(a){
// //     for(let i = 1; i < a.length; i++){
// //         let temp = a[i]
// //         let j = i-1;
// //         while(j>=0 && a[j]>temp ){
// //             a[j+1] = a[j]
// //             a[j] = temp
// //             j--;
// //         }
// //     }
// // }

// // insertionSort(array)
// // console.log(array);






// // selection sort

// // let array = [3,3,3]
// // function selectionSort(arr){
// //     let sm;
// //     for(let i = 0; i < arr.length-1; i++ ){
// //         sm = i ;
// //         for(let j = i + 1; j < arr.length; j++){
// //             if(arr[j]<arr[sm]){
// //                 sm = j 
// //             }
// //         }
// //         if(sm !== i){
// //         let temp = arr[i]
// //         arr[i] = arr[sm]
// //         arr[sm] = temp
// //         }
// //     }
// // }
// // selectionSort(array)
// // console.log(array);






// // quicksort

// // let array = [2,4,7,1,6,8,5,8]

// // function quickSort(arr){
// //     if(arr.length<2){
// //         return arr
// //     }
// //     let leftarray = []
// //     let rightarray = []
// //     let pivot = arr[arr.length-1]
// //     for( i = 0; i < arr.length-1; i++){
// //         if(pivot>arr[i]){
// //             leftarray.push(arr[i])
// //         }else{
// //             rightarray.push(arr[i])
// //         }
// //     }

// //     return [...quickSort(leftarray),pivot,...quickSort(rightarray)]

// // }

// // console.log(quickSort(array))




// //mergesort

// // let array = [6,4,5,3,5,75,1,2,9,4]
// // function mergeSort(array){
// //     if(array.length<2){
// //         return array
// //     }
// //     let mid = Math.floor(array.length/2);
// //     let leftarray = array.slice(0,mid); 
// //     let rightarray = array.slice(mid);
// //     return merge(mergeSort(leftarray),mergeSort(rightarray));
// // }

// // function merge(leftarray,rightarray){
// //     let sortedarray = []
// //     while(leftarray.length && rightarray.length){
// //         if(leftarray[0]>rightarray[0]){
// //             sortedarray.push(leftarray.shift())
// //         }else{
// //             sortedarray.push(rightarray.shift())
// //         }
// //     }
// //     return [...sortedarray,...leftarray,...rightarray]
// // }

// // console.log(mergeSort(array));


// //stack 
// // class Node{
// //     constructor(data,next = null){
// //         this.data = data
// //         this.next = next
// //     }
// // }

// // class Stack{
// //     constructor(){
// //         this.top = null
// //         this.size = 0
// //     }

// //     push(data){
// //         let node = new Node(data)
// //         if(!this.top){
// //             this.top = node
// //         }else{
// //             node.next = this.top
// //             this.top = node
// //         }
// //         this.size++
// //     }

// //     pop(){
// //         if(!this.top){
// //             return "stack underflow";
// //         }else{
// //             this.top = this.top.next
// //         }
// //         this.size--
// //     }

// //     peek(){
// //         return this.top.data
// //     }

// //     isEmpty(){
// //         return this.size === 0
// //     }

// //     print(){
// //         let current = this.top
// //         while(current){
// //             console.log(current.data);
// //             current = current.next
// //         }

// //     }
// // }

// // let stack = new Stack()
// // stack.push(100)
// // stack.push(200)
// // stack.push(300)
// // // stack.pop()
// // console.log(stack.isEmpty())
// // console.log(stack.peek())
// // // stack.print()






// //queue
// // class Node{
// //     constructor(data,next = null){
// //         this.data = data
// //         this.next = next
// //     }
// // }
// // class Queue{
// //     constructor(){
// //         this.front = null
// //         this.rear = null
// //         this.size = 0
// //     }

// //     enqueue(data){
// //         let node = new Node(data)
// //         if(!this.front){
// //             this.front = this.rear  = node
// //         }else{
// //            this.rear.next = node
// //            this.rear = node
// //         }
// //     }

// //     dequeue(){
// //         if(!this.front){
// //             return "queue underflow"
// //         }else{
// //             this.front = this.front.next
// //         }
// //     }

// //     peek(){
        
// //     }

// //     print(){
// //         let current = this.front
// //         while(current){
// //             console.log(current.data);
// //             current = current.next
// //         }
// //     }
// // }

// // let queue = new Queue()
// // queue.enqueue(100)
// // queue.enqueue(200)
// // queue.enqueue(300)
// // queue.dequeue()
// // queue.print()

// // let str = "safeer"
// // let val = str[1]
// // console.log(val);


// //bubble sort

// // let array = [4,3,2,4,6,1,8]

// // function bubbleSort(array){
// //     let swapped;
// //     do{
// //         swapped = false
// //         for(i = 0; i < array.length; i++){
// //             if(array[i] > array[i+1]){
// //                 let temp = array[i]
// //                 array[i] = array[i+1]
// //                 array[i+1] = temp 
// //                 swapped = true;
// //             }
// //         }
// //     }while(swapped)
// // }

// // bubbleSort(array)
// // console.log(array);


// // mergesort

// let array = [3,5,3,6,3,2,6,8,9]

// function mergeSort(array){
//     if(array.length<2){
//         return array
//     }

//     let mid = Math.floor(array.length/2)
//     let leftarray = array.slice(0,mid)
//     let rightarray = array.slice(mid)
//     return merge(mergeSort(leftarray),mergeSort(rightarray))
// }

// function merge(leftarray,rightarray){
//     let sortedarray = []
//     while(leftarray.length && rightarray.length){
//         if(leftarray[0]<rightarray[0]){
//             sortedarray.push(leftarray.shift())
//         }else{
//             sortedarray.push(rightarray.shift())
//         }
//     }
//     return [...sortedarray,...leftarray,...rightarray]
// }

// console.log(mergeSort(array));


// let nums = [2,3,1,7,5,8]

// function bubbleSort(array){
//     let swapped;
//     do{
//         swapped = false;
//         for( i = 0; i < array.length; i++){
//             if(array[i] > array[i+1]){
//                 let temp = array[i];
//                 array[i] = array[i+1];
//                 array[i+1] = temp;
//                 swapped = true;
//             }
//         }
//     }while(swapped)
// }

// bubbleSort(nums)
// console.log(nums);


// let nums = [5,4,3,6,2,6,7,32]

// function quickSort(array){
//     if(array.length<2){
//         return array
//     }
//     let pivot = array[array.length-1]
//     let leftarray = []
//     let rightarray = []
//     for(let i = 0 ; i < array.length-1; i++){
//         if(array[i] < pivot){
//             leftarray.push(array[i])
//         }else{
//             rightarray.push(array[i])
//         }
//     }

//     return [...quickSort(leftarray),pivot,...quickSort(rightarray)]
// }


let str = "hello"
function stringRev(str){
    let stack = []; 
    let revStr = '';
    for( i = 0; i < str.length; i++ ){
        stack.push(str[i])
    }
    while(stack.length>0){
        revStr = stack
    }
    return revStr
}

let reverse = str

