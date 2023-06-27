import { Node } from "./Node";

export class DoublyNode<T> extends Node<T> {
  public previous?: Node<T> | null;

  constructor(element: T, next?: Node<T> | null, previous?: Node<T> | null) {
    super(element);
    this.previous = previous;
  }
}
