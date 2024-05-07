// class Node{
//     constructor(data,next = null){
//         this.data = data
//         this.next = next
//     }
// }
// class Stack{
//     constructor(){
//         this.top = null 
//         this.size = 0
//     }

//     push(data){
//         let node = new Node(data)
//         if(this.top === null){
//             this.top = node
//             return
//         }
//             node.next = this.top
//             this.top = node 
//     }


//     pop(){
//         if(!this.top){
//             console.log("stack underflow");
//         }else{
//             this.top = this.top.next
//             this.size--;
//         }
//     }

//     printList(){
//         let current = this.top
//         while(current){
//             console.log(current.data);
//             current = current.next
//         }
//     }
// }

// const stack = new Stack()

// stack.push(100)
// stack.push(200)
// stack.push(300)
// stack.push(400)
// stack.printList()


class Node{
    constructor(data , next = null ){
        this.data = data
        this.next = next
    }
}

class LinkedListStack{
    constructor(){
        this.top = null
        this.size = 0
    }


    push(data){
        let node = new Node(data)
        if(!this.top){
            this.top = node
        }else{
            node.next = this.top
            this.top = node
        }
        this.size++
    }

    pop(){
        if(!this.top){
            console.log("stack underflow");
        }
        else{
            this.top = this.top.next
        }
        this.size--;
    }

    peek(){
        return this.top.data
    }

    isEmpty(){
            return this.top == null
    }

    getsize(){
        console.log(this.size);
    }

    print(){
        let current = this.top
        while(current){
            console.log(current.data);
            current = current.next     
        }
    }
}

let list = new LinkedListStack()
list.push(100)
list.push(200)
list.push(300)
list.push(400)
list.push(500)
list.pop()
console.log(list.isEmpty())
// console.log(list.peek())
// list.pop()
// list.pop()
// list.pop()
// list.getsize()

list.print()

