import { LinkedList } from "./LinkedList";
import defaultEquals from "../../utils/equals";
import defaulCompare from "../../utils/compare";

export class SortedLinkedList<T> extends LinkedList<T> {
  private compare;

  constructor(equals = defaultEquals, compare = defaulCompare) {
    super(equals);
    this.compare = compare;
  }

  insert(element: T, index: number = 0): boolean {
    if (this.isEmpty()) {
      return super.insert(element, 0);
    }
    const pos = this.getIndexNextSortedElement(element);
    return super.insert(element, pos);
  }

  getIndexNextSortedElement(element: T) {
    let current = this.head;
    let i = 0;
    for (; i < this.size() && current; i++) {
      const compared = this.compare(element, current.element);
      if (compared === -1) {
        return i;
      }
      current = current.next;
    }
    return i;
  }
}
