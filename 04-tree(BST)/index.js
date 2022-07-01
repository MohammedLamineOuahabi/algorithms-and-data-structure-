//  binary tree : every element have maximum 2 sub elements
//  full tree : every element either points to 2 or 0 nodes
//  perfect tree : every node other than the leaves has two children
//  node with no children called "Leaf node"

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BST {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let node = new Node(value);
    if (!this.root) this.root = node;
    return this;
  }
}
