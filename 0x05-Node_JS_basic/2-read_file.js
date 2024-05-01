const fs = require('fs');

module.exports = function countStudents(path) {
  try {
    const data = fs.readFileSync(path, { encoding: 'utf8', flag: 'r' });
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    const numberOfStudents = lines.length - 1;
    console.log(`Number of students: ${numberOfStudents}`);

    const studentsInCS = lines.filter((line) => line.includes('CS'));
    const numberOfStudentsInCS = studentsInCS.length;

    console.log(`Number of students in CS: ${numberOfStudentsInCS}. List: ${studentsInCS.map((arr) => arr.split(',')[0]).join(', ')}`);

    const studentsInSWE = lines.filter((line) => line.includes('SWE'));
    const numberOfStudentsInSWE = studentsInSWE.length;

    console.log(`Number of students in SWE: ${numberOfStudentsInSWE}. List: ${studentsInSWE.map((arr) => arr.split(',')[0]).join(', ')}`);
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};
