// //  const Node1={
// //     data:100
// //  }
// //  const Node2={
// //     data:200
// //  }
// //   Node1.next=Node2

// //   console.log(Node1)

// class Node{
//     constructor(data ,next=null){
//         this.data =data;
//         this.next=next;
//     }
// }
// class LinkedList{
//     constructor(){
//         this.head=null;
//         this.size=0;
//     }

//     // Add first node 
//     first(data){
//         this.head=new Node(data,this.head) 
//         this.size++
//     }

//     //add node at end
//     last(data){
//         let node=new Node(data)
//         let current;

//         if(this.head==null){
//             this.head=node
//         }else{
//             current=this.head;
//             while(current.next){
//                 current=current.next;
//             }
//             current.next=node;
//         }
//         this.size++
//     }

//     //add node at certain index
//     insertingIndex(data,index){
//         let node=new Node(data)
//         let previous;
//         let current=this.head;
//         let currentpos=0;
//         if (index < 0 || index > this.size) {
//             console.log("enter crct number");
//             return ;
//         }
//         if(index === 0){
//         this.first(data)
//         }
//         else{
//             while(index > currentpos) {
//                 previous = current;
//                 current = current.next;
//                 currentpos++;
//             }
//             previous.next = node;
//             node.next = current;
//         }
//         this.size++;
//     }

//     //remove index

//     removeAt(index){
//         let current=this.head
//         let currentpos = 0
//         let previous
//         if(index>this.size){
//             console.log("index is greater than size");
//             return null;
//         }
//         if(index==0){
//             this.head=current.next
//         }
//         else{
//             while(index > currentpos){
//                 previous=current
//                 currentpos++
//                 current=current.next
//             }
//             previous.next=current.next
//         }
//         this.size-- 
//     }

//     getAt(index){
//         let current = this.head;
//         let currentpos = 0;
//         while(current){
//             if(index == currentpos){
//                 console.log(current.data);
//             }
//             currentpos++
//             current = current.next;
//         }
//         // return null;
//     }
//     //clear list
//     clearList(){
//         this.head=null
//         this.size=0
//     }


//     printData(){
//         let current =this.head;
//         while(current){
//             console.log(current.data);
//             current=current.next;
//         }
//         // console.log(this.size);
//     }
// }
// const list= new LinkedList();

// list.first(100)
// list.last(500)
// list.insertingIndex(777,1)
// list.removeAt(2)
// // list.clearList()
// list.printData()
// // list.getAt(10)


// // class Node{
// //     constructor(data,next=null){
// //         this.data=data
// //         this.next=next
// //     }

// // }
// // class linkedList{
// //     constructor(){
// //         this.head=null
// //         this.size=0
// //     }

// //     insertFirst(data){
// //         this.head=new Node(data,this.head)
// //         this.size++
// //     }
// //     insertLast(data){
// //                 let node=new Node(data)
// //                 let current;
        
// //                 if(this.head==null){
// //                     this.head=node
// //                 }else{
// //                     current=this.head;
// //                     while(current.next){
// //                         current=current.next;
// //                     }
// //                     current.next=node;
// //                 }
// //                 this.size++
// //             }
    

// //     printList(){
// //         let current = this.head
// //         while(current != null){
// //             console.log(current.data);
// //             current=current.next
// //         }
// //     }
// // }
// // const list=new linkedList();
// // // list.insertFirst(100)
// // // list.insertFirst(700)
// // // list.insertFirst(400)
// // list.insertLast(900)
// // list.insertLast(800)
// // list.insertLast(700)
// // // console.log(list);
// // // console.log(list.insertThird(300));
// // list.printList();


class ItsNode{
    constructor(data,next=null){
        this.data=data
        this.next=next
    }
}

class LinkedList{
    constructor(){
        this.tail = null
        this.head = null
        this.size = 0
    }
    nodeAtFirst(data){
        let node = new ItsNode(data)   
        if(!this.tail){
            this.tail = node
            this.head = node
        }else{
            node.next = this.head
        this.head = node
        }
        this.size++
    }
    
    nodeAtEnd(data){
        let node = new ItsNode(data)
        let current;
        if(!this.tail){
            this.tail = node
        }
        else{
            current = this.head
                 this.tail.next = node
                 this.tail = node      
            }
            this.size++
    }

    reversedList(){
        let previous = null
        let next = null
        let current = this.head
        while(current){
            next = current.next
            current.next = previous
            previous = current
            current = next
        }
        this.head = previous
    //    return this.head
    }


    //deleting middle element

    deleteAtMiddle(){
        let current = this.head
        let mid = Math.floor((this.size/2))
        let currentpos = 0
        let prev = null
        while(currentpos<mid){
            prev = current
            current = current.next
            currentpos++
        }
        prev.next = current.next
    }
    


    // deletion of node with value specified

    deleteUsingData(data){
        let node = new ItsNode()
        let current = this.head
        node.next = current
        while(current){
            if(current.data === data){
                node.next = current.next
                current = current.next
            }else{
                node = current
                current = current.next
            }
        }
        this.size--
    }

    //deletion of node giving the value

    valueOfDeleted(index){
        let current = this.head
        let currentpos = 0
        while(index-1>currentpos){
            currentpos++
            current = current.next
        }
        console.log("dats is "+current.next.data);
        current.next = current.next.next
    }


    insertBeforeAndAfter(firstdata,seconddata , value){
        let current = this.head
        let previous = null
        let node1 = new ItsNode(firstdata)
        let node2 = new ItsNode(seconddata)
        while(current){
            if(current.data === value){
                if(current === this.head){
                    node1.next = current
                    this.head = node1
                    node2.next = current.next
                    current.next = node2
                }else{
                previous.next = node1
                node1.next = current
                node2.next = current.next
                current.next = node2
            }
        }
            previous = current
            current = current.next
        }

    }



    // insert a node after a node with x data


    insertingAfterNode(data,value){
        let current = this.head
        let node = new ItsNode(data)
        while(current){
            if (current.data === value){
                node.next = current.next
                current.next = node
                return
            }
                current = current.next
            
        }
        this.size++

    }


    // insertion before node with x data


    insertionBeforeNode(data,value){
        let node = new ItsNode(data)
        let current = this.head
        while(current.next){
            
            if(current.next.data === value){
                node.next = current.next
                current.next = node
                return
            }
            current = current.next
        }
        this.size++

    }
    
    printList(){
                let current = this.head
                while(current != null){
                    console.log(current.data);
                    current=current.next
                }
            }
}
const list = new LinkedList();
list.nodeAtFirst(100)
list.nodeAtFirst(200)
list.nodeAtFirst(300)
list.nodeAtEnd(600)
list.nodeAtEnd(500)
list.nodeAtEnd(1000)
list.nodeAtFirst(400)
// list.valueOfDeleted(2)
// list.reversedList()
// list.deleteUsingData(700)
// list.insertionBeforeNode(700,300)
// list.insertingAfterNode(700,300)
// list.deleteAtMiddle()
list.insertBeforeAndAfter(230,340,1000)
list.printList()
