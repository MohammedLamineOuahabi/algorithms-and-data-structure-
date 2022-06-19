class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    //  Create new node
    let newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }
  push(value) {
    //  Create new node
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    this.length++;
    //  return instance of obj
    return this;
  }
  unshift(value) {
    //  Create new node
  }
  insert(index, value) {
    //  Create new node
  }
}
// new keyword call the constructor function in the class
let myLinkedList = new LinkedList(55);
myLinkedList.push(56);
myLinkedList.push(35);
console.log(JSON.stringify(myLinkedList));
