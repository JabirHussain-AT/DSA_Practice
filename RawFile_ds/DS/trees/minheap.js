class Minheap{
    constructor(){
        this.heap = []
        this.size = 0
    }
    parent(index){
        return this.heap[this.getParentIndex(index)]
    }
    leftChild(index){
        return this.heap[this.getLeftIndex(index)]
    }
    rightChild(index){
        return this.heap[this.getRightIndex(index)]
    }
    getParentIndex(index){
        return Math.floor((index - 1)/2)
    }
    getLeftIndex(index){
        return 2 * index + 1
    }
    getRightIndex(index){
        return 2 * index + 2
    }
    hasParent(index){
        return this.getParentIndex(index) >= 0 
    }
    hasLeft(index){
        return this.getLeftIndex(index) < this.size
    }
    hasRight(index){
        return this.getRightIndex(index) < this.size
    }
    swap(index1,index2){
        [ this.heap[index1] , this.heap[index2]] = [this.heap[index2],this.heap[index1]] 
    }
    insert(data){
        this.heap[this.size] =  data 
        this.size ++ 
        this.heapifyUp()

    }
    heapifyUp(){
        let index  = this.size - 1
        while( this.hasParent && this.parent(index) > this.heap[index] ){
            this.swap(this.getParentIndex(index) , index )
            index = this.getParentIndex(index)
        }
    }
    removeMin(){
        if( this.size === 0 ){
            throw new Error("Empty Heap")
        }
        let data = this.heap[0]
        // this.heap[0] = this.heap[this.size - 1]
        this.heap[0] = this.heap.pop()
        this.size-- 
        this.heapifyDown();
        return data
    }
    heapifyDown(){
        let index = 0
        while( this.hasLeft(index)){
            let smallerChildIndex = this.getLeftIndex(index)
            if(this.hasRight(index) && this.rightChild(index) < this.leftChild(index)){
                smallerChildIndex = this.getRightIndex(index)
            }
            if(this.heap[index] < this.heap[smallerChildIndex]){
                break ;
            }else{
                this.swap(index , smallerChildIndex)
                index = smallerChildIndex
            }
        }
    }
}


const minheap = new Minheap()
minheap.insert(10)
minheap.insert(20)
minheap.insert(1)
minheap.insert(5)
minheap.insert(30)
minheap.removeMin()
minheap.removeMin()
minheap.removeMin()
console.log(minheap)