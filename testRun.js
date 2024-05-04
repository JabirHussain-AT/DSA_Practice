// class HashTable{
//     constructor(size){
//         this.table  = new Array(size)
//     }

//     hash(key){
//         let hash = 0 
//         for(let i = 0 ; i < key.length ; i++){
//             hash = (hash + key.charCodeAt(i)*23) % this.table.length
//         }
//         return hash
//     }

//     set(key, value){
//         let index = this.hash(key)
//         if(!this.table[index]){
//             this.table[index ] = []
//         }
//         this.table[index].push([key,value])
//         }

//      get(key){
//         let index = this.hash(key)
//         if(this.table[index]){
//             for(let i = 0 ; i < this.table[index].length ; i++){
//                 if( this.table[index][i][0]=== key){
//                     return this.table[index][i][1]
//                 }
//             }
//         }
//         return undefined
//      }  
     
//      remove(key){
//         let index = this.hash(key)
//         if(this.table[index]){
//             for(let i = 0 ; i < this.table[index].length ; i++){
//                 this.table[index].splice(i , 1)
//             }
//         }
//      }

//      display(){
//         if(this.table){
//             for(let i = 0 ; i < this.table.length ; i++){
//                 if(this.table[i]){
//                     console.log(this.table[i])
//                 }
//             }
//         }
//      }



// }

// let t = new HashTable(5)

// t.set("name", "anirudh")
// t.set("naem", "anirudh")
// t.set('age' , 24)
// t.remove('age')
// t.display()


// class HashTable {
//     constructor(size){
//         this.table = new Array(size)
//     }

//     hash(key){
//         let hash = 0 
//         for(let i = 0 ; i < key.length ; i ++){
//             hash = (hash + key.charCodeAt(i)* 23) % this.table.length 
//         }
//         return hash
//     }

//     set( key , value){
//         let index = this.hash(key)
//         if(!this.table[index]){
//             this.table[index] = []
//         }

//         this.table[index].push([key , value])
//     }
//     get( key){
//         let index = this.hash(key)
//         if( this.table[index]){
//             for(let i = 0 ;  i  < this.table[index].length ; i++){
//                 if( this.table[index][i][0] === key){
//                     return this.table[index][i][1]
//                 }
//             }
//         }
//         return undefined
//     }

//     remove(key){
//         let index = this.hash(key)
//         if( this.table[index]){
//             for(let i = 0 ;  i  < this.table[index].length ; i++){
//                 if( this.table[index][i][0] === key){
//                     this.table[index].splice(i,1)
//                 }
//             }
//         }
//     }

//     display(){
//         if( this.table){
//             for(let i = 0 ; i < this.table.length ; i++){
//                 if(this.table[i]){
//                                         console.log(this.table[i])
//                                     }
//             }
//         }
//     }
// }

// let t = new HashTable(5)
// t.set("name", "anirudh")
// t.set("naem", "anirudh")
// t.set('age' , 24)
// // t.remove('age')
// t.display()


class Node{
    constructor(value){
        this.value = value
        this.left = null 
        this.right = null
    }
}
class BST{
  constructor(){
    this.root = null
  }

  add(value){
    let newNode = new Node(value)
    if( !this.root ){
      return 
    }
  }
}