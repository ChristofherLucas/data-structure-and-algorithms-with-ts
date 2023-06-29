import { LinkedList } from "./LinkedList";
import defaultEquals from "../../utils/equals";
import { Node } from "../../utils/Node";

export class CircularLinkedList<T> extends LinkedList<T> {
  constructor(equals = defaultEquals) {
    super(equals);
  }

  insert(element: T, index: number): boolean {
    if (index >= 0 && index <= this.size()) {
      const node = new Node(element);
      let current = this.head;
      if (index === 0) {
        if (this.head === undefined) {
          this.head = node;
          node.next = this.head;
        } else {
          node.next = current;
          current = this.getElementAt(this.size());
          this.head = node;
          current!.next = this.head;
        }
      } else {
        const previous = this.getElementAt(index - 1);
        node.next = previous!.next;
        previous!.next = node;
      }
      this.count++;
      return true;
    }
    return false;
  }

  removeAt(index: number): T | undefined {
    if (index >= 0 && index <= this.size()) {
      let current = this.head;
      if (index === 0) {
        if (this.size() === 1) {
          this.head = undefined;
        } else {
          const removed = this.head;
          current = this.getElementAt(this.size());
          this.head = this.head?.next;
          current = removed;
        }
      } else {
        const previous = this.getElementAt(index - 1);
        current = previous?.next;
        previous!.next = current?.next;
      }
      this.count--;
      return current?.element;
    }
    return undefined;
  }
}
