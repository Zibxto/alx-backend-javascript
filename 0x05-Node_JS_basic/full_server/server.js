const express = require('express');
const { homeRouter, studentsRouter } = require('./routes/index');

const port = 1245;

const app = express();

app.use('/', homeRouter);
app.use('/students', studentsRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
