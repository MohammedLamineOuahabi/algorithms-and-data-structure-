class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}
class DoublyLinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }
  push(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
    }
    this.tail = newNode;
    this.length++;
    return this;
  }
  pop() {
    if (this.length == 0) return undefined;
    if (this.length == 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return this;
    }
    let temp = this.tail;
    this.tail = this.tail.prev;
    this.tail.next = null;
    temp.prev = null;
    this.length--;
    return this;
  }
  unshift(value) {
    let newNode = new Node(value);
    if (this.length == 0) {
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
    }
    this.head = newNode;
    this.length++;
    return this;
  }
  shift() {
    if (this.length == 0) return undefined;
    if (this.length == 1) {
      this.head = null;
      this.tail = null;
    } else {
      let temp = this.head;
      this.head = this.head.next;
      temp.next = null;
      this.head.prev = null;
    }
    this.length--;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let temp;
    //  more efficient manner than LL
    if (index < this.length / 2) {
      temp = this.head;
      for (let i = 0; i < index; i++) temp = temp.next;
    } else {
      temp = this.tail;
      for (let i = this.length - 1; i > index; i--) temp = temp.prev;
    }
    return temp;
  }
  set(index, value) {
    let temp = this.get(index);
    if (temp) {
      temp.value = value;
      return true;
    }
    return false;
  }
  insert(index, value) {
    if (index < 0 || index > this.length) return undefined;
    if (index == 0) return this.unshift(value);
    if (index == this.length) return this.push(value);
    let newNode = new Node(value);
    let temp = null;
    if (index > this.length / 2) {
      temp = this.tail;
      for (let i = this.length - 1; i > index; i--) temp = temp.prev;
    } else {
      temp = this.head;
      for (let i = 0; i < index; i++) temp = temp.next;
    }
    temp.prev.next = newNode;
    newNode.prev = temp.prev;
    newNode.next = temp;
    temp.prev = newNode;
    this.length++;
    return this;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index == 0) return this.shift();
    if (index == this.length - 1) return this.pop();
    let temp = this.get(index);

    temp.prev.next = temp.next;
    temp.next.prev = temp.prev;
    temp.rev = null;
    temp.next = null;
    this.length--;
    return this;
  }
}

let dll = new DoublyLinkedList(100);
dll.push(300);
dll.push(400);
//dll.set(1, 600);
//dll.insert(0, 0);
//dll.insert(-1, -1);
//dll.insert(1, 2);
dll.remove(1);
console.log(dll);
