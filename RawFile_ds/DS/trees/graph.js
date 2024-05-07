class Graph{
    constructor(){
        this.edges = {};
    }

    addVertex(vertex){
        if(!this.edges[vertex]){
            this.edges[vertex] = new Set();
        }
    }

    addUnDirectionalEdges(vone,vtwo){
        if(!this.edges[vone]){
            this.addVertex(vone)
        }
        if(!this.edges[vtwo]){
            this.addVertex(vtwo)
        }
        this.edges[vone].add(vtwo);
        this.edges[vtwo].add(vone);
    }

    addDirectionalEdges(vone,vtwo){
        if(!this.edges[vone]){
            this.addVertex(vone)
        }
        if(!this.edges[vtwo]){
            this.addVertex(vtwo)
        }
        this.edges[vone].add(vtwo);
    }

    toRemoveEdge(vone,vtwo){
        
        this.edges[vone].delete(vtwo);
        this.edges[vtwo].delete(vone);
        
    }

    toRemoveVertex(vertex){
        if(!this.edges[vertex]){
            console.log("vertex not found");
        }
        for(let adj of this.edges[vertex]){
            this.toRemoveEdge(vertex,adj)
        }
        delete this.edges[vertex];
    }

    display(){
        for(const vertex in this.edges){
            console.log(vertex+'->'+[...this.edges[vertex]]);
        }
    }
}

let graph = new Graph()
graph.addVertex(10);
graph.addVertex(20);
graph.addVertex(30);
graph.addVertex(40);
graph.addUnDirectionalEdges(40,20)
graph.addDirectionalEdges(20,60)
graph.addDirectionalEdges(10,20)
graph.addDirectionalEdges(20,10)
// graph.addDirectionalEdges(50,20)
graph.addDirectionalEdges(80,70)
graph.toRemoveVertex(20)
// graph.display()
console.log(graph);