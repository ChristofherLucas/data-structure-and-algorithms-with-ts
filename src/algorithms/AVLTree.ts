import { BinarySearchTree } from "./BinarySearchTree";

export class AVLTree<T> extends BinarySearchTree<T> {
  constructor() {
    super();
    this.root = undefined;
  }
}
