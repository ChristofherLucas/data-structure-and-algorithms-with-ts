export class Element<T> {
  public value: T;
  public nextValue: Element<T> | undefined;

  constructor(value: T) {
    this.value = value;
    this.nextValue = undefined;
  }
}
