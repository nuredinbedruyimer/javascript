export function plunk(collections, fieldName) {
  return collections.map((collection) => collection[fieldName]);
}
