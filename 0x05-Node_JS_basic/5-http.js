const http = require('http');
const fs = require('fs');

const port = 1245;

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  // Define a function to handle reading file and responding
  function handleStudentsResponse(filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end('Cannot load the database');
        return; // Exit early on error
      }

      let response = 'This is the list of our students\n';
      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const numberOfStudents = lines.length;
      response += `Number of students: ${numberOfStudents}\n`;

      const studentsInCS = lines.filter((line) => line.includes('CS'));
      const numberOfStudentsInCS = studentsInCS.length;
      response += `Number of students in CS: ${numberOfStudentsInCS}. List: ${studentsInCS.map((line) => line.split(',')[0]).join(', ')}\n`;

      const studentsInSWE = lines.filter((line) => line.includes('SWE'));
      const numberOfStudentsInSWE = studentsInSWE.length;
      response += `Number of students in SWE: ${numberOfStudentsInSWE}. List: ${studentsInSWE.map((line) => line.split(',')[0]).join(', ')}`;

      res.end(response);
    });
  }

  // Handle incoming requests
  if (req.url === '/' && req.method === 'GET') {
    res.write('Hello Holberton School!');
    res.end();
  } else if (req.url === '/students' && req.method === 'GET') {
    const filePath = process.argv[2];
    handleStudentsResponse(filePath);
  } else {
    // Return 404 for other routes
    res.statusCode = 404;
    res.end('Not Found');
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
