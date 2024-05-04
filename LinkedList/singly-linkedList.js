class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //adding a value to the linked list
  add(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  //inserting on the front of linked list
  addOnFront(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  //inserting on the end of the linked list
  addOnLast(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  //removing from the last of the linked list
  removeFromLast() {
    if (!this.head) return null;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    newTail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  //removing from the front of  the linked list
  removeFromFirst() {
    if (!this.head) return;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    return;
  }

  //to get  a node in a specified value
  get(index) {
    if (index < 0 || index > this.length) return null;
    let count = 0;
    let current = this.head;
    while (count !== index) {
      current = current.next;
      count++;
    }
    return current;
  }

  //to set new value to the a node in a specific postion
  set(index, value) {
    if (index < 0 || index > this.length) return null;
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.value = value;
      return foundNode;
    }
    return false;
  }

  //inserting a node based on postion
  insert(index, value) {
    if (index < 0 || index > this.length) return undefined;
    if (index === this.length) this.addOnLast(value);
    if (index === 0) this.addOnFront(value);

    let newNode = new Node(value);
    let prev = this.get(index - 1);
    let current = prev.next;
    prev.next = newNode;
    newNode.next = current;
    this.length++;
    return newNode;
  }

  //removing a node based on position
  remove(index) {
    if (index < 0 || index > this.length) return undefined;
    if (index === this.length) return this.removeFromLast();
    if (index === 0) return this.removeFromFirst();

    let prevNode = this.get(index - 1);
    let current = prevNode.next;
    prevNode.next = current.next;
    this.length--;
    return current;
  }

  //problem1 -secondlargesteven
  secondLargestEven(){
    if( !this.head) return undefined 
    let current = this.head ;
    let temp ;
    let Largest = this.head.value
    while(current){
        if(current.value > Largest && current.value % 2 === 0){
          temp = Largest
          Largest = current.value
        }
        current = current.next
    }

    return temp % 2 === 0 ? temp : 'not available'
  }


  //to reverse linkedList
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }

  //find middle of the linked list
  findMiddle() {
    if (!this.head) return Error("no values in this Linkedlist");
    let slowPointer = this.head;
    let fastPointer = this.head;
    while (fastPointer !== null && fastPointer.next !== null) {
      slowPointer = slowPointer.next;
      fastPointer = fastPointer.next.next;
    }
    return slowPointer.value;
  }

  //to check monotonic or not
  isMonotonic() {
    if (!this.head) return Error("No Values Available in the LinkedList ");
    let isIncreasing = false;
    let isDecreasing = false;
    let current = this.head;

    while (current && current.next) {
      if (current.value < current.next.value) {
        isIncreasing = true;
      }
      if (current.value > current.next.value) {
        isDecreasing = true;
      }
      if (isIncreasing && isDecreasing) {
        return false;
      }
      current = current.next;
    }
    return true;
  }

  //to check its palindrome or not
  isPalindrome() {
    if (!this.head) return Error("LinkedList Contain No Values");
    let current = this.head;
    let notReversed = "";
    let reversed = "";
    while (current) {
      notReversed += current.value;
      current = current.next;
    }
    let reversedList = this.reverse();
    current = reversedList.head;
    while (current) {
      reversed += current.value;
      current = current.next;
    }
    if (reversed === notReversed) {
      return true;
    }
    return false;
  }


  //to sort the linkedlist
  sort(){
    
  }

  //to display the values of the linked list
  display() {
    if (!this.head) return null;
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
    return this;
  }
}


let list = new LinkedList();

list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);
list.add(6);
list.add(77);
list.add(88);
list.addOnFront(90);
list.addOnLast(100);
// list.add("M");
// list.add("A");
// list.add("L");
// list.add("A");
// list.add("Y");
// list.add("A");
// list.add("L");
// list.add("A");
// list.add("M");
console.log(
  "=================================================================="
);
// list.set(1, 999);
// list.remove(0);
// list.remove(0);
// list.display();
// console.log('----------------------------------------------------------1')
// list.display()
list.display();

console.log("----------------------------------------------------------2");
console.log(list.secondLargestEven())
// console.log(list.isPalindrome());
