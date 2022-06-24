class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor(value) {
    let node = new Node(value);
    this.first = node;
    this.last = node;
    this.length = 1;
  }
  enqueue(value) {
    let node = new Node(value);
    if (this.length == 0) {
      this.first = node;
    } else {
      this.last.next = node;
    }
    this.last = node;
    this.length++;
    return this;
  }
  dequeue() {
    //  removing the first item
    if (this.length == 0) return undefined;
    let temp = this.first;
    if (this.length == 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
      temp.next = null;
    }
    this.length--;
    return temp;
  }
}

let queue = new Queue(10);
queue.enqueue(15);
queue.enqueue(17);
queue.enqueue(25);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());

console.log(queue);
