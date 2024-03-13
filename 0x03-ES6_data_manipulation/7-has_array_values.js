export default function hasValuesFromArray(set, arr) {
  for (const a of arr) {
    if (!set.has(a)) {
      return false;
    }
  }
  return true;
}
