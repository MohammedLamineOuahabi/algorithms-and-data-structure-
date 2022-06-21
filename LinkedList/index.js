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
    if (!this.head) return undefined;

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
    //  Insert node at the beginning
    //  Create new node
    let newNode = new Node(value);
    //  check if LL is empty
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  shift() {
    //  Remove the first node and RETURNED it

    //  empty list case
    if (!this.head) return undefined;
    //  one element list case
    let temp = this.head;
    this.head = this.head.next;
    if (this.length == 1) this.tail = null;
    this.length--;
    return temp;
  }
  get(index) {
    //  get element in a specific index
    if (index < 0 || index > this.length - 1) return undefined;
    let i = 0;
    let temp = this.head;
    while (i < index) {
      temp = temp.next;
      i++;
    }
    return temp;
  }
}
// new keyword call the constructor function in the class
let myLinkedList = new LinkedList(200);
myLinkedList.push(100);
myLinkedList.pop();
myLinkedList.unshift(300);
myLinkedList.shift();
console.log(myLinkedList.get(2));
console.log(myLinkedList.get(0));

console.log(myLinkedList);
