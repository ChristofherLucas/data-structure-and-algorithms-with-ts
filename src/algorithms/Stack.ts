export class Stack<T> {
  private items: Array<T> = [];

  // adds a new item to the top of the stack
  stackUp(element: T) {
    this.items.push(element);
  }

  // removes the item from the top of the stack
  unstack(): T | undefined {
    return this.items.pop();
  }

  // returns the stack size
  size(): number {
    return this.items.length;
  }

  // returns the item at the top of the stack
  peek(): T {
    return this.items[this.items.length - 1];
  }

  // check if the stack is empty
  isEmpty(): boolean {
    return this.size() == 0;
  }
}
