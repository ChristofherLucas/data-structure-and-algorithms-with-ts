export class Deck<T> {
  private items: T[];
  private lowestCount: number;
  constructor() {
    this.items = [];
    this.lowestCount = 0;
  }

  addFront(element: T) {
    if (this.isEmpty()) {
      this.addBack(element);
    } else if (this.lowestCount > 0) {
      this.lowestCount--;
      this.items[this.lowestCount] = element;
    } else {
      for (let i = this.items.length; i > 0; i--) {
        this.items[i] = this.items[i - 1];
      }
      this.items[0] = element;
    }
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
