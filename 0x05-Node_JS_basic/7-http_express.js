const express = require('express');
const fs = require('fs');

const app = express();

const port = 1245;

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
      let result = '';
      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const numberOfStudents = lines.length - 1;
      result += `Number of students: ${numberOfStudents}\n`;

      const studentsInCS = lines.filter((line) => line.includes('CS'));
      const numberOfStudentsInCS = studentsInCS.length;

      result += `Number of students in CS: ${numberOfStudentsInCS}. List: ${studentsInCS.map((arr) => arr.split(',')[0]).join(', ')}\n`;

      const studentsInSWE = lines.filter((line) => line.includes('SWE'));
      const numberOfStudentsInSWE = studentsInSWE.length;

      result += `Number of students in SWE: ${numberOfStudentsInSWE}. List: ${studentsInSWE.map((arr) => arr.split(',')[0]).join(', ')}`;

      // Resolve the promise with the results of the function
      resolve(result);
    });
  });
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(process.argv[2].toString()).then((result) => {
    res.send(['This is the list of our students', result].join('\n'));
  }).catch(() => {
    res.send('This is the list of our students\nCannot load the database');
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${[port]}`);
});

module.exports = app;
