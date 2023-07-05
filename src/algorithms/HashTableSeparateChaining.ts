import { ValuePair } from "../utils/ValuePair";
import { LinkedList } from "./linkedList/LinkedList";

export class HashTableSeprateChaining<T> {
  public table: { [key: string]: LinkedList<T> };

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

  get(key: string) {
    const positon = this.loseLoseHashCode(key);
    const linkedList = this.table[positon];
    if (linkedList != undefined && !linkedList.isEmpty()) {
      let current = linkedList.getHead() as {
        next: any;
        element: {
          key: string;
          value: T;
        };
      };
      while (current != undefined) {
        if (current.element.key === key) {
          return current.element.value;
        }
        current = current.next;
      }
    }
    return undefined;
  }

  remove(key: string) {
    const position = this.loseLoseHashCode(key);
    const linkedList = this.table[position];
    if (linkedList != undefined && !linkedList.isEmpty()) {
      let current = linkedList.getHead() as {
        next: any;
        element: {
          key: string;
          value: T;
        };
      };
      while (current != undefined) {
        if (current.element.key === key) {
          linkedList.remove(current.element as T);
          if (linkedList.isEmpty()) {
            delete this.table[position];
          }
          return true;
        }
        current = current.next;
      }
    }
    return false;
  }
}
