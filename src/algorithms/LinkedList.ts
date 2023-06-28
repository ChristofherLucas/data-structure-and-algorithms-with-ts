import { Node } from "../utils/Node";
import defaultEquals from "../utils/equals";

export class LinkedList<T> {
  public count: number;
  public head: Node<T> | undefined;
  private equals;

  constructor(equals = defaultEquals) {
    this.count = 0;
    this.head = undefined;
    this.equals = equals;
  }

  push(element: T): void {
    const node = new Node(element);
    if (this.head === undefined) {
      this.head = node;
    } else {
      let current = this.head;
      while (current!.next != undefined) {
        current = current!.next;
      }
      current!.next = node;
    }
    this.count++;
  }

  removeAt(index: number): T | undefined {
    if (index >= 0 && index < this.size()) {
      let current = this.head;
      if (index === 0) {
        this.head = current!.next;
      } else {
        const previous = this.getElementAt(index - 1);
        current = previous!.next;
        previous!.next = current!.next;
      }
      this.count--;
      return current!.element;
    }
  }

  getElementAt(index: number): Node<T> | undefined {
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
    if (index >= 0 && index < this.count) {
      const node = new Node(element);
      if (index === 0) {
        const current = this.head;
        node.next = current;
        this.head = node;
      } else {
        const previous = this.getElementAt(index - 1);
        const current = previous!.next;
        node.next = current;
        previous!.next = node;
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

  getHead(): Node<T> | undefined {
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
