const express = require('express');
const app = express();
const routes = require('./routes');

app.use(routes);
app.use(express.static('public'))

app.listen(3000, function () {
  console.log('Listening on port 3000!');
});