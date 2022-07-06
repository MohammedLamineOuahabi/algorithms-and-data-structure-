//  binary tree : every element have maximum 2 sub elements
//  full tree : every element either points to 2 or 0 nodes
//  perfect tree : every node other than the leaves has two children
//  node with no children called "Leaf node"

//  Binary Search Trees always have a better Big O than Linked Lists?
//  NO
//  An insert into a Binary Search Tree is typically (log n).
//  Pushing an item onto the end of a Linked List is O(1).

//  lookup,insert,remove O(log n)
//  insert is butter in linked list

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
    if (!this.root) {
      this.root = node;
      return this;
    }
    let temp = this.root;
    while (true) {
      if (temp.value == node.value) return undefined;
      if (node.value > temp.value) {
        if (temp.right == null) {
          temp.right = node;
          return this;
        } else {
          temp = temp.right;
        }
      } else {
        if (temp.left == null) {
          temp.left = node;
          return this;
        } else {
          temp = temp.left;
        }
      }
    }
  }
  contains(value) {
    if (this.root == null) return false;
    let temp = this.root;
    while (temp) {
      if (value == temp.value) return true;
      if (value > temp.value) {
        temp = temp.right;
      } else {
        temp = temp.left;
      }
    }
    return false;
  }
  minValueNode(currentNode) {
    while (currentNode.left != null) currentNode = currentNode.left;
    return currentNode;
  }
}

let bst = new BST();
bst.insert(6);
bst.insert(9);
bst.insert(3);
bst.insert(4);
bst.insert(2);
console.log(bst.contains(31));
console.log(bst.minValueNode(bst.root));
