export class Queue<T> {
  private items: T[];

  constructor() {
    this.items = [];
  }

  enqueue(element: T) {
    this.items.push(element);
  }

  dequeue(): T | undefined {
    if (this.isEmpty()) return undefined;
    return this.items.shift();
  }

  peek(): T | undefined {
    if (this.isEmpty()) return undefined;
    return this.items[0];
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
