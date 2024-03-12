export default function getStudentIdsSum(arr) {
  const initVal = 0;
  const newArr = arr.reduce((accumulator, currentValue) => accumulator + currentValue.id, initVal);
  return newArr;
}
