const fs = require('fs');

module.exports = function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const numberOfStudents = lines.length - 1;
      console.log(`Number of students: ${numberOfStudents}`);

      const studentsInCS = lines.filter((line) => line.includes('CS'));
      const numberOfStudentsInCS = studentsInCS.length;

      console.log(`Number of students in CS: ${numberOfStudentsInCS}. List: ${studentsInCS.map((arr) => arr.split(',')[0]).join(', ')}`);

      const studentsInSWE = lines.filter((line) => line.includes('SWE'));
      const numberOfStudentsInSWE = studentsInSWE.length;

      console.log(`Number of students in SWE: ${numberOfStudentsInSWE}. List: ${studentsInSWE.map((arr) => arr.split(',')[0]).join(', ')}`);

      // Resolve the promise with the results of the function
      resolve({
        numberOfStudents,
        numberOfStudentsInCS,
        studentsInCS: studentsInCS.map((arr) => arr.split(',')[0]).join(', '),
        numberOfStudentsInSWE,
        studentsInSWE: studentsInSWE.map((arr) => arr.split(',')[0]).join(', '),
      });
    });
  });
};
