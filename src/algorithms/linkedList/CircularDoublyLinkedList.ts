import { DoublyNode } from "../../utils/DoublyNode";
import { DoublyLinkedList } from "./DoublyLinkedList";
import defaultEquals from "../../utils/equals";

export class CircularDoublyLinkedList<T> extends DoublyLinkedList<T> {
  constructor(equals = defaultEquals) {
    super(equals);
  }

  insert(element: T, index: number): boolean {
    if (index >= 0 && index <= this.size()) {
      const node = new DoublyNode(element);
      let current = this.head;
      if (index === 0) {
        if (this.head == undefined) {
          this.head = node;
          this.tail = node;
        } else {
          node.next = this.head;
          current!.previous = node;
          this.tail = node;
          this.tail.next = this.head;
          this.head.previous = this.tail;
        }
      } else if (index === this.size()) {
        current = this.tail;
        current!.next = node;
        node.previous = current;
        this.tail = node;
        this.tail.next = this.head;
        this.head!.previous = this.tail;
      } else {
        const previous = this.getElementAt(index - 1);
        current = previous!.next;
        node.next = current;
        previous!.next = node;
        current!.previous = node;
        node.previous = previous;
      }
      this.count++;
      return true;
    }
    return false;
  }

  removeAt(index: number): T | undefined {
    if (index >= 0 && index < this.size()) {
      let current = this.head;
      if (index === 0) {
        this.head = current!.next;
        if (this.size() === 1) {
          this.tail = undefined;
        } else {
          this.head!.previous = undefined;
        }
      } else if (index === this.size() - 1) {
        current = this.tail;
        this.tail = current!.previous;
        this.tail!.next = undefined;
      } else {
        current = this.getElementAt(index);
        const previous = current!.previous;
        previous!.next = current?.next;
        current!.next!.previous = previous;
      }
      this.count--;
      return current!.element;
    }
  }
}
