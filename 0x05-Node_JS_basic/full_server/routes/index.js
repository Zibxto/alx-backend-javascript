const express = require('express');
const AppController = require('../controllers/AppController');
const StudentsController = require('../controllers/StudentsController');

const homeRouter = express.Router();
const studentsRouter = express.Router();

homeRouter.get('/', AppController.getHomepage);
studentsRouter.get('/', StudentsController.getAllStudents);
studentsRouter.get('/:major', StudentsController.getAllStudentsByMajor);

module.exports = { homeRouter, studentsRouter };
