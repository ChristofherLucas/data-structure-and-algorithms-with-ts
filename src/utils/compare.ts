export default function compare<T>(conparing: T, reference: T) {
  if (conparing === reference) {
    return 0;
  }
  return conparing < reference ? -1 : 1;
}
