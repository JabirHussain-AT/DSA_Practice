class Node{
    constructor(data, next = null){
        this.data = data
        this.next = next
    }
}

class LinkedListQueue{
    constructor(){
        this.front = null
        this.rear = null
        this.size = 0
    }

    enqueue(data){
        let node = new Node(data)
        if(!this.rear){
            this.front = node
            this.rear = node
        }else{
           this.rear.next = node
           this.rear = node
        }
        this.size++
    }

    dequeue(){
        if(!this.front){
            console.log("queue underflow");
        }else{
            this.front =this.front.next
        }
    }

    print(){
        let current = this.front
        while(current){
            console.log(current.data);
            current = current.next
        }
    }
}

let list = new LinkedListQueue()

list.enqueue(100)
list.enqueue(200)
list.enqueue(300)
list.enqueue(400)
list.dequeue()
list.dequeue()
list.print()