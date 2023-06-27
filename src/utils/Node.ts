export class Node<T> {
  [x: string]: any;
  public element: T;
  public next: Node<T> | null;

  constructor(element: T) {
    this.element = element;
    this.next = null;
  }
}
