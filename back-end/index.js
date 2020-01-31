const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./routes');
const bodyParser = require('body-parser');

app.use(cors({
  origin: '*',
  methods: ['GET',"POST"],
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(routes);
app.use(express.static('./public'))

app.listen(3000, function () {
  console.log('Listening on port 3000!');
});