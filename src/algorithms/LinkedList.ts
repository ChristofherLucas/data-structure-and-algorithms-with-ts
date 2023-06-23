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
        let previous;
        for (let i = 0; i < index; i++) {
          previous = current;
          current = current!.next;
        }
        previous!.next = current!.next;
      }
      this.count--;
      return current!.element;
    }
    return undefined;
  }
}
