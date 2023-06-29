import { DoublyNode } from "../utils/DoublyNode";
import defaultEquals from "../utils/equals";

export class DoublyLinkedList<T> {
  private count: number;
  private head: DoublyNode<T> | undefined;
  private tail: DoublyNode<T> | undefined;
  private equals;

  constructor(equals = defaultEquals) {
    this.count = 0;
    this.head = undefined;
    this.tail = undefined;
    this.equals = equals;
  }

  push(element: T) {
    const node = new DoublyNode(element);
    if (this.head == undefined) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next != undefined) {
        current = current.next;
      }
      current.next = node;
    }
    this.count++;
    return true;
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

  getElementAt(index: number): DoublyNode<T> | undefined {
    if (index >= 0 && index < this.size()) {
      let current = this.head;
      for (let i = 0; i < index && current != undefined; i++) {
        current = current!.next;
      }
      return current;
    }
    return undefined;
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
        }
      } else if (index === this.size()) {
        current = this.tail;
        current!.next = node;
        node.previous = current;
        this.tail = node;
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

  indexOf(element: T): number {
    let current = this.head;
    for (let i = 0; i < this.size() && current != undefined; i++) {
      if (this.equals(element, current.element)) {
        return i;
      }
      current = current.next;
    }
    return -1;
  }

  remove(element: T): T | undefined {
    const index = this.indexOf(element);
    return this.removeAt(index);
  }

  size(): number {
    return this.count;
  }

  isEmpty(): boolean {
    return this.size() === 0;
  }

  getHead(): DoublyNode<T> | undefined {
    return this.head;
  }

  toString(): string {
    if (this.head == null) {
      return "";
    }
    let linkedListString = `${this.head.element}`;
    let current = this.head.next;
    for (let i = 0; i < this.size() && current != undefined; i++) {
      linkedListString = `${linkedListString}, ${current.element}`;
      current = current.next;
    }
    return linkedListString;
  }
}
