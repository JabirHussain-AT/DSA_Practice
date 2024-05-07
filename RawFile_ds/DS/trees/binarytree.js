const util = require('util');
class Node{
    constructor(item){
        this.key = item
        this.left = this.right = null
    }
}

class FullBinary{
    constructor(){
        this.root = null
        this.lastInserted = null
    }

    insertTree(item){
        let node = new Node(item)
        if(!this.root){
            this.root = node
            this.lastInserted = node;
        }else{
                if(!this.lastInserted.left){
                    this.lastInserted.left = node
                }else if(!this.lastInserted.right){
                    this.lastInserted.right = node
                }else{
                    this.lastInserted = this.lastInsertedNode(this.root)
                    this.lastInserted.left = node
                }
        }
    }

    lastInsertedNode(node){
        if(!node){
            return null;
        }
        let queue = [node];
        while(queue.length > 0){
            let head = queue.shift();
            if(!head.left || !head.right){
                return head
            }
            if(head.left){
                queue.push(head.left)
            }
            if(head.right){
                queue.push(head.right)
            }
        }
        return null;
    }


    // printInOrder(node){
    //     if(node!==null){ 
            
    //         this.printInOrder(node.left)
            
    //         console.log(node.key);
            
    //         this.printInOrder(node.right)
    //     }
    // }
    // print() {
    //     this.printInOrder(this.root)
    // }


    printPostOrder(node){
        if(node !== null){
            this.printPostOrder(node.left)
            this.printPostOrder(node.right)
            console.log(node.key+" ");
        }
    }
    printPreOrder(node){
        if(node !== null){
            console.log(node.key);
            this.printPreOrder(node.left)
            this.printPreOrder(node.right)
        }
    }

    
    
    
    
    
    
    printInOrder(node){
        if(node !== null){
            this.printInOrder(node.left)
            console.log(node.key);
            this.printInOrder(node.right)
        }
    }
    print(){
        // this.printInOrder(this.root)
        // this.printPreOrder(this.root)
        this.printInOrder(this.root)
    }
}

let tree = new FullBinary()
tree.insertTree(10)
tree.insertTree(20)
tree.insertTree(30)
tree.insertTree(40)
tree.insertTree(50)
tree.insertTree(60)
console.log(util.inspect(tree,true));

// tree.print()
// console.log(tree);
