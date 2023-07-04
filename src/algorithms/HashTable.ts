export class HashTable<T> {
  private items: { [key: string]: T };

  constructor() {
    this.items = {};
  }
}
