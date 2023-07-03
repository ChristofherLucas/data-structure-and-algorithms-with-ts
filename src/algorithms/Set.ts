export class Set<T> {
  private items: { [key: string]: string | number | boolean };

  constructor() {
    this.items = {};
  }
}
