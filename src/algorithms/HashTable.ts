export class HashTable<T> {
  private items: { [key: string]: T };

  constructor() {
    this.items = {};
  }

  loseLoseHashCode(key: string) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % 37;
  }
}
