const http = require('http');
const fs = require('fs');

const port = 1245;

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/' && req.method === 'GET') {
    res.write('Hello Holberton School!');
    res.end();
  } else if (req.url === '/students' && req.method === 'GET') {
    fs.readFile(process.argv[2], 'utf8', (err, data) => {
      response = 'This is the list of our students\n';
      if (err) {
        res.statusCode = 500;
        throw new Error('Cannot load the database');
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const numberOfStudents = lines.length - 1;
      response += (`Number of students: ${numberOfStudents}\n`);

      const studentsInCS = lines.filter((line) => line.includes('CS'));
      const numberOfStudentsInCS = studentsInCS.length;

      response += (`Number of students in CS: ${numberOfStudentsInCS}. List: ${studentsInCS.map((arr) => arr.split(',')[0]).join(', ')}\n`);

      const studentsInSWE = lines.filter((line) => line.includes('SWE'));
      const numberOfStudentsInSWE = studentsInSWE.length;

      response += (`Number of students in SWE: ${numberOfStudentsInSWE}. List: ${studentsInSWE.map((arr) => arr.split(',')[0]).join(', ')}`);

      res.end(response);
    });
  } else {
    // Return 404 for other routes
    res.statusCode = 404;
    res.end('Not Found');
  }
});

app.listen(port, (error) => {
  // Checking any error occur while listening on port
  if (error) console.log('Something went wrong', error);

  // Else sent message of listening
  else {
    console.log(`Server is listening on port ${port}`);
  }
});

module.exports = app;
