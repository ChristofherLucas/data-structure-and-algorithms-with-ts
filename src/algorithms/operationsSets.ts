export function union<T>(firstSet: Set<T>, secondSet: Set<T>) {
  const unionSet = new Set();
  firstSet.forEach((value: T) => unionSet.add(value));
  secondSet.forEach((value: T) => unionSet.add(value));
  return unionSet;
}
