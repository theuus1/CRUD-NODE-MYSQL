const Sequelize = require('sequelize');

const sequelize = new Sequelize('poo', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate()
.then(function(){
    console.log('conexão com sucesso');
}).catch(function(){
    console.log('ERRO:conexão sem sucesso');
});

module.exports = sequelize;