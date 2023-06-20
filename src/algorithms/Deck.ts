export class Deck<T> {
  private items: T[];
  constructor() {
    this.items = [];
  }

  addFront(element: T) {
    if (this.isEmpty()) {
      this.addBack(element);
    } else if (this.items.length > 0) {
      this.items.splice(this.items.length, 0, element);
    }
    for (let i = this.items.length; i > 0; i--) {
      this.items.splice(i, 0, this.items[i - 1]);
    }
    this.items.splice(0, 0, element);
  }

  addBack(element: T): void {
    this.items.push(element);
  }

  removeFront(): T | undefined {
    return this.items.shift();
  }

  removeBack(): T | undefined {
    return this.items.pop();
  }

  peekFront(): T | undefined {
    return this.items[0];
  }

  peekBack(): T | undefined {
    return this.items[this.items.length - 1];
  }

  size(): number {
    return this.items.length;
  }

  isEmpty(): boolean {
    return this.size() === 0;
  }

  clear(): void {
    this.items = [];
  }

  toString(): string {
    return this.items.toString();
  }
}
