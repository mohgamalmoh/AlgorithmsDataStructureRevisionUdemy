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
        return this.getAt(this.size()-1)
        /*let firstNode = this.head;
        let cursor = null
        while (firstNode ){
            cursor = firstNode
            firstNode = firstNode.next
        }
        return cursor*/
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
        this.removeAt(this.size()-1)
        /*let currentNode = this.head;
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
        }*/
        //return cursor
    }

    insertLast(data){
        //this.insertAt(data,this.size()-1)

        let currentNode = this.head;

        if(!currentNode){
            this.head = new Node(data)
            return
        }

        while (currentNode ){
             let next = currentNode.next


            if(!next){
                currentNode.next = new Node(data)
                return
            }

            currentNode = next
        }

    }

    getAt(index){
        let firstNode = this.head;

        let currentStep = 0;
        while (firstNode && index > currentStep){
            currentStep++
            firstNode = firstNode.next ? firstNode.next : null
        }
        return firstNode
    }

    removeAt(index) {
        if (!this.head) {
            return;
        }

        if (index === 0) {
            this.head = this.head.next;
            return;
        }

        const previous = this.getAt(index - 1);
        if (!previous || !previous.next) {
            return;
        }
        previous.next = previous.next.next;
    }

    insertAt(data,index) {
        let node = new Node(data);
        if (index == 0) {
            node.next = this.head
            this.head = node
            return
        }


        const previous = this.getAt(index - 1);
        if (!previous ) {
            this.insertLast(data)
            return;
        }
        node.next =previous.next
        previous.next = node;

    }


    removeAty(index){
        let elementToBeRemoved = this.getAt(index)

        if(!elementToBeRemoved){
            return
        }

        if(index == 0){
            this.head = elementToBeRemoved.next
        }

        let prev = this.getAt(index - 1)
        prev.next =  elementToBeRemoved.next

    }

    removeAtx(index){
        let currentNode = this.head;
        let previousNode = null;
        let currentStep = 0;
        while (currentNode && index > currentStep){
            currentStep++
            previousNode = currentNode
            currentNode = currentNode.next ? currentNode.next : null
        }

        if(index > currentStep){
            return
        }

        if(previousNode && currentNode){
            previousNode.next = currentNode.next
        }

        if(index == 0){
            this.head = this.head ? this.head.next : null
        }
        //return currentNode
    }

}

module.exports = { Node, LinkedList };
