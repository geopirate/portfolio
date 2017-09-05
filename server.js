'use strict';

const express = require('express');
const requestProxy = require('express-request-proxy');
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.static('./public'));

<<<<<<< HEAD
app.get('/', (request, response) => response.sendFile('index.html', {root: './public'}));
app.get('/projects', (request, response) => response.sendFile('index.html', {root: './public'}));
app.get('/about', (request, response) => response.sendFile('index.html', {root: './public'}));
=======
app.get('/github/*', proxyGitHub);

function proxyGitHub(request, response) {
  console.log('Routing GitHub request for', request.params[0]);
  (requestProxy({
    url: `https://api.github.com/${request.params[0]}`,
    headers: {Authorization: `token ${process.env.GITHUB_TOKEN}`}
  }))(request, response);
}
>>>>>>> f5d8fc18246b65409b1becae14de365a1ba651e9

app.listen(PORT, function() {
  console.log(`My app is listening on port ${PORT} !`);
});
