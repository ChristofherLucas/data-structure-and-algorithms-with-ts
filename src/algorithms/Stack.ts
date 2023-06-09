export class Stack<T> {
  private items: Array<T>;

  constructor() {
    this.items = [];
  }

  stackUp(element: T) {
    this.items.push(element);
  }

  unstack(): T | undefined {
    return this.items.pop();
  }

  size(): number {
    return this.items.length;
  }

  peek(): T | undefined {
    if (this.isEmpty()) return undefined;
    return this.items[this.items.length];
  }

  isEmpty(): boolean {
    return this.size() === 0;
  }
}
