const Sequelize = require('sequelize');

//Inserir as credenciais da conexão aqui para testar.
const connection = new Sequelize('','','',{
    host: 'host',
    dialect: 'mysql'
});

module.exports = connection;