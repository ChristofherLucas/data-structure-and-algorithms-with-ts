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

  insert(element: T, index: number): boolean {
    if (index >= 0 && index <= this.size()) {
      const doublyNode = new DoublyNode(element);
      let current = this.head;
      if (index === 0) {
        if (this.head === null) {
          this.head = doublyNode;
          this.tail = doublyNode;
        } else {
          doublyNode.next = this.head;
          current!.next = doublyNode;
          this.head = doublyNode;
        }
      } else if (index === this.count) {
        current = this.tail;
        current!.next = doublyNode;
        doublyNode.previous = current;
        this.tail = doublyNode;
      } else {
        const previous = this.getElementAt(index - 1);
        current = previous!.next;
        doublyNode.next = current;
        previous!.next = doublyNode;
        current!.previous = doublyNode;
        doublyNode.previous = previous;
      }
      this.count++;
      return true;
    }
    return false;
  }
}
