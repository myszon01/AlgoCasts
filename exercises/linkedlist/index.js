// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {

    constructor(data, node = null) {
        this.data = data
        this.next = node
    }
}

class LinkedList {

    constructor() {
        this.head = null
    }

    insertFirst(data) {
        this.head = new Node(data, this.head)
    }


    size() {
        let counter = 0;
        let node = this.head;

        while (node) {
            counter++;
            node = node.next;
        }
        return counter;
    }

    getFirst() {
        return this.head
    }

    getLast() {
        if (!this.head) {
            return null;
        }

        let node = this.head;
        while (node) {
            if (!node.next) {
                return node;
            }
            node = node.next;
        }
    }

    clear() {
        this.head = null
    }

    removeFirst() {
        this.head = this.head.next
    }

    removeLast() {
        if (!this.head) {
            return
        }

        if (!this.head.next) {
            this.head = null;
            return
        }

        let prev = this.head;
        let node = this.head.next;
        while (node.next) {
            prev = node
            node = node.next;
        }
        prev.next = null

    }

    insertLast(data) {
        if (!this.head) {
            this.head = new Node(data)
            return
        }

        if (!this.head.next) {
            this.head.next = new Node(data);
            return
        }

        let node = this.head.next;
        while (node.next) {
            node = node.next;
        }
        node.next = new Node(data)
    }

    getAt(n) {

        if (n === 0) {
            return this.head
        }

        if (n === 1) {
            return this.head.next
        }

        let counter = 0;
        let node = this.head;

        while (node) {
            if (counter === n) {

                return node
            }
            counter++;
            node = node.next;
        }
        return null;
    }

    removeAt(n) {

        if (!this.head) {
            return
        }

        if (n === 0) {
            this.head = this.head.next
            return
        }

        // if (this.size() - 1 < n) {
        //     return
        // }

        let counter = 1;
        let prev = this.head
        let node = this.head.next
        while (node) {
            if (counter === n) {
                prev.next = node.next
                return
            }
            prev = node
            node = node.next
            counter++
        }
        return null;
    }

    insertAt(data, n) {

    }
}

module.exports = { Node, LinkedList };
