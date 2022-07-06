class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
//  LIFO
class Stack {
  constructor(value) {
    let newNode = new Node(value);
    this.top = newNode;
    this.height = 1;
  }
  push(value) {
    let node = new Node(value);
    if (this.hight == 0) {
      this.top = node;
    } else {
      node.next = this.top;
      this.top = node;
    }
    this.height++;
    return this;
  }
  pop() {
    if (this.height == 0) return undefined;
    let temp = this.top;
    this.top = temp.next;
    temp.next = null;
    this.height--;
    return temp;
  }
}
let stack = new Stack(1);
stack.push(2);
stack.push(3);
stack.push(4);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack);
