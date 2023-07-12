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

  private insertNode(node: Node<T>, key: T) {
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

  preOrderTraverse(callback: (value: T) => void) {
    this.preOrderTraverseNode(this.root, callback);
  }

  private preOrderTraverseNode(
    node: Node<T> | undefined,
    callback: (value: T) => void
  ) {
    if (node != undefined) {
      callback(node.key);
      this.preOrderTraverseNode(node.left, callback);
      this.preOrderTraverseNode(node.right, callback);
    }
  }

  posOrderTraverse(callback: (value: T) => void) {
    this.posOrderTraverseNode(this.root, callback);
  }

  private posOrderTraverseNode(
    node: Node<T> | undefined,
    callback: (value: T) => void
  ) {
    if (node != undefined) {
      this.posOrderTraverseNode(node.left, callback);
      this.posOrderTraverseNode(node.right, callback);
      callback(node.key);
    }
  }

  min() {
    let current = this.root;
    while (current != undefined && current.left != undefined) {
      current = current.left;
    }
    return current;
  }

  max() {
    let current = this.root;
    while (current != undefined && current.right != undefined)
      [(current = current.right)];
    return current;
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
