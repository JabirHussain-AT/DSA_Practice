class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  //inserting to the BST
  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertHelper(this.root, newNode);
    }
  }
  //Helper function for inserting based on the value
  insertHelper(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertHelper(node.left, newNode);
      }
    } else if (newNode.value > node.value) {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertHelper(node.right, newNode);
      }
    }
  }

  //postOrder Traversal
  postOrder() {
    this.postOrderHelper(this.root);
  }
  postOrderHelper(node) {
    if (node !== null ) {
      this.postOrderHelper(node.left);
      this.postOrderHelper(node.right);
      console.log(node.value);
    }
  }

  //inorder traversal
  inorder() {
    this.inorderHelper(this.root);
  }
  //helper function for inorder traversal
  inorderHelper(node) {
    if (node !== null) {
      this.inorderHelper(node.left);
      console.log(node.value);
      this.inorderHelper(node.right);
    }
  }

  //preOrder Traversal
  preOrder() {
    this.preOrderHelper(this.root);
  }
  preOrderHelper(node) {
    if (node !== null) {
      console.log(node.value);
      this.preOrderHelper(node.left);
      this.preOrderHelper(node.right);
    }
  }

  //Level Order Traversal , BFS

  levelOrder() {
    this.levelOrderHelper(this.root);
  }
  levelOrderHelper(node) {
    if (!node) return;

    const queue = [];
    queue.push(node);

    while (queue.length > 0) {
      const node = queue.shift();
      console.log(node.value);

      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  }

  //Remove a value from BST
  remove(target) {
    this.root = this.removeHelper(this.root, target);
  }
  removeHelper(node, target) {
    if (node === null) return null;
    if (target < node.value) {
      node.left = this.removeHelper(node.left, target);
    } else if (target > node.value) {
      node.right = this.removeHelper(node.right, target);
    } else {
      //case 1 - if node don't have no child

      if (node.left === null && node.right === null) {
        return null;
      }

      //case 2 - if node have any one child
      if (node.left === null) {
        return node.right;
      } else if (node.right === null) {
        return node.left;
      }

      //case 3 - if node have both child
      const minValue = findMinHelper(node.right); // find Min On The Right Tree to replace
      node.value = minValue.value;
      node.right = this.removeHelper(node.right, minValue.value);
    }
    return node;
  }
  findMinHelper(node) {
    while (node.left) {
      node = node.left;
    }
    return node;
  }

  //checking the value contains in  a tree or not
  contains(value) {
    let searchBot = this.root;
    while (searchBot) {
      if (value < searchBot.value) {
        searchBot = searchBot.left;
      } else if (value > searchBot.value) {
        searchBot = searchBot.right;
      } else {
        return true;
      }
    }
    return false;
  }
}

const bst = new BST();
bst.insert(23);
bst.insert(34);
bst.insert(12);
bst.insert(28);
bst.insert(43);
bst.insert(8);
bst.insert(17);
// bst.inorder()
// bst.preOrder();
bst.levelOrder();
// bst.postOrder()
bst.remove(28);
console.log("after removing ------------------------------------------");
bst.inorder();
console.log(bst.contains(28));
