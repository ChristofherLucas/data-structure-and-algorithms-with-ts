export class BinarySearchTree<T> {
  private root: Node<T> | undefined;
  constructor() {
    this.root = undefined;
  }
}

class Node<T> {
  public key: number;
  public left: Node<T> | undefined;
  public right: Node<T> | undefined;

  constructor(key: number) {
    this.key = key;
  }
}
