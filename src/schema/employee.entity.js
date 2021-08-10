var Sequelize = require('sequelize');
var sequelize = new Sequelize('database', 'username', 'password');


  const Employee = sequelize.define('Employee', {
    Id: Sequelize.NUMBER,
    FirstName: Sequelize.STRING,
    LastName: Sequelize.STRING,
  })
  
module.exports = Employee