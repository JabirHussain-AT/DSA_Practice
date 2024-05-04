class Stack{
    constructor(){
        this.items = []
    }

    push(value){
        this.items.push(value)
    }
    pop(){
        if( this.isEmpty() ){
            return 'underflow'
        }else{
            return this.items.pop()
        }
    }
    isEmpty(){
      return  this.items.length > 0 ? false : true
    }

    peek(){
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items[this.items.length - 1];
    }

    size(){
        return this.items.length
    }
    printStack(){
        return this.items
    }
}
let stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log("Stack elements:", stack.printStack()); // Output: 10 20 30
console.log("Top element:", stack.peek()); // Output: 30
console.log("Popped element:", stack.pop()); // Output: 30
console.log("Stack size:", stack.size()); 

