export default function getListStudentIds(arr) {
  if (Array.isArray(arr)) {
    const newArr = arr.map((element) => element.id);
    return newArr;
  }
  return [];
}
