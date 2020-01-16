const db = require('./db')

const Item = db.sequelize.define('item', {
    title: {
        type: db.Sequelize.STRING
    },
    brand: {
        type: db.Sequelize.STRING
    },
    screen_type: {
        type: db.Sequelize.STRING
    },
    screen_size: {
        type: db.Sequelize.STRING
    },
    resolution: {
        type: db.Sequelize.STRING
    },
    voltage: {
        type: db.Sequelize.STRING
    }
},{
    // disable the modification of table names; By default, sequelize will automatically
    // transform all passed model names (first parameter of define) into plural.
    // if you don't want that, set the following
    freezeTableName: true,
    
  });

module.exports = Item