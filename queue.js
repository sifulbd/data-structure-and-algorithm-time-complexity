class Queue {
    constructor() {
        this.queue = [];
    }
    enqueue(item) {
        this.queue.push(item);
    }
    dequeue() {
        return this.queue.shift();
    }
}

const loves = new Queue();

loves.enqueue('jorina')
loves.enqueue('korina')
loves.enqueue('morina')
loves.enqueue('norina')

console.log(loves.queue);

const noLoves = loves.dequeue();

console.log(noLoves);