const http = require('http');

const port = 1245;

const app = http.createServer((req, res) => {
  res.write('Hello Holberton School!');
  res.end();
});

app.listen(port, (error) => {
  // Checking any error occur while listening on port
  if (error) {
    console.log('Something went wrong', error);
  }
  // Else sent message of listening
  else {
    console.log(`Server is listening on port ${port}`);
  }
});

module.exports = app;
