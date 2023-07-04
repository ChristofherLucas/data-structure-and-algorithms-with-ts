import { ValuePair } from "../utils/ValuePair";

export class HashTable<T> {
  public table: { [key: string]: ValuePair<T> };

  constructor() {
    this.table = {};
  }

  loseLoseHashCode(key: string) {
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

  get(key: string) {
    const valuePair = this.table[this.loseLoseHashCode(key)];
    return valuePair == null ? undefined : valuePair.value;
  }

  remove(key: string) {
    const hash = this.loseLoseHashCode(key);
    const valuePair = this.table[hash];
    if (valuePair != null) {
      delete this.table[hash];
      return true;
    }
    return false;
  }
}
