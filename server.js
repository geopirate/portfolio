'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.static('./public'));

app.get('/', (request, response) => response.sendFile('index.html', {root: './public'}));
app.get('/projects', (request, response) => response.sendFile('index.html', {root: './public'}));
app.get('/about', (request, response) => response.sendFile('index.html', {root: './public'}));

app.listen(PORT, function() {
  console.log(`My app is listening on port ${PORT} !`);
});
