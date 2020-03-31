// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data,next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {

    constructor(head = null) {
        this.head = head
    }

    insertFirst(data){
        let newNode = new Node(data,this.head)
        this.head = newNode
    }

    size(){
        let firstNode = this.head;
        let size = 0;
        while (firstNode){
            size++
            firstNode = firstNode.next
        }
        return size
    }

    getLast(){
        let firstNode = this.head;
        let cursor = null
        while (firstNode ){
            cursor = firstNode
            firstNode = firstNode.next
        }
        return cursor
    }

    getFirst(){
        return this.head
    }

    clear(){
        this.head = null
    }

    removeFirst(){
        this.head = this.head.next
    }

    removeLast(){
        let currentNode = this.head;
        let nextCursor = null
        //let nextNextCursor
        //let precursor = null
        while (currentNode ){
            nextCursor = currentNode.next


            if(currentNode && nextCursor && !nextCursor.next){
                currentNode.next = null
                return
            }

            if(currentNode && !nextCursor){
                this.head = null
                return
            }

            currentNode = currentNode.next
        }
        //return cursor
    }
}

module.exports = { Node, LinkedList };
