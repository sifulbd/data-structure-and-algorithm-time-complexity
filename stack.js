// const friends = [];
// friends.push(34);
// friends.push(4);
// friends.push(3);
// console.infolog(friends);

class Stack {
    constructor () {
        this.stack = [];
    }
    add(item) {
        this.stack.push(item);
    }
    remove() {
        if(this.stack.length) {
            return this.stack.pop();
        }
    }
} 
const guest = new Stack();
guest.add('Rohim');
guest.add('kohim');
guest.add('Zohim');

console.log(guest.stack);
const speaker = guest.remove();

console.log(speaker);
console.log(guest.stack);
