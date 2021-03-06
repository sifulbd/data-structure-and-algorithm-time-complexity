class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null
    }
}

class LinkedList {
    constructor(head) {
        this.head = head; 
    }
    add(value) {
        const newNode = new Node(value);
        //this.head.next = newNode;
        let current = this.head;
        while(current.next !=  null) {
            current = current.next;
        }
        current.next = newNode;
    }
}

const head = new Node(1500);
const mBondon = new LinkedList(head);

mBondon.add(27)
mBondon.add(56)
mBondon.add(65)

console.log(JSON.stringify(mBondon));