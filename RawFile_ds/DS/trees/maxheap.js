class maxHeap{
    constructor(){
        this.arr = []
    }

    getMax(){
        return this.arr[0]
    }

    left(i){
        return 2 * i + 1;
    }

    right(i){
        return 2 * i + 2;
    }

    parent(i){
        return Math.floor((i-1)/2)
    }

    insert(k){
        let arr = this.arr;
        arr.push(k);
        let i = arr.length -1;
        while(i > 0 && arr[this.parent(i)]<arr[i]){
            let p = this.parent(i);
            [arr[i],arr[p]] = [arr[p],arr[i]];
            i = p; 
        }
    }

    deleteNode(i){
        if(i < 0 || i >= this.arr.length){
            return;
        }
        let last = this.arr.pop()
        if(i === this.arr.length){
            return;
        }
        this.arr[i] = last;

        if(i > 0 && this.arr[this.parent(i)] > this.arr[i]){
            this.moveUp(i)
        }else{
        this.maxHeapify(i)
        }
    }


    moveUp(i){
        let arr = this.arr;
        while(i > 0 && arr[this.parent(i)] < arr[i]){
            let p = this.parent(i)
            [arr[i],arr[p]] = [arr[p],arr[i]]
            i = p;
        }
    }

    maxHeapify(i){
        let arr = this.arr;
        let n = arr.length;
        let l = this.left(i)
        let r = this.right(i)
        let largest = i; 
        if(l < n && arr[l]>arr[i]){
            largest = l;
        }
        if(r < n && arr[r] > arr[largest]){
            largest = r
        }
        if(largest !== i){
            [arr[i],arr[largest]] = [arr[largest],arr[i]]
            this.maxHeapify(largest)
        }
    }


    

    print(){
        for(let i = 0; i < this.arr.length; i++){
            console.log(this.arr[i]);
        }
    }
}

let heap = new maxHeap()
heap.insert(4)
heap.insert(10)
heap.insert(3)
heap.insert(5)
heap.insert(1)
// heap.deleteNode(0)
heap.print()