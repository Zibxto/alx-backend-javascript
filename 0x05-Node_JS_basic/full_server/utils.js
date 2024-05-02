const fs = require('fs');
const path = require('path');

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');

      const studentsInCS = lines.filter((line) => line.includes('CS')).map((line) => line.split(',')[0]);

      const numberOfStudentsInCS = studentsInCS.length;

      const studentsInSWE = lines.filter((line) => line.includes('SWE')).map((line) => line.split(',')[0]);

      const numberOfStudentsInSWE = studentsInSWE.length;

      // Resolve the promise with the results of the function
      resolve({
        numberOfStudentsInCS,
        studentsInCS,
        numberOfStudentsInSWE,
        studentsInSWE,
      });
    });
  });
}

module.exports = readDatabase;
