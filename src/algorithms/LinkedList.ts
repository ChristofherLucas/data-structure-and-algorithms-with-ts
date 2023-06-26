function equalsFn<T>(a: T, b: T): boolean {
  return a === b;
}

class Node<T> {
  public element: T;
  public next: Node<T> | null;

  constructor(element: T) {
    this.element = element;
    this.next = null;
  }
}

export class LinkedList<T> {
  private count: number;
  private head: Node<T> | null;
  private equalsFn;

  constructor() {
    this.count = 0;
    this.head = null;
    this.equalsFn = equalsFn;
  }

  push(element: T): void {
    const node = new Node(element);
    let current;
    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next != null) {
        current = current.next;
      }
      current.next = node;
    }
    this.count++;
  }

  removeAt(index: number) {
    if (index >= 0 && index < this.count) {
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
    return undefined;
  }

  getElementAt(index: number) {
    if (index >= 0 && index < this.count) {
      let current = this.head;
      for (let i = 0; i < index && current != null; i++) {
        current = current!.next;
      }
      return current;
    }
    return undefined;
  }

  insert(element: T, index: number) {
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

  indexOf(element: T) {
    let current = this.head;
    for (let i = 0; i < this.count && current != null; i++) {
      if (this.equalsFn(element, current.element)) {
        return i;
      }
      current = current.next;
    }
    return -1;
  }

  remove(element: T) {
    const index = this.indexOf(element);
    return this.removeAt(index);
  }

  size() {
    return this.count;
  }

  isEmpty() {
    return this.size() === 0;
  }

  getHead() {
    return this.head;
  }
}
