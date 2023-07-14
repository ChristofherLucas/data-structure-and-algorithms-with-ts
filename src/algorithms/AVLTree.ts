import { BinarySearchTree } from "./BinarySearchTree";

enum BalanceFactor {
  UNBALANCE_RIGHT = 1,
  SLIGHTLY_UNBALANCE_RIGHT = 2,
  BALANCED = 3,
  SLIGHTLY_UNBALANCE_LEFT = 4,
  UNBALANCE_LEFT = 5,
}

export class AVLTree<T> extends BinarySearchTree<T> {
  constructor() {
    super();
    this.root = undefined;
  }

  getNodeHeight(node: Node<T> | undefined): number {
    if (node == undefined) {
      return -1;
    }

    return (
      Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right)) +
      1
    );
  }

  getBalanceFactor(node: Node<T> | undefined) {
    const heightDifference =
      this.getNodeHeight(node?.left) - this.getNodeHeight(node?.right);
    switch (heightDifference) {
      case -2:
        return BalanceFactor.UNBALANCE_RIGHT;
      case -1:
        return BalanceFactor.SLIGHTLY_UNBALANCE_RIGHT;
      case 1:
        return BalanceFactor.SLIGHTLY_UNBALANCE_LEFT;
      case 2:
        return BalanceFactor.UNBALANCE_LEFT;
      default:
        return BalanceFactor.BALANCED;
    }
  }
}

class Node<T> {
  public key: T;
  public left: Node<T> | undefined;
  public right: Node<T> | undefined;

  constructor(key: T) {
    this.key = key;
    this.left = undefined;
    this.right = undefined;
  }
}
