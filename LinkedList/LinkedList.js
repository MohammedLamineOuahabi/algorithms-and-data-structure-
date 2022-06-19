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
  pop() {
    //  if no node exists
    if (!this.head) return this;

    //  if one node exists
    if (this.head == this.tail) {
      this.head = null;
      this.tail = null;
      this.length--;
      return this;
    }
    //  if more then one node
    let node = this.head;
    while (node.next != this.tail) {
      node = node.next;
    }
    this.tail = node;
    this.tail.next = null;
    this.length--;
    return this;
  }
  unshift(value) {
    //  Create new node
    let newNode = new Node(value);
  }
  insert(index, value) {
    //  Create new node
  }
}
// new keyword call the constructor function in the class
let myLinkedList = new LinkedList(55);
myLinkedList.push(100);
myLinkedList.pop();

console.log(JSON.stringify(myLinkedList));
