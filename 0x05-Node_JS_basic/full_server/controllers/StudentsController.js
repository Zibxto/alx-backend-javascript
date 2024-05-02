const path = require('path');
const readDatabase = require('../utils');

const filePath = path.join(__dirname, '../../database.csv');

module.exports = class StudentsController {
  static getAllStudents(req, res) {
    readDatabase(filePath)
      .then((result) => {
        res.status(200).send(`This is the list of our students\nNumber of students in CS: ${result.numberOfStudentsInCS}. List: ${result.studentsInCS.join(', ')}\nNumber of students in SWE: ${result.numberOfStudentsInSWE}. List: ${result.studentsInSWE.join(', ')}`);
      })
      .catch((err) => {
        res.status(500).send(err.message);
      });
  }

  static getAllStudentsByMajor(req, res) {
    if (req.params.major === 'CS') {
      readDatabase(filePath)
        .then((result) => {
          res.status(200).send(`List: ${result.studentsInCS.join(', ')}`);
        })
        .catch((err) => {
          res.status(500).send(err.message);
        });
    } else if (req.params.major === 'SWE') {
      readDatabase(filePath)
        .then((result) => {
          res.status(200).send(`List: ${result.studentsInSWE.join(', ')}`);
        })
        .catch((err) => {
          res.status(500).send(err.message);
        });
    } else {
      res.status(500).send('Major parameter must be CS or SWE');
    }
  }
};
