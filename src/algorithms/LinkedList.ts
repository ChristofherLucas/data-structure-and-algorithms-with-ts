import { Element } from "../utils/Element";
import defaultEquals from "../utils/equals";

export class LinkedList<T> {
  public count: number;
  public head: Element<T> | undefined;
  private equals;

  constructor(equals = defaultEquals) {
    this.count = 0;
    this.head = undefined;
    this.equals = equals;
  }

  push(value: T): void {
    const element = new Element(value);
    let current;
    if (this.head === undefined) {
      this.head = element;
    } else {
      current = this.head;
      while (current!.nextValue != undefined) {
        current = current!.nextValue;
      }
      current!.nextValue = element;
    }
    this.count++;
  }

  removeAt(index: number): T | undefined {
    if (index >= 0 && index < this.size()) {
      let current = this.head;
      if (index === 0) {
        this.head = current!.nextValue;
      } else {
        const previous = this.getElementAt(index - 1);
        current = previous!.nextValue;
        previous!.nextValue = current!.nextValue;
      }
      this.count--;
      return current!.value;
    }
  }

  getElementAt(index: number): Element<T> | undefined {
    if (index >= 0 && index < this.size()) {
      let current = this.head;
      for (let i = 0; i < index && current != undefined; i++) {
        current = current!.nextValue;
      }
      return current;
    }
    return undefined;
  }

  insert(value: T, index: number): boolean {
    if (index >= 0 && index < this.count) {
      const element = new Element(value);
      if (index === 0) {
        const current = this.head;
        element.nextValue = current;
        this.head = element;
      } else {
        const previous = this.getElementAt(index - 1);
        const current = previous!.nextValue;
        element.nextValue = current;
        previous!.nextValue = element;
      }
      this.count++;
      return true;
    }
    return false;
  }

  indexOf(element: T): number {
    let current = this.head;
    for (let i = 0; i < this.size() && current != undefined; i++) {
      if (this.equals(element, current.value)) {
        return i;
      }
      current = current.nextValue;
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

  getHead(): Element<T> | undefined {
    return this.head;
  }

  toString(): string {
    if (this.head == null) {
      return "";
    }
    let linkedListString = `${this.head.value}`;
    let current = this.head.nextValue;
    for (let i = 0; i < this.size() && current != undefined; i++) {
      linkedListString = `${linkedListString}, ${current.value}`;
      current = current.nextValue;
    }
    return linkedListString;
  }
}
