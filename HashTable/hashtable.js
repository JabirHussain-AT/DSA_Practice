

class HashTable{
    constructor(size){
        this.table = new Array(size)
    }

    hash(key){
        let hash = 0
        for(let i = 0 ; i < key.length ; i++){
            hash = (hash+key.charCodeAt(i)*23) % this.table.length
        }
        return hash
    }

    set(key, value){
        let index = this.hash(key)
        if(!this.table[index]){
            this.table[index] = []
        }
        this.table[index].push([key, value])
    }




    
    get(key){
        let index = this.hash(key)
        if(this.table[index]){
            for(let i = 0 ; i < this.table[index].length ; i++){
                if(this.table[index][i][0] == key){
                    return this.table[index][i][1]
                }
            }
        }
        return undefined
    }

    remove(key){
        let index = this.hash(key)
        if(this.table[index]){
            for(let i =0 ; i < this.table[index].length ; i++){
                if(this.table[index][i][0] === key){
                    this.table[index].splice(i,1)
                }
            }
        }
    }

    display(){
        if(this.table){
            for(let i = 0 ; i < this.table.length ; i++){
                if(this.table[i]){
                    console.log(this.table[i]);
                }
            }
        }
    }
 }

 let table = new HashTable(7)
 table.set("name", "anirudh")
 table.set("naem", "anirudh")
 table.remove("age")
 console.log(table.get("name"));
 table.display()












//  ---------------------------------------------------------------------------------

 // class HashTable{
//     constructor(size){
//         this.table = new Array(size)
//         this.size = size
//     }

//     hash(key){
//         let total = 0;
//         for (let i = 0 ; i < key.length ; i++){
//             total += key.charCodeAt(i)
//         }
//         return total % this.size;
//     }

//     set(key , value){
//         const index = this.hash(key)
//         let bucket = this.table[index]
//         if(!bucket){
//             this.table[index] = [[key, value]]; // Assign the new bucket to this.table[index]
//         }else{
//             const sameKey = bucket.find(item => item[0] === key)
//             if(sameKey){
//                 sameKey[1] = value
//             }
//         }
//     }
    

//     get(key){
//         const index = this.hash(key)
//         return this.table[index]
//     }

//     remove(key){
//         const index = this.hash(key)
//         this.table[index] = undefined
//     }

//     display(){
//         for(let i = 0 ; i < this.table.length ; i++){
//             if(this.table[i]){
//                 console.log(i ,this.table[i]);
//             }
//         }
//     }
// }

// let table = new HashTable(50)

// table.set("name", "anirudh")
// table.set("naem", "annnnnn")
// table.display()




