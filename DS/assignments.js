// class Node{
//     constructor(data,next = null){
//         this.data = data 
//         this.next = next
//     }
// }

// class LinkedList{
//     constructor(){
//         this.head = null
//         this.tail = null 
//         this.size = 0
//     }

//     //inserting at start
//     insertAtFirst(data){
//         let node = new Node(data,this.head)
//         this.head = node
//         this.tail = node
//     }

//     printList(){
//         let current = this.head
//         while(current){
//             console.log(current.data)
//             current = current.next
//         }
//     }
// }

// let linked = new LinkedList()

// linked.insertAtFirst(100)
// linked.insertAtFirst(200)
// linked.insertAtFirst(300)
// linked.printList()



// class Node{
//     constructor(data, next = null, prev = null){
//         this.data = data
//         this.next = next 
//         this.prev = prev
//     }
// }
// class LinkedList{
//     constructor(){
//         this.head = null 
//         this.tail = null 
//         this.size = 0
//     }


//     insertAtFirst(data){
//         let node = new Node(data,this.head)
//         if(this.head === null){
//             this.head = node
//             this.tail = node
//         }
//         else{
//             this.head.prev = node
//             node.next = this.head
//             this.head = node
//         }
//     }


//     printList(){
//         let current = this.head
//         while(current){
//             console.log(current.data)
//             current=current.next

//         }
        
//     }
// }





