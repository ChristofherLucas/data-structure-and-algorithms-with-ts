import defaulCompare from "../utils/compare";

//less_than -1
//bigger_than 1

export class BinarySearchTree<T> {
  private root: Node<T> | undefined;
  private compareFn;

  constructor(compareFn = defaulCompare) {
    this.root = undefined;
    this.compareFn = compareFn;
  }

  insert(key: T) {
    if (this.root === undefined) {
      this.root = new Node(key);
    } else {
      this.insertNode(this.root, key);
    }
  }

  insertNode(node: Node<T>, key: T) {
    if (this.compareFn(key, node.key) === -1) {
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
}

class Node<T> {
  public key: T;
  public left: Node<T> | undefined;
  public right: Node<T> | undefined;

  constructor(key: T) {
    this.key = key;
  }
}
