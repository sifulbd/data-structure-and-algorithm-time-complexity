class Dictionary {
    constructor() {
        this.dictionary = {}
    }
    add(key, value) {
        this.dictionary[key] = value
    }
    get(key) {
        return this.dictionary[key]
    }
}

const phoneBook = new Dictionary();
phoneBook.add('Mahi', '01111111111')
phoneBook.add('NoMahi', '011123423411111')
phoneBook.add('Ovi', '01134241111')
phoneBook.add('Spor', '011111453451')

console.log(phoneBook.dictionary)
console.log(phoneBook.get('Mahi'))