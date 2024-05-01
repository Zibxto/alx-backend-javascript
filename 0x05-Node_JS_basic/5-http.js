const http = require('http');
const fs = require('fs').promises; // Use fs.promises

const port = 1245;

function countStudents(path) {
  return fs.readFile(path, 'utf8')
    .then((data) => {
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

      return result;
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}

// Handle incoming requests
const app = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');

  if (request.url === '/') {
    response.write('Hello Holberton School!');
    response.end();
  } else if (request.url === '/students') {
    countStudents(process.argv[2])
      .then((result) => {
        response.write(['This is the list of our students', result].join('\n'));
        response.end();
      })
      .catch(() => {
        response.statusCode = 404;
        response.end('Cannot load the database');
      });
  } else {
    // Return 404 for other routes
    response.statusCode = 404;
    response.end('Not Found');
  }
});

app.listen(port, (error) => {
  // Check for errors during server listening
  if (error) {
    console.log('Something went wrong:', error);
  } else {
    console.log(`Server is listening on port ${port}`);
  }
});

module.exports = app;
