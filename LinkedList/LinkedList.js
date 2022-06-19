class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
// let node=new Node(5);

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

console.log(myLinkedList);
