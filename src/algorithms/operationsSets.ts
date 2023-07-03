export function union<T>(firstSet: Set<T>, secondSet: Set<T>) {
  const unionSet = new Set();
  firstSet.forEach((value: T) => unionSet.add(value));
  secondSet.forEach((value: T) => unionSet.add(value));
  return unionSet;
}

export function intersection<T>(firstSet: Set<T>, secondSet: Set<T>) {
  const intersection = new Set();
  firstSet.forEach((value) => {
    if (!secondSet.has(value)) {
      intersection.add(value);
    }
  });
  return intersection;
}

export function diference<T>(firstSet: Set<T>, secondSet: Set<T>) {
  const diference = new Set();
  firstSet.forEach((value) => {
    if (!secondSet.has(value)) {
      diference.add(value);
    }
  });
  return diference;
}
