'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('./public'));

app.listen(PORT, function() {
  // TODO: DONE Log to the console a message that lets you know which port your server has started on
  console.log(`My app is listening on port ${PORT} !`);
});