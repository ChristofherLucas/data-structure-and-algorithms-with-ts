export class HashTableSeprateChaining<T> {
  private table: { [key: string]: T };

  constructor() {
    this.table = {};
  }
}
