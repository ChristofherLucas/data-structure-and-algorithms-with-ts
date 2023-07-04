export class ValuePair<T> {
  private key: string;
  public value: T;

  constructor(key: string, value: T) {
    this.key = key;
    this.value = value;
  }
}
