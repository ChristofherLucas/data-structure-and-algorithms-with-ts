import { ValuePair } from "../utils/ValuePair";
import { LinkedList } from "./linkedList/LinkedList";

export class HashTableSeprateChaining<T> {
  private table: { [key: string]: LinkedList<T> };

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
    if (key != undefined && value != undefined) {
      const position = this.loseLoseHashCode(key);
      if (this.table[position] == undefined) {
        this.table[position] = new LinkedList();
      }
      this.table[position].push(new ValuePair(key, value) as T);
      return true;
    }
    return false;
  }
}
