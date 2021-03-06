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
  //  add new node in the tail
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

  //  remove node from the tail
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
  //  Insert node at the beginning
  unshift(value) {
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
  //  Remove the first node and RETURNED it
  shift() {
    //  empty list case
    if (!this.head) return undefined;
    //  one element list case
    let temp = this.head;
    this.head = this.head.next;
    if (this.length == 1) this.tail = null;
    this.length--;
    return temp;
  }
  //  get element in a specific index
  get(index) {
    if (index < 0 || index > this.length - 1) return undefined;
    let i = 0;
    let temp = this.head;
    while (i < index) {
      temp = temp.next;
      i++;
    }
    return temp;
  }
  //  change the value of an element
  set(index, value) {
    let temp = this.get(index);
    if (temp) {
      temp.value = value;
      return true;
    }
    return -1;
  }
  //  insert a new element in a specific index
  insert(index, value) {
    if (index == 0) return this.unshift(value);
    if (index == this.length) return this.push(value);
    if (index < 0 || index > this.length - 1) return undefined;
    let temp = this.get(index - 1);
    if (!temp) {
      console.log(`${index - 1} element not found!`);
      return -1;
    }
    let newNode = new Node(value);
    newNode.next = temp.next;
    temp.next = newNode;
    this.length++;
    return this;
  }
  remove(index) {
    if (index < 0 || index > this.length - 1) return undefined;
    if (index == 0) return this.shift();
    if (index == this.length - 1) return this.pop();
    let temp = this.get(index);
    if (!temp) return -1;
    let beforeTemp = this.get(index - 1);
    beforeTemp.next = temp.next;
    temp.next = null;
    this.length--;
  }
  reverse() {
    //  flip head & tail
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;

    let prev = null;
    let next = null;
    for (let i = 0; i < this.length; i++) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }
    return this;
  }
}
// new keyword call the constructor function in the class
let myLinkedList = new LinkedList(20);
myLinkedList.push(100);
myLinkedList.push(200);
myLinkedList.push(300);
// myLinkedList.pop();
// myLinkedList.unshift(300);
// myLinkedList.shift();
// console.log(myLinkedList);
// console.log(myLinkedList.set(0, 99));
//myLinkedList.insert(3, 4);
//myLinkedList.remove(3);
myLinkedList.reverse();
console.log(JSON.stringify(myLinkedList, null, 4));
