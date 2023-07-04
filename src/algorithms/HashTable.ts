import { ValuePair } from "../utils/ValuePair";

export class HashTable<T> {
  private table: { [key: string]: ValuePair<T> };

  constructor() {
    this.table = {};
  }

  private loseLoseHashCode(key: string) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % 37;
  }

  put(key: string, value: T) {
    if (key != null && value != null) {
      const position = this.loseLoseHashCode(key);
      this.table[position] = new ValuePair(key, value);
    }
    return false;
  }
}
