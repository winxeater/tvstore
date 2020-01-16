const express = require('express');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const app = express();
const Item = require('./models/Item');
const bodyParser = require('body-parser');
const handlebars  = require('express-handlebars');

//path const
app.use(express.static("public"));
//config hb
app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
//body parser config
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


//rotas
app.get('/', function (req, res) {
  Item.findAll()
  .then(function(item){
    res.render('body', { item: item });  
  })
});

app.get('/search', function (req, res) {
  const {term} = req.query;

  Item.findAll({ where: { brand: { [Op.like]: '%' + term + '%' }}})
    .then(item => res.render('body', {item: item}))
    .catch(err => console.log(err));
});

app.get('/search-filter', function (req, res) {
  const {filter} = req.query;

  Item.findAll({ where: { brand: { [Op.like]: '%' + filter + '%' }}})
    .then(item => res.render('body', {item: item}))
    .catch(err => console.log(err));
});


app.listen(3030, function () {
  console.log('Listening on port 3030!');
});