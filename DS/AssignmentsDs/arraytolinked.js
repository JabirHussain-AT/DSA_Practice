let array=[1,2,3,4,5,6,7]

class Node{
    constructor(data,next=null){
        this.data = data
        this.next = next
    }
}

class linkedList{
    constructor(){
        this.head = null
        this.size = 0
    }

    insertFirst(data){
        this.head=new Node(data,this.head)
        this.size++
    }

    printList(){
        let current=this.head
        while(current){
            console.log(current.data);
            current=current.next
            
        }

    }
}



let list = new linkedList();
for(let i=0;i<array.length;i++){
    list.insertFirst(array[i])
}
// console.log(array);
list.printList()
