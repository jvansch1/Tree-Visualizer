class Node {
  constructor(value, left_child = null, right_child = null) {
    this.value = value;
    this.left_child = left_child;
    this.right_child = right_child;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  addNode(root, value) {
    let newNode = new Node(value)

    if (this.root === null) {
      this.root = newNode;
      return null;
    }

    if (root.value < value) {
      if (root.left_child === null) {
        root.left_child = newNode
      } else {
        this.addNode(root.left_child, value)
      }
    } else {
      if (root.right_child === null) {
        root.right_child = newNode
      } else {
        this.addNode(root.right_child, value)
      }
    }
    return this;
  }
}
