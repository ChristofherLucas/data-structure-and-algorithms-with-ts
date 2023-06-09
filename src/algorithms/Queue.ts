export class Queue<T> {
  private items: Array<T>;
  private lowestCount: number;

  constructor() {
    this.items = [];
    this.lowestCount = 0;
  }

  enqueue(element: T) {
    this.items.push(element);
  }

  dequeue(): T | undefined {
    if (this.isEmpty()) return undefined;
    const firstItem = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return firstItem;
  }

  peek(): T | undefined {
    if (this.isEmpty()) return undefined;
    return this.items[this.lowestCount];
  }

  size(): number {
    return this.items.length - this.lowestCount;
  }

  isEmpty(): boolean {
    return this.size() === 0;
  }

  clear(): void {
    this.items = [];
    this.lowestCount = 0;
  }

  toString(): string {
    return this.items.toString();
  }
}
