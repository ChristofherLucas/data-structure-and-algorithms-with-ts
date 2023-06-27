export class Node<T> {
  public element: T;
  public next: Node<T> | null;

  constructor(element: T) {
    this.element = element;
    this.next = null;
  }
}
