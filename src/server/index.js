const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const usersRoute = require('./routes/users');
const booksRoute = require('./routes/books');

const app = express();

app.use(express.static('dist'));
app.use(bodyParser.json());
app.use('/api/users', usersRoute);
app.use('/api/books', booksRoute);
app.get('/api/packages', (req, res) => {
  const packageJson = JSON.parse(fs.readFileSync('package.json'));
  res.send(packageJson);
});

app.get('*', (request, response) => {
  // for react-router to work. always server index.html
  response.sendFile(path.resolve('dist', 'index.html'));
});

app.listen(8080, () => console.log('Listening on port 8080!'));
