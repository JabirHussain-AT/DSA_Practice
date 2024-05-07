class minHeap{
    constructor(){
        this.arr = []
    }

    getMin(){
        return this.arr[0]
    }

    left(i){
        return 2 * i + 1;
    }

    right(i){
        return 2 * i + 2;
    }
    
    parent(i){
        return Math.floor((i-1)/2);
    }

    insert(k){
        let arr = this.arr;
        arr.push(k)

        let i = arr.length-1
        while(i > 0 && arr[this.parent(i)]>arr[i]){
            let p = this.parent(i);
            [arr[i],arr[p]] = [arr[p],arr[i]];
            i = p;
        }
    }


    deleteNode(i){
        if(i < 0 || i >= this.arr.length){
            return ;
        }
        let last = this.arr.pop();
        if(i === this.arr.length){
            return null
        }

        this.arr[i] = last

        if( i > 0 && this.arr[this.parent(i)] > this.arr[i]){
            this.moveUp(i)
        }else{
            this.minHeapify(i)
        }

        // this.minHeapify(0);
    }


    moveUp(i){
        let arr = this.arr
        while(i > 0 && arr[this.parent(i)] > arr[i]){
            let p = this.parent(i)
            [arr[i],arr[p]] = [arr[p],arr[i]]
            i = p;
        }
    }

    minHeapify(i){
        let arr = this.arr;
        let n = arr.length
        let l = this.left(i)
        let r = this.right(i)
        let smallest = i
        if(l < n && arr[l] < arr[i]){
            smallest = l;
        }
        if(r < n && arr[r] < arr[smallest]){
            smallest = r
        }

        if(smallest !== i){
            [arr[i],arr[smallest]] = [arr[smallest],arr[i]]
            this.minHeapify(smallest);
        }
    }

    print(){
        // for(let i = 0; i < this.arr.length; i++){
            console.log(this.arr);
        // }
    }
}

let heap = new minHeap()
heap.insert(100)
heap.insert(200)
heap.insert(300)
heap.insert(40)
heap.insert(50)
heap.insert(60)
heap.deleteNode(0)
heap.print();