import { DoublyNode } from "../utils/DoublyNode";
import { Node } from "../utils/Node";
import defaultEquals from "../utils/equalsFn";
import { LinkedList } from "./LinkedList";

export class DoublyLinkedList<T> extends LinkedList<T> {
  private tail: Node<T> | null;

  constructor(equalsFn = defaultEquals) {
    super(equalsFn);
    this.tail = null;
  }
}
