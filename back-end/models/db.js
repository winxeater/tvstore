const Sequelize = require('sequelize');

//conexao com o bd
const sequelize = new Sequelize('cz_tvstore','cz_tvstr','Rs_WHaP#nOEGX#vV',{
    host: 'mysql.projetos.czbrains.com.br',
    dialect: 'mysql',
    define: {
        timestamps: false
      }
  })

  module.exports = {
      Sequelize: Sequelize,
      sequelize: sequelize
  }