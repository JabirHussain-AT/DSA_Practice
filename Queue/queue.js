class Queue {
    constructor() {
        this.items = []; // Array to store queue elements
    }

    // Method to add an element to the queue (enqueue)
    enqueue(element) {
        this.items.push(element);
    }

    // Method to remove and return the first element from the queue (dequeue)
    dequeue() {
        if (this.isEmpty()) {
            return "Underflow"; // If queue is empty
        }
        return this.items.shift();
    }

    // Method to return the first element of the queue without removing it (peek)
    peek() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items[0];
    }

    // Method to check if the queue is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Method to return the size of the queue
    size() {
        return this.items.length;
    }

    // Method to print the elements of the queue
    printQueue() {
        let str = "";
        for (let i = 0; i < this.items.length; i++) {
            str += this.items[i] + " ";
        }
        return str.trim();
    }
}

// Example usage:
let queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log("Queue elements:", queue.printQueue()); // Output: 10 20 30
console.log("Front element:", queue.peek()); // Output: 10
console.log("Dequeued element:", queue.dequeue()); // Output: 10
console.log("Queue size:", queue.size()); // Output: 2
