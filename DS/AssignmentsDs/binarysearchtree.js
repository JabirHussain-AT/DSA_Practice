const util = require('util')
class Node{
    constructor(data){
        this.data = data
        this.left = this.right = null
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }


    //inserting value into tree
    insertValue(data){
        let node = new Node(data)
        if(!this.root){
            this.root = node
        }else{
            let currentNode = this.root;
        while(true){
            if(currentNode.data > node.data){
                if(currentNode.left === null){
                    currentNode.left = node
                    break;

                }else{
                    currentNode = currentNode.left
                }
            }else if(currentNode.data < node.data){
                if(currentNode.right === null){
                    currentNode.right = node
                    break;
                }else{
                    currentNode = currentNode.right
                }
            }
        }
        }
    }

// inorder traversal
    printInOrder(node){
        if(node !== null){
            this.printInOrder(node.left)
            console.log(node.data);
            this.printInOrder(node.right)
        }

    }


//preorder traversal
    printPreOrder(node){
        if(node !== null){
            console.log(node.data);
            this.printPreOrder(node.left);
            this.printPreOrder(node.right);
        }
    }


    //postorder traversal

    printPostOrder(node){
        if(node !== null){
            this.printPostOrder(node.left);
            this.printPostOrder(node.right);
            console.log(node.data);
        }
    }


    //level order traversal

    levelOrder(){
        const queue = []
        queue.push(this.root);
        while(queue.length){
            let current = queue.shift()
            console.log(current.data)
            if(current.left){
                queue.push(current.left)
            }
            if(current.right){
                queue.push(current.right)
            }
        }
    }


    
// search using key
    contains(root,key){
        // let root = this.root
        if(root === null){
            return false;
        }else{
            if(root.data===key){
                return true;
            }else if(root.data>key){
            return this.contains(root.left,key)
            }else{
            return this.contains(root.right,key)
            }
        }
    }

    validate(){
        return this.validateBinary(this.root)
    }


    validateBinary(node){
        let result = []
        if(node == null){
            return;
        }
        if(node.left){
            this.validateBinary(node.left)
        }
        
        result.push(node.data)

        if(node.right){
            this.validateBinary(node.right)
        }

        for(let i = 0; i < result.length-1; i++){
            if(result[i]>result[i+1]){
                return "not a binary search tree"
            }
        }
        return true

    }



    closestValue(data){
        let closest = this.root.data
        let node = this.root
        while(node !== null){
            if(Math.abs(node.data-data)<(Math.abs(closest-data))){
                closest = node.data
            }
            if(data<node.data){
                node = node.left
            }else if(data>node.data){
                node = node.right
            }else{
                return node;
            }
        }
        return closest
    }



    min(node){
        if(!node){
            return null
        }else{
            if(node.left === null){
                return node.data
            }else{
                return this.min(node.left)
            }
         }
    }

    max(node){
        if(!node){
            return null
        }else{
            if(node.right === null){
                return node.data
            }else{
                return this.max(node.right)
            }
        }
    }


    delete(data){
        this.root = this.deleteNode(this.root,data)
    }    

    deleteNode(node,data){
        if(!node){
            return node
        }
        if(data < node.data){
            node.left = this.deleteNode(node.left,data)
        }else if(data > node.data){
            node.right = this.deleteNode(node.right,data)
        }else{
            if(!node.left && !node.right){
                return null
            }
            if(!node.left){
                return node.right
            }else if(!node.right){
                return node.left
            }
            node.data= this.min(node.right)
            node.right = this.deleteNode(node.right,node.data)   
        }
        return node;

    }
}


let tree = new BinarySearchTree()
tree.insertValue(10)
tree.insertValue(5)
tree.insertValue(15)
tree.insertValue(2)
tree.insertValue(8)
tree.insertValue(6)
tree.insertValue(9)
tree.insertValue(14)
tree.insertValue(17)
// tree.levelOrder()
// console.log(tree.validate());
// console.log(tree.closestValue(300));
tree.delete(10)
// tree.levelOrder()


// console.log(tree.min(tree.root))
// console.log(tree.max(tree.root))

tree.printInOrder(tree.root);

// console.log(util.inspect(tree,{depth:null}));
// tree.printInOrder(tree.root)
// tree.printPreOrder(tree.root)
// tree.printPostOrder(tree.root)
// tree.levelOrder()
// console.log(tree.search(tree.root,12))