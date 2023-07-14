export class BinarySearchTree<T> {
  protected root: Node<T> | undefined;

  constructor() {
    this.root = undefined;
  }

  insert(key: T) {
    if (this.root == undefined) {
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
      if (node.right == undefined) {
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
    return this.minNode(this.root);
  }

  private minNode(node: Node<T> | undefined) {
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

  search(key: T) {
    return this.searchNode(this.root, key);
  }

  private searchNode(node: Node<T> | undefined, key: T): boolean {
    if (node == undefined) {
      return false;
    }
    if (key < node.key) {
      return this.searchNode(node.left, key);
    } else if (key > node.key) {
      return this.searchNode(node.right, key);
    }
    return true;
  }

  remove(key: T) {
    return this.removeNode(this.root, key);
  }

  private removeNode(node: Node<T> | undefined, key: T): Node<T> | undefined {
    if (key == undefined) {
      return undefined;
    }
    if (key < node!.key) {
      node!.left = this.removeNode(node?.left, key);
      return node;
    } else if (key > node!.key) {
      node!.right = this.removeNode(node?.right, key);
    } else {
      if (node?.left == undefined && node?.right == undefined) {
        node = undefined;
        return node;
      }
      if (node.left == undefined) {
        node = node.right;
        return node;
      } else if (node.right == undefined) {
        node = node.left;
        return node;
      }
      const aux = this.minNode(node.right);
      node.key = aux!.key;
      node.right = this.removeNode(node.right, aux!.key);
      return node;
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
