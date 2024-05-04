class Node{
    constructor(value){
        this.value = value ;
        this.next = null ;
        this.prev = null ;
    }
}


class DoublyLinkedList{
    constructor(){
        this.head = null ;
        this.tail = null ;
        this.length = 0 ;
    }

    push(value){
        let newNode = new Node(value)
        if( !this.head ){
            this.head = newNode
            this.tail = newNode
        }else{
            this.tail.next = newNode ;
            newNode.prev = this.tail 
            this.tail = newNode ;

        }
        this.length++
        return
    }


    pop(){
        if( !this.head ) return undefined
        let currentTail = this.tail 
        if( this.length === 1 ){
            this.head = null ;
            this.tail = null ;
        }else{
            this.tail = currentTail.prev ;
            this.tail.next = null ;
            currentTail.prev = null ;
        }
        

        this.length-- 
        return currentTail
    }


    shift(){
        if( !this.head ) return undefined 
        if(this.length === 1){
            this.head= null ; 
            this.tail = null ;
        }else{
            let oldHead = this.head ;
            this.head = oldHead.next ;
            this.head.prev = null ;
            oldHead.next =null
        }
        this.length--
        return oldHead
    }

    unshift(value){
       let newNode = new Node(value)
       if( !this.head ){
        this.head = newNode 
        this.tail = newNode
       }else{
        newNode.next = this.head 
        this.head.prev = newNode
        this.head = newNode ;
       }
       this.length++
       return newNode
    }

    display(){
        if( !this.head ) return null
        let current = this.head 
        while(current){
            console.log(current.value)
            current = current.next
        }

        return
    }

}


let list = new DoublyLinkedList()
list.push('Anirudh')
list.push('Jabir')
list.pop()
list.display()