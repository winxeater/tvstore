const express = require('express');
const app = express();
const routes = require('./routes');

app.use(routes);
app.use(express.static('../front-end/public'))

// const fakeDB = {
//   'joao': {job: 'professor', tv: 'default-tv.png'},
//   'matheus': {job: 'estudante', tv: 'default-tv.png'},
//   'rafael': {job: 'engineer', tv: 'default-tv.png'}
// };



app.listen(3000, function () {
  console.log('Listening on port 3000!');
});