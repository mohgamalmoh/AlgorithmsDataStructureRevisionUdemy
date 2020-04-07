// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor(data) {
        this.data = data
        this.children = []
    }

    add(data){
        let newNode = new Node(data)
        this.children.push(newNode)
    }

    remove(data){
        let index = -1
        this.children.forEach(function(item,i){

            if(data === item.data){
                index = i
            }


        })

        if (index > -1) {
            this.children.splice(index, 1);
        }
    }
}

class Tree {

    constructor() {
        this.root = null
    }

    traverseBF(fn) {
        const arr = [this.root];
        while (arr.length) {
            const node = arr.shift();

            arr.push(...node.children);
            fn(node);
        }
    }

    traverseBFOrdinary() {
        let letters = []
        const arr = [this.root];
        while (arr.length) {
            const node = arr.shift();
            arr.push(...node.children);
            letters.push(node.data)
        }
        return letters
    }

    traverseDF(fn) {
       let arr = [this.root]
        while (arr[0]){
           let node = arr.shift()
            if(node.children.length > 0){
                arr.unshift(...node.children)
                /*let children = node.children
                children.push(...arr)
                arr = children*/
            }
            fn(node)
        }
    }
}

module.exports = { Tree, Node };
