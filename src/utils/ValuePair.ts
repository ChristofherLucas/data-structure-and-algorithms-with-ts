export class ValuePair<T> {
  public key: string;
  public value: T;

  constructor(key: string, value: T) {
    this.key = key;
    this.value = value;
  }
}
