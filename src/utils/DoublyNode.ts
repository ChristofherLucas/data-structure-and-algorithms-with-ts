export class DoublyNode<T> {
  public element: T;
  public next: DoublyNode<T> | undefined;
  public previous: DoublyNode<T> | undefined;

  constructor(element: T) {
    this.element = element;
    this.next = undefined;
    this.previous = undefined;
  }
}
