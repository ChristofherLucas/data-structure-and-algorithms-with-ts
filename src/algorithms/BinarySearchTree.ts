export class BinarySearchTree<T> {
  private root: Node<T> | undefined;

  constructor() {
    this.root = undefined;
  }

  insert(key: T) {
    if (this.root === undefined) {
      this.root = new Node(key);
    } else {
      this.insertNode(this.root, key);
    }
  }

  insertNode(node: Node<T>, key: T) {
    if (key < node.key) {
      if (node.left == undefined) {
        node.left = new Node(key);
      } else {
        this.insertNode(node.left, key);
      }
    } else {
      if (node.right === undefined) {
        node.right = new Node(key);
      } else {
        this.insertNode(node.right, key);
      }
    }
  }

  inOrderTraverse(callback: (value: T) => void) {
    this.inOrderTraverseNode(this.root, callback);
  }

  private inOrderTraverseNode(
    node: Node<T> | undefined,
    callback: (value: T) => void
  ) {
    if (node != undefined) {
      this.inOrderTraverseNode(node.left, callback);
      callback(node.key);
      this.inOrderTraverseNode(node.right, callback);
    }
  }
}

class Node<T> {
  public key: T;
  public left: Node<T> | undefined;
  public right: Node<T> | undefined;

  constructor(key: T) {
    this.key = key;
  }
}
