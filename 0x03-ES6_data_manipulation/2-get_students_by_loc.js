export default function getStudentsByLocation(studentsList, city) {
  const studentsByLocation = studentsList.filter((item) => item.location === city);
  return studentsByLocation;
}
