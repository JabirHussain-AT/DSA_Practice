class Node{
    constructor(){
        this.children = {}
        this.isEnd = false
    }
}
class Trie{
    constructor(){
        this.root = new Node()
    }

    insert(word){
        let node = this.root;
        for(let ch of word){
            if(!node.children[ch]){
                node.children[ch] = new Node()
            }
            node = node.children[ch]
        }
        node.isEnd = true;
    }

    search(word){
        let node = this.root;
        for(let ch of word){
            if(!node.children[ch]){
                return false;
            }
            node = node.children[ch]
        }
        return (node.isEnd)
    }


    startsWith(prefix){
        let node = this.root
        for(let ch of prefix){
            if(!node.children[ch]){
                return false;
            }
            node = node.children[ch]
        }
        return true;
    }

    suggest(prefix){
        let node = this.root
        let curr = "";
        for(let i = 0; i < prefix.length; i++){
            if(!node.children[prefix[i]]){
                return [];
            }
            node = node.children[prefix[i]]
            curr += prefix[i]
        }
        let result = []
        this.suggestHelper(node,result,curr);
        return result;
    }

    suggestHelper(node,result,curr){
        if(node.isEnd){
            result.push(curr);
        }
        for(let ltr in node.children){
            console.log(curr);
            this.suggestHelper(node.children[ltr],result,curr+ltr)
        }
    }
}

let trie = new Trie()
trie.insert('vipin')
trie.insert('vipan')
trie.insert('vipen')
trie.insert("anirudh")
trie.insert("athul")
// trie.insert("anirudhjagath")
// trie.insert("anirudhk")
// trie.insert("athul rameshan")
// trie.insert("karthk")
// console.log(trie.search("athul"))
// console.log(trie.startsWith("anirudhjagath"));
// console.log(trie.suggest("vip");


console.log(trie.search('vipin'))