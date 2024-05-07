class Node{
    constructor(data,prev=null,next=null){
        this.data = data
        this.prev = prev
        this.next = next
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }

    //inserting node at beginning
    insertFirst(data){
        let node = new Node(data)
        if(this.head === null){
            this.head= node;
            this.tail= node;
        }else{
            this.head.prev=node;
            node.next=this.head;
            this.head=node;
        }
        this.size++;
    }

    //inserting node at end
    insertAtEnd(data){
        let node = new Node(data)
        if(!this.tail){
            this.head = node
            this.tail = node
        }else{
        node.prev = this.tail
        this.tail.next = node
        this.tail = node
        }   
        this.size++
    }

    //inserting node at index
    insertAtIndex(data, index){
        let node = new Node(data)
        let current = this.head
        let currentpos = 0
        let previous 
        if(index < 0 || index > this.size){
            console.log("bye")
            return null;
        }
        if(index === 0){
            node.next = current
            current.prev = node
            this.head = node
        }else{
        while(index > currentpos){
            previous = current
            currentpos++
            current = current.next
        }
        previous.next = node
        node.prev = previous
        node.next = current
        current.prev = node
    }
    }

    //insert a node after a node with data x

    insertAfter(data,value){
        let node = new Node(data)
        let current = this.head
        while(current){
            if (current.data === value){
                node.next = current.next
                current.next = node
                node.prev = current
                current.next.prev = node
                return 
            }
            current = current.next

        }

    }



        //insert a node before a node with data x

        insertBefore(data,value){
            let node = new Node(data)
            let current = this.head
            while(current.next){
                if(current.next.data === value){
                    node.next = current.next
                    current.next.prev = node
                    current.next = node
                    node.prev = current
                    return
                }
                current = current.next
            }

        }



    //reversing list
    reverseOfList(){
        let current = this.tail
        while(current){
            console.log(current.data);
            current = current.prev
        }
        }
    

    printList(){
        let current=this.head
        while(current!==null){
            console.log(current.data);
            current = current.next 
        }       
    }
}

let list = new LinkedList()

list.insertFirst(200)
list.insertAtEnd(400)
list.insertAtEnd(500)
list.insertAtEnd(600)
list.insertAtEnd(700)
list.insertAtIndex(100,1)
list.insertBefore(800,500)
// list.reverseOfList()
list.printList();
