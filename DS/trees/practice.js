// // class Node{
// //     constructor(data){
// //         this.data = data
// //         this.left = this.right = null
// //     }
// // }

// // class BinarySearchTree{
// //     constructor(){
// //         this.root = null
// //     }

// //     insert(data){
// //         let node = new Node(data)
// //         if(!this.root){
// //             this.root = node 
// //         }else{
// //             let currentNode = this.root
// //             while(true){
// //                 if(currentNode.data>node.data){
// //                     if(currentNode.left === null){
// //                         currentNode.left = node
// //                         break;
// //                     }else{
// //                         currentNode = currentNode.left
// //                     }
// //                 }else if(currentNode.data<node.data){
// //                     if(currentNode.right === null){
// //                         currentNode.right = node
// //                         break;
// //                     }else{
// //                         currentNode = currentNode.right
// //                     }
// //                 }
// //             }
// //         }
// //     }


// //     delete(data){
// //         this.deleteNode(data,this.root)
// //     }
// //     deleteNode(data,node){
// //         if(!node){
// //             return null
// //         }
// //         if(data<node.data){
// //             node.left = this.deleteNode(data,node.left)
// //         }
// //         else if(data>node.data){
// //             node.right = this.deleteNode(data,node.right)
// //         }else{
// //             if(!node.left && !node.right){
// //                 return null
// //             }
// //             if(!node.left){
// //                 return node.right;
// //             }else if(!node.right){
// //                 return node.left;
// //             }
// //             node.data = this.min(node.right)
// //             node.right = this.deleteNode(node.data,node.right)
// //         }
// //         return node;
// //     }

// //     print(){
// //         return this.inorder(this.root)
// //     }

// //     inorder(node){
// //         if(node !== null){
// //         this.inorder(node.left)
// //         console.log(node.data);
// //         this.inorder(node.right)
// //         }
        
        
// //     }
// // }

// // let binary = new BinarySearchTree()
// // binary.insert(30)
// // binary.insert(20)
// // binary.insert(40)
// // binary.insert(10)
// // binary.insert(25)
// // binary.insert(35)
// // binary.insert(45)
// // binary.print()


// // class Node{
// //     constructor(data){
// //         this.data = data
// //         this.left = this.right = null
// //     }
// // }

// // class BinarySearchTree{
// //     constructor(){
// //         this.root = null
// //     }

// //     insert(data){
// //         let node = new Node(data)
// //         if(!this.root){
// //             this.root = node
// //         }
// //         else{
// //             let currentNode = this.root
// //             while(true){
// //                 if(node.data<currentNode.data){
// //                     if(!currentNode.left){
// //                         currentNode.left = node
// //                         break;
// //                     }else{
// //                         currentNode = currentNode.left
// //                     }
// //                 }
// //                 else if(node.data>currentNode.data){
// //                     if(!currentNode.right){
// //                         currentNode.right = node
// //                         break;
// //                     }
// //                     else{
// //                         currentNode = currentNode.right
// //                     }
// //                 }  
// //             }
// //         }
        
// //     }

// //     delete(data){
// //         this.root = this.deleteNode(this.root,data)
// //     }
// //     deleteNode(node){
// //         if(!node){
// //             return null
// //         }
// //         if(node.data > data){
// //             node.left = this.deleteNode(node.left,data)
// //         }else if(node.data < data){
// //             node.right = this.deleteNode(node.right,data)
// //         }else{
// //             if(!node.left && !node.right){
// //                 return null
// //             }
// //             if(!node.left){
// //                 return node.right
// //             }else if(!node.right){
// //                 return node.left
// //             }
// //             node.data = this.min(node.right)
// //             node.right = this.deleteNode(node.right,node.data)
// //         }
// //         return node
// //     }

// //     min(node){
// //         if(!node){
// //             return null
// //         }else{
// //             if(node.left == null){
// //                 return node
// //             }else{
// //                 return this.min(node.left)
// //             }
// //         }

// //     }


// //     print(){
// //         return this.inorder(this.root)
// //     }

// //     inorder(node){
// //         if(node!== null){
// //             this.inorder(node.left)
// //             console.log(node.data);
// //             this.inorder(node.right)
// //         }
// //     }
// // }
// // let bst = new BinarySearchTree()
// // bst.insert(30)
// // bst.insert(10)
// // bst.insert(20)
// // bst.insert(50)
// // bst.insert(70)
// // bst.insert(40)
// // bst.print()

// // class Graph{
// //     constructor(){
// //         this.edges = new Map();
// //     }

// //     bfs(vertex){
// //         if(!this.edges[vertex]){
// //             return null;
// //         }
// //         let visited = new Set();
// //         let queue = [vertex]
// //         visited.add(vertex)
// //         while(queue.length > 0){
// //             let curr = queue.shift()
// //             console.log(curr);
// //             let neighbour = this.edges.get(curr)
// //             for(let element of neighbour){
// //                 if(!visited.has(element)){
// //                     queue.push(element)
// //                     visited.add(element)
// //                 }
// //             }

// //         }
// //     }
// // }


// class Node{
//     constructor(data){
//         this.data = data
//         this.left = this.right = null 
//     }
// }

// class BinarySearchTree{
//     constructor(){
//         this.root = null
//     }

//     insert(data){
//         let node = new Node(data)
//         if(!this.root){
//             this.root = node
//         }else{
//             let currentNode = this.root
//             while(true)
//             if(currentNode.data>data){
//                 if(currentNode.left === null){
//                     currentNode.left = node
//                     break;
//                 }else{
//                     currentNode = currentNode.left
//                 }
//             }else if(currentNode.data<data){
//                 if(currentNode.right === null){
//                     currentNode.right = node
//                     break;
//                 }else{
//                     currentNode = currentNode.right
//                 }
//             }
//         }
//     }


//     delete(data){
//         this.root = this.deleteNode(this.root,data)
//     }


//     deleteNode(node,data){
//         if(!node){
//             return null
//         }
//         if(data<node.data){
//             node.left = this.deleteNode(node.left,data)
//         }
//         else if(data>node.data){
//             node.right = this.deleteNode(node.right,data)
//         }else{
//             if(!node.left && !node.right){
//                 return node
//             }
//             if(!node.left){
//                 return node.right
//             }else if(!node.right){
//                 return node.left;
//             }
//             node.data = this.min(node.right)
//             node.right = this.deleteNode(node.right,node.data)
//         }
//         return node;
//     }


//     min(node){
//         if(!node){
//             return null
//         }else{
//             if(node.left === null){
//                 return node
//             }else{
//                 return this.min(node.left)
//             }
//         }
//     }

//     contains(node,key){
//         if(!node){
//             return false 
//         }else{
//             if(node.data === key){
//                 return true
//             }else if(node.data > data){
//                 this.contains(node.left,key)
//             }else{
//                 this.contains(node.right,key)
//             }
//         }
        

//     }
// }

class Node{
    constructor(data){
        this.data = data
        this.left = this.right = null
    }
}
class BinarySearchTree{
    constructor(){
        this.root = null
    }

    insert(data){
        let node = new Node(data)
        if(!this.root){
            this.root = node
        }else{
            let currentNode = this.root
            while(true){
                if(currentNode.data > data){
                    if(currentNode.left === null){
                        currentNode.left = node
                        break;
                    }else{
                        currentNode = currentNode.left
                    }
                }else if(currentNode.data < data){
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


    print(){
        this.printInOrder(this.root)

    }

    printInOrder(node){
        if(node !== null){
            this.printInOrder(node.left)
            console.log(node.data);
            this.printInOrder(node.right)
        }
    }
}

let bst = new BinarySearchTree()
bst.insert(30)
bst.insert(20)
bst.insert(40)
bst.insert(25)
bst.insert(45)
bst.print()